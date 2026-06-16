import { useState } from "react";

export default function QuoteCalculator() {
  const [garment, setGarment] = useState("T-Shirt");
  const [quantity, setQuantity] = useState(10);
  const [printLocation, setPrintLocation] = useState("Front Only");
  const [artwork, setArtwork] = useState(null);

  const getPrice = () => {
    let basePrice = 0;

    switch (garment) {
      case "T-Shirt":
        basePrice = 8;
        break;
      case "Polo Shirt":
        basePrice = 12;
        break;
      case "Hoodie":
        basePrice = 20;
        break;
      case "Sweatshirt":
        basePrice = 17;
        break;
      case "Hi-Vis":
        basePrice = 15;
        break;
      default:
        basePrice = 8;
    }

    let printCost = 0;

    switch (printLocation) {
      case "Front Only":
        printCost = 3;
        break;
      case "Front + Back":
        printCost = 4;
        break;
      case "Front + Back + Sleeve":
        printCost = 6;
        break;
      default:
        printCost = 3;
    }

    let discount = 1;

    if (quantity >= 25) discount = 0.95;
    if (quantity >= 50) discount = 0.9;
    if (quantity >= 100) discount = 0.85;

    return ((basePrice + printCost) * quantity * discount).toFixed(2);
  };

  const sectionStyle = {
    maxWidth: "1200px",
    margin: "auto",
    padding: "60px 20px",
  };

  const cardStyle = {
    background: "#fff",
    borderRadius: "16px",
    padding: "30px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
    marginBottom: "30px",
  };

  const inputStyle = {
    width: "100%",
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    marginTop: "8px",
    marginBottom: "20px",
    fontSize: "16px",
  };

  const buttonStyle = {
    background: "#000",
    color: "#fff",
    padding: "15px 30px",
    borderRadius: "10px",
    textDecoration: "none",
    display: "inline-block",
    marginTop: "20px",
  };

  return (
    <div style={{ background: "#f7f7f7" }}>
      {/* Hero */}
      <section
        style={{
          background: "#000",
          color: "#fff",
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
          Instant Clothing Printing Quote Calculator
        </h1>

        <p
          style={{
            maxWidth: "800px",
            margin: "auto",
            lineHeight: "1.8",
            color: "#ddd",
          }}
        >
          Get an estimated price for custom t-shirts, hoodies, polos,
          sweatshirts and workwear printed by Kett Press Co.
        </p>
      </section>

      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Calculate Your Quote</h2>

          <label>Garment Type</label>
          <select
            value={garment}
            onChange={(e) => setGarment(e.target.value)}
            style={inputStyle}
          >
            <option>T-Shirt</option>
            <option>Polo Shirt</option>
            <option>Hoodie</option>
            <option>Sweatshirt</option>
            <option>Hi-Vis</option>
          </select>

          <label>Quantity</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            style={inputStyle}
          />

          <label>Print Locations</label>
          <select
            value={printLocation}
            onChange={(e) => setPrintLocation(e.target.value)}
            style={inputStyle}
          >
            <option>Front Only</option>
            <option>Front + Back</option>
            <option>Front + Back + Sleeve</option>
          </select>

          <label>Upload Artwork (Optional)</label>
          <input
            type="file"
            onChange={(e) => setArtwork(e.target.files[0])}
            style={inputStyle}
          />

          <div
            style={{
              background: "#f4f4f4",
              padding: "25px",
              borderRadius: "12px",
              marginTop: "20px",
            }}
          >
            <h2>Estimated Price</h2>

            <h1
              style={{
                fontSize: "42px",
                color: "#000",
                marginBottom: "10px",
              }}
            >
              £{getPrice()}
            </h1>

            <p>
              This is an estimate only. Final pricing may vary depending on
              garment brand, artwork complexity, and print size.
            </p>

            {artwork && (
              <p>
                Uploaded artwork: <strong>{artwork.name}</strong>
              </p>
            )}
          </div>

          <a href="/contact" style={buttonStyle}>
            Request Exact Quote
          </a>
        </div>

        {/* Why Choose Us */}
        <div style={cardStyle}>
          <h2>Why Choose Kett Press Co?</h2>

          <ul style={{ lineHeight: "2" }}>
            <li>High-quality DTF printing</li>
            <li>Custom workwear and uniforms</li>
            <li>Fast turnaround times</li>
            <li>No minimum order quantities</li>
            <li>Local service across Kettering & Northamptonshire</li>
          </ul>
        </div>

        {/* Contact */}
        <div style={cardStyle}>
          <h2>Contact Kett Press Co</h2>

          <p>
            Need an accurate quote or have a complex project? Contact us today.
          </p>

          <p>
            <strong>Email:</strong> info@kettpressco.com
          </p>

          <p>
            <strong>Location:</strong> Kettering, Northamptonshire
          </p>

          <a href="/contact" style={buttonStyle}>
            Contact Us
          </a>
        </div>

        {/* Map */}
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
          />
        </div>
      </section>
    </div>
  );
}