import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { supabase } from "../lib/supabase";
import { calculatePrice } from "../utils/calculatePrice";

export default function ProductCard({ product }) {
  const { addToCart, setCartOpen } = useCart();

  const firstVariant = product?.variants?.[0];

  const [size, setSize] = useState(product?.sizes?.[0] || "");
  const [colour, setColour] = useState(
    firstVariant?.colour || product?.colours?.[0] || ""
  );

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

  const selectedVariant = product?.variants?.find(
    (variant) => variant.colour === colour
  );

  const image =
    selectedVariant?.images?.front ||
    selectedVariant?.images?.model ||
    product?.images?.front ||
    product?.images?.model ||
    "/images/placeholder.jpg";

  const slug =
    product?.slug ||
    product?.name
      ?.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  const finalPrice = calculatePrice(product, options);

  const toggleOption = (key) => {
    setOptions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first");
      return;
    }

    try {
      setUploading(true);

      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2)}.${fileExt}`;

      const { error } = await supabase.storage
        .from("artwork")
        .upload(fileName, file);

      if (error) {
        console.error(error);
        alert("Upload failed");
        return;
      }

      const { data } = supabase.storage.from("artwork").getPublicUrl(fileName);

      setArtworkUrl(data.publicUrl);
      alert("Artwork uploaded successfully!");
    } catch (err) {
      console.error(err);
      alert("Upload error");
    } finally {
      setUploading(false);
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      product,
      id: product.id,
      name: product.name,
      price: finalPrice,
      size,
      colour,
      image,
      quantity: 1,
      options,
      artworkUrl,
    };

    console.log("ADDING TO CART:", cartItem);

    addToCart(cartItem);
    setCartOpen(true);
  };

  const colourCode = (name) => {
    const colours = {
      black: "#000",
      white: "#fff",
      navy: "#001f3f",
      blue: "#0074D9",
      red: "#ff4136",
      green: "#2ecc40",
      grey: "#999",
      gray: "#999",
      yellow: "#ffdc00",
      orange: "#ff851b",
      pink: "#ff69b4",
      purple: "#b10dc9",
      brown: "#85144b",
    };

    return colours[name?.toLowerCase().trim()] || "#ddd";
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "18px",
        padding: "20px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
      }}
    >
      <Link to={`/product/${slug}`}>
        <img
          src={image}
          key={image}
          alt={product.name}
          loading="lazy"
          style={{
            width: "100%",
            height: "260px",
            objectFit: "contain",
            borderRadius: "14px",
            background: "#f7f7f7",
          }}
        />
      </Link>

      <div>
        <Link
          to={`/product/${slug}`}
          style={{ textDecoration: "none", color: "#111" }}
        >
          <h3 style={{ margin: "0 0 8px", fontSize: "18px" }}>
            {product.name}
          </h3>
        </Link>

        <p style={{ color: "#666", margin: 0, minHeight: "44px" }}>
          {product.material || product.features || "Custom printed garment"}
        </p>
      </div>

      <div
        style={{
          background: "#f8f8f8",
          padding: "12px",
          borderRadius: "12px",
        }}
      >
        <span style={{ fontSize: "13px", color: "#666" }}>From</span>
        <strong style={{ display: "block", fontSize: "24px", color: "#111" }}>
          £{finalPrice.toFixed(2)}
        </strong>
        <small style={{ color: "#666" }}>Includes standard front print</small>
      </div>

      {product.sizes?.length > 0 && (
        <div>
          <label style={{ fontWeight: "600", fontSize: "14px" }}>Size</label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            style={{
              width: "100%",
              marginTop: "6px",
              padding: "11px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          >
            {product.sizes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      )}

      {product.colours?.length > 0 && (
        <div>
          <label style={{ fontWeight: "600", fontSize: "14px" }}>
            Colour: {colour}
          </label>

          <div style={{ display: "flex", gap: "9px", flexWrap: "wrap", marginTop: "8px" }}>
            {product.colours.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setColour(item)}
                title={item}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  border: colour === item ? "3px solid #111" : "1px solid #ccc",
                  background: colourCode(item),
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>
      )}

      <div>
        <label style={{ fontWeight: "700", fontSize: "14px" }}>
          Printing Options
        </label>

        {[
          ["backPrint", "Back Print", "+£5"],
          ["sleevePrint", "Sleeve Print", "+£3"],
          ["oversizedPrint", "Oversized Print", "+£5"],
          ["artworkEdit", "Artwork Edit", "+£5"],
          ["newArtwork", "New Artwork Design", "+£20"],
        ].map(([key, label, cost]) => (
          <label
            key={key}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "9px",
              padding: "9px 10px",
              borderRadius: "10px",
              background: options[key] ? "#f0f0f0" : "#fff",
              border: "1px solid #e5e5e5",
              cursor: "pointer",
            }}
          >
            <span>
              <input
                type="checkbox"
                checked={options[key]}
                onChange={() => toggleOption(key)}
                style={{ marginRight: "8px" }}
              />
              {label}
            </span>
            <strong>{cost}</strong>
          </label>
        ))}
      </div>

      <div>
        <label style={{ fontWeight: "700", fontSize: "14px" }}>
          Upload Artwork Optional
        </label>

        <input
          type="file"
          accept="image/*,.pdf,.svg,.ai"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          style={{ display: "block", marginTop: "8px", width: "100%" }}
        />

        <button
          type="button"
          onClick={handleUpload}
          disabled={uploading || !file}
          style={{
            marginTop: "10px",
            padding: "11px",
            width: "100%",
            borderRadius: "10px",
            border: "none",
            background: uploading || !file ? "#aaa" : "#0074D9",
            color: "#fff",
            cursor: uploading || !file ? "not-allowed" : "pointer",
            fontWeight: "700",
          }}
        >
          {uploading ? "Uploading..." : "Upload Artwork"}
        </button>

        {artworkUrl && (
          <p style={{ color: "green", margin: "8px 0 0", fontSize: "14px" }}>
            ✓ Artwork uploaded
          </p>
        )}
      </div>

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