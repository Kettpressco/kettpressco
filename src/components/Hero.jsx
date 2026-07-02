export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "90vh",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1600&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "100px 20px",
      }}
    >
      <h1 style={{ fontSize: "clamp(42px,5vw,58px)", marginBottom: "20px" }}>
        T-Shirt Printing & Workwear Printing in Kettering, Northamptonshire
      </h1>

      <p style={{ fontSize: "clamp(18px,2vw,24px)", color: "#ddd" }}>
        T-Shirts • Workwear • Hoodies • Business Branding
      </p>

      <p style={{ marginTop: "20px", color: "#bbb" }}>
        Serving Kettering & Northamptonshire
      </p>

      <div style={{ display: "flex", gap: "20px", marginTop: "35px" }}>
        <button>Get Instant Quote</button>

        <a
          href="https://wa.me/447770118148"
          target="_blank"
          rel="noreferrer"
        >
          <button>WhatsApp for a Quick Quote</button>
        </a>
      </div>

      <div style={{ marginTop: "20px" }}>
        <a
          href="PASTE_YOUR_GOOGLE_PROFILE_LINK_HERE"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          ⭐ Read Our Google Reviews
        </a>
      </div>
    </section>
  );
}