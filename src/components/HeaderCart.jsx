import { useCart } from "../context/CartContext";

export default function HeaderCart({ onClick }) {

  const { cartCount } = useCart();

  return (
    <div
      onClick={onClick}
      style={{
        position: "relative",
        cursor: "pointer",
        fontSize: "20px",
        display: "flex",
        alignItems: "center",
        gap: "6px",
      }}
    >

      🛒

      {/* Badge */}
      {cartCount > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-8px",
            right: "-10px",
            background: "red",
            color: "white",
            borderRadius: "50%",
            width: "18px",
            height: "18px",
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          {cartCount}
        </span>
      )}

    </div>
  );
}