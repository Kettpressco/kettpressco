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

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
          zIndex: 9998,
        }}
      />

      {/* Drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "400px",
          maxWidth: "100%",
          height: "100vh",
          background: "#fff",
          boxShadow: "-5px 0 25px rgba(0,0,0,.2)",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "20px",
            borderBottom: "1px solid #eee",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0 }}>Shopping Cart</h2>

          <button
            onClick={() => setOpen(false)}
            style={{
              background: "none",
              border: "none",
              fontSize: "22px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "20px",
          }}
        >
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item, index) => (
              <div
                key={index}
                style={{
                  borderBottom: "1px solid #eee",
                  paddingBottom: "15px",
                  marginBottom: "15px",
                }}
              >
                <strong>{item.name || item.product?.name}</strong>

                <p style={{ margin: "6px 0" }}>
                  {item.colour} • {item.size}
                </p>

                <p>
                  £{Number(item.price || 0).toFixed(2)}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <button
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.size,
                        item.colour,
                        item.quantity - 1
                      )
                    }
                  >
                    −
                  </button>

                  <strong>{item.quantity}</strong>

                  <button
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.size,
                        item.colour,
                        item.quantity + 1
                      )
                    }
                  >
                    +
                  </button>

                  <button
                    onClick={() =>
                      removeFromCart(
                        item.id,
                        item.size,
                        item.colour
                      )
                    }
                    style={{
                      marginLeft: "auto",
                      color: "red",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            padding: "20px",
            borderTop: "1px solid #eee",
          }}
        >
          <p>
            <strong>Subtotal:</strong> £
            {Number(subtotal || 0).toFixed(2)}
          </p>

          <p>
            <strong>Discount:</strong> £
            {Number(discount || 0).toFixed(2)}
          </p>

          <h2>
            Total: £{Number(total || 0).toFixed(2)}
          </h2>

          <Link
            to="/checkout"
            onClick={() => setOpen(false)}
            style={{
              display: "block",
              textAlign: "center",
              marginTop: "15px",
              padding: "15px",
              background: "#111",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "10px",
              fontWeight: "700",
            }}
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </>
  );
}