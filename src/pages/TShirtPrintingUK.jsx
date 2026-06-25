import { Helmet } from "react-helmet";

export default function TShirtPrintingUK() {
  const sectionStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "60px 20px",
  };

  const cardStyle = {
    background: "#fff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
    marginBottom: "30px",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "12px",
    objectFit: "cover",
  };

  return (
    <>
      <Helmet>
        <title>T Shirt Printing UK | Personalised & Custom T-Shirts UK</title>

        <meta
          name="description"
          content="Professional t shirt printing UK service from Kett Press Co. Personalised t-shirts, custom clothing, workwear, event shirts and DTF printing with nationwide UK delivery."
        />

        <meta
          name="keywords"
          content="t shirt printing uk, personalised t shirts uk, custom t shirts uk, printed t shirts uk, dtf printing uk, custom clothing uk"
        />

        <link
          rel="canonical"
          href="https://www.kettpressco.co.uk/t-shirt-printing-uk"
        />
      </Helmet>

      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
          color: "#fff",
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "20px",
            }}
          >
            T Shirt Printing UK
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Looking for professional t shirt printing in the UK? Kett Press Co
            supplies personalised t-shirts, custom clothing, branded workwear,
            event merchandise and DTF printed garments with nationwide UK
            delivery.
          </p>

          <a
            href="/contact"
            style={{
              display: "inline-block",
              marginTop: "30px",
              background: "#f97316",
              color: "#fff",
              padding: "15px 35px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Request a Quote
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Custom T Shirt Printing Across the UK</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Kett Press Co provides high-quality custom t shirt printing for
            customers across the United Kingdom. Whether you need a single
            personalised t-shirt, branded workwear for your team, promotional
            clothing for an event or bulk printed garments for your business, we
            offer professional printing and reliable nationwide delivery.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Using modern Direct To Film (DTF) printing technology, we produce
            vibrant, durable prints that maintain their appearance wash after
            wash. Our printing process works on cotton, polyester and blended
            fabrics, giving customers flexibility when choosing garments.
          </p>
        </div>

        {/* IMAGE */}
        <img
          src="/images/tshirt2.jpg"
          alt="Custom T Shirt Printing UK"
          style={imageStyle}
        />
      </section>

      {/* SERVICES */}
      <section
        style={{
          background: "#f8fafc",
          padding: "60px 20px",
        }}
      >
        <div style={sectionStyle}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Our T Shirt Printing Services
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "25px",
            }}
          >
            <div style={cardStyle}>
              <h3>Personalised T-Shirts</h3>
              <p>
                Custom names, slogans, graphics and designs for personal use,
                gifts and special occasions.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Business Clothing</h3>
              <p>
                Professional branded clothing for businesses, tradespeople,
                retail teams and service providers.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Event Merchandise</h3>
              <p>
                Printed t-shirts for charity events, church groups, sports
                clubs, schools and community organisations.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Workwear Printing</h3>
              <p>
                Durable printed workwear designed for everyday use in demanding
                working environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DTF SECTION */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Why We Use DTF Printing</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            DTF (Direct To Film) printing is one of the most versatile garment
            decoration methods available today. It allows us to produce detailed
            full-colour prints with excellent durability and flexibility.
          </p>

          <ul
            style={{
              lineHeight: "2",
              color: "#444",
            }}
          >
            <li>Bright and vibrant colours</li>
            <li>Excellent wash durability</li>
            <li>Suitable for cotton and polyester garments</li>
            <li>No minimum order quantity</li>
            <li>Ideal for both small and large orders</li>
            <li>Sharp logo and artwork reproduction</li>
          </ul>
        </div>

        <img
          src="/images/Polo.jpg"
          alt="DTF Printed Clothing"
          style={imageStyle}
        />
      </section>

      {/* UK COVERAGE */}
      <section
        style={{
          background: "#f8fafc",
          padding: "60px 20px",
        }}
      >
        <div style={sectionStyle}>
          <div style={cardStyle}>
            <h2>Nationwide UK Delivery</h2>

            <p style={{ lineHeight: "1.9", color: "#444" }}>
              Although we are based in Kettering, Northamptonshire, we provide
              t shirt printing services throughout the UK. Customers regularly
              order from:
            </p>

            <ul
              style={{
                columns: 2,
                lineHeight: "2",
                color: "#444",
              }}
            >
              <li>London</li>
              <li>Birmingham</li>
              <li>Manchester</li>
              <li>Liverpool</li>
              <li>Leeds</li>
              <li>Sheffield</li>
              <li>Nottingham</li>
              <li>Leicester</li>
              <li>Northampton</li>
              <li>Coventry</li>
              <li>Bristol</li>
              <li>Milton Keynes</li>
            </ul>

            <p style={{ lineHeight: "1.9", color: "#444" }}>
              We make ordering simple and deliver custom printed garments
              directly to your door anywhere in the United Kingdom.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section style={sectionStyle}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Recent Printing Work
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "20px",
          }}
        >
          <img
            src="/images/tshirt3.jpg"
            alt="Printed Event T-Shirts"
            style={imageStyle}
          />

          <img
            src="/images/PoloTshirt.jpg"
            alt="Custom Workwear"
            style={imageStyle}
          />

          <img
            src="/images/Polo1.jpg"
            alt="Branded Polo Shirts"
            style={imageStyle}
          />
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          background: "#f8fafc",
          padding: "60px 20px",
        }}
      >
        <div style={sectionStyle}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={cardStyle}>
            <h3>Do you offer UK-wide delivery?</h3>
            <p>
              Yes. We supply customers throughout England, Scotland, Wales and
              Northern Ireland.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Is there a minimum order quantity?</h3>
            <p>
              No. We can produce single garments as well as larger bulk orders.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>What file types do you accept?</h3>
            <p>
              PNG, PDF, SVG, AI and high-resolution JPG files are preferred for
              the best print quality.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>How durable are DTF prints?</h3>
            <p>
              DTF prints are highly durable and designed to withstand regular
              washing while maintaining colour and detail.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={sectionStyle}>
        <div
          style={{
            ...cardStyle,
            textAlign: "center",
          }}
        >
          <h2>Get a Quote Today</h2>

          <p
            style={{
              lineHeight: "1.9",
              color: "#444",
            }}
          >
            Whether you need personalised t-shirts, branded workwear or custom
            clothing for an event, Kett Press Co is ready to help.
          </p>

          <p>
            <strong>Kett Press Co</strong>
            <br />
            10 Market Street
            <br />
            The Shops at the Yards
            <br />
            Kettering
            <br />
            NN16 0AH
          </p>

          <a
            href="/contact"
            style={{
              display: "inline-block",
              background: "#f97316",
              color: "#fff",
              padding: "15px 35px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              marginTop: "15px",
            }}
          >
            Contact Us
          </a>
        </div>

        <iframe
          title="Kett Press Co Location"
          src="https://www.google.com/maps?q=10%20Market%20Street%20Kettering%20NN16%200AH&output=embed"
          width="100%"
          height="450"
          style={{
            border: 0,
            borderRadius: "16px",
          }}
          loading="lazy"
        />
      </section>
    </>
  );
}