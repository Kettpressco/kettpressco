import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";

const ADMIN_EMAIL = "info@kettpressco.com";

const ORDER_STATUSES = [
  { value: "pending", label: "Pending" },
  { value: "artwork_review", label: "Artwork Review" },
  { value: "awaiting_approval", label: "Awaiting Approval" },
  { value: "printing", label: "Printing" },
  { value: "quality_check", label: "Quality Check" },
  { value: "ready_for_collection", label: "Ready for Collection" },
  { value: "shipped", label: "Shipped" },
  { value: "completed", label: "Completed" },
  { value: "cancelled", label: "Cancelled" },
];

const PAYMENT_STATUSES = [
  { value: "pending", label: "Pending" },
  { value: "paid", label: "Paid" },
  { value: "failed", label: "Failed" },
  { value: "refunded", label: "Refunded" },
  { value: "partially_refunded", label: "Partially Refunded" },
];

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "13px 14px",
  border: "1px solid #d7d7d7",
  borderRadius: "10px",
  fontSize: "15px",
  background: "#fff",
};

const labelStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  fontWeight: "700",
  color: "#222",
};

const cardStyle = {
  background: "#fff",
  borderRadius: "16px",
  padding: "24px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
};

const formatMoney = (amount, currency = "gbp") => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: String(currency || "gbp").toUpperCase(),
  }).format(Number(amount || 0));
};

const formatDate = (date) => {
  if (!date) return "—";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "—";
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(parsedDate);
};

const getAddressText = (address) => {
  if (!address) return "No shipping address saved.";

  if (typeof address === "string") {
    return address;
  }

  const parts = [
    address.line1,
    address.line2,
    address.city,
    address.county,
    address.postal_code || address.postcode,
    address.country,
  ].filter(Boolean);

  return parts.length > 0
    ? parts.join(", ")
    : "No shipping address saved.";
};

const getItemName = (item) => {
  return (
    item?.name ||
    item?.title ||
    item?.product_name ||
    item?.product?.title ||
    "Product"
  );
};

const getItemPrice = (item) => {
  return Number(
    item?.unit_price ??
      item?.unitPrice ??
      item?.price ??
      item?.product?.price ??
      0
  );
};

const getItemQuantity = (item) => {
  return Number(item?.quantity || 1);
};

const getArtworkUrls = (order) => {
  const urls = [];

  if (Array.isArray(order?.artwork_urls)) {
    urls.push(...order.artwork_urls);
  }

  if (Array.isArray(order?.items)) {
    order.items.forEach((item) => {
      const possibleUrls = [
        item?.artworkUrl,
        item?.artwork_url,
        item?.artwork,
      ];

      possibleUrls.forEach((url) => {
        if (typeof url === "string" && url.trim()) {
          urls.push(url);
        }
      });
    });
  }

  return [...new Set(urls.filter(Boolean))];
};

