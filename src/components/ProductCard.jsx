import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { supabase } from "../lib/supabase";
import { calculatePrice } from "../utils/calculatePrice";

export default function ProductCard({ product }) {
  const { addToCart, setCartOpen } = useCart();

  /*
    Shop.jsx can now pass:
    - product.displayImage
    - product.displayVariant

    This lets each card start with a different colour/image
    instead of every garment defaulting to black.
  */

  const initialVariant = useMemo(() => {
    if (product?.displayVariant) {
      return product.displayVariant;
    }

    if (Array.isArray(product?.variants) && product.variants.length > 0) {
      return product.variants[0];
    }

    return null;
  }, [product]);

  const initialColour =
    initialVariant?.colour ||
    product?.colours?.[0] ||
    "";

  const [size, setSize] = useState(
    product?.sizes?.[0] || ""
  );

  const [colour, setColour] = useState(initialColour);

  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [artworkUrl, setArtworkUrl] = useState("");

  const [options, setOptions] = useState({
    backPrint: false,
    sleevePrint: false,
    oversizedPrint: false,
    artworkEdit: false,
    newArtwork: false,
  });

  /*
    Find currently selected colour variant.
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
    Safely extract an image from a variant.
  */

  const getVariantImage = (variant) => {
    if (!variant) return null;

    if (variant.image) {
      return variant.image;
    }

    if (variant.image_url) {
      return variant.image_url;
    }

    if (variant.images) {
      if (typeof variant.images === "object") {
        return (
          variant.images.front ||
          variant.images.model ||
          variant.images.side ||
          variant.images.back ||
          variant.images.detail ||
          null
        );
      }

      if (Array.isArray(variant.images)) {
        return variant.images[0] || null;
      }
    }

    return null;
  };

  /*
    Safely extract product fallback image.
  */

  const getProductImage = () => {
    if (product?.displayImage) {
      return product.displayImage;
    }

    if (product?.image) {
      return product.image;
    }

    if (product?.image_url) {
      return product.image_url;
    }

    if (product?.images) {
      if (typeof product.images === "object") {
        return (
          product.images.front ||
          product.images.model ||
          product.images.side ||
          product.images.back ||
          product.images.detail ||
          null
        );
      }

      if (Array.isArray(product.images)) {
        return product.images[0] || null;
      }
    }

    return null;
  };

  /*
    Once customer selects a colour,
    use that colour's image.

    Before customer changes colour,
    the colourful Shop.jsx display image
    can be used.
  */

  const image =
    getVariantImage(selectedVariant) ||
    getProductImage() ||
    "/images/placeholder.jpg";

  /*
    Product URL slug.
  */

  const slug =
    product?.slug ||
    product?.name
      ?.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  /*
    Calculate current product price.
  */

  const finalPrice = calculatePrice(
    product,
    options
  );

  /*
    Toggle printing extras.
  */

  const toggleOption = (key) => {
    setOptions((previousOptions) => ({
      ...previousOptions,
      [key]: !previousOptions[key],
    }));
  };

  /*
    Upload artwork to Supabase.
  */

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first");
      return;
    }

    try {
      setUploading(true);

      const fileExt =
        file.name.split(".").pop() || "file";

      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2)}.${fileExt}`;

      const { error } = await supabase.storage
        .from("artwork")
        .upload(fileName, file);

      if (error) {
        console.error(
          "ARTWORK UPLOAD ERROR:",
          error
        );

        alert("Artwork upload failed.");
        return;
      }

      const { data } = supabase.storage
        .from("artwork")
        .getPublicUrl(fileName);

      const publicUrl = data?.publicUrl || "";

      setArtworkUrl(publicUrl);

      alert("Artwork uploaded successfully!");
    } catch (error) {
      console.error(
        "ARTWORK UPLOAD ERROR:",
        error
      );

      alert(
        "There was a problem uploading your artwork."
      );
    } finally {
      setUploading(false);
    }
  };

  /*
    Add configured product to cart.
  */

  const handleAddToCart = () => {
    if (
      product?.sizes?.length > 0 &&
      !size
    ) {
      alert("Please choose a size.");
      return;
    }

    if (
      product?.colours?.length > 0 &&
      !colour
    ) {
      alert("Please choose a colour.");
      return;
    }

    const cartItem = {
      product,
      id: product.id,
      name:
        product.name ||
        product.title ||
        "Custom Product",
      price: finalPrice,
      size,
      colour,
      image,
      quantity: 1,
      options,
      artworkUrl,
    };

    console.log(
      "ADDING TO CART:",
      cartItem
    );

    addToCart(cartItem);

    if (setCartOpen) {
      setCartOpen(true);
    }
  };

  /*
    Colour swatch helper.
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
      red: "#ff4136",
      green: "#2ecc40",
      grey: "#999999",
      gray: "#999999",
      charcoal: "#36454f",
      yellow: "#ffdc00",
      orange: "#ff851b",
      pink: "#ff69b4",
      purple: "#b10dc9",
      brown: "#795548",
      burgundy: "#800020",
      maroon: "#800000",
      khaki: "#c3b091",
      beige: "#f5f5dc",
      cream: "#fffdd0",
      stone: "#c2b280",
      lime: "#32cd32",
      turquoise: "#40e0d0",
    };

    return (
      colours[normalisedName] ||
      "#dddddd"
    );
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "18px",
        padding: "20px",
        boxShadow:
          "0 8px 25px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        height: "100%",
      }}
    >
      {/* PRODUCT IMAGE */}
      <Link
        to={`/product/${slug}`}
        style={{
          display: "block",
          textDecoration: "none",
        }}
      >
        <div
          style={{
            background: "#f7f7f7",
            borderRadius: "14px",
            overflow: "hidden",
          }}
        >
          <img
            src={image}
            key={image}
            alt={
              `${product?.name || "Custom garment"}${
                colour
                  ? ` in ${colour}`
                  : ""
              }`
            }
            loading="lazy"
            style={{
              width: "100%",
              height: "280px",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>
      </Link>

      {/* PRODUCT INFORMATION */}
      <div>
        <Link
          to={`/product/${slug}`}
          style={{
            textDecoration: "none",
            color: "#111",
          }}
        >
          <h3
            style={{
              margin: "0 0 8px",
              fontSize: "18px",
              lineHeight: "1.4",
            }}
          >
            {product?.name ||
              product?.title}
          </h3>
        </Link>

        <p
          style={{
            color: "#666",
            margin: 0,
            minHeight: "44px",
            lineHeight: "1.5",
          }}
        >
          {product?.material ||
            product?.features ||
            "Custom printed garment"}
        </p>
      </div>

      {/* PRICE */}
      <div
        style={{
          background: "#f8f8f8",
          padding: "12px",
          borderRadius: "12px",
        }}
      >
        <span
          style={{
            fontSize: "13px",
            color: "#666",
          }}
        >
          From
        </span>

        <strong
          style={{
            display: "block",
            fontSize: "24px",
            color: "#111",
          }}
        >
          £{Number(finalPrice).toFixed(2)}
        </strong>

        <small
          style={{
            color: "#666",
          }}
        >
          Includes standard front print
        </small>
      </div>

      {/* SIZE SELECTOR */}
      {Array.isArray(product?.sizes) &&
        product.sizes.length > 0 && (
          <div>
            <label
              style={{
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Size
            </label>

            <select
              value={size}
              onChange={(event) =>
                setSize(event.target.value)
              }
              style={{
                width: "100%",
                marginTop: "6px",
                padding: "11px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                background: "#fff",
              }}
            >
              {product.sizes.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>
        )}

      {/* COLOUR SWATCHES */}
      {Array.isArray(product?.colours) &&
        product.colours.length > 0 && (
          <div>
            <label
              style={{
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Colour:{" "}
              <strong>{colour}</strong>
            </label>

            <div
              style={{
                display: "flex",
                gap: "9px",
                flexWrap: "wrap",
                marginTop: "10px",
              }}
            >
              {product.colours.map(
                (item) => {
                  const active =
                    item === colour;

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        setColour(item)
                      }
                      title={item}
                      aria-label={`Select ${item}`}
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        border: active
                          ? "3px solid #111"
                          : "1px solid #ccc",
                        background:
                          colourCode(item),
                        cursor: "pointer",
                        boxShadow:
                          item
                            ?.toLowerCase()
                            .trim() ===
                          "white"
                            ? "inset 0 0 0 1px #ddd"
                            : "none",
                      }}
                    />
                  );
                }
              )}
            </div>
          </div>
        )}

      {/* PRINTING OPTIONS */}
      <div>
        <label
          style={{
            fontWeight: "700",
            fontSize: "14px",
          }}
        >
          Printing Options
        </label>

        {[
          [
            "backPrint",
            "Back Print",
            "+£5",
          ],
          [
            "sleevePrint",
            "Sleeve Print",
            "+£3",
          ],
          [
            "oversizedPrint",
            "Oversized Print",
            "+£5",
          ],
          [
            "artworkEdit",
            "Artwork Edit",
            "+£5",
          ],
          [
            "newArtwork",
            "New Artwork Design",
            "+£20",
          ],
        ].map(
          ([key, label, cost]) => (
            <label
              key={key}
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
                marginTop: "9px",
                padding: "9px 10px",
                borderRadius: "10px",
                background: options[key]
                  ? "#f0f0f0"
                  : "#fff",
                border:
                  "1px solid #e5e5e5",
                cursor: "pointer",
                gap: "10px",
              }}
            >
              <span>
                <input
                  type="checkbox"
                  checked={options[key]}
                  onChange={() =>
                    toggleOption(key)
                  }
                  style={{
                    marginRight: "8px",
                  }}
                />

                {label}
              </span>

              <strong>{cost}</strong>
            </label>
          )
        )}
      </div>

      {/* ARTWORK UPLOAD */}
      <div>
        <label
          style={{
            fontWeight: "700",
            fontSize: "14px",
          }}
        >
          Upload Artwork{" "}
          <span
            style={{
              fontWeight: "400",
              color: "#777",
            }}
          >
            (Optional)
          </span>
        </label>

        <input
          type="file"
          accept="image/*,.pdf,.svg,.ai"
          onChange={(event) =>
            setFile(
              event.target.files?.[0] ||
                null
            )
          }
          style={{
            display: "block",
            marginTop: "8px",
            width: "100%",
          }}
        />

        <button
          type="button"
          onClick={handleUpload}
          disabled={
            uploading || !file
          }
          style={{
            marginTop: "10px",
            padding: "11px",
            width: "100%",
            borderRadius: "10px",
            border: "none",
            background:
              uploading || !file
                ? "#aaa"
                : "#0074D9",
            color: "#fff",
            cursor:
              uploading || !file
                ? "not-allowed"
                : "pointer",
            fontWeight: "700",
          }}
        >
          {uploading
            ? "Uploading..."
            : "Upload Artwork"}
        </button>

        {artworkUrl && (
          <p
            style={{
              color: "green",
              margin: "8px 0 0",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            ✓ Artwork uploaded
          </p>
        )}
      </div>

      {/* ADD TO CART */}
      <button
        type="button"
        onClick={handleAddToCart}
        style={{
          background: "#111",
          color: "#fff",
          border: "none",
          padding: "15px",
          borderRadius: "12px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "700",
          marginTop: "auto",
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}