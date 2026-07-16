import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import ProductCard from "../components/ProductCard";
import { supabase } from "../lib/supabase";

export default function Shop() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [category, setCategory] =
    useState("All");

  const [search, setSearch] =
    useState("");

  const [error, setError] =
    useState("");

  /*
  ----------------------------------------
  LOAD PRODUCTS
  ----------------------------------------
  */

  useEffect(() => {
    let isMounted = true;

    async function loadProducts() {
      try {
        setLoading(true);

        setError("");

        const {
          data,
          error,
        } = await supabase
          .from("products")
          .select("*")
          .limit(100);

        if (error) {
          throw error;
        }

        if (!isMounted) {
          return;
        }

        setProducts(
          data || []
        );
      } catch (err) {
        console.error(
          "SHOP PRODUCTS ERROR:",
          err
        );

        if (isMounted) {
          setError(
            "Unable to load products at the moment."
          );
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

  /*
  ----------------------------------------
  SHOP CATEGORIES
  ----------------------------------------
  */

  const categories = [
    "All",
    "T-Shirts",
    "Hoodies",
    "Sweatshirts",
    "Polos",
    "Workwear",
    "Hi-Vis",
  ];

  /*
  Your Supabase product category values
  appear to be more specific than the
  customer-facing filters.

  This maps friendly shop categories
  to your database categories.
  */

  const categoryMap = {
    "T-Shirts": [
      "T-Shirt",
      "T-Shirts",
    ],

    Hoodies: [
      "Hood",
      "Hoodie",
      "Hoodies",
    ],

    Sweatshirts: [
      "Sweatshirt",
      "Sweatshirts",
    ],

    Polos: [
      "Polo",
      "Polos",
      "Polo Shirt",
    ],

    Workwear: [
      "Jacket",
      "Gilet",
      "Soft Shell Jacket",
      "Softshell Jacket",
      "Trousers",
      "Workwear",
      "Polo",
    ],

    "Hi-Vis": [
      "Hi-Vis",
      "Hi Vis",
      "Gilet",
      "Jacket",
    ],
  };

  /*
  ----------------------------------------
  GET IMAGE FROM IMAGES FIELD
  ----------------------------------------
  */

  const getImageFromImages = (
    images
  ) => {
    if (!images) {
      return null;
    }

    /*
    Images stored as object:
    {
      front,
      model,
      side,
      back,
      detail
    }
    */

    if (
      typeof images ===
        "object" &&
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

    /*
    Images stored as array
    */

    if (
      Array.isArray(images) &&
      images.length > 0
    ) {
      return images[0];
    }

    /*
    Images stored as JSON string
    */

    if (
      typeof images ===
        "string" &&
      images.trim()
    ) {
      try {
        const parsed =
          JSON.parse(images);

        return getImageFromImages(
          parsed
        );
      } catch {
        /*
        The value may simply
        be a direct image URL.
        */

        return images;
      }
    }

    return null;
  };

  /*
  ----------------------------------------
  VARIANT IMAGE
  ----------------------------------------
  */

  const getVariantImage = (
    variant
  ) => {
    if (!variant) {
      return null;
    }

    return (
      getImageFromImages(
        variant.images
      ) ||
      variant.image ||
      variant.image_url ||
      null
    );
  };

  /*
  ----------------------------------------
  PRODUCT FALLBACK IMAGE
  ----------------------------------------
  */

  const getProductFallbackImage = (
    product
  ) => {
    return (
      getImageFromImages(
        product.images
      ) ||
      product.image ||
      product.image_url ||
      "/images/placeholder.jpg"
    );
  };

  /*
  ----------------------------------------
  STABLE PRODUCT COLOUR IMAGE
  ----------------------------------------

  This gives different products
  different colour variants instead
  of every product always displaying
  the first colour.
  */

  const getStableIndex = (
    product,
    length
  ) => {
    if (!length) {
      return 0;
    }

    const source =
      product.id ??
      product.sku ??
      product.title ??
      product.name ??
      "product";

    const value = String(
      source
    )
      .split("")
      .reduce(
        (
          total,
          character
        ) =>
          total +
          character.charCodeAt(
            0
          ),

        0
      );

    return (
      value % length
    );
  };

  /*
  ----------------------------------------
  PREPARE PRODUCT
  ----------------------------------------
  */

  const prepareProductForDisplay = (
    product
  ) => {
    let variants =
      product.variants;

    /*
    Parse Supabase JSON string
    if required.
    */

    if (
      typeof variants ===
        "string" &&
      variants.trim()
    ) {
      try {
        variants =
          JSON.parse(
            variants
          );
      } catch {
        variants = [];
      }
    }

    if (
      !Array.isArray(
        variants
      )
    ) {
      variants = [];
    }

    /*
    Only use variants that
    actually have images.
    */

    const variantsWithImages =
      variants.filter(
        (variant) =>
          Boolean(
            getVariantImage(
              variant
            )
          )
      );

    let displayImage =
      null;

    let displayVariant =
      null;

    if (
      variantsWithImages.length >
      0
    ) {
      const index =
        getStableIndex(
          product,
          variantsWithImages.length
        );

      displayVariant =
        variantsWithImages[
          index
        ];

      displayImage =
        getVariantImage(
          displayVariant
        );
    }

    /*
    Fall back to main product image
    */

    if (!displayImage) {
      displayImage =
        getProductFallbackImage(
          product
        );
    }

    return {
      ...product,

      variants,

      displayImage,

      displayVariant,

      /*
      ProductCard may already look
      for these fields.
      */

      image:
        displayImage,

      image_url:
        displayImage,
    };
  };

  /*
  ----------------------------------------
  PREPARED PRODUCTS
  ----------------------------------------
  */

  const preparedProducts =
    useMemo(() => {
      return products.map(
        prepareProductForDisplay
      );
    }, [products]);

  /*
  ----------------------------------------
  FILTER PRODUCTS
  ----------------------------------------
  */

  const filteredProducts =
    useMemo(() => {
      let result =
        preparedProducts;

      /*
      CATEGORY FILTER
      */

      if (
        category !== "All"
      ) {
        const allowedCategories =
          categoryMap[
            category
          ] || [];

        result =
          result.filter(
            (product) => {
              const productCategory =
                String(
                  product.category ||
                    ""
                );

              return allowedCategories.some(
                (
                  allowed
                ) =>
                  productCategory
                    .toLowerCase()
                    .includes(
                      allowed.toLowerCase()
                    )
              );
            }
          );
      }

      /*
      SEARCH FILTER
      */

      const searchValue =
        search
          .trim()
          .toLowerCase();

      if (searchValue) {
        result =
          result.filter(
            (product) => {
              const searchable =
                [
                  product.name,
                  product.title,
                  product.category,
                  product.brand,
                  product.sku,
                  product.material,
                ]
                  .filter(
                    Boolean
                  )
                  .join(" ")
                  .toLowerCase();

              return searchable.includes(
                searchValue
              );
            }
          );
      }

      return result;
    }, [
      category,
      search,
      preparedProducts,
    ]);

  /*
  ----------------------------------------
  RESET FILTERS
  ----------------------------------------
  */

  const clearFilters = () => {
    setCategory("All");

    setSearch("");
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
          minHeight:
            "70vh",

          display:
            "flex",

          flexDirection:
            "column",

          alignItems:
            "center",

          justifyContent:
            "center",

          padding:
            "80px 20px",

          background:
            "#f8fafc",
        }}
      >
        <div
          style={{
            width: "45px",
            height: "45px",

            border:
              "4px solid #e5e7eb",

            borderTop:
              "4px solid #f97316",

            borderRadius:
              "50%",

            marginBottom:
              "20px",
          }}
        />

        <h2
          style={{
            color:
              "#111827",

            marginBottom:
              "8px",
          }}
        >
          Loading Products
        </h2>

        <p
          style={{
            color:
              "#6b7280",
          }}
        >
          Preparing our custom
          clothing range...
        </p>
      </div>
    );
  }

  /*
  ----------------------------------------
  ERROR
  ----------------------------------------
  */

  if (error) {
    return (
      <div
        style={{
          minHeight:
            "70vh",

          display:
            "flex",

          flexDirection:
            "column",

          alignItems:
            "center",

          justifyContent:
            "center",

          padding:
            "80px 20px",

          textAlign:
            "center",

          background:
            "#f8fafc",
        }}
      >
        <h2
          style={{
            fontSize:
              "32px",

            marginBottom:
              "15px",

            color:
              "#111827",
          }}
        >
          Something went wrong
        </h2>

        <p
          style={{
            color:
              "#6b7280",

            maxWidth:
              "500px",

            lineHeight:
              "1.7",
          }}
        >
          {error}
        </p>

        <button
          type="button"
          onClick={() =>
            window.location.reload()
          }
          style={{
            marginTop:
              "20px",

            background:
              "#f97316",

            color:
              "#fff",

            border:
              "none",

            padding:
              "14px 24px",

            borderRadius:
              "9px",

            fontWeight:
              "800",

            cursor:
              "pointer",
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  /*
  ----------------------------------------
  SHOP
  ----------------------------------------
  */

  return (
    <div
      style={{
        background:
          "#f8fafc",

        minHeight:
          "100vh",
      }}
    >
      {/* ======================================
          HERO
      ====================================== */}

      <section
        style={{
          background:
            "linear-gradient(115deg, #030712 0%, #111827 65%, #1f2937 100%)",

          color: "#fff",

          padding:
            "75px 20px",
        }}
      >
        <div
          style={{
            maxWidth:
              "1000px",

            margin:
              "0 auto",

            textAlign:
              "center",
          }}
        >
          <div
            style={{
              display:
                "inline-block",

              background:
                "rgba(249,115,22,0.15)",

              border:
                "1px solid rgba(249,115,22,0.4)",

              color:
                "#fed7aa",

              padding:
                "8px 15px",

              borderRadius:
                "999px",

              fontWeight:
                "800",

              fontSize:
                "13px",

              letterSpacing:
                "1.5px",

              marginBottom:
                "22px",
            }}
          >
            CUSTOMISE & ORDER
            ONLINE
          </div>

          <h1
            style={{
              fontSize:
                "clamp(40px, 7vw, 68px)",

              lineHeight:
                "1.08",

              letterSpacing:
                "-2px",

              margin:
                "0 0 22px",
            }}
          >
            Find Your Garment.
            <span
              style={{
                color:
                  "#fb923c",
              }}
            >
              {" "}
              Make It Yours.
            </span>
          </h1>

          <p
            style={{
              fontSize:
                "clamp(17px, 2vw, 20px)",

              lineHeight:
                "1.8",

              color:
                "#d1d5db",

              maxWidth:
                "750px",

              margin:
                "0 auto 30px",
            }}
          >
            Choose your T-shirt,
            hoodie, polo or
            workwear. Select your
            size and colour, add
            your printing options,
            upload your artwork
            and order securely
            online.
          </p>

          {/* SEARCH */}

          <div
            style={{
              maxWidth:
                "650px",

              margin:
                "0 auto",

              position:
                "relative",
            }}
          >
            <input
              type="search"
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              placeholder="Search T-shirts, hoodies, polos, workwear..."
              aria-label="Search products"
              style={{
                width:
                  "100%",

                boxSizing:
                  "border-box",

                padding:
                  "17px 20px",

                paddingRight:
                  "50px",

                borderRadius:
                  "12px",

                border:
                  "1px solid #374151",

                outline:
                  "none",

                fontSize:
                  "16px",

                background:
                  "#fff",

                color:
                  "#111827",
              }}
            />

            <span
              style={{
                position:
                  "absolute",

                right:
                  "18px",

                top:
                  "50%",

                transform:
                  "translateY(-50%)",

                fontSize:
                  "20px",

                pointerEvents:
                  "none",
              }}
            >
              🔎
            </span>
          </div>
        </div>
      </section>

      {/* ======================================
          TRUST BAR
      ====================================== */}

      <section
        style={{
          background:
            "#fff",

          borderBottom:
            "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            maxWidth:
              "1200px",

            margin:
              "0 auto",

            padding:
              "22px 20px",

            display:
              "grid",

            gridTemplateColumns:
              "repeat(auto-fit, minmax(180px, 1fr))",

            gap:
              "18px",

            textAlign:
              "center",

            color:
              "#374151",

            fontWeight:
              "700",

            fontSize:
              "14px",
          }}
        >
          <div>
            ✓ Front Print
            Included
          </div>

          <div>
            🎨 Upload Your
            Artwork
          </div>

          <div>
            🔒 Secure Card
            Payment
          </div>

          <div>
            🇬🇧 UK Delivery
          </div>
        </div>
      </section>

      {/* ======================================
          SHOP CONTENT
      ====================================== */}

      <main
        style={{
          maxWidth:
            "1250px",

          margin:
            "0 auto",

          padding:
            "60px 20px 90px",
        }}
      >
        {/* HEADER */}

        <div
          style={{
            textAlign:
              "center",

            maxWidth:
              "750px",

            margin:
              "0 auto 35px",
          }}
        >
          <span
            style={{
              color:
                "#ea580c",

              fontSize:
                "13px",

              fontWeight:
                "900",

              letterSpacing:
                "1.5px",
            }}
          >
            SHOP CUSTOM CLOTHING
          </span>

          <h2
            style={{
              fontSize:
                "clamp(30px, 5vw, 46px)",

              color:
                "#111827",

              margin:
                "12px 0 15px",

              letterSpacing:
                "-1px",
            }}
          >
            Choose Your Product
          </h2>

          <p
            style={{
              color:
                "#6b7280",

              fontSize:
                "17px",

              lineHeight:
                "1.8",

              margin:
                "0 auto",
            }}
          >
            Browse the range below
            and select a product to
            customise with your
            colours, printing and
            artwork.
          </p>
        </div>

        {/* ======================================
            CATEGORY FILTERS
        ====================================== */}

        <div
          style={{
            display:
              "flex",

            justifyContent:
              "center",

            gap:
              "10px",

            flexWrap:
              "wrap",

            marginBottom:
              "35px",
          }}
        >
          {categories.map(
            (item) => {
              const active =
                category ===
                item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    setCategory(
                      item
                    )
                  }
                  style={{
                    padding:
                      "12px 20px",

                    borderRadius:
                      "999px",

                    border:
                      active
                        ? "2px solid #111827"
                        : "1px solid #d1d5db",

                    cursor:
                      "pointer",

                    background:
                      active
                        ? "#111827"
                        : "#fff",

                    color:
                      active
                        ? "#fff"
                        : "#374151",

                    fontWeight:
                      "800",

                    fontSize:
                      "14px",
                  }}
                >
                  {item}
                </button>
              );
            }
          )}
        </div>

        {/* ======================================
            RESULTS BAR
        ====================================== */}

        <div
          style={{
            display:
              "flex",

            justifyContent:
              "space-between",

            alignItems:
              "center",

            flexWrap:
              "wrap",

            gap:
              "15px",

            marginBottom:
              "28px",

            paddingBottom:
              "18px",

            borderBottom:
              "1px solid #e5e7eb",
          }}
        >
          <div
            style={{
              color:
                "#4b5563",

              fontSize:
                "14px",
            }}
          >
            Showing{" "}
            <strong
              style={{
                color:
                  "#111827",
              }}
            >
              {
                filteredProducts.length
              }
            </strong>{" "}
            {filteredProducts.length ===
            1
              ? "product"
              : "products"}

            {category !==
              "All" && (
              <>
                {" "}
                in{" "}
                <strong>
                  {category}
                </strong>
              </>
            )}
          </div>

          {(search ||
            category !==
              "All") && (
            <button
              type="button"
              onClick={
                clearFilters
              }
              style={{
                background:
                  "transparent",

                border:
                  "none",

                color:
                  "#ea580c",

                fontWeight:
                  "800",

                cursor:
                  "pointer",

                fontSize:
                  "14px",
              }}
            >
              Clear filters
            </button>
          )}
        </div>

        {/* ======================================
            PRODUCT GRID
        ====================================== */}

        {filteredProducts.length >
        0 ? (
          <div
            style={{
              display:
                "grid",

              gridTemplateColumns:
                "repeat(auto-fill, minmax(260px, 1fr))",

              gap:
                "28px",

              alignItems:
                "stretch",
            }}
          >
            {filteredProducts.map(
              (
                product
              ) => (
                <ProductCard
                  key={
                    product.id
                  }
                  product={
                    product
                  }
                />
              )
            )}
          </div>
        ) : (
          /*
          ----------------------------------------
          NO RESULTS
          ----------------------------------------
          */

          <div
            style={{
              background:
                "#fff",

              padding:
                "60px 25px",

              borderRadius:
                "18px",

              textAlign:
                "center",

              border:
                "1px solid #e5e7eb",

              boxShadow:
                "0 8px 30px rgba(15,23,42,0.05)",
            }}
          >
            <div
              style={{
                fontSize:
                  "45px",

                marginBottom:
                  "15px",
              }}
            >
              👕
            </div>

            <h3
              style={{
                fontSize:
                  "25px",

                color:
                  "#111827",

                marginBottom:
                  "10px",
              }}
            >
              No Products Found
            </h3>

            <p
              style={{
                color:
                  "#6b7280",

                lineHeight:
                  "1.7",

                maxWidth:
                  "500px",

                margin:
                  "0 auto 22px",
              }}
            >
              We couldn't find a
              product matching your
              current search or
              category.
            </p>

            <button
              type="button"
              onClick={
                clearFilters
              }
              style={{
                background:
                  "#f97316",

                color:
                  "#fff",

                border:
                  "none",

                padding:
                  "14px 25px",

                borderRadius:
                  "9px",

                cursor:
                  "pointer",

                fontWeight:
                  "800",
              }}
            >
              View All Products
            </button>
          </div>
        )}

        {/* ======================================
            HELP CTA
        ====================================== */}

        <section
          style={{
            marginTop:
              "80px",

            background:
              "#111827",

            color:
              "#fff",

            borderRadius:
              "22px",

            padding:
              "50px 25px",

            textAlign:
              "center",
          }}
        >
          <div
            style={{
              maxWidth:
                "700px",

              margin:
                "0 auto",
            }}
          >
            <h2
              style={{
                fontSize:
                  "clamp(28px, 4vw, 40px)",

                margin:
                  "0 0 15px",
              }}
            >
              Can't Find What
              You're Looking For?
            </h2>

            <p
              style={{
                color:
                  "#d1d5db",

                lineHeight:
                  "1.8",

                fontSize:
                  "16px",

                marginBottom:
                  "28px",
              }}
            >
              Tell us what garment
              or printing you need.
              We can help with custom
              T-shirts, workwear,
              hoodies, polos and
              larger business or
              event orders.
            </p>

            <div
              style={{
                display:
                  "flex",

                justifyContent:
                  "center",

                flexWrap:
                  "wrap",

                gap:
                  "12px",
              }}
            >
              <a
                href="/#quote"
                style={{
                  display:
                    "inline-block",

                  background:
                    "#f97316",

                  color:
                    "#fff",

                  padding:
                    "14px 24px",

                  borderRadius:
                    "9px",

                  textDecoration:
                    "none",

                  fontWeight:
                    "800",
                }}
              >
                Request A Quote
              </a>

              <a
                href="https://wa.me/447770118148"
                target="_blank"
                rel="noreferrer"
                style={{
                  display:
                    "inline-block",

                  background:
                    "#16a34a",

                  color:
                    "#fff",

                  padding:
                    "14px 24px",

                  borderRadius:
                    "9px",

                  textDecoration:
                    "none",

                  fontWeight:
                    "800",
                }}
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}