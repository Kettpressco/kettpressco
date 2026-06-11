export default function PrintingMethodsForCustomClothingKettering() {
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
          background: "#111",
          color: "#fff",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              marginBottom: "20px",
            }}
          >
            Which Printing Method Is Right For Your Clothing?
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Choosing the correct printing method can significantly
            impact the appearance, durability and cost of your custom
            clothing. At Kett Press Co, we help businesses, schools,
            churches, sports clubs and event organisers across
            Kettering select the best printing solution for their
            garments and branding requirements.
          </p>
        </div>
      </section>

      {/* CONTENT */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "70px 20px",
        }}
      >
        <div style={cardStyle}>
          <h2>DTF Printing (Direct To Film)</h2>

          <p style={{ lineHeight: "1.8" }}>
            DTF printing is currently one of the most versatile and
            popular garment printing methods available. It produces
            vibrant colours, excellent durability and works on a wide
            range of fabrics including cotton, polyester and blended
            garments.
          </p>

          <h3>Best For</h3>

          <ul style={{ lineHeight: "2" }}>
            <li>Business uniforms</li>
            <li>Branded workwear</li>
            <li>Custom hoodies</li>
            <li>Sportswear</li>
            <li>Full-colour logos</li>
            <li>Small and medium quantity orders</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h2>Screen Printing</h2>

          <p style={{ lineHeight: "1.8" }}>
            Screen printing is one of the most established garment
            decoration methods. It is highly durable and particularly
            cost-effective when producing larger quantities.
          </p>

          <h3>Best For</h3>

          <ul style={{ lineHeight: "2" }}>
            <li>Bulk T-shirt orders</li>
            <li>School leavers hoodies</li>
            <li>Corporate clothing</li>
            <li>Promotional campaigns</li>
            <li>Sports clubs and events</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h2>DTG Printing (Direct To Garment)</h2>

          <p style={{ lineHeight: "1.8" }}>
            DTG printing applies ink directly onto the fabric,
            producing outstanding detail and photographic-quality
            prints. It is ideal for intricate artwork and smaller
            production runs.
          </p>

          <h3>Best For</h3>

          <ul style={{ lineHeight: "2" }}>
            <li>Photographic designs</li>
            <li>Fashion brands</li>
            <li>Detailed artwork</li>
            <li>Short-run orders</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h2>Vinyl Printing</h2>

          <p style={{ lineHeight: "1.8" }}>
            Vinyl printing uses precision-cut material that is heat
            applied to garments. It is commonly used for names,
            numbers and personalised workwear.
          </p>

          <h3>Best For</h3>

          <ul style={{ lineHeight: "2" }}>
            <li>Sports kits</li>
            <li>Names and numbers</li>
            <li>Tradesperson uniforms</li>
            <li>Simple logo applications</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h2>Which Printing Method Should You Choose?</h2>

          <p style={{ lineHeight: "1.8" }}>
            The best printing method depends on your artwork, garment
            type, order quantity and budget. For many businesses,
            DTF printing provides the best balance between durability,
            colour quality and flexibility. Larger orders often
            benefit from screen printing, while DTG and vinyl are
            ideal for more specialised applications.
          </p>
        </div>
      </section>

      {/* CTA */}

      <section
        style={{
          background: "#111",
          color: "#fff",
          padding: "70px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2>Custom Clothing Printing in Kettering</h2>

          <p style={{ lineHeight: "1.8" }}>
            Kett Press Co is based at 10 Market Street, The Shops at
            the Yards, Kettering, NN16 0AH. We provide custom T-shirt
            printing, workwear branding, hoodie printing and DTF
            transfers throughout Kettering, Northampton, Corby,
            Wellingborough and Northamptonshire.
          </p>

          <p style={{ lineHeight: "1.8" }}>
            Contact us today for expert advice and a free quotation on
            your next clothing project.
          </p>
        </div>
      </section>
    </div>
  );
}