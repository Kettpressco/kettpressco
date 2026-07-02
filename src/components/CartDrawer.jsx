import { useCart } from "../context/CartContext";

export default function CartDrawer({ open, onClose }) {

  const {
    cart,
    removeFromCart,
    updateQuantity,
    subtotal,
    discount,
    total
  } = useCart();

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "380px",
        height: "100vh",
        background: "#fff",
        boxShadow: "-2px 0 10px rgba(0,0,0,0.2)",
        zIndex: 2000,
        display: "flex",
        flexDirection: "column",
      }}
    >

      {/* HEADER */}
      <div
        style={{
          padding: "15px",
          borderBottom: "1px solid #eee",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3>Your Cart</h3>
        <button onClick={onClose}>X</button>
      </div>

      {/* ITEMS */}
      <div style={{ flex: 1, overflowY: "auto", padding: "10px" }}>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <div
              key={index}
              style={{
                borderBottom: "1px solid #eee",
                padding: "10px 0",
              }}
            >
              <p style={{ margin: 0 }}>
                <b>{item.product?.name}</b>
              </p>

              <small>
                {item.colour} / {item.size}
              </small>

              <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
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
                  -
                </button>

                <span>{item.quantity}</span>

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
                    removeFromCart(item.id, item.size, item.colour)
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* TOTALS */}
      <div style={{ padding: "15px", borderTop: "1px solid #eee" }}>
        <p>Subtotal: £{subtotal.toFixed(2)}</p>
        <p>Discount: -£{discount.toFixed(2)}</p>
        <h3>Total: £{total.toFixed(2)}</h3>

        <button
          style={{
            width: "100%",
            padding: "12px",
            background: "black",
            color: "white",
            marginTop: "10px",
          }}
        >
          Checkout
        </button>
      </div>

    </div>
  );
}