export default function OrderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);

  const [orderStatus, setOrderStatus] = useState("pending");
  const [paymentStatus, setPaymentStatus] = useState("pending");
  const [adminNotes, setAdminNotes] = useState("");
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingProvider, setTrackingProvider] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const loadOrder = async () => {
      setLoading(true);
      setError("");

      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError) {
        setError(sessionError.message);
        setLoading(false);
        return;
      }

      if (!session) {
        navigate("/admin");
        return;
      }

      if (session.user.email !== ADMIN_EMAIL) {
        await supabase.auth.signOut();
        navigate("/admin");
        return;
      }

      const { data, error: orderError } = await supabase
        .from("orders")
        .select("*")
        .eq("id", id)
        .single();

      if (orderError) {
        setError(`Could not load order: ${orderError.message}`);
        setLoading(false);
        return;
      }

      setOrder(data);
      setOrderStatus(data.order_status || "pending");
      setPaymentStatus(data.payment_status || "pending");
      setAdminNotes(data.admin_notes || "");
      setTrackingNumber(data.tracking_number || "");
      setTrackingProvider(data.tracking_provider || "");
      setDeliveryMethod(data.delivery_method || "");
      setLoading(false);
    };

    loadOrder();
  }, [id, navigate]);

  const artworkUrls = useMemo(() => {
    return getArtworkUrls(order);
  }, [order]);

  const items = Array.isArray(order?.items) ? order.items : [];

  const handleSave = async (event) => {
    event.preventDefault();

    setSaving(true);
    setError("");
    setSuccessMessage("");

    const updates = {
      order_status: orderStatus,
      payment_status: paymentStatus,
      admin_notes: adminNotes.trim() || null,
      tracking_number: trackingNumber.trim() || null,
      tracking_provider: trackingProvider.trim() || null,
      delivery_method: deliveryMethod.trim() || null,
    };

    const { data, error: updateError } = await supabase
      .from("orders")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (updateError) {
      setError(`Could not save order: ${updateError.message}`);
      setSaving(false);
      return;
    }

    setOrder(data);
    setSuccessMessage("Order updated successfully.");
    setSaving(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  if (loading) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f5f5",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <p>Loading order...</p>
      </main>
    );
  }

  if (!order) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#f5f5f5",
          padding: "40px 20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <section
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            ...cardStyle,
          }}
        >
          <h1>Order not found</h1>

          {error && (
            <p
              style={{
                color: "#991b1b",
                lineHeight: 1.5,
              }}
            >
              {error}
            </p>
          )}

          <button
            type="button"
            onClick={() => navigate("/admin/dashboard")}
            style={{
              background: "#111",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              padding: "12px 20px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Back to dashboard
          </button>
        </section>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "30px 20px 60px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "30px",
          }}
        >
          <div>
            <button
              type="button"
              onClick={() => navigate("/admin/dashboard")}
              style={{
                background: "transparent",
                border: "none",
                padding: 0,
                color: "#555",
                fontWeight: "700",
                cursor: "pointer",
                marginBottom: "12px",
              }}
            >
              ← Back to dashboard
            </button>

            <h1
              style={{
                margin: 0,
                color: "#111",
                fontSize: "clamp(30px, 5vw, 42px)",
              }}
            >
              Order {order.order_number || ""}
            </h1>

            <p
              style={{
                margin: "8px 0 0",
                color: "#666",
              }}
            >
              Created {formatDate(order.created_at)}
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            style={{
              background: "#111",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              padding: "12px 20px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Log out
          </button>
        </header>

        {error && (
          <div
            style={{
              background: "#fee2e2",
              color: "#991b1b",
              border: "1px solid #fecaca",
              padding: "14px 16px",
              borderRadius: "12px",
              marginBottom: "24px",
            }}
          >
            {error}
          </div>
        )}

        {successMessage && (
          <div
            style={{
              background: "#dcfce7",
              color: "#166534",
              border: "1px solid #bbf7d0",
              padding: "14px 16px",
              borderRadius: "12px",
              marginBottom: "24px",
            }}
          >
            {successMessage}
          </div>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            marginBottom: "24px",
          }}
        >
          <article style={cardStyle}>
            <h2 style={{ marginTop: 0 }}>Customer</h2>

            <p>
              <strong>Name:</strong>{" "}
              {order.customer_name || "Not supplied"}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              {order.customer_email ? (
                <a href={`mailto:${order.customer_email}`}>
                  {order.customer_email}
                </a>
              ) : (
                "Not supplied"
              )}
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              {order.customer_phone ? (
                <a href={`tel:${order.customer_phone}`}>
                  {order.customer_phone}
                </a>
              ) : (
                "Not supplied"
              )}
            </p>

            <p style={{ marginBottom: 0, lineHeight: 1.6 }}>
              <strong>Shipping address:</strong>
              <br />
              {getAddressText(order.shipping_address)}
            </p>
          </article>

          <article style={cardStyle}>
            <h2 style={{ marginTop: 0 }}>Order summary</h2>

            <p>
              <strong>Subtotal:</strong>{" "}
              {formatMoney(order.subtotal, order.currency)}
            </p>

            <p>
              <strong>Discount:</strong>{" "}
              {formatMoney(order.discount, order.currency)}
            </p>

            <p
              style={{
                fontSize: "22px",
                marginBottom: "12px",
              }}
            >
              <strong>Total:</strong>{" "}
              {formatMoney(order.total, order.currency)}
            </p>

            <p>
              <strong>Stripe session:</strong>{" "}
              {order.stripe_session_id || "Not saved"}
            </p>

            <p style={{ marginBottom: 0 }}>
              <strong>Payment intent:</strong>{" "}
              {order.stripe_payment_intent_id || "Not saved"}
            </p>
          </article>
        </div>

        <article
          style={{
            ...cardStyle,
            marginBottom: "24px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Products</h2>

          {items.length === 0 ? (
            <p style={{ color: "#666", marginBottom: 0 }}>
              No product information was saved with this order.
            </p>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {items.map((item, index) => {
                const quantity = getItemQuantity(item);
                const unitPrice = getItemPrice(item);

                return (
                  <div
                    key={item.id || `${getItemName(item)}-${index}`}
                    style={{
                      border: "1px solid #e7e7e7",
                      borderRadius: "12px",
                      padding: "18px",
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(180px, 1fr))",
                      gap: "16px",
                    }}
                  >
                    <div>
                      <strong
                        style={{
                          display: "block",
                          fontSize: "18px",
                          marginBottom: "8px",
                        }}
                      >
                        {getItemName(item)}
                      </strong>

                      <div style={{ color: "#666", lineHeight: 1.7 }}>
                        <div>
                          Size: {item.size || item.options?.size || "—"}
                        </div>

                        <div>
                          Colour:{" "}
                          {item.colour ||
                            item.color ||
                            item.options?.colour ||
                            item.options?.color ||
                            "—"}
                        </div>

                        <div>Quantity: {quantity}</div>
                      </div>
                    </div>

                    <div>
                      <strong>Options</strong>

                      <div
                        style={{
                          color: "#666",
                          lineHeight: 1.7,
                          marginTop: "8px",
                        }}
                      >
                        {item.options &&
                        Object.keys(item.options).length > 0 ? (
                          Object.entries(item.options).map(
                            ([key, value]) => (
                              <div key={key}>
                                {key}:{" "}
                                {typeof value === "boolean"
                                  ? value
                                    ? "Yes"
                                    : "No"
                                  : String(value)}
                              </div>
                            )
                          )
                        ) : (
                          <div>No extra options</div>
                        )}
                      </div>
                    </div>

                    <div>
                      <strong>Price</strong>

                      <div
                        style={{
                          marginTop: "8px",
                          lineHeight: 1.7,
                        }}
                      >
                        <div>
                          Unit:{" "}
                          {formatMoney(unitPrice, order.currency)}
                        </div>

                        <div>
                          Line total:{" "}
                          <strong>
                            {formatMoney(
                              unitPrice * quantity,
                              order.currency
                            )}
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </article>

        <article
          style={{
            ...cardStyle,
            marginBottom: "24px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Artwork</h2>

          {artworkUrls.length === 0 ? (
            <p style={{ color: "#666", marginBottom: 0 }}>
              No artwork has been attached to this order.
            </p>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "20px",
              }}
            >
              {artworkUrls.map((url, index) => {
                const isPdf = url
                  .toLowerCase()
                  .split("?")[0]
                  .endsWith(".pdf");

                return (
                  <div
                    key={`${url}-${index}`}
                    style={{
                      border: "1px solid #e7e7e7",
                      borderRadius: "12px",
                      padding: "14px",
                    }}
                  >
                    {!isPdf && (
                      <img
                        src={url}
                        alt={`Order artwork ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "220px",
                          objectFit: "contain",
                          borderRadius: "8px",
                          background: "#f6f6f6",
                          marginBottom: "12px",
                        }}
                      />
                    )}

                    {isPdf && (
                      <div
                        style={{
                          height: "160px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "#f6f6f6",
                          borderRadius: "8px",
                          fontWeight: "700",
                          marginBottom: "12px",
                        }}
                      >
                        PDF artwork
                      </div>
                    )}

                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "block",
                        textAlign: "center",
                        background: "#111",
                        color: "#fff",
                        textDecoration: "none",
                        borderRadius: "8px",
                        padding: "11px 14px",
                        fontWeight: "700",
                      }}
                    >
                      Open artwork
                    </a>
                  </div>
                );
              })}
            </div>
          )}
        </article>

        <form onSubmit={handleSave} style={cardStyle}>
          <h2 style={{ marginTop: 0 }}>Manage order</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <label style={labelStyle}>
              Order status

              <select
                value={orderStatus}
                onChange={(event) =>
                  setOrderStatus(event.target.value)
                }
                style={inputStyle}
              >
                {ORDER_STATUSES.map((status) => (
                  <option
                    key={status.value}
                    value={status.value}
                  >
                    {status.label}
                  </option>
                ))}
              </select>
            </label>

            <label style={labelStyle}>
              Payment status

              <select
                value={paymentStatus}
                onChange={(event) =>
                  setPaymentStatus(event.target.value)
                }
                style={inputStyle}
              >
                {PAYMENT_STATUSES.map((status) => (
                  <option
                    key={status.value}
                    value={status.value}
                  >
                    {status.label}
                  </option>
                ))}
              </select>
            </label>

            <label style={labelStyle}>
              Delivery method

              <input
                type="text"
                value={deliveryMethod}
                onChange={(event) =>
                  setDeliveryMethod(event.target.value)
                }
                placeholder="Royal Mail, collection, courier..."
                style={inputStyle}
              />
            </label>

            <label style={labelStyle}>
              Tracking provider

              <input
                type="text"
                value={trackingProvider}
                onChange={(event) =>
                  setTrackingProvider(event.target.value)
                }
                placeholder="Royal Mail, DPD, Evri..."
                style={inputStyle}
              />
            </label>

            <label style={labelStyle}>
              Tracking number

              <input
                type="text"
                value={trackingNumber}
                onChange={(event) =>
                  setTrackingNumber(event.target.value)
                }
                placeholder="Enter tracking number"
                style={inputStyle}
              />
            </label>
          </div>

          <label style={labelStyle}>
            Admin notes

            <textarea
              value={adminNotes}
              onChange={(event) =>
                setAdminNotes(event.target.value)
              }
              placeholder="Add printing instructions, customer requests or production notes..."
              rows="7"
              style={{
                ...inputStyle,
                resize: "vertical",
                fontFamily: "Arial, sans-serif",
                lineHeight: 1.6,
              }}
            />
          </label>

          {order.customer_notes && (
            <div
              style={{
                marginTop: "20px",
                background: "#f8f8f8",
                borderRadius: "10px",
                padding: "16px",
              }}
            >
              <strong>Customer notes</strong>

              <p
                style={{
                  margin: "8px 0 0",
                  lineHeight: 1.6,
                  whiteSpace: "pre-wrap",
                }}
              >
                {order.customer_notes}
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={saving}
            style={{
              marginTop: "24px",
              background: saving ? "#777" : "#111",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              padding: "14px 24px",
              fontWeight: "700",
              fontSize: "16px",
              cursor: saving ? "not-allowed" : "pointer",
            }}
          >
            {saving ? "Saving..." : "Save order changes"}
          </button>
        </form>
      </section>
    </main>
  );
}