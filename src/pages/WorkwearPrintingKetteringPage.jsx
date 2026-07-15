import { Link } from "react-router-dom";
import RelatedProducts from "../components/RelatedProducts";

export default function WorkwearPrintingKetteringPage() {
  const cardStyle = {
    background: "#fff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
    marginBottom: "30px",
  };

  return (
    <div style={{ background: "#f8f9fa" }}>
      
      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/images/workwear.jpg') center/cover",
          color: "#fff",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
          Workwear Printing Kettering
        </h1>

        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "1.2rem",
            lineHeight: "1.8",
          }}
        >
          Professional branded workwear printing for businesses, tradespeople,
          schools, clubs and organisations across Kettering and Northamptonshire.
        </p>

        <a href="/contact">
  <button
    style={{
      background: "#D62828",
      color: "white",
      border: "none",
      padding: "12px 20px",
      borderRadius: "10px",
      cursor: "pointer",
      fontWeight: "bold",
    }}
  >
    Get Quote
  </button>
</a>
      </section>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "50px 20px" }}>

        {/* INTRO */}
        <div style={cardStyle}>
          <h2>Custom Workwear Printing in Kettering</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Kett Press Co provides high-quality custom workwear printing in Kettering.
            We help local businesses look professional with branded clothing that lasts.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            From small orders to bulk business uniforms, we deliver fast turnaround and
            durable DTF printing for all types of garments.
          </p>
        </div>

        {/* POLO IMAGE SECTION */}
        <div style={cardStyle}>
          <img
            src="/images/PoloTshirt.jpg"
            alt="Printed Polo Shirts Kettering"
            style={{
              width: "100%",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          />

          <h2>Branded Polo Shirts & Uniforms</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            We print professional polo shirts, T-shirts, hoodies and uniforms for businesses.
            Branded workwear helps promote your company and creates a consistent professional image.
          </p>
        </div>

        {/* INDUSTRIES */}
        <div style={cardStyle}>
          <h2>Industries We Serve</h2>

          <ul style={{ lineHeight: "2", color: "#444" }}>
            <li>Builders & Construction</li>
            <li>Electricians & Plumbers</li>
            <li>Landscapers & Gardeners</li>
            <li>Cleaning Companies</li>
            <li>Gyms & Fitness Businesses</li>
            <li>Schools & Colleges</li>
            <li>Churches & Charities</li>
            <li>Events & Hospitality Staff</li>
          </ul>
        </div>

        <RelatedProducts
  categories={[
    "Jacket",
    "Gilet",
    "Soft Shell Jacket",
    "Trousers",
    "Polo"
  ]}
  limit={4}
  title="Popular Branded Workwear"
/>

        {/* WORK IMAGE */}
        <div style={cardStyle}>
          <img
            src="/images/work1.jpg"
            alt="Workwear Printing Kettering"
            style={{
              width: "100%",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          />

          <h2>Durable High-Quality Printing</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Our DTF printing process produces vibrant, long-lasting prints that withstand
            daily wear and washing. Perfect for demanding work environments.
          </p>
        </div>

        {/* GEO SECTION */}
        <div style={cardStyle}>
          <h2>Serving Kettering & Northamptonshire</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            We supply workwear printing across Kettering, Corby, Wellingborough, Burton Latimer,
            Rothwell, Desborough and surrounding Northamptonshire areas.
          </p>
        </div>

        {/* CONTACT */}
        <div style={cardStyle}>
          <h2>Get Your Free Workwear Quote</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Contact Kett Press Co today for fast, affordable and professional workwear printing.
          </p>

          <p>📧 kettpressco@gmail.com</p>
          <p>📞 07442514098</p>
          <p>📍 Kettering, Northamptonshire</p>

       <Link
  to="/contact"
  style={{
    display: "inline-block",
    marginTop: "20px",
    background: "#D62828",
    color: "#fff",
    padding: "12px 24px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
  }}
>
  Get A Free Workwear Quote
</Link>
        </div>

        {/* MAP */}
        <div style={cardStyle}>
          <h2>Find Us</h2>

          <iframe
            title="Kettering Map"
            src="https://www.google.com/maps?q=Kettering,+Northamptonshire&output=embed"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "12px" }}
            loading="lazy"
          ></iframe>
        </div>
<div>
  <h3>Related Services</h3>
  <Link to="/tshirt-printing-kettering">
    T-Shirt Printing Kettering
  </Link>
</div>
      </div>
    </div>
  );
}