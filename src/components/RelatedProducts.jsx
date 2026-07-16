import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function RelatedProducts({
  category,
  categories = [],
  limit = 4,
  title = "Popular Products",
  excludeProductId = null,
}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Prevent useEffect from running again just because
  // a new array reference is passed into categories.
  const categoriesKey = categories.join(",");

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError("");

        // Fetch one extra product when excluding the current product
        // so we can still display the requested number.
        let query = supabase
          .from("products")
          .select("*")
          .limit(excludeProductId ? limit + 1 : limit);

        if (categories.length > 0) {
          query = query.in("category", categories);
        } else if (category) {
          query = query.eq("category", category);
        }

        const { data, error } = await query;

        if (error) {
          console.error("RELATED PRODUCTS ERROR:", error);
          setError("Unable to load products.");
          setProducts([]);
          return;
        }

        let filteredProducts = data || [];

        // Remove the product currently being viewed
        if (excludeProductId) {
          filteredProducts = filteredProducts.filter(
            (product) =>
              String(product.id) !== String(excludeProductId)
          );
        }

        setProducts(filteredProducts.slice(0, limit));
      } catch (err) {
        console.error("RELATED PRODUCTS ERROR:", err);
        setError("Unable to load products.");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [
    category,
    categoriesKey,
    limit,
    excludeProductId,
  ]);

  const getProductImage = (product) => {
    // Try product variants first
    if (
      Array.isArray(product?.variants) &&
      product.variants.length > 0
    ) {
      const variant = product.variants.find(
        (item) =>
          item?.images?.front ||
          item?.images?.model ||
          item?.images?.side ||
          item?.images?.back ||
          item?.image ||
          item?.image_url
      );

      if (variant?.images?.front) {
        return variant.images.front;
      }

      if (variant?.images?.model) {
        return variant.images.model;
      }

      if (variant?.images?.side) {
        return variant.images.side;
      }

      if (variant?.images?.back) {
        return variant.images.back;
      }

      if (variant?.image) {
        return variant.image;
      }

      if (variant?.image_url) {
        return variant.image_url;
      }
    }

    // Then try main product images
    if (product?.images?.front) {
      return product.images.front;
    }

    if (product?.images?.model) {
      return product.images.model;
    }

    if (product?.images?.side) {
      return product.images.side;
    }

    if (product?.images?.back) {
      return product.images.back;
    }

    if (product?.image) {
      return product.image;
    }

    if (product?.image_url) {
      return product.image_url;
    }

    return "/images/placeholder.jpg";
  };

  const getProductPrice = (product) => {
    const price =
      product?.price ??
      product?.base_price ??
      product?.basePrice ??
      0;

    const numericPrice = Number(price);

    if (Number.isNaN(numericPrice)) {
      return "0.00";
    }

    return numericPrice.toFixed(2);
  };

  const getProductSlug = (product) => {
    if (product?.slug) {
      return product.slug;
    }

    const productName =
      product?.name ||
      product?.title ||
      String(product?.id || "");

    return productName
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
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

  if (error || products.length === 0) {
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
        {/* SECTION HEADER */}
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
            Choose your garment, select your size and colour,
            add your printing options and upload your artwork online.
          </p>
        </div>

        {/* PRODUCT GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "25px",
          }}
        >
          {products.map((product) => {
            const image = getProductImage(product);
            const slug = getProductSlug(product);
            const productName =
              product.name ||
              product.title ||
              "Custom Printed Garment";

            return (
              <div
                key={product.id}
                style={{
                  background: "#fff",
                  border: "1px solid #eee",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow:
                    "0 6px 20px rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* PRODUCT IMAGE */}
                <Link
                  to={`/product/${slug}`}
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
                      src={image}
                      alt={`${productName} custom printing`}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src =
                          "/images/placeholder.jpg";
                      }}
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

                {/* PRODUCT DETAILS */}
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
                    {productName}
                  </h3>

                  <p
                    style={{
                      color: "#555",
                      marginBottom: "10px",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
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
                    to={`/product/${slug}`}
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
            );
          })}
        </div>

        {/* VIEW SHOP */}
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