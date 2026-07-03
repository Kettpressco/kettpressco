import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { calculatePrice } from "../utils/calculatePrice";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("featured", true)
        .limit(6);

      if (error) throw error;

      setProducts(data || []);
    } catch (error) {
      console.error("FEATURED PRODUCTS ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  const getImage = (product) => {
    const firstVariant = product?.variants?.[0];

    return (
      firstVariant?.images?.front ||
      firstVariant?.images?.model ||
      product?.images?.front ||
      product?.images?.model ||
      "/images/placeholder.jpg"
    );
  };

  const getSlug = (product) => {
    return (
      product?.slug ||
      product?.name
        ?.toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
    );
  };

  if (loading) {
    return (
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Featured Products</h2>
        <p style={subtitleStyle}>Loading best sellers...</p>
      </section>
    );
  }

  if (!products.length) return null;

  return (
    <section style={sectionStyle}>
      <div style={{ textAlign: "center", marginBottom: "45px" }}>
        <span style={badgeStyle}>⭐ Best Sellers</span>

        <h2 style={titleStyle}>Featured Custom Clothing</h2>

        <p style={subtitleStyle}>
          Popular products ready to customise with your logo, artwork or design.
        </p>
      </div>

      <div style={gridStyle}>
        {products.map((product, index) => {
          const image = getImage(product);
          const slug = getSlug(product);
          const price = calculatePrice(product, {});

          return (
            <div key={product.id || index} style={cardStyle}>
              <div style={imageWrapStyle}>
                {index === 0 && <span style={bestSellerStyle}>Best Seller</span>}

                <img
                  src={image}
                  alt={product.name}
                  loading="lazy"
                  style={imageStyle}
                />
              </div>

              <div style={{ padding: "22px" }}>
                <h3 style={productTitleStyle}>{product.name}</h3>

                <p style={descriptionStyle}>
                  {product.material ||
                    product.features ||
                    "Custom printed clothing with front print included."}
                </p>

                <div style={priceBoxStyle}>
                  <span style={{ color: "#666", fontSize: "14px" }}>From</span>
                  <strong style={{ fontSize: "26px", color: "#111" }}>
                    £{price.toFixed(2)}
                  </strong>
                </div>

                <div style={featuresStyle}>
                  <span>✔ Front print included</span>
                  <span>✔ Bulk discounts</span>
                  <span>
                    ✔ {product.colours?.length || 1} colour
                    {(product.colours?.length || 1) > 1 ? "s" : ""}
                  </span>
                </div>

                <Link to={`/product/${product.id}`} style={buttonStyle}>
                  Customise & Order →
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ textAlign: "center", marginTop: "45px" }}>
        <Link to="/shop" style={viewAllStyle}>
          View All Products →
        </Link>
      </div>
    </section>
  );
}

const sectionStyle = {
  padding: "90px 20px",
  background: "#f7f7f7",
};

const badgeStyle = {
  display: "inline-block",
  background: "#111",
  color: "#fff",
  padding: "9px 18px",
  borderRadius: "999px",
  fontWeight: "700",
  marginBottom: "18px",
};

const titleStyle = {
  fontSize: "clamp(32px,5vw,48px)",
  margin: "0 0 15px",
  color: "#111",
};

const subtitleStyle = {
  fontSize: "18px",
  color: "#666",
  maxWidth: "700px",
  margin: "0 auto",
  lineHeight: "1.7",
};

const gridStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "28px",
};

const cardStyle = {
  background: "#fff",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  display: "flex",
  flexDirection: "column",
};

const imageWrapStyle = {
  position: "relative",
  background: "#f0f0f0",
  padding: "25px",
  height: "280px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "contain",
};

const bestSellerStyle = {
  position: "absolute",
  top: "16px",
  left: "16px",
  background: "#D62828",
  color: "#fff",
  padding: "7px 13px",
  borderRadius: "999px",
  fontSize: "13px",
  fontWeight: "700",
};

const productTitleStyle = {
  margin: "0 0 10px",
  fontSize: "20px",
  color: "#111",
};

const descriptionStyle = {
  color: "#666",
  lineHeight: "1.6",
  minHeight: "50px",
};

const priceBoxStyle = {
  background: "#f8f8f8",
  padding: "12px",
  borderRadius: "12px",
  margin: "18px 0",
  display: "flex",
  flexDirection: "column",
};

const featuresStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "7px",
  fontSize: "14px",
  color: "#333",
  marginBottom: "20px",
};

const buttonStyle = {
  display: "block",
  textAlign: "center",
  background: "#111",
  color: "#fff",
  padding: "14px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "700",
};

const viewAllStyle = {
  display: "inline-block",
  background: "#D62828",
  color: "#fff",
  padding: "15px 30px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "700",
};