import { Link } from "react-router-dom";

export default function TshirtPrintingKetteringPage() {
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
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/images/tshirt4.jpg') center/cover",
          color: "#fff",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "20px",
          }}
        >
          T-Shirt Printing Kettering
        </h1>

        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "1.2rem",
            lineHeight: "1.8",
          }}
        >
          Professional custom T-shirt printing in Kettering for businesses,
          schools, sports teams, churches, charities and events. High-quality
          DTF printing with fast turnaround and competitive prices.
        </p>

        <Link
          to="/contact"
          style={{
            display: "inline-block",
            marginTop: "30px",
            background: "#ff6b00",
            color: "#fff",
            padding: "14px 28px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Get A Free Quote
        </Link>
      </section>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "50px 20px",
        }}
      >

        {/* INTRO */}
        <div style={cardStyle}>
          <h2>Custom T-Shirt Printing in Kettering</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Kett Press Co provides professional T-shirt printing services in
            Kettering and across Northamptonshire. Whether you need branded
            workwear, promotional clothing, gym wear, event T-shirts or custom
            apparel for your organisation, we deliver durable prints and
            excellent customer service.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            We use premium DTF printing technology to produce vibrant,
            long-lasting designs suitable for cotton, polyester and blended
            garments.
          </p>
        </div>

        {/* IMAGE SECTION */}
        <div style={cardStyle}>
          <img
            src="/images/work1.jpg"
            alt="Custom T-Shirt Printing Kettering"
            style={{
              width: "100%",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          />

          <h2>Why Choose Kett Press Co?</h2>

          <ul
            style={{
              lineHeight: "2",
              color: "#444",
            }}
          >
            <li>High-quality DTF printing</li>
            <li>Fast turnaround times</li>
            <li>No minimum order requirements</li>
            <li>Competitive local pricing</li>
            <li>Business, event and sportswear printing</li>
            <li>Serving Kettering and Northamptonshire</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div style={cardStyle}>
          <h2>T-Shirts We Print</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            We print custom T-shirts for:
          </p>

          <ul style={{ lineHeight: "2", color: "#444" }}>
            <li>Local businesses</li>
            <li>Construction companies</li>
            <li>Sports clubs</li>
            <li>Schools and colleges</li>
            <li>Churches</li>
            <li>Charity events</li>
            <li>Gym and fitness brands</li>
            <li>Family celebrations</li>
          </ul>
        </div>

        {/* SECOND IMAGE */}
        <div style={cardStyle}>
          <img
            src="/images/event1.jpg"
            alt="Printed T-Shirts Kettering"
            style={{
              width: "100%",
              borderRadius: "12px",
            }}
          />
        </div>

        {/* GEO SECTION */}
        <div style={cardStyle}>
          <h2>Serving Kettering & Northamptonshire</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            We proudly provide T-shirt printing services throughout Kettering,
            Burton Latimer, Rothwell, Desborough, Corby, Wellingborough,
            Rushden and surrounding Northamptonshire areas.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Whether you require a single custom T-shirt or bulk orders for a
            company event, Kett Press Co can help.
          </p>
        </div>

        {/* CONTACT */}
        <div style={cardStyle}>
          <h2>Get Your Free Quote</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Ready to order custom printed T-shirts? Contact Kett Press Co today
            for a free quote and fast turnaround.
          </p>

          <p>
            📧 kettpressco@gmail.com
          </p>

          <p>
            📞 07459 899431
          </p>

          <p>
            📍 Kettering, Northamptonshire
          </p>

          <Link
            to="/contact"
            style={{
              display: "inline-block",
              marginTop: "15px",
              background: "#ff6b00",
              color: "#fff",
              padding: "12px 24px",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            Request A Quote
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
            style={{
              border: 0,
              borderRadius: "12px",
            }}
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </div>
  );
}