import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { supabase } from "../lib/supabase";
import { useCart } from "../context/CartContext";
import { calculatePrice } from "../utils/calculatePrice";
import ArtworkUpload from "../components/ArtworkUpload";

export default function Product() {
  const { slug } = useParams();
  const { addToCart, setCartOpen } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [size, setSize] = useState("");
  const [colour, setColour] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [artworkUrl, setArtworkUrl] = useState("");

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

      const { data, error } = await supabase.from("products").select("*");

      if (error) throw error;

      const found = data.find(
        (item) =>
          String(item.id) === String(slug) ||
          item.slug === slug ||
          makeSlug(item.name || item.title) === slug
      );

      setProduct(found || null);

      if (found) {
        setSize(found.sizes?.[0] || "");
        setColour(found.variants?.[0]?.colour || found.colours?.[0] || "");
      }
    } catch (error) {
      console.error("PRODUCT LOAD ERROR:", error);
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: "80px", textAlign: "center" }}>
        <h1>Loading product...</h1>
      </div>
    );
  }

  if (!product) {
    return (
      <div style={{ padding: "80px", textAlign: "center" }}>
        <h1>Product Not Found</h1>
      </div>
    );
  }

  const selectedVariant = product.variants?.find(
    (variant) => variant.colour === colour
  );

  const mainImage =
    selectedVariant?.images?.front ||
    selectedVariant?.images?.model ||
    product.images?.front ||
    product.images?.model ||
    product.image ||
    "/images/placeholder.jpg";

  const finalPrice = calculatePrice(product, options);
  const quantityValue = Number(quantity || 1);

  const handleAddToCart = () => {
    const item = {
      product,
      id: product.id,
      name: product.name || product.title,
      price: finalPrice,
      basePrice: Number(product.price || product.base_price || 0),
      quantity: quantityValue,
      size,
      colour,
      image: mainImage,
      artworkUrl,
      options,
    };

    console.log("ADDING TO CART:", item);

    addToCart(item);
    setCartOpen(true);
  };

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "60px 20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        gap: "50px",
      }}
    >
      <Helmet>
        <title>{product.name} | Custom Printing | Kett Press Co</title>
        <meta
          name="description"
          content={`Customise ${product.name} with print, logo or artwork from Kett Press Co.`}
        />
      </Helmet>

      <img
        src={mainImage}
        alt={product.name}
        style={{
          width: "100%",
          borderRadius: "20px",
          background: "#f7f7f7",
          objectFit: "contain",
        }}
      />

      <div>
        <h1>{product.name}</h1>

        <p style={{ color: "#666", lineHeight: "1.7" }}>
          {product.material || product.features || "Custom printed clothing"}
        </p>

        <h2>£{finalPrice.toFixed(2)}</h2>
        <p>Standard front print included.</p>

        {product.sizes?.length > 0 && (
          <>
            <label>Size</label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              style={selectStyle}
            >
              {product.sizes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </>
        )}

        {product.colours?.length > 0 && (
          <>
            <label>Colour</label>
            <select
              value={colour}
              onChange={(e) => setColour(e.target.value)}
              style={selectStyle}
            >
              {product.colours.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </>
        )}

        <label>Quantity</label>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(Number(e.target.value))}
          style={selectStyle}
        />

        <div style={{ marginTop: "20px" }}>
          <h3>Print Options</h3>

          {[
            ["backPrint", "Back Print (+£5)"],
            ["sleevePrint", "Sleeve Print (+£3)"],
            ["oversizedPrint", "Oversized Print (+£5)"],
            ["artworkEdit", "Artwork Edit (+£5)"],
            ["newArtwork", "New Artwork Design (+£20)"],
          ].map(([key, label]) => (
            <label key={key} style={{ display: "block", margin: "10px 0" }}>
              <input
                type="checkbox"
                checked={options[key]}
                onChange={() =>
                  setOptions((prev) => ({
                    ...prev,
                    [key]: !prev[key],
                  }))
                }
              />{" "}
              {label}
            </label>
          ))}
        </div>

        <ArtworkUpload
          onUpload={(url) => {
            if (url) setArtworkUrl(url);
          }}
        />

        {artworkUrl && (
          <p style={{ color: "green", marginTop: "10px" }}>
            ✓ Artwork uploaded
          </p>
        )}

        <button onClick={handleAddToCart} style={buttonStyle}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

const selectStyle = {
  display: "block",
  width: "100%",
  padding: "12px",
  margin: "10px 0 20px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  background: "#111",
  color: "#fff",
  border: "none",
  padding: "16px 35px",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "18px",
  fontWeight: "700",
  marginTop: "20px",
};