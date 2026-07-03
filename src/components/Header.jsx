import { Link, useLocation } from "react-router-dom";
import CartIcon from "./CartIcon";

const navLink = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "500",
};

const ctaButton = {
  background: "#D62828",
  color: "#fff",
  padding: "14px 24px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold",
};

export default function Header({ onCartClick }) {
  const location = useLocation();
  const showHero = location.pathname === "/";

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "#111",
          color: "#fff",
          padding: "18px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
            color: "#fff",
          }}
        >
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
            <h2 style={{ margin: 0, fontSize: "28px" }}>Kett Press Co</h2>
            <small style={{ color: "#D62828", fontSize: "14px" }}>
              Custom Printing & Workwear
            </small>
          </div>
        </Link>

        <div
          style={{
            display: "flex",
            gap: "18px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Link to="/" style={navLink}>Home</Link>
          <Link to="/shop" style={navLink}>Shop</Link>
          <Link to="/tshirt-printing-kettering" style={navLink}>T-Shirt Printing</Link>
          <Link to="/workwear-printing-kettering" style={navLink}>Workwear Printing</Link>
          <Link to="/quote-calculator" style={navLink}>Instant Quote</Link>

          <button
  type="button"
  onClick={() => {
    console.log("CART ICON CLICKED");
    onCartClick?.();
  }}
  style={{
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: "#fff",
    padding: "8px",
    position: "relative",
    zIndex: 2000,
  }}
>
  <CartIcon />
</button>

          <Link to="/quote-calculator" style={ctaButton}>
            Instant Quote
          </Link>
        </div>
      </nav>

      {showHero && (
        <section
          id="home"
          style={{
            minHeight: "90vh",
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.65)), url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1600&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "100px 20px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(42px,5vw,60px)",
              lineHeight: "1.25",
              maxWidth: "1000px",
              marginBottom: "25px",
            }}
          >
            T-Shirt Printing &<br />
            Workwear Printing in<br />
            Kettering, Northamptonshire
          </h1>

          <p
            style={{
              fontSize: "clamp(18px,2vw,24px)",
              color: "#ddd",
              maxWidth: "850px",
              lineHeight: "1.8",
            }}
          >
            T-Shirts • Workwear • Hoodies • Polo Shirts • Hi-Vis Clothing •
            Business Branding • DTF Printing
          </p>

          <p style={{ marginTop: "25px", color: "#ccc", fontSize: "18px" }}>
            Serving Kettering, Corby, Wellingborough, Northampton, Market
            Harborough, Leicester & Across the UK
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <Link to="/quote-calculator" style={ctaButton}>
              Get Instant Quote
            </Link>

            <a
              href="https://wa.me/447742514098"
              target="_blank"
              rel="noreferrer"
              style={{
                ...ctaButton,
                background: "#25D366",
              }}
            >
              WhatsApp For A Quick Quote
            </a>
          </div>
        </section>
      )}
    </>
  );
}