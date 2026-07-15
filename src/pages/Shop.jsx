import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { supabase } from "../lib/supabase";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadProducts() {
      try {
        setLoading(true);
        setError("");

        const { data, error } = await supabase
          .from("products")
          .select("*")
          .limit(100);

        if (error) {
          throw error;
        }

        if (!isMounted) return;

        setProducts(data || []);
      } catch (err) {
        console.error("SHOP PRODUCTS ERROR:", err);

        if (isMounted) {
          setError("Unable to load products at the moment.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  const categories = [
    "All",
    "T-Shirts",
    "Hoodies",
    "Sweatshirts",
    "Polos",
    "Workwear",
    "Hi-Vis",
  ];

  const categoryMap = {
    "T-Shirts": ["T-Shirt"],
    Hoodies: ["Hood"],
    Sweatshirts: ["Sweatshirt"],
    Polos: ["Polo"],
    Workwear: [
      "Jacket",
      "Gilet",
      "Soft Shell Jacket",
      "Trousers",
    ],
    "Hi-Vis": [
      "Gilet",
      "Jacket",
    ],
  };

  const getVariantImage = (variant) => {
    if (!variant) return null;

    if (variant.image) {
      return variant.image;
    }

    if (variant.image_url) {
      return variant.image_url;
    }

    if (
      Array.isArray(variant.images) &&
      variant.images.length > 0
    ) {
      return variant.images[0];
    }

    if (
      typeof variant.images === "string" &&
      variant.images.trim()
    ) {
      try {
        const parsedImages = JSON.parse(variant.images);

        if (
          Array.isArray(parsedImages) &&
          parsedImages.length > 0
        ) {
          return parsedImages[0];
        }
      } catch {
        return variant.images;
      }
    }

    return null;
  };

  const getProductFallbackImage = (product) => {
    if (product.image) {
      return product.image;
    }

    if (product.image_url) {
      return product.image_url;
    }

    if (
      Array.isArray(product.images) &&
      product.images.length > 0
    ) {
      return product.images[0];
    }

    if (
      typeof product.images === "string" &&
      product.images.trim()
    ) {
      try {
        const parsedImages = JSON.parse(product.images);

        if (
          Array.isArray(parsedImages) &&
          parsedImages.length > 0
        ) {
          return parsedImages[0];
        }
      } catch {
        return product.images;
      }
    }

    return "/images/logo.jpg";
  };

  const getStableIndex = (product, length) => {
    if (!length) return 0;

    const source =
      product.id ??
      product.sku ??
      product.title ??
      product.name ??
      "product";

    const value = String(source)
      .split("")
      .reduce(
        (total, character) =>
          total + character.charCodeAt(0),
        0
      );

    return value % length;
  };

  const prepareProductForDisplay = (product) => {
    let variants = product.variants;

    if (
      typeof variants === "string" &&
      variants.trim()
    ) {
      try {
        variants = JSON.parse(variants);
      } catch {
        variants = [];
      }
    }

    if (!Array.isArray(variants)) {
      variants = [];
    }

    const variantsWithImages = variants.filter(
      (variant) => Boolean(getVariantImage(variant))
    );

    let displayImage = null;
    let displayVariant = null;

    if (variantsWithImages.length > 0) {
      const index = getStableIndex(
        product,
        variantsWithImages.length
      );

      displayVariant = variantsWithImages[index];
      displayImage = getVariantImage(displayVariant);
    }

    if (!displayImage) {
      displayImage = getProductFallbackImage(product);
    }

    return {
      ...product,

      // These extra fields can be used by ProductCard.
      displayImage,
      displayVariant,

      // This allows ProductCard code that already checks
      // image or image_url to also use the colourful image.
      image: displayImage,
      image_url: displayImage,
    };
  };

  const preparedProducts = useMemo(() => {
    return products.map(prepareProductForDisplay);
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (category === "All") {
      return preparedProducts;
    }

    const allowedCategories = categoryMap[category] || [];

    return preparedProducts.filter((product) =>
      allowedCategories.includes(product.category)
    );
  }, [category, preparedProducts]);

  if (loading) {
    return (
      <div
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 20px",
          fontSize: "20px",
          textAlign: "center",
        }}
      >
        Loading products...
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            marginBottom: "15px",
          }}
        >
          Something went wrong
        </h2>

        <p
          style={{
            color: "#555",
            maxWidth: "500px",
          }}
        >
          {error}
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#f8f9fa",
        minHeight: "100vh",
        paddingBottom: "80px",
      }}
    >
      {/* HERO */}
      <section
        style={{
          background: "#111",
          color: "#fff",
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontWeight: "700",
              fontSize: "0.85rem",
              marginBottom: "15px",
            }}
          >
            Customise & Order Online
          </p>

          <h1
            style={{
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              lineHeight: "1.15",
              marginBottom: "20px",
            }}
          >
            Custom Clothing Shop
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "#e5e5e5",
              maxWidth: "720px",
              margin: "0 auto",
            }}
          >
            Shop personalised t-shirts, hoodies,
            polos, workwear and branded clothing from
            Kett Press Co. Choose your garment, select
            your colour and size, upload your artwork
            and order online.
          </p>
        </div>
      </section>

      {/* TRUST BAR */}
      <section
        style={{
          background: "#fff",
          borderBottom: "1px solid #eee",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "22px 20px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "16px",
            textAlign: "center",
            fontWeight: "700",
          }}
        >
          <div>✓ Custom Printing</div>
          <div>✓ Multiple Colours</div>
          <div>✓ Artwork Upload</div>
          <div>✓ Secure Card Payment</div>
        </div>
      </section>

      {/* SHOP CONTENT */}
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              marginBottom: "15px",
            }}
          >
            Browse Our Products
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.8",
              color: "#555",
              maxWidth: "680px",
              margin: "0 auto",
            }}
          >
            Explore our garment range and find the
            right product for your business, team,
            event or personal design.
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "50px",
          }}
        >
          {categories.map((item) => {
            const active = category === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                style={{
                  padding: "12px 22px",
                  borderRadius: "30px",
                  border: active
                    ? "1px solid #111"
                    : "1px solid #ddd",
                  cursor: "pointer",
                  background: active
                    ? "#111"
                    : "#fff",
                  color: active
                    ? "#fff"
                    : "#111",
                  fontWeight: "700",
                  transition: "all 0.2s ease",
                }}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* PRODUCT COUNT */}
        <div
          style={{
            marginBottom: "25px",
            color: "#555",
            fontSize: "0.95rem",
          }}
        >
          Showing {filteredProducts.length}{" "}
          {filteredProducts.length === 1
            ? "product"
            : "products"}
        </div>

        {/* PRODUCT GRID */}
        {filteredProducts.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "30px",
              alignItems: "stretch",
            }}
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div
            style={{
              background: "#fff",
              padding: "50px 20px",
              borderRadius: "16px",
              textAlign: "center",
              boxShadow:
                "0 5px 20px rgba(0,0,0,0.05)",
            }}
          >
            <h3>No products found</h3>

            <p
              style={{
                color: "#555",
              }}
            >
              There are currently no products available
              in this category.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}