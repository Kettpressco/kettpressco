import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import { supabase } from "../lib/supabase";
import { useCart } from "../context/CartContext";
import { calculatePrice } from "../utils/calculatePrice";

import ArtworkUpload from "../components/ArtworkUpload";
import RelatedProducts from "../components/RelatedProducts";

export default function Product() {
  const { slug } = useParams();

  const { addToCart, setCartOpen } = useCart();

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  const [size, setSize] = useState("");

  const [colour, setColour] = useState("");

  const [quantity, setQuantity] = useState(1);

  const [artworkUrl, setArtworkUrl] = useState("");

  const [selectedImage, setSelectedImage] = useState("");

  const [addedMessage, setAddedMessage] = useState(false);

  const [options, setOptions] = useState({
    backPrint: false,
    sleevePrint: false,
    oversizedPrint: false,
    artworkEdit: false,
    newArtwork: false,
  });

  /*
  ----------------------------------------
  CREATE PRODUCT SLUG
  ----------------------------------------
  */

  const makeSlug = (name = "") =>
    String(name)
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  /*
  ----------------------------------------
  LOAD PRODUCT
  ----------------------------------------
  */

  useEffect(() => {
    let isMounted = true;

    async function fetchProduct() {
      try {
        setLoading(true);

        const { data, error } = await supabase
          .from("products")
          .select("*");

        if (error) {
          throw error;
        }

        if (!isMounted) {
          return;
        }

        const found = (data || []).find((item) => {
          const itemSlug =
            item?.slug ||
            makeSlug(item?.name || item?.title);

          return (
            String(item?.id) === String(slug) ||
            itemSlug === slug
          );
        });

        if (!found) {
          setProduct(null);
          return;
        }

        /*
        Parse variants if Supabase returns JSON string
        */

        let parsedVariants = found.variants;

        if (
          typeof parsedVariants === "string" &&
          parsedVariants.trim()
        ) {
          try {
            parsedVariants = JSON.parse(parsedVariants);
          } catch {
            parsedVariants = [];
          }
        }

        if (!Array.isArray(parsedVariants)) {
          parsedVariants = [];
        }

        /*
        Parse colours if required
        */

        let parsedColours = found.colours;

        if (
          typeof parsedColours === "string" &&
          parsedColours.trim()
        ) {
          try {
            parsedColours = JSON.parse(parsedColours);
          } catch {
            parsedColours = [];
          }
        }

        if (!Array.isArray(parsedColours)) {
          parsedColours = [];
        }

        /*
        Parse sizes if required
        */

        let parsedSizes = found.sizes;

        if (
          typeof parsedSizes === "string" &&
          parsedSizes.trim()
        ) {
          try {
            parsedSizes = JSON.parse(parsedSizes);
          } catch {
            parsedSizes = [];
          }
        }

        if (!Array.isArray(parsedSizes)) {
          parsedSizes = [];
        }

        const preparedProduct = {
          ...found,
          variants: parsedVariants,
          colours: parsedColours,
          sizes: parsedSizes,
        };

        setProduct(preparedProduct);

        const firstColour =
          parsedVariants?.[0]?.colour ||
          parsedColours?.[0] ||
          "";

        const firstSize =
          parsedSizes?.[0] ||
          "";

        setColour(firstColour);

        setSize(firstSize);

        setQuantity(1);

        setArtworkUrl("");

        setOptions({
          backPrint: false,
          sleevePrint: false,
          oversizedPrint: false,
          artworkEdit: false,
          newArtwork: false,
        });
      } catch (error) {
        console.error(
          "PRODUCT LOAD ERROR:",
          error
        );

        if (isMounted) {
          setProduct(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchProduct();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  /*
  ----------------------------------------
  PRODUCT NAME
  ----------------------------------------
  */

  const productName =
    product?.name ||
    product?.title ||
    "Custom Printed Product";

  /*
  ----------------------------------------
  SELECTED VARIANT
  ----------------------------------------
  */

  const selectedVariant = useMemo(() => {
    if (
      !product ||
      !Array.isArray(product.variants)
    ) {
      return null;
    }

    return (
      product.variants.find(
        (variant) =>
          String(variant?.colour || "")
            .toLowerCase()
            .trim() ===
          String(colour || "")
            .toLowerCase()
            .trim()
      ) ||
      product.variants[0] ||
      null
    );
  }, [product, colour]);

  /*
  ----------------------------------------
  IMAGE HELPERS
  ----------------------------------------
  */

  const getImagesFromValue = (images) => {
    const result = [];

    const addImage = (image) => {
      if (
        image &&
        typeof image === "string" &&
        !result.includes(image)
      ) {
        result.push(image);
      }
    };

    if (!images) {
      return result;
    }

    if (Array.isArray(images)) {
      images.forEach(addImage);

      return result;
    }

    if (
      typeof images === "object"
    ) {
      addImage(images.front);

      addImage(images.model);

      addImage(images.side);

      addImage(images.back);

      addImage(images.detail);

      return result;
    }

    if (
      typeof images === "string" &&
      images.trim()
    ) {
      try {
        const parsed = JSON.parse(images);

        return getImagesFromValue(parsed);
      } catch {
        addImage(images);
      }
    }

    return result;
  };

  /*
  ----------------------------------------
  GALLERY IMAGES
  ----------------------------------------
  */

  const galleryImages = useMemo(() => {
    const images = [];

    const addImage = (image) => {
      if (
        image &&
        typeof image === "string" &&
        !images.includes(image)
      ) {
        images.push(image);
      }
    };

    if (selectedVariant) {
      getImagesFromValue(
        selectedVariant.images
      ).forEach(addImage);

      addImage(selectedVariant.image);

      addImage(selectedVariant.image_url);
    }

    if (product) {
      getImagesFromValue(
        product.images
      ).forEach(addImage);

      addImage(product.image);

      addImage(product.image_url);

      addImage(product.displayImage);
    }

    if (images.length === 0) {
      images.push(
        "/images/placeholder.jpg"
      );
    }

    return images;
  }, [product, selectedVariant]);

  /*
  ----------------------------------------
  CHANGE MAIN IMAGE WHEN COLOUR CHANGES
  ----------------------------------------
  */

  useEffect(() => {
    if (
      galleryImages.length > 0
    ) {
      setSelectedImage(
        galleryImages[0]
      );
    }
  }, [galleryImages]);

  /*
  ----------------------------------------
  AVAILABLE COLOURS
  ----------------------------------------
  */

  const availableColours = useMemo(() => {
    if (!product) {
      return [];
    }

    if (
      Array.isArray(product.colours) &&
      product.colours.length > 0
    ) {
      return [
        ...new Set(
          product.colours.filter(Boolean)
        ),
      ];
    }

    if (
      Array.isArray(product.variants)
    ) {
      return [
        ...new Set(
          product.variants
            .map(
              (variant) =>
                variant?.colour
            )
            .filter(Boolean)
        ),
      ];
    }

    return [];
  }, [product]);

  /*
  ----------------------------------------
  CURRENT IMAGE
  ----------------------------------------
  */

  const mainImage =
    selectedImage ||
    galleryImages[0] ||
    "/images/placeholder.jpg";

  /*
  ----------------------------------------
  PRICE
  ----------------------------------------
  */

  const finalPrice = product
    ? calculatePrice(
        product,
        options
      )
    : 0;

  const quantityValue =
    Math.max(
      1,
      Number(quantity || 1)
    );

  const totalPrice =
    Number(finalPrice || 0) *
    quantityValue;

  /*
  ----------------------------------------
  PRINT OPTIONS
  ----------------------------------------
  */

  const printOptions = [
    {
      key: "backPrint",
      label: "Add Back Print",
      price: "+£5",
      text:
        "Add your logo, text or design to the back of the garment.",
    },

    {
      key: "sleevePrint",
      label: "Add Sleeve Print",
      price: "+£3",
      text:
        "Add additional branding or artwork to a sleeve.",
    },

    {
      key: "oversizedPrint",
      label: "Oversized Print",
      price: "+£5",
      text:
        "Choose a larger statement print for your design.",
    },

    {
      key: "artworkEdit",
      label: "Artwork Edit",
      price: "+£5",
      text:
        "Minor adjustments to help prepare your existing artwork for printing.",
    },

    {
      key: "newArtwork",
      label: "New Artwork Design",
      price: "+£20",
      text:
        "Choose this if you need help creating new artwork for your order.",
    },
  ];

  /*
  ----------------------------------------
  ADD TO CART
  ----------------------------------------
  */

  const handleAddToCart = () => {
    if (!product) {
      return;
    }

    if (
      product.sizes?.length > 0 &&
      !size
    ) {
      alert(
        "Please choose a size."
      );

      return;
    }

    if (
      availableColours.length > 0 &&
      !colour
    ) {
      alert(
        "Please choose a colour."
      );

      return;
    }

    const item = {
      product,

      id:
        product.id,

      name:
        productName,

      price:
        Number(finalPrice),

      basePrice:
        Number(
          product.price ||
            product.base_price ||
            product.basePrice ||
            0
        ),

      quantity:
        quantityValue,

      size,

      colour,

      image:
        mainImage,

      artworkUrl,

      options,
    };

    console.log(
      "ADDING TO CART:",
      item
    );

    addToCart(item);

    setAddedMessage(true);

    if (
      typeof setCartOpen ===
      "function"
    ) {
      setCartOpen(true);
    }

    window.setTimeout(() => {
      setAddedMessage(false);
    }, 3000);
  };

  /*
  ----------------------------------------
  LOADING
  ----------------------------------------
  */

  if (loading) {
    return (
      <div
        style={{
          minHeight: "70vh",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          background: "#f8fafc",

          padding: "80px 20px",
        }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#111827",

              marginBottom: "10px",
            }}
          >
            Loading Product
          </h2>

          <p
            style={{
              color: "#6b7280",
            }}
          >
            Preparing your customisation options...
          </p>
        </div>
      </div>
    );
  }

  /*
  ----------------------------------------
  PRODUCT NOT FOUND
  ----------------------------------------
  */

  if (!product) {
    return (
      <div
        style={{
          minHeight: "70vh",

          padding: "100px 20px",

          textAlign: "center",

          background: "#f8fafc",
        }}
      >
        <h1
          style={{
            fontSize:
              "clamp(32px, 5vw, 48px)",

            color: "#111827",

            marginBottom: "15px",
          }}
        >
          Product Not Found
        </h1>

        <p
          style={{
            color: "#6b7280",

            marginBottom: "30px",
          }}
        >
          We couldn't find the product you're looking for.
        </p>

        <Link
          to="/shop"
          style={primaryButton}
        >
          Browse Our Shop
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* SEO */}

      <Helmet>
        <title>
          {productName} | Custom Printing | Kett Press Co
        </title>

        <meta
          name="description"
          content={`Customise ${productName} with your logo, print or artwork. Choose your colour, size and printing options and order online from Kett Press Co.`}
        />
      </Helmet>

      {/* ======================================
          BREADCRUMB
      ====================================== */}

      <div
        style={{
          background: "#f8fafc",

          borderBottom:
            "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            maxWidth: "1250px",

            margin: "0 auto",

            padding: "16px 20px",

            fontSize: "14px",

            color: "#6b7280",
          }}
        >
          <Link
            to="/"
            style={breadcrumbLink}
          >
            Home
          </Link>

          <span> / </span>

          <Link
            to="/shop"
            style={breadcrumbLink}
          >
            Shop
          </Link>

          <span> / </span>

          <span
            style={{
              color: "#111827",

              fontWeight: "700",
            }}
          >
            {productName}
          </span>
        </div>
      </div>

      {/* ======================================
          PRODUCT SECTION
      ====================================== */}

      <main
        style={{
          background: "#fff",

          padding: "50px 20px 90px",
        }}
      >
        <div
          style={{
            maxWidth: "1250px",

            margin: "0 auto",

            display: "grid",

            gridTemplateColumns:
              "repeat(auto-fit, minmax(340px, 1fr))",

            gap: "60px",

            alignItems: "start",
          }}
        >
          {/* ==================================
              LEFT - IMAGE GALLERY
          ================================== */}

          <div>
            <div
              style={{
                position: "relative",

                background: "#f8fafc",

                border:
                  "1px solid #e5e7eb",

                borderRadius: "20px",

                padding: "25px",

                minHeight: "500px",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",
              }}
            >
              <img
                src={mainImage}
                alt={`${productName}${
                  colour
                    ? ` in ${colour}`
                    : ""
                }`}
                onError={(event) => {
                  event.currentTarget.src =
                    "/images/placeholder.jpg";
                }}
                style={{
                  width: "100%",

                  height: "500px",

                  objectFit: "contain",
                }}
              />

              {colour && (
                <div
                  style={{
                    position: "absolute",

                    bottom: "16px",

                    left: "16px",

                    background:
                      "rgba(17,24,39,0.92)",

                    color: "#fff",

                    padding:
                      "8px 14px",

                    borderRadius:
                      "999px",

                    fontSize:
                      "13px",

                    fontWeight:
                      "800",
                  }}
                >
                  {colour}
                </div>
              )}
            </div>

            {/* THUMBNAILS */}

            {galleryImages.length >
              1 && (
              <div
                style={{
                  display: "grid",

                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(75px, 95px))",

                  gap: "12px",

                  marginTop: "16px",
                }}
              >
                {galleryImages.map(
                  (
                    image,
                    index
                  ) => (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      onClick={() =>
                        setSelectedImage(
                          image
                        )
                      }
                      style={{
                        height: "90px",

                        padding: "5px",

                        background:
                          "#f8fafc",

                        border:
                          mainImage ===
                          image
                            ? "2px solid #f97316"
                            : "1px solid #e5e7eb",

                        borderRadius:
                          "10px",

                        cursor:
                          "pointer",
                      }}
                    >
                      <img
                        src={image}
                        alt={`${productName} view ${
                          index + 1
                        }`}
                        loading="lazy"
                        style={{
                          width: "100%",

                          height: "100%",

                          objectFit:
                            "contain",
                        }}
                      />
                    </button>
                  )
                )}
              </div>
            )}

            {/* IMAGE NOTE */}

            <div
              style={{
                marginTop: "25px",

                padding: "18px",

                background: "#f8fafc",

                borderRadius: "12px",

                color: "#4b5563",

                lineHeight: "1.6",

                fontSize: "14px",
              }}
            >
              <strong
                style={{
                  color: "#111827",
                }}
              >
                Product image:
              </strong>{" "}
              The garment images show the base product. Your final item will be
              customised using the printing options and artwork selected for
              your order.
            </div>
          </div>

          {/* ==================================
              RIGHT - PRODUCT CONFIGURATION
          ================================== */}

          <div>
            {/* CATEGORY */}

            {product.category && (
              <div
                style={{
                  color: "#ea580c",

                  textTransform:
                    "uppercase",

                  fontWeight: "900",

                  letterSpacing:
                    "1.5px",

                  fontSize: "13px",

                  marginBottom: "10px",
                }}
              >
                {product.category}
              </div>
            )}

            {/* TITLE */}

            <h1
              style={{
                fontSize:
                  "clamp(30px, 4vw, 48px)",

                fontWeight: "850",

                lineHeight: "1.15",

                margin: "0 0 16px",

                color: "#111827",

                letterSpacing:
                  "-1px",

                overflowWrap:
                  "break-word",
              }}
            >
              {productName}
            </h1>

            {/* TRUST */}

            <div
              style={{
                display: "flex",

                alignItems:
                  "center",

                flexWrap: "wrap",

                gap: "10px",

                marginBottom: "22px",
              }}
            >
              <span
                style={{
                  color: "#f59e0b",

                  fontSize: "18px",
                }}
              >
                ★★★★★
              </span>

              <span
                style={{
                  color: "#6b7280",

                  fontSize: "14px",
                }}
              >
                Professionally customised by Kett Press Co
              </span>
            </div>

            {/* DESCRIPTION */}

            <p
              style={{
                color: "#4b5563",

                lineHeight: "1.8",

                fontSize: "16px",

                marginBottom: "25px",
              }}
            >
              {product.material ||
                product.features ||
                "Premium garment ready to customise with your logo, design or artwork."}
            </p>

            {/* ==================================
                PRICE
            ================================== */}

            <div
              style={{
                padding: "22px",

                background: "#f8fafc",

                borderRadius: "14px",

                border:
                  "1px solid #e5e7eb",

                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  color: "#6b7280",

                  fontSize: "14px",

                  marginBottom: "5px",
                }}
              >
                Your customised price
              </div>

              <div
                style={{
                  fontSize: "36px",

                  fontWeight: "900",

                  color: "#111827",
                }}
              >
                £
                {Number(
                  finalPrice
                ).toFixed(2)}
              </div>

              <div
                style={{
                  marginTop: "8px",

                  color: "#16a34a",

                  fontWeight: "800",

                  fontSize: "14px",
                }}
              >
                ✓ Standard front print included
              </div>

              {quantityValue >
                1 && (
                <div
                  style={{
                    marginTop: "10px",

                    color: "#4b5563",

                    fontSize: "14px",
                  }}
                >
                  {quantityValue} items
                  total:{" "}
                  <strong>
                    £
                    {totalPrice.toFixed(
                      2
                    )}
                  </strong>
                </div>
              )}
            </div>

            {/* ==================================
                SIZE
            ================================== */}

            {product.sizes?.length >
              0 && (
              <div
                style={{
                  marginBottom: "30px",
                }}
              >
                <div
                  style={sectionLabel}
                >
                  Select Size
                </div>

                <div
                  style={{
                    display: "flex",

                    flexWrap: "wrap",

                    gap: "9px",
                  }}
                >
                  {product.sizes.map(
                    (item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() =>
                          setSize(
                            item
                          )
                        }
                        style={{
                          minWidth:
                            "50px",

                          padding:
                            "11px 14px",

                          background:
                            size ===
                            item
                              ? "#111827"
                              : "#fff",

                          color:
                            size ===
                            item
                              ? "#fff"
                              : "#111827",

                          border:
                            size ===
                            item
                              ? "2px solid #111827"
                              : "1px solid #d1d5db",

                          borderRadius:
                            "8px",

                          cursor:
                            "pointer",

                          fontWeight:
                            "800",
                        }}
                      >
                        {item}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}

            {/* ==================================
                COLOUR
            ================================== */}

            {availableColours.length >
              0 && (
              <div
                style={{
                  marginBottom: "30px",
                }}
              >
                <div
                  style={sectionLabel}
                >
                  Select Colour
                </div>

                <p
                  style={{
                    color: "#6b7280",

                    fontSize: "14px",

                    marginTop: "-5px",

                    marginBottom: "14px",
                  }}
                >
                  Selected:{" "}
                  <strong
                    style={{
                      color: "#111827",
                    }}
                  >
                    {colour}
                  </strong>
                </p>

                <div
                  style={{
                    display: "flex",

                    flexWrap: "wrap",

                    gap: "9px",
                  }}
                >
                  {availableColours.map(
                    (item) => {
                      const variant =
                        product.variants?.find(
                          (
                            variant
                          ) =>
                            String(
                              variant?.colour ||
                                ""
                            )
                              .toLowerCase()
                              .trim() ===
                            String(
                              item
                            )
                              .toLowerCase()
                              .trim()
                        );

                      const variantImages =
                        getImagesFromValue(
                          variant?.images
                        );

                      const swatchImage =
                        variantImages[0] ||
                        variant?.image ||
                        variant?.image_url;

                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() =>
                            setColour(
                              item
                            )
                          }
                          title={item}
                          style={{
                            minWidth:
                              "72px",

                            padding:
                              "8px",

                            background:
                              "#fff",

                            border:
                              colour ===
                              item
                                ? "2px solid #f97316"
                                : "1px solid #d1d5db",

                            borderRadius:
                              "9px",

                            cursor:
                              "pointer",

                            fontWeight:
                              "700",
                          }}
                        >
                          {swatchImage && (
                            <img
                              src={
                                swatchImage
                              }
                              alt={item}
                              style={{
                                width:
                                  "48px",

                                height:
                                  "48px",

                                objectFit:
                                  "contain",

                                display:
                                  "block",

                                margin:
                                  "0 auto 5px",
                              }}
                            />
                          )}

                          <span
                            style={{
                              display:
                                "block",

                              fontSize:
                                "11px",

                              maxWidth:
                                "85px",

                              overflow:
                                "hidden",

                              textOverflow:
                                "ellipsis",
                            }}
                          >
                            {item}
                          </span>
                        </button>
                      );
                    }
                  )}
                </div>
              </div>
            )}

            {/* ==================================
                QUANTITY
            ================================== */}

            <div
              style={{
                marginBottom: "30px",
              }}
            >
              <div
                style={sectionLabel}
              >
                Quantity
              </div>

              <div
                style={{
                  display: "flex",

                  alignItems: "center",

                  width:
                    "fit-content",

                  border:
                    "1px solid #d1d5db",

                  borderRadius:
                    "9px",

                  overflow:
                    "hidden",
                }}
              >
                <button
                  type="button"
                  onClick={() =>
                    setQuantity(
                      (previous) =>
                        Math.max(
                          1,
                          Number(
                            previous
                          ) - 1
                        )
                    )
                  }
                  style={quantityButton}
                >
                  −
                </button>

                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(event) =>
                    setQuantity(
                      Math.max(
                        1,
                        Number(
                          event
                            .target
                            .value ||
                            1
                        )
                      )
                    )
                  }
                  style={{
                    width: "70px",

                    padding:
                      "12px 5px",

                    border:
                      "none",

                    textAlign:
                      "center",

                    fontSize:
                      "16px",

                    fontWeight:
                      "800",

                    outline:
                      "none",
                  }}
                />

                <button
                  type="button"
                  onClick={() =>
                    setQuantity(
                      (previous) =>
                        Number(
                          previous
                        ) + 1
                    )
                  }
                  style={quantityButton}
                >
                  +
                </button>
              </div>

              <p
                style={{
                  color: "#6b7280",

                  fontSize: "13px",

                  marginTop: "10px",
                }}
              >
                Larger quantities may qualify for automatic bulk discounts.
              </p>
            </div>

            {/* ==================================
                PRINT OPTIONS
            ================================== */}

            <div
              style={{
                marginBottom: "30px",
              }}
            >
              <div
                style={sectionLabel}
              >
                Customise Your Printing
              </div>

              <p
                style={{
                  color: "#6b7280",

                  lineHeight: "1.6",

                  fontSize: "14px",

                  marginTop: "-5px",

                  marginBottom: "15px",
                }}
              >
                Standard front printing is already included. Add any extra
                printing or artwork services you need.
              </p>

              <div
                style={{
                  display: "grid",

                  gap: "10px",
                }}
              >
                {printOptions.map(
                  (
                    option
                  ) => {
                    const active =
                      Boolean(
                        options[
                          option.key
                        ]
                      );

                    return (
                      <label
                        key={
                          option.key
                        }
                        style={{
                          display:
                            "flex",

                          alignItems:
                            "flex-start",

                          gap: "14px",

                          padding:
                            "16px",

                          border:
                            active
                              ? "2px solid #f97316"
                              : "1px solid #e5e7eb",

                          borderRadius:
                            "11px",

                          cursor:
                            "pointer",

                          background:
                            active
                              ? "#fff7ed"
                              : "#fff",
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={
                            active
                          }
                          onChange={() =>
                            setOptions(
                              (
                                previous
                              ) => ({
                                ...previous,

                                [option.key]:
                                  !previous[
                                    option
                                      .key
                                  ],
                              })
                            )
                          }
                          style={{
                            marginTop:
                              "4px",

                            width:
                              "18px",

                            height:
                              "18px",
                          }}
                        />

                        <div
                          style={{
                            flex: 1,
                          }}
                        >
                          <div
                            style={{
                              display:
                                "flex",

                              justifyContent:
                                "space-between",

                              gap:
                                "15px",

                              fontWeight:
                                "800",

                              color:
                                "#111827",
                            }}
                          >
                            <span>
                              {
                                option.label
                              }
                            </span>

                            <span
                              style={{
                                color:
                                  "#ea580c",
                              }}
                            >
                              {
                                option.price
                              }
                            </span>
                          </div>

                          <div
                            style={{
                              marginTop:
                                "4px",

                              fontSize:
                                "13px",

                              color:
                                "#6b7280",

                              lineHeight:
                                "1.5",
                            }}
                          >
                            {
                              option.text
                            }
                          </div>
                        </div>
                      </label>
                    );
                  }
                )}
              </div>
            </div>

            {/* ==================================
                ARTWORK UPLOAD
            ================================== */}

            <div
              style={{
                marginBottom: "30px",

                padding: "22px",

                background: "#f8fafc",

                border:
                  "1px solid #e5e7eb",

                borderRadius: "14px",
              }}
            >
              <div
                style={sectionLabel}
              >
                Upload Your Artwork
              </div>

              <p
                style={{
                  color: "#6b7280",

                  fontSize: "14px",

                  lineHeight: "1.6",

                  marginBottom: "18px",
                }}
              >
                Upload your logo, design or artwork for this order. Choose
                Artwork Edit or New Artwork Design above if you need design
                assistance.
              </p>

              <ArtworkUpload
                onUpload={(url) => {
                  if (url) {
                    setArtworkUrl(
                      url
                    );
                  }
                }}
              />

              {artworkUrl && (
                <div
                  style={{
                    marginTop: "12px",

                    padding:
                      "11px 14px",

                    background:
                      "#f0fdf4",

                    color:
                      "#15803d",

                    border:
                      "1px solid #bbf7d0",

                    borderRadius:
                      "8px",

                    fontWeight:
                      "800",

                    fontSize:
                      "14px",
                  }}
                >
                  ✓ Artwork uploaded successfully
                </div>
              )}
            </div>

            {/* ==================================
                ADD TO CART
            ================================== */}

            <div
              style={{
                padding: "24px",

                background: "#111827",

                color: "#fff",

                borderRadius: "16px",

                boxShadow:
                  "0 15px 35px rgba(17,24,39,0.15)",
              }}
            >
              <div
                style={{
                  display: "flex",

                  justifyContent:
                    "space-between",

                  alignItems:
                    "center",

                  flexWrap: "wrap",

                  gap: "15px",

                  marginBottom: "18px",
                }}
              >
                <div>
                  <div
                    style={{
                      color: "#9ca3af",

                      fontSize: "13px",

                      marginBottom: "4px",
                    }}
                  >
                    Your order total
                  </div>

                  <div
                    style={{
                      fontSize: "28px",

                      fontWeight: "900",
                    }}
                  >
                    £
                    {totalPrice.toFixed(
                      2
                    )}
                  </div>
                </div>

                <div
                  style={{
                    color: "#d1d5db",

                    fontSize: "13px",

                    lineHeight: "1.6",

                    textAlign: "right",
                  }}
                >
                  {quantityValue}{" "}
                  {quantityValue ===
                  1
                    ? "item"
                    : "items"}

                  {size && (
                    <>
                      <br />
                      Size: {size}
                    </>
                  )}

                  {colour && (
                    <>
                      <br />
                      Colour:{" "}
                      {colour}
                    </>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={
                  handleAddToCart
                }
                style={{
                  width: "100%",

                  background:
                    "#f97316",

                  color: "#fff",

                  border: "none",

                  padding:
                    "17px 25px",

                  borderRadius:
                    "10px",

                  cursor:
                    "pointer",

                  fontSize:
                    "18px",

                  fontWeight:
                    "900",
                }}
              >
                Add To Cart
              </button>

              {addedMessage && (
                <div
                  style={{
                    marginTop: "12px",

                    textAlign: "center",

                    color: "#86efac",

                    fontWeight: "800",

                    fontSize: "14px",
                  }}
                >
                  ✓ Added to your cart
                </div>
              )}

              <div
                style={{
                  marginTop: "18px",

                  display: "grid",

                  gap: "8px",

                  color: "#d1d5db",

                  fontSize: "13px",
                }}
              >
                <span>
                  ✓ Secure online checkout
                </span>

                <span>
                  ✓ Standard front print included
                </span>

                <span>
                  ✓ Artwork saved with your order
                </span>

                <span>
                  ✓ UK delivery available
                </span>

                <span>
                  ✓ Local collection in Kettering
                </span>
              </div>
            </div>

            {/* HELP */}

            <div
              style={{
                textAlign: "center",

                paddingTop: "22px",
              }}
            >
              <p
                style={{
                  margin:
                    "0 0 10px",

                  color:
                    "#6b7280",

                  fontSize:
                    "14px",
                }}
              >
                Not sure which printing option you need?
              </p>

              <a
                href="https://wa.me/447770118148"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#16a34a",

                  textDecoration:
                    "none",

                  fontWeight: "800",
                }}
              >
                Chat with us on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* ======================================
          TRUST BAR
      ====================================== */}

      <section
        style={{
          background: "#f8fafc",

          borderTop:
            "1px solid #e5e7eb",

          borderBottom:
            "1px solid #e5e7eb",

          padding: "40px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",

            margin: "0 auto",

            display: "grid",

            gridTemplateColumns:
              "repeat(auto-fit, minmax(180px, 1fr))",

            gap: "25px",

            textAlign: "center",
          }}
        >
          {[
            {
              icon: "🎨",
              title:
                "Upload Your Artwork",
              text:
                "Send your logo or design with your order.",
            },

            {
              icon: "👕",
              title:
                "Quality Garments",
              text:
                "Customise garments from trusted clothing brands.",
            },

            {
              icon: "📍",
              title:
                "Kettering Based",
              text:
                "Local collection is available.",
            },

            {
              icon: "🇬🇧",
              title:
                "UK Delivery",
              text:
                "Order online from anywhere in the UK.",
            },
          ].map(
            (item) => (
              <div
                key={
                  item.title
                }
              >
                <div
                  style={{
                    fontSize:
                      "30px",

                    marginBottom:
                      "10px",
                  }}
                >
                  {item.icon}
                </div>

                <strong
                  style={{
                    display:
                      "block",

                    color:
                      "#111827",

                    marginBottom:
                      "6px",
                  }}
                >
                  {item.title}
                </strong>

                <span
                  style={{
                    color:
                      "#6b7280",

                    fontSize:
                      "13px",

                    lineHeight:
                      "1.5",
                  }}
                >
                  {item.text}
                </span>
              </div>
            )
          )}
        </div>
      </section>

      {/* ======================================
          RELATED PRODUCTS
      ====================================== */}

      <RelatedProducts
        category={
          product.category
        }
        excludeProductId={
          product.id
        }
        limit={4}
        title="You May Also Like"
      />
    </>
  );
}

/*
----------------------------------------
SHARED STYLES
----------------------------------------
*/

const sectionLabel = {
  display: "block",

  fontSize: "16px",

  fontWeight: "800",

  color: "#111827",

  marginBottom: "12px",
};

const quantityButton = {
  width: "45px",

  padding: "12px",

  border: "none",

  background: "#f8fafc",

  cursor: "pointer",

  fontSize: "20px",

  fontWeight: "800",
};

const breadcrumbLink = {
  color: "#6b7280",

  textDecoration: "none",
};

const primaryButton = {
  display: "inline-block",

  background: "#f97316",

  color: "#fff",

  padding: "15px 28px",

  borderRadius: "10px",

  textDecoration: "none",

  fontWeight: "800",
};