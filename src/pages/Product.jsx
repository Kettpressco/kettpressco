import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
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

  useEffect(() => {
    fetchProduct();
  }, [slug]);

  const makeSlug = (name = "") =>
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  const fetchProduct = async () => {
    try {
      setLoading(true);

      const { data, error } = await supabase
        .from("products")
        .select("*");

      if (error) {
        throw error;
      }

      const found = data.find(
        (item) =>
          String(item.id) === String(slug) ||
          item.slug === slug ||
          makeSlug(item.name || item.title) === slug
      );

      setProduct(found || null);

      if (found) {
        const firstColour =
          found.variants?.[0]?.colour ||
          found.colours?.[0] ||
          "";

        setSize(found.sizes?.[0] || "");
        setColour(firstColour);
      }
    } catch (error) {
      console.error("PRODUCT LOAD ERROR:", error);
      setProduct(null);
    } finally {
      setLoading(false);
    }
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
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "45px",
              height: "45px",
              border: "4px solid #e5e7eb",
              borderTop: "4px solid #f97316",
              borderRadius: "50%",
              margin: "0 auto 20px",
            }}
          />

          <h2
            style={{
              color: "#111827",
            }}
          >
            Loading product...
          </h2>
        </div>
      </div>
    );
  }

  /*
  ----------------------------------------
  NOT FOUND
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
            fontSize: "42px",
            color: "#111827",
            marginBottom: "20px",
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
          style={{
            display: "inline-block",
            background: "#f97316",
            color: "#fff",
            padding: "15px 28px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "800",
          }}
        >
          Browse Our Shop
        </Link>
      </div>
    );
  }

  /*
  ----------------------------------------
  PRODUCT DATA
  ----------------------------------------
  */

  const productName =
    product.name ||
    product.title ||
    "Custom Printed Product";

  const selectedVariant = product.variants?.find(
    (variant) => variant.colour === colour
  );

  /*
  ----------------------------------------
  IMAGE GALLERY
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

    /*
    Selected colour variant images first
    */

    addImage(selectedVariant?.images?.front);
    addImage(selectedVariant?.images?.model);
    addImage(selectedVariant?.images?.side);
    addImage(selectedVariant?.images?.back);
    addImage(selectedVariant?.images?.detail);

    addImage(selectedVariant?.image);
    addImage(selectedVariant?.image_url);

    /*
    Main product images as fallback
    */

    addImage(product?.images?.front);
    addImage(product?.images?.model);
    addImage(product?.images?.side);
    addImage(product?.images?.back);
    addImage(product?.images?.detail);

    addImage(product?.image);
    addImage(product?.image_url);

    if (images.length === 0) {
      images.push("/images/placeholder.jpg");
    }

    return images;
  }, [product, selectedVariant]);

  useEffect(() => {
    if (galleryImages.length > 0) {
      setSelectedImage(galleryImages[0]);
    }
  }, [colour, galleryImages]);

  const mainImage =
    selectedImage ||
    galleryImages[0] ||
    "/images/placeholder.jpg";

  /*
  ----------------------------------------
  PRICE
  ----------------------------------------
  */

  const finalPrice = calculatePrice(product, options);

  const quantityValue = Math.max(
    1,
    Number(quantity || 1)
  );

  const totalPrice =
    Number(finalPrice) * quantityValue;

  /*
  ----------------------------------------
  COLOURS
  ----------------------------------------
  */

  const availableColours = useMemo(() => {
    if (
      Array.isArray(product.colours) &&
      product.colours.length > 0
    ) {
      return product.colours;
    }

    if (
      Array.isArray(product.variants) &&
      product.variants.length > 0
    ) {
      return product.variants
        .map((variant) => variant.colour)
        .filter(Boolean);
    }

    return [];
  }, [product]);

  /*
  ----------------------------------------
  ADD TO CART
  ----------------------------------------
  */

  const handleAddToCart = () => {
    const item = {
      product,

      id: product.id,

      name: productName,

      price: finalPrice,

      basePrice: Number(
        product.price ||
          product.base_price ||
          product.basePrice ||
          0
      ),

      quantity: quantityValue,

      size,

      colour,

      image: mainImage,

      artworkUrl,

      options,
    };

    console.log("ADDING TO CART:", item);

    addToCart(item);

    setAddedMessage(true);

    if (setCartOpen) {
      setCartOpen(true);
    }

    setTimeout(() => {
      setAddedMessage(false);
    }, 3000);
  };

  return (
    <>
      <Helmet>
        <title>
          {productName} | Custom Printing | Kett Press Co
        </title>

        <meta
          name="description"
          content={`Customise ${productName} with your logo, print or artwork. Choose your colour, size and printing options and order online from Kett Press Co.`}
        />
      </Helmet>

      {/* BREADCRUMB */}

      <div
        style={{
          background: "#f8fafc",
          borderBottom: "1px solid #e5e7eb",
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
            style={{
              color: "#6b7280",
              textDecoration: "none",
            }}
          >
            Home
          </Link>

          <span> / </span>

          <Link
            to="/shop"
            style={{
              color: "#6b7280",
              textDecoration: "none",
            }}
          >
            Shop
          </Link>

          <span> / </span>

          <span
            style={{
              color: "#111827",
              fontWeight: "600",
            }}
          >
            {productName}
          </span>
        </div>
      </div>

      {/* PRODUCT */}

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
          {/* =========================================
              LEFT SIDE - PRODUCT IMAGES
          ========================================= */}

          <div>
            <div
              style={{
                background: "#f8fafc",
                border: "1px solid #e5e7eb",
                borderRadius: "20px",
                padding: "25px",
                minHeight: "500px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <img
                src={mainImage}
                alt={`${productName} ${
                  colour ? `in ${colour}` : ""
                }`}
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
                    background: "rgba(17,24,39,0.9)",
                    color: "#fff",
                    padding: "8px 13px",
                    borderRadius: "999px",
                    fontSize: "13px",
                    fontWeight: "700",
                  }}
                >
                  {colour}
                </div>
              )}
            </div>

            {/* THUMBNAILS */}

            {galleryImages.length > 1 && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(80px, 100px))",
                  gap: "12px",
                  marginTop: "16px",
                }}
              >
                {galleryImages.map(
                  (image, index) => (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      onClick={() =>
                        setSelectedImage(image)
                      }
                      style={{
                        padding: "5px",
                        background: "#f8fafc",

                        border:
                          selectedImage === image
                            ? "2px solid #f97316"
                            : "1px solid #e5e7eb",

                        borderRadius: "10px",

                        cursor: "pointer",

                        height: "95px",
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
                          objectFit: "contain",
                        }}
                      />
                    </button>
                  )
                )}
              </div>
            )}

            {/* IMAGE TRUST MESSAGE */}

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
                Please note:
              </strong>{" "}
              Product images are for garment reference.
              Your final product will be customised using
              the artwork and printing options you select.
            </div>
          </div>

          {/* =========================================
              RIGHT SIDE - BUYING PANEL
          ========================================= */}

          <div>
            {/* PRODUCT TYPE */}

            {product.category && (
              <div
                style={{
                  color: "#ea580c",
                  textTransform: "uppercase",
                  fontWeight: "800",
                  letterSpacing: "1.5px",
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

                fontWeight: "800",

                lineHeight: "1.15",

                margin:
                  "0 0 16px",

                color: "#111827",

                letterSpacing: "-1px",

                overflowWrap: "break-word",
              }}
            >
              {productName}
            </h1>

            {/* REVIEWS */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
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
                Custom printed by Kett Press Co
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

            {/* PRICE */}

            <div
              style={{
                padding: "22px",
                background: "#f8fafc",
                borderRadius: "14px",
                border: "1px solid #e5e7eb",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
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
                £{Number(finalPrice).toFixed(2)}
              </div>

              <div
                style={{
                  marginTop: "8px",
                  color: "#16a34a",
                  fontWeight: "700",
                  fontSize: "14px",
                }}
              >
                ✓ Standard front print included
              </div>

              {quantityValue > 1 && (
                <div
                  style={{
                    marginTop: "8px",
                    color: "#4b5563",
                    fontSize: "14px",
                  }}
                >
                  Order total:{" "}
                  <strong>
                    £{totalPrice.toFixed(2)}
                  </strong>
                </div>
              )}
            </div>

            {/* SIZE */}

            {product.sizes?.length > 0 && (
              <div
                style={{
                  marginBottom: "30px",
                }}
              >
                <div style={sectionLabel}>
                  Select Size
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "9px",
                  }}
                >
                  {product.sizes.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        setSize(item)
                      }
                      style={{
                        minWidth: "50px",
                        padding: "11px 14px",

                        background:
                          size === item
                            ? "#111827"
                            : "#fff",

                        color:
                          size === item
                            ? "#fff"
                            : "#111827",

                        border:
                          size === item
                            ? "2px solid #111827"
                            : "1px solid #d1d5db",

                        borderRadius: "8px",

                        cursor: "pointer",

                        fontWeight: "700",
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* COLOUR */}

            {availableColours.length > 0 && (
              <div
                style={{
                  marginBottom: "30px",
                }}
              >
                <div style={sectionLabel}>
                  Select Colour
                </div>

                <p
                  style={{
                    fontSize: "14px",
                    color: "#6b7280",
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
                          (variant) =>
                            variant.colour ===
                            item
                        );

                      const swatchImage =
                        variant?.images?.front ||
                        variant?.images?.model ||
                        variant?.image ||
                        variant?.image_url;

                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() =>
                            setColour(item)
                          }
                          title={item}
                          style={{
                            minWidth: "70px",
                            padding: "8px",

                            background: "#fff",

                            border:
                              colour === item
                                ? "2px solid #f97316"
                                : "1px solid #d1d5db",

                            borderRadius: "9px",

                            cursor:
                              "pointer",

                            fontWeight:
                              "600",
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
                                  "45px",
                                height:
                                  "45px",
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
                              fontSize:
                                "11px",
                              display:
                                "block",
                              maxWidth:
                                "80px",
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

            {/* QUANTITY */}

            <div
              style={{
                marginBottom: "30px",
              }}
            >
              <div style={sectionLabel}>
                Quantity
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0",
                  width: "fit-content",
                  border:
                    "1px solid #d1d5db",
                  borderRadius: "9px",
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((prev) =>
                      Math.max(
                        1,
                        Number(prev) - 1
                      )
                    )
                  }
                  style={quantityButton}
                >
                  −
                </button>

                <input
                  type="number"
                  value={quantity}
                  min="1"
                  onChange={(e) =>
                    setQuantity(
                      Math.max(
                        1,
                        Number(
                          e.target.value
                        )
                      )
                    )
                  }
                  style={{
                    width: "65px",
                    padding: "12px 5px",
                    border: "none",
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "700",
                    outline: "none",
                  }}
                />

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((prev) =>
                      Number(prev) + 1
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
                Ordering multiple items? Bulk
                discounts may apply automatically.
              </p>
            </div>

            {/* PRINT OPTIONS */}

            <div
              style={{
                marginBottom: "30px",
              }}
            >
              <div style={sectionLabel}>
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
                Your standard front print is already
                included. Add extra printing or artwork
                services below.
              </p>

              <div
                style={{
                  display: "grid",
                  gap: "10px",
                }}
              >
                {[
                  {
                    key: "backPrint",
                    label: "Add Back Print",
                    price: "+£5",
                    text: "Print your design or logo on the back.",
                  },

                  {
                    key: "sleevePrint",
                    label: "Add Sleeve Print",
                    price: "+£3",
                    text: "Add additional branding to a sleeve.",
                  },

                  {
                    key: "oversizedPrint",
                    label: "Oversized Print",
                    price: "+£5",
                    text: "Choose a larger statement print.",
                  },

                  {
                    key: "artworkEdit",
                    label: "Artwork Edit",
                    price: "+£5",
                    text: "Minor adjustments to help prepare your artwork.",
                  },

                  {
                    key: "newArtwork",
                    label:
                      "New Artwork Design",
                    price: "+£20",
                    text: "Get help creating new artwork for your order.",
                  },
                ].map((option) => (
                  <label
                    key={option.key}
                    style={{
                      display: "flex",
                      alignItems:
                        "flex-start",
                      gap: "14px",

                      padding: "16px",

                      border:
                        options[
                          option.key
                        ]
                          ? "2px solid #f97316"
                          : "1px solid #e5e7eb",

                      borderRadius: "11px",

                      cursor: "pointer",

                      background:
                        options[
                          option.key
                        ]
                          ? "#fff7ed"
                          : "#fff",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={
                        options[
                          option.key
                        ]
                      }
                      onChange={() =>
                        setOptions(
                          (prev) => ({
                            ...prev,

                            [option.key]:
                              !prev[
                                option.key
                              ],
                          })
                        )
                      }
                      style={{
                        marginTop: "4px",
                        width: "18px",
                        height: "18px",
                      }}
                    />

                    <div
                      style={{
                        flex: 1,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent:
                            "space-between",
                          gap: "15px",
                          fontWeight:
                            "800",
                          color:
                            "#111827",
                        }}
                      >
                        <span>
                          {option.label}
                        </span>

                        <span
                          style={{
                            color:
                              "#ea580c",
                          }}
                        >
                          {option.price}
                        </span>
                      </div>

                      <div
                        style={{
                          marginTop: "4px",
                          fontSize: "13px",
                          color:
                            "#6b7280",
                          lineHeight:
                            "1.5",
                        }}
                      >
                        {option.text}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* ARTWORK */}

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
              <div style={sectionLabel}>
                Upload Your Artwork
              </div>

              <p
                style={{
                  color: "#6b7280",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                Upload your logo, design or artwork for
                this order. You can also contact us if
                you're unsure about your file.
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
                      "700",

                    fontSize:
                      "14px",
                  }}
                >
                  ✓ Artwork uploaded successfully
                </div>
              )}
            </div>

            {/* ADD TO CART PANEL */}

            <div
              style={{
                padding: "22px",

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

                  gap: "20px",

                  marginBottom:
                    "18px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize:
                        "13px",

                      color:
                        "#9ca3af",

                      marginBottom:
                        "4px",
                    }}
                  >
                    Your order
                  </div>

                  <div
                    style={{
                      fontSize:
                        "26px",

                      fontWeight:
                        "900",
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
                    textAlign:
                      "right",

                    color:
                      "#d1d5db",

                    fontSize:
                      "13px",

                    lineHeight:
                      "1.5",
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
                      Size:{" "}
                      {size}
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
                    marginTop:
                      "12px",

                    textAlign:
                      "center",

                    color:
                      "#86efac",

                    fontWeight:
                      "700",

                    fontSize:
                      "14px",
                  }}
                >
                  ✓ Added to your cart
                </div>
              )}

              <div
                style={{
                  marginTop:
                    "18px",

                  display:
                    "grid",

                  gap: "8px",

                  color:
                    "#d1d5db",

                  fontSize:
                    "13px",
                }}
              >
                <span>
                  ✓ Secure online checkout
                </span>

                <span>
                  ✓ Artwork attached to your order
                </span>

                <span>
                  ✓ UK delivery available
                </span>

                <span>
                  ✓ Local collection in Kettering
                </span>
              </div>
            </div>

            {/* NEED HELP */}

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
                Need help before ordering?
              </p>

              <a
                href="https://wa.me/447770118148"
                target="_blank"
                rel="noreferrer"
                style={{
                  color:
                    "#16a34a",

                  textDecoration:
                    "none",

                  fontWeight:
                    "800",
                }}
              >
                Chat with us on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* =========================================
          CONFIDENCE BAR
      ========================================= */}

      <section
        style={{
          background: "#f8fafc",

          borderTop:
            "1px solid #e5e7eb",

          borderBottom:
            "1px solid #e5e7eb",

          padding:
            "35px 20px",
        }}
      >
        <div
          style={{
            maxWidth:
              "1100px",

            margin:
              "0 auto",

            display:
              "grid",

            gridTemplateColumns:
              "repeat(auto-fit, minmax(180px, 1fr))",

            gap:
              "25px",

            textAlign:
              "center",
          }}
        >
          {[
            [
              "🎨",
              "Upload Your Artwork",
              "Send your logo or design with your order.",
            ],

            [
              "👕",
              "Quality Garments",
              "Choose from trusted clothing brands.",
            ],

            [
              "📍",
              "Kettering Based",
              "Local collection is available.",
            ],

            [
              "🇬🇧",
              "UK Delivery",
              "Order online from across the UK.",
            ],
          ].map(
            ([
              icon,
              title,
              text,
            ]) => (
              <div
                key={
                  title
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
                  {icon}
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
                  {title}
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
                  {text}
                </span>
              </div>
            )
          )}
        </div>
      </section>

      {/* =========================================
          RELATED PRODUCTS
      ========================================= */}

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
STYLES
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

  fontWeight: "700",
};