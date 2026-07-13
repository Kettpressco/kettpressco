import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

const STATUS_LABELS = {
  pending: "Pending",
  artwork_review: "Artwork Review",
  awaiting_approval: "Awaiting Approval",
  printing: "Printing",
  quality_check: "Quality Check",
  ready_for_collection: "Ready for Collection",
  shipped: "Shipped",
  completed: "Completed",
  cancelled: "Cancelled",
};

const PAYMENT_LABELS = {
  pending: "Pending",
  paid: "Paid",
  failed: "Failed",
  refunded: "Refunded",
  partially_refunded: "Partially Refunded",
};

const formatMoney = (amount, currency = "gbp") => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: currency?.toUpperCase() || "GBP",
  }).format(Number(amount || 0));
};

const formatDate = (date) => {
  if (!date) return "—";

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
};

const getStatusStyle = (status) => {
  const styles = {
    pending: {
      background: "#fff4d6",
      color: "#8a5a00",
    },
    artwork_review: {
      background: "#eaf2ff",
      color: "#174ea6",
    },
    awaiting_approval: {
      background: "#f3e8ff",
      color: "#6b21a8",
    },
    printing: {
      background: "#e0f2fe",
      color: "#075985",
    },
    quality_check: {
      background: "#ecfccb",
      color: "#3f6212",
    },
    ready_for_collection: {
      background: "#dcfce7",
      color: "#166534",
    },
    shipped: {
      background: "#dbeafe",
      color: "#1d4ed8",
    },
    completed: {
      background: "#dcfce7",
      color: "#166534",
    },
    cancelled: {
      background: "#fee2e2",
      color: "#991b1b",
    },
  };

  return (
    styles[status] || {
      background: "#eeeeee",
      color: "#444444",
    }
  );
};

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [ordersLoading, setOrdersLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    const initialiseDashboard = async () => {
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

      if (session.user.email !== "info@kettpressco.com") {
        await supabase.auth.signOut();
        navigate("/admin");
        return;
      }

      setUserEmail(session.user.email);
      setLoading(false);

      await loadOrders();
    };

    initialiseDashboard();
  }, [navigate]);

  const loadOrders = async () => {
    setOrdersLoading(true);
    setError("");

    const { data, error: ordersError } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    if (ordersError) {
      setError(`Could not load orders: ${ordersError.message}`);
      setOrders([]);
      setOrdersLoading(false);
      return;
    }

    setOrders(data || []);
    setOrdersLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  const stats = useMemo(() => {
    const paidOrders = orders.filter(
      (order) => order.payment_status === "paid"
    );

    const totalRevenue = paidOrders.reduce(
      (sum, order) => sum + Number(order.total || 0),
      0
    );

    const pendingOrders = orders.filter(
      (order) => order.order_status === "pending"
    ).length;

    const printingOrders = orders.filter(
      (order) => order.order_status === "printing"
    ).length;

    return {
      totalOrders: orders.length,
      pendingOrders,
      printingOrders,
      totalRevenue,
    };
  }, [orders]);

  const filteredOrders = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return orders.filter((order) => {
      const matchesStatus =
        statusFilter === "all" ||
        order.order_status === statusFilter;

      const searchableText = [
        order.order_number,
        order.customer_name,
        order.customer_email,
        order.customer_phone,
        order.stripe_session_id,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !normalizedSearch ||
        searchableText.includes(normalizedSearch);

      return matchesStatus && matchesSearch;
    });
  }, [orders, searchTerm, statusFilter]);

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
        <p>Checking admin access...</p>
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
        <div
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
            <h1
              style={{
                margin: 0,
                fontSize: "clamp(30px, 5vw, 42px)",
                color: "#111",
              }}
            >
              Kett Press Co Admin
            </h1>

            <p
              style={{
                color: "#666",
                margin: "8px 0 0",
              }}
            >
              Signed in as {userEmail}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              onClick={loadOrders}
              disabled={ordersLoading}
              style={{
                background: "#ffffff",
                color: "#111",
                border: "1px solid #d5d5d5",
                borderRadius: "10px",
                padding: "12px 20px",
                fontWeight: "700",
                cursor: ordersLoading ? "not-allowed" : "pointer",
              }}
            >
              {ordersLoading ? "Refreshing..." : "Refresh orders"}
            </button>

            <button
              type="button"
              onClick={handleLogout}
              style={{
                background: "#111",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                padding: "12px 22px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Log out
            </button>
          </div>
        </div>

        {error && (
          <div
            style={{
              background: "#fee2e2",
              color: "#991b1b",
              border: "1px solid #fecaca",
              padding: "14px 16px",
              borderRadius: "12px",
              marginBottom: "24px",
              lineHeight: 1.5,
            }}
          >
            {error}
          </div>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          {[
            ["Total Orders", stats.totalOrders],
            ["Pending", stats.pendingOrders],
            ["Printing", stats.printingOrders],
            ["Paid Revenue", formatMoney(stats.totalRevenue)],
          ].map(([label, value]) => (
            <div
              key={label}
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#666",
                  fontWeight: "600",
                }}
              >
                {label}
              </p>

              <h2
                style={{
                  margin: "12px 0 0",
                  fontSize: "32px",
                  color: "#111",
                }}
              >
                {value}
              </h2>
            </div>
          ))}
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: "16px",
            padding: "24px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            <input
              type="search"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              placeholder="Search by order, customer or email"
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "13px 14px",
                border: "1px solid #d7d7d7",
                borderRadius: "10px",
                fontSize: "15px",
              }}
            />

            <select
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(event.target.value)
              }
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "13px 14px",
                border: "1px solid #d7d7d7",
                borderRadius: "10px",
                fontSize: "15px",
                background: "#fff",
              }}
            >
              <option value="all">All statuses</option>

              {Object.entries(STATUS_LABELS).map(
                ([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                )
              )}
            </select>
          </div>
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              padding: "24px",
              borderBottom: "1px solid #eeeeee",
            }}
          >
            <h2
              style={{
                margin: 0,
                color: "#111",
              }}
            >
              Orders
            </h2>

            <p
              style={{
                margin: "8px 0 0",
                color: "#666",
              }}
            >
              Showing {filteredOrders.length} of {orders.length} orders
            </p>
          </div>

          {ordersLoading ? (
            <div
              style={{
                padding: "40px 24px",
                textAlign: "center",
                color: "#666",
              }}
            >
              Loading orders...
            </div>
          ) : filteredOrders.length === 0 ? (
            <div
              style={{
                padding: "40px 24px",
                textAlign: "center",
                color: "#666",
              }}
            >
              {orders.length === 0
                ? "No orders have been saved yet."
                : "No orders match your search."}
            </div>
          ) : (
            <div
              style={{
                overflowX: "auto",
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  minWidth: "980px",
                }}
              >
                <thead>
                  <tr
                    style={{
                      background: "#fafafa",
                      textAlign: "left",
                    }}
                  >
                    {[
                      "Order",
                      "Customer",
                      "Date",
                      "Status",
                      "Payment",
                      "Total",
                      "Action",
                    ].map((heading) => (
                      <th
                        key={heading}
                        style={{
                          padding: "16px",
                          fontSize: "14px",
                          color: "#555",
                          borderBottom:
                            "1px solid #eeeeee",
                        }}
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {filteredOrders.map((order) => {
                    const statusStyle = getStatusStyle(
                      order.order_status
                    );

                    return (
                      <tr key={order.id}>
                        <td
                          style={{
                            padding: "16px",
                            borderBottom:
                              "1px solid #eeeeee",
                            fontWeight: "700",
                          }}
                        >
                          {order.order_number || "—"}
                        </td>

                        <td
                          style={{
                            padding: "16px",
                            borderBottom:
                              "1px solid #eeeeee",
                          }}
                        >
                          <strong>
                            {order.customer_name ||
                              "Unknown customer"}
                          </strong>

                          <div
                            style={{
                              marginTop: "5px",
                              color: "#666",
                              fontSize: "14px",
                            }}
                          >
                            {order.customer_email || "—"}
                          </div>
                        </td>

                        <td
                          style={{
                            padding: "16px",
                            borderBottom:
                              "1px solid #eeeeee",
                            color: "#555",
                          }}
                        >
                          {formatDate(order.created_at)}
                        </td>

                        <td
                          style={{
                            padding: "16px",
                            borderBottom:
                              "1px solid #eeeeee",
                          }}
                        >
                          <span
                            style={{
                              display: "inline-block",
                              padding: "7px 10px",
                              borderRadius: "999px",
                              fontSize: "13px",
                              fontWeight: "700",
                              ...statusStyle,
                            }}
                          >
                            {STATUS_LABELS[
                              order.order_status
                            ] || order.order_status || "Unknown"}
                          </span>
                        </td>

                        <td
                          style={{
                            padding: "16px",
                            borderBottom:
                              "1px solid #eeeeee",
                          }}
                        >
                          {PAYMENT_LABELS[
                            order.payment_status
                          ] ||
                            order.payment_status ||
                            "Unknown"}
                        </td>

                        <td
                          style={{
                            padding: "16px",
                            borderBottom:
                              "1px solid #eeeeee",
                            fontWeight: "700",
                          }}
                        >
                          {formatMoney(
                            order.total,
                            order.currency
                          )}
                        </td>

                        <td
                          style={{
                            padding: "16px",
                            borderBottom:
                              "1px solid #eeeeee",
                          }}
                        >
                          <button
                            type="button"
                            onClick={() =>
                              navigate(
                                `/admin/orders/${order.id}`
                              )
                            }
                            style={{
                              background: "#111",
                              color: "#fff",
                              border: "none",
                              borderRadius: "8px",
                              padding: "10px 14px",
                              fontWeight: "700",
                              cursor: "pointer",
                            }}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}