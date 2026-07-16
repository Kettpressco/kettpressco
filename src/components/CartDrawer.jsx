import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartDrawer({ open, setOpen }) {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    subtotal,
    discount,
    total,
  } = useCart();

  if (!open) {
    return null;
  }

  const getSelectedOptions = (options = {}) => {
    const selected = [];

    if (options.backPrint) {
      selected.push("Back Print");
    }

    if (options.sleevePrint) {
      selected.push("Sleeve Print");
    }

    if (options.oversizedPrint) {
      selected.push("Oversized Print");
    }

    if (options.artworkEdit) {
      selected.push("Artwork Edit");
    }

    if (options.newArtwork) {
      selected.push("New Artwork Design");
    }

    return selected;
  };

  return (
    <>
      {/* OVERLAY */}

      <div
        onClick={() => setOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(3,7,18,0.6)",
          backdropFilter: "blur(2px)",
          zIndex: 9998,
        }}
      />

      {/* DRAWER */}

      <aside
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "430px",
          maxWidth: "100%",
          height: "100vh",
          background: "#fff",
          boxShadow: "-15px 0 45px rgba(15,23,42,0.25)",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* HEADER */}

        <div
          style={{
            padding: "20px",
            borderBottom: "1px solid #e5e7eb",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#fff",
          }}
        >
          <div>
            <h2
              style={{
                margin: 0,
                fontSize: "24px",
                color: "#111827",
              }}
            >
              Your Cart
            </h2>

            <p
              style={{
                margin: "4px 0 0",
                color: "#6b7280",
                fontSize: "13px",
              }}
            >
              {cart.length === 0
                ? "No items added yet"
                : `${cart.length} ${
                    cart.length === 1 ? "item" : "items"
                  } in your cart`}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close cart"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#f3f4f6",
              border: "none",
              fontSize: "18px",
              cursor: "pointer",
              color: "#111827",
            }}
          >
            ✕
          </button>
        </div>

        {/* CART CONTENT */}

        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "20px",
            background: "#f8fafc",
          }}
        >
          {cart.length === 0 ? (
            <div
              style={{
                minHeight: "60%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "30px 20px",
              }}
            >
              <div
                style={{
                  fontSize: "50px",
                  marginBottom: "15px",
                }}
              >
                🛒
              </div>

              <h3
                style={{
                  margin: "0 0 10px",
                  color: "#111827",
                  fontSize: "22px",
                }}
              >
                Your cart is empty
              </h3>

              <p
                style={{
                  color: "#6b7280",
                  lineHeight: "1.7",
                  maxWidth: "280px",
                  marginBottom: "24px",
                }}
              >
                Browse our custom clothing range and start building your order.
              </p>

              <Link
                to="/shop"
                onClick={() => setOpen(false)}
                style={{
                  display: "inline-block",
                  background: "#f97316",
                  color: "#fff",
                  textDecoration: "none",
                  padding: "14px 22px",
                  borderRadius: "9px",
                  fontWeight: "800",
                }}
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gap: "16px",
              }}
            >
              {cart.map((item, index) => {
                const selectedOptions = getSelectedOptions(item.options);

                const itemName =
                  item.name ||
                  item.product?.name ||
                  item.product?.title ||
                  "Custom Product";

                const itemImage =
                  item.image ||
                  item.product?.image ||
                  item.product?.image_url ||
                  "/images/placeholder.jpg";

                const unitPrice = Number(item.price || 0);

                const itemQuantity = Number(item.quantity || 1);

                const lineTotal =
                  unitPrice * itemQuantity;

                return (
                  <div
                    key={`${item.id}-${item.size}-${item.colour}-${index}`}
                    style={{
                      background: "#fff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "16px",
                      padding: "15px",
                      boxShadow: "0 5px 18px rgba(15,23,42,0.04)",
                    }}
                  >
                    {/* PRODUCT TOP */}

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "90px 1fr",
                        gap: "14px",
                      }}
                    >
                      <div
                        style={{
                          width: "90px",
                          height: "100px",
                          background: "#f8fafc",
                          borderRadius: "10px",
                          overflow: "hidden",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={itemImage}
                          alt={itemName}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            padding: "5px",
                            boxSizing: "border-box",
                          }}
                        />
                      </div>

                      <div>
                        <strong
                          style={{
                            display: "block",
                            color: "#111827",
                            fontSize: "15px",
                            lineHeight: "1.4",
                            marginBottom: "7px",
                          }}
                        >
                          {itemName}
                        </strong>

                        <div
                          style={{
                            color: "#6b7280",
                            fontSize: "13px",
                            lineHeight: "1.6",
                          }}
                        >
                          {item.size && (
                            <div>
                              Size:{" "}
                              <strong
                                style={{
                                  color: "#374151",
                                }}
                              >
                                {item.size}
                              </strong>
                            </div>
                          )}

                          {item.colour && (
                            <div>
                              Colour:{" "}
                              <strong
                                style={{
                                  color: "#374151",
                                }}
                              >
                                {item.colour}
                              </strong>
                            </div>
                          )}
                        </div>

                        <div
                          style={{
                            marginTop: "8px",
                            fontSize: "15px",
                            fontWeight: "800",
                            color: "#111827",
                          }}
                        >
                          £{unitPrice.toFixed(2)} each
                        </div>
                      </div>
                    </div>

                    {/* PRINT OPTIONS */}

                    {selectedOptions.length > 0 && (
                      <div
                        style={{
                          marginTop: "14px",
                          padding: "12px",
                          borderRadius: "9px",
                          background: "#fff7ed",
                          border: "1px solid #fed7aa",
                        }}
                      >
                        <div
                          style={{
                            color: "#9a3412",
                            fontSize: "12px",
                            fontWeight: "800",
                            marginBottom: "5px",
                          }}
                        >
                          Selected Extras
                        </div>

                        <div
                          style={{
                            color: "#7c2d12",
                            fontSize: "12px",
                            lineHeight: "1.7",
                          }}
                        >
                          {selectedOptions.map((option) => (
                            <div key={option}>✓ {option}</div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* ARTWORK STATUS */}

                    <div
                      style={{
                        marginTop: "12px",
                        fontSize: "12px",
                        fontWeight: "700",
                        color: item.artworkUrl
                          ? "#15803d"
                          : "#6b7280",
                      }}
                    >
                      {item.artworkUrl
                        ? "✓ Artwork attached"
                        : "Artwork not uploaded"}
                    </div>

                    {/* QUANTITY AND TOTAL */}

                    <div
                      style={{
                        marginTop: "15px",
                        paddingTop: "14px",
                        borderTop: "1px solid #e5e7eb",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "12px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          border: "1px solid #d1d5db",
                          borderRadius: "8px",
                          overflow: "hidden",
                        }}
                      >
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.size,
                              item.colour,
                              Math.max(1, itemQuantity - 1)
                            )
                          }
                          disabled={itemQuantity <= 1}
                          style={{
                            width: "36px",
                            height: "36px",
                            border: "none",
                            background: "#f8fafc",
                            cursor:
                              itemQuantity <= 1
                                ? "not-allowed"
                                : "pointer",
                            fontSize: "18px",
                          }}
                        >
                          −
                        </button>

                        <strong
                          style={{
                            minWidth: "38px",
                            textAlign: "center",
                            color: "#111827",
                          }}
                        >
                          {itemQuantity}
                        </strong>

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.size,
                              item.colour,
                              itemQuantity + 1
                            )
                          }
                          style={{
                            width: "36px",
                            height: "36px",
                            border: "none",
                            background: "#f8fafc",
                            cursor: "pointer",
                            fontSize: "18px",
                          }}
                        >
                          +
                        </button>
                      </div>

                      <div
                        style={{
                          textAlign: "right",
                        }}
                      >
                        <div
                          style={{
                            color: "#6b7280",
                            fontSize: "11px",
                          }}
                        >
                          Item total
                        </div>

                        <strong
                          style={{
                            fontSize: "18px",
                            color: "#111827",
                          }}
                        >
                          £{lineTotal.toFixed(2)}
                        </strong>
                      </div>
                    </div>

                    {/* REMOVE */}

                    <button
                      type="button"
                      onClick={() =>
                        removeFromCart(
                          item.id,
                          item.size,
                          item.colour
                        )
                      }
                      style={{
                        marginTop: "12px",
                        padding: 0,
                        border: "none",
                        background: "transparent",
                        color: "#dc2626",
                        fontSize: "12px",
                        fontWeight: "700",
                        cursor: "pointer",
                      }}
                    >
                      Remove item
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* FOOTER */}

        {cart.length > 0 && (
          <div
            style={{
              padding: "20px",
              borderTop: "1px solid #e5e7eb",
              background: "#fff",
              boxShadow: "0 -8px 25px rgba(15,23,42,0.05)",
            }}
          >
            {/* TOTAL BREAKDOWN */}

            <div
              style={{
                display: "grid",
                gap: "9px",
                marginBottom: "15px",
              }}
            >
              <div style={summaryRow}>
                <span>Subtotal</span>

                <strong>
                  £{Number(subtotal || 0).toFixed(2)}
                </strong>
              </div>

              {Number(discount || 0) > 0 && (
                <div
                  style={{
                    ...summaryRow,
                    color: "#15803d",
                  }}
                >
                  <span>Bulk discount</span>

                  <strong>
                    −£{Number(discount || 0).toFixed(2)}
                  </strong>
                </div>
              )}
            </div>

            <div
              style={{
                borderTop: "1px solid #e5e7eb",
                paddingTop: "15px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "18px",
              }}
            >
              <span
                style={{
                  fontSize: "17px",
                  fontWeight: "800",
                  color: "#111827",
                }}
              >
                Total
              </span>

              <strong
                style={{
                  fontSize: "25px",
                  color: "#111827",
                }}
              >
                £{Number(total || 0).toFixed(2)}
              </strong>
            </div>

            {/* CHECKOUT */}

            <Link
              to="/checkout"
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                textAlign: "center",
                padding: "16px",
                background: "#f97316",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "10px",
                fontWeight: "900",
                fontSize: "17px",
              }}
            >
              Secure Checkout
            </Link>

            <button
              type="button"
              onClick={() => setOpen(false)}
              style={{
                width: "100%",
                marginTop: "10px",
                padding: "11px",
                background: "transparent",
                color: "#4b5563",
                border: "none",
                cursor: "pointer",
                fontWeight: "700",
              }}
            >
              Continue Shopping
            </button>

            {/* TRUST */}

            <div
              style={{
                marginTop: "14px",
                textAlign: "center",
                color: "#6b7280",
                fontSize: "11px",
                lineHeight: "1.6",
              }}
            >
              🔒 Secure card payment
              <br />
              Your artwork and customisation options stay attached to your
              order.
            </div>
          </div>
        )}
      </aside>
    </>
  );
}

const summaryRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#4b5563",
  fontSize: "14px",
};