import CartIcon from "./CartIcon";

export default function Header() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "#111",
        color: "white",
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >

      {/* LOGO */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <img
          src="/images/logo.jpg"
          alt="Kett Press Co Logo"
          style={{
            width: "60px",
            height: "60px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />

        <div>
          <h2 style={{ margin: 0 }}>Kett Press Co</h2>
          <small style={{ color: "#6f1d1dff" }}>
            Custom Printing & Workwear
          </small>
        </div>
      </div>

      {/* MENU */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <a href="#home" style={{ color: "white", textDecoration: "none" }}>Home</a>

        <a href="#services" style={{ color: "white", textDecoration: "none" }}>Services</a>

        <a href="/tshirt-printing-kettering" style={{ color: "white", textDecoration: "none" }}>
          T-Shirt Printing
        </a>

        <a href="/workwear-printing-kettering" style={{ color: "white", textDecoration: "none" }}>
          Workwear Printing
        </a>

        <a href="#portfolio" style={{ color: "white", textDecoration: "none" }}>
          Portfolio
        </a>

        <a href="/quote-calculator" style={{ color: "white", textDecoration: "none" }}>
          Instant Quote
        </a>

        <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </a>

        <a href="/shop" style={{ color: "white", textDecoration: "none" }}>
          Shop
        </a>

        {/* CART */}
        <CartIcon />

        {/* CTA BUTTON */}
        <a
          href="/quote-calculator"
          style={{
            background: "#000",
            color: "#fff",
            padding: "14px 28px",
            borderRadius: "8px",
            textDecoration: "none",
            marginLeft: "10px",
          }}
        >
          Instant Quote
        </a>
      </div>

    </nav>
  );
}