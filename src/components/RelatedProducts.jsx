import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase";

export default function RelatedProducts({
  category,
  categories = [],
  limit = 4,
  title = "Popular Products",
}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError("");

        let query = supabase
          .from("products")
          .select("*")
          .limit(limit);

        if (categories.length > 0) {
  query = query.in("category", categories);
} else if (category) {
  query = query.eq("category", category);
}

        const { data, error } = await query;

        if (error) {
          console.error("RELATED PRODUCTS ERROR:", error);
          setError("Unable to load products.");
          return;
        }

        setProducts(data || []);
      } catch (err) {
        console.error("RELATED PRODUCTS ERROR:", err);
        setError("Unable to load products.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
}, [category, categories, limit]);

  const getProductImage = (product) => {
    if (product.image) return product.image;

    if (product.image_url) return product.image_url;

    if (product.images && Array.isArray(product.images)) {
      return product.images[0];
    }

    if (product.images && typeof product.images === "string") {
      try {
        const parsedImages = JSON.parse(product.images);

        if (Array.isArray(parsedImages)) {
          return parsedImages[0];
        }
      } catch {
        return product.images;
      }
    }

    return "/images/logo.jpg";
  };

  const getProductPrice = (product) => {
    const price =
      product.price ??
      product.base_price ??
      product.basePrice ??
      0;

    return Number(price).toFixed(2);
  };

  if (loading) {
    return (
      <section
        style={{
          padding: "70px 20px",
          background: "#fff",
          textAlign: "center",
        }}
      >
        <p>Loading products...</p>
      </section>
    );
  }

  if (error) {
    return null;
  }

  if (!products.length) {
    return null;
  }

  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "45px",
          }}
        >
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: "0.85rem",
              fontWeight: "700",
              marginBottom: "10px",
            }}
          >
            Customise & Order Online
          </p>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              marginBottom: "15px",
              color: "#111",
            }}
          >
            {title}
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#555",
              lineHeight: "1.8",
            }}
          >
            Choose your garment, select your size and colour, add your
            printing options and upload your artwork online.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "25px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                background: "#fff",
                border: "1px solid #eee",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Link
                to={`/product/${product.id}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "280px",
                    background: "#f7f7f7",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={getProductImage(product)}
                    alt={`${product.name || product.title} custom printing`}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      padding: "15px",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </Link>

              <div
                style={{
                  padding: "22px",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                <h3
                  style={{
                    fontSize: "1.15rem",
                    marginTop: 0,
                    marginBottom: "12px",
                    color: "#111",
                  }}
                >
                  {product.name || product.title}
                </h3>

                <p
                  style={{
                    color: "#555",
                    marginBottom: "10px",
                    fontSize: "0.95rem",
                  }}
                >
                  Customise with your logo, design or artwork.
                </p>

                <p
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    marginTop: "auto",
                    marginBottom: "18px",
                  }}
                >
                  From £{getProductPrice(product)}
                </p>

                <Link
                  to={`/product/${product.id}`}
                  style={{
                    display: "block",
                    background: "#111",
                    color: "#fff",
                    textDecoration: "none",
                    padding: "14px 18px",
                    borderRadius: "8px",
                    textAlign: "center",
                    fontWeight: "700",
                  }}
                >
                  Customise & Order
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "45px",
          }}
        >
          <Link
            to="/shop"
            style={{
              display: "inline-block",
              border: "2px solid #111",
              color: "#111",
              padding: "14px 28px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}