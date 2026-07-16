import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { calculatePrice } from "../utils/calculatePrice";

export default function ProductCard({ product }) {
  const initialVariant = useMemo(() => {
    if (product?.displayVariant) {
      return product.displayVariant;
    }

    if (
      Array.isArray(product?.variants) &&
      product.variants.length > 0
    ) {
      return product.variants[0];
    }

    return null;
  }, [product]);

  const initialColour =
    initialVariant?.colour ||
    product?.colours?.[0] ||
    "";

  const [colour, setColour] = useState(initialColour);

  /*
  ----------------------------------------
  FIND SELECTED VARIANT
  ----------------------------------------
  */

  const selectedVariant = useMemo(() => {
    if (!Array.isArray(product?.variants)) {
      return null;
    }

    return (
      product.variants.find(
        (variant) =>
          variant?.colour
            ?.toLowerCase()
            .trim() ===
          colour
            ?.toLowerCase()
            .trim()
      ) || initialVariant
    );
  }, [product, colour, initialVariant]);

  /*
  ----------------------------------------
  IMAGE HELPERS
  ----------------------------------------
  */

  const getImageFromImages = (images) => {
    if (!images) {
      return null;
    }

    if (
      typeof images === "object" &&
      !Array.isArray(images)
    ) {
      return (
        images.front ||
        images.model ||
        images.side ||
        images.back ||
        images.detail ||
        null
      );
    }

    if (
      Array.isArray(images) &&
      images.length > 0
    ) {
      return images[0];
    }

    if (
      typeof images === "string" &&
      images.trim()
    ) {
      try {
        const parsed = JSON.parse(images);

        return getImageFromImages(parsed);
      } catch {
        return images;
      }
    }

    return null;
  };

  const getVariantImage = (variant) => {
    if (!variant) {
      return null;
    }

    return (
      getImageFromImages(variant.images) ||
      variant.image ||
      variant.image_url ||
      null
    );
  };

  const getProductImage = () => {
    return (
      product?.displayImage ||
      getImageFromImages(product?.images) ||
      product?.image ||
      product?.image_url ||
      "/images/placeholder.jpg"
    );
  };

  const image =
    getVariantImage(selectedVariant) ||
    getProductImage();

  /*
  ----------------------------------------
  PRODUCT NAME
  ----------------------------------------
  */

  const productName =
    product?.name ||
    product?.title ||
    "Custom Printed Garment";

  /*
  ----------------------------------------
  PRODUCT SLUG
  ----------------------------------------
  */

  const slug =
    product?.slug ||
    productName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  /*
  ----------------------------------------
  PRICE
  ----------------------------------------
  */

  const standardOptions = {
    backPrint: false,
    sleevePrint: false,
    oversizedPrint: false,
    artworkEdit: false,
    newArtwork: false,
  };

  const finalPrice = calculatePrice(
    product,
    standardOptions
  );

  /*
  ----------------------------------------
  AVAILABLE COLOURS
  ----------------------------------------
  */

  const availableColours = useMemo(() => {
    if (
      Array.isArray(product?.colours) &&
      product.colours.length > 0
    ) {
      return product.colours;
    }

    if (
      Array.isArray(product?.variants)
    ) {
      return product.variants
        .map((variant) => variant?.colour)
        .filter(Boolean);
    }

    return [];
  }, [product]);

  /*
  ----------------------------------------
  COLOUR SWATCH
  ----------------------------------------
  */

  const colourCode = (name) => {
    if (!name) {
      return "#ddd";
    }

    const normalisedName = name
      .toLowerCase()
      .trim();

    const colours = {
      black: "#000000",

      white: "#ffffff",

      navy: "#001f3f",

      "navy blue": "#001f3f",

      blue: "#0074d9",

      royal: "#4169e1",

      "royal blue": "#4169e1",

      red: "#dc2626",

      green: "#16a34a",

      grey: "#9ca3af",

      gray: "#9ca3af",

      charcoal: "#36454f",

      yellow: "#facc15",

      orange: "#f97316",

      pink: "#ec4899",

      purple: "#9333ea",

      brown: "#795548",

      burgundy: "#800020",

      maroon: "#800000",

      khaki: "#c3b091",

      beige: "#f5f5dc",

      cream: "#fffdd0",

      stone: "#c2b280",

      lime: "#84cc16",

      turquoise: "#14b8a6",
    };

    return (
      colours[normalisedName] ||
      "#d1d5db"
    );
  };

  /*
  ----------------------------------------
  SHOW LIMITED SWATCHES
  ----------------------------------------
  */

  const visibleColours =
    availableColours.slice(0, 6);

  const extraColourCount =
    Math.max(
      0,
      availableColours.length -
        visibleColours.length
    );

  return (
    <article
      style={{
        background: "#fff",

        border:
          "1px solid #e5e7eb",

        borderRadius:
          "18px",

        overflow:
          "hidden",

        display:
          "flex",

        flexDirection:
          "column",

        height:
          "100%",

        boxShadow:
          "0 8px 25px rgba(15,23,42,0.06)",

        transition:
          "transform 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      {/* ======================================
          PRODUCT IMAGE
      ====================================== */}

      <Link
        to={`/product/${slug}`}
        style={{
          display:
            "block",

          position:
            "relative",

          textDecoration:
            "none",

          color:
            "inherit",
        }}
      >
        <div
          style={{
            width:
              "100%",

            height:
              "300px",

            background:
              "#f8fafc",

            overflow:
              "hidden",

            display:
              "flex",

            alignItems:
              "center",

            justifyContent:
              "center",

            padding:
              "15px",

            boxSizing:
              "border-box",
          }}
        >
          <img
            src={image}
            key={image}
            alt={`${productName}${
              colour
                ? ` in ${colour}`
                : ""
            }`}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.src =
                "/images/placeholder.jpg";
            }}
            style={{
              width:
                "100%",

              height:
                "100%",

              objectFit:
                "contain",

              transition:
                "transform 0.3s ease",
            }}
          />
        </div>

        {/* BADGE */}

        <div
          style={{
            position:
              "absolute",

            top:
              "14px",

            left:
              "14px",

            background:
              "#111827",

            color:
              "#fff",

            padding:
              "7px 11px",

            borderRadius:
              "999px",

            fontSize:
              "11px",

            fontWeight:
              "800",

            letterSpacing:
              "0.5px",
          }}
        >
          CUSTOM PRINTING
        </div>
      </Link>

      {/* ======================================
          PRODUCT DETAILS
      ====================================== */}

      <div
        style={{
          padding:
            "22px",

          display:
            "flex",

          flexDirection:
            "column",

          flexGrow:
            1,
        }}
      >
        {/* CATEGORY */}

        {product?.category && (
          <div
            style={{
              color:
                "#ea580c",

              fontSize:
                "11px",

              fontWeight:
                "900",

              textTransform:
                "uppercase",

              letterSpacing:
                "1px",

              marginBottom:
                "8px",
            }}
          >
            {product.category}
          </div>
        )}

        {/* TITLE */}

        <Link
          to={`/product/${slug}`}
          style={{
            textDecoration:
              "none",

            color:
              "#111827",
          }}
        >
          <h3
            style={{
              margin:
                "0 0 10px",

              fontSize:
                "18px",

              lineHeight:
                "1.4",

              fontWeight:
                "800",
            }}
          >
            {productName}
          </h3>
        </Link>

        {/* DESCRIPTION */}

        <p
          style={{
            color:
              "#6b7280",

            margin:
              "0 0 16px",

            fontSize:
              "14px",

            lineHeight:
              "1.6",

            minHeight:
              "44px",
          }}
        >
          {product?.material ||
            product?.features ||
            "Customise with your logo, design or artwork."}
        </p>

        {/* PRICE */}

        <div
          style={{
            marginBottom:
              "16px",
          }}
        >
          <span
            style={{
              display:
                "block",

              color:
                "#6b7280",

              fontSize:
                "12px",

              marginBottom:
                "3px",
            }}
          >
            From
          </span>

          <div
            style={{
              display:
                "flex",

              alignItems:
                "baseline",

              gap:
                "8px",
            }}
          >
            <strong
              style={{
                fontSize:
                  "26px",

                color:
                  "#111827",

                lineHeight:
                  "1",
              }}
            >
              £
              {Number(
                finalPrice
              ).toFixed(2)}
            </strong>
          </div>

          <span
            style={{
              display:
                "block",

              color:
                "#16a34a",

              fontSize:
                "12px",

              fontWeight:
                "700",

              marginTop:
                "6px",
            }}
          >
            ✓ Standard front print included
          </span>
        </div>

        {/* ======================================
            COLOUR SWATCHES
        ====================================== */}

        {availableColours.length >
          0 && (
          <div
            style={{
              marginBottom:
                "20px",
            }}
          >
            <div
              style={{
                display:
                  "flex",

                justifyContent:
                  "space-between",

                alignItems:
                  "center",

                marginBottom:
                  "9px",
              }}
            >
              <span
                style={{
                  color:
                    "#374151",

                  fontSize:
                    "13px",

                  fontWeight:
                    "700",
                }}
              >
                Available colours
              </span>

              {colour && (
                <span
                  style={{
                    color:
                      "#6b7280",

                    fontSize:
                      "11px",
                  }}
                >
                  {colour}
                </span>
              )}
            </div>

            <div
              style={{
                display:
                  "flex",

                alignItems:
                  "center",

                flexWrap:
                  "wrap",

                gap:
                  "7px",
              }}
            >
              {visibleColours.map(
                (item) => {
                  const active =
                    item ===
                    colour;

                  return (
                    <button
                      key={
                        item
                      }
                      type="button"
                      onClick={() =>
                        setColour(
                          item
                        )
                      }
                      title={
                        item
                      }
                      aria-label={`View ${productName} in ${item}`}
                      style={{
                        width:
                          "27px",

                        height:
                          "27px",

                        borderRadius:
                          "50%",

                        background:
                          colourCode(
                            item
                          ),

                        cursor:
                          "pointer",

                        border:
                          active
                            ? "3px solid #f97316"
                            : "1px solid #d1d5db",

                        boxShadow:
                          item
                            ?.toLowerCase()
                            .trim() ===
                          "white"
                            ? "inset 0 0 0 1px #ddd"
                            : "none",

                        padding:
                          0,
                      }}
                    />
                  );
                }
              )}

              {extraColourCount >
                0 && (
                <span
                  style={{
                    color:
                      "#6b7280",

                    fontSize:
                      "12px",

                    fontWeight:
                      "700",

                    marginLeft:
                      "3px",
                  }}
                >
                  +
                  {
                    extraColourCount
                  }{" "}
                  more
                </span>
              )}
            </div>
          </div>
        )}

        {/* PRODUCT FEATURES */}

        <div
          style={{
            display:
              "grid",

            gap:
              "7px",

            marginBottom:
              "20px",

            fontSize:
              "12px",

            color:
              "#4b5563",
          }}
        >
          <span>
            ✓ Choose size and colour
          </span>

          <span>
            ✓ Add extra print positions
          </span>

          <span>
            ✓ Upload artwork online
          </span>
        </div>

        {/* CTA */}

        <Link
          to={`/product/${slug}`}
          style={{
            display:
              "block",

            width:
              "100%",

            boxSizing:
              "border-box",

            background:
              "#111827",

            color:
              "#fff",

            textDecoration:
              "none",

            padding:
              "14px 18px",

            borderRadius:
              "9px",

            textAlign:
              "center",

            fontWeight:
              "800",

            marginTop:
              "auto",
          }}
        >
          Customise & Order
        </Link>
      </div>
    </article>
  );
}