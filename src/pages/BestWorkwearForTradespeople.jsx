import RelatedProducts from "../components/RelatedProducts";

export default function BestWorkwearForTradespeople() {
  const sectionStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "60px 20px",
  };

  const cardStyle = {
    background: "#fff",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
  };

  const buttonStyle = {
    display: "inline-block",
    marginTop: "20px",
    background: "#000",
    color: "#fff",
    padding: "14px 30px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
  };

  const orangeButtonStyle = {
    display: "inline-block",
    marginTop: "20px",
    background: "#f97316",
    color: "#fff",
    padding: "14px 30px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
  };

  const linkStyle = {
    color: "#ea580c",
    fontWeight: "600",
    textDecoration: "underline",
  };

  return (
    <div style={{ background: "#f8f9fa" }}>

      {/* HERO */}
      <section
        style={{
          background: "#111",
          color: "#fff",
          textAlign: "center",
          padding: "90px 20px",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "clamp(2rem,5vw,3.5rem)",
              marginBottom: "20px",
            }}
          >
            Best Workwear For Tradespeople
          </h1>

          <p
            style={{
              lineHeight: "1.8",
              fontSize: "1.1rem",
            }}
          >
            Choosing the right workwear can help tradespeople stay comfortable,
            look professional and promote their business while working.
            Kett Press Co supplies custom branded workwear for builders,
            electricians, plumbers, landscapers, mechanics and other trades
            across Kettering, Northampton and Northamptonshire.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
              marginTop: "20px",
            }}
          >
            <a href="#shop-trade-workwear" style={orangeButtonStyle}>
              Shop Workwear
            </a>

            <a
              href="/branded-workwear-printing-northamptonshire"
              style={{
                ...buttonStyle,
                background: "#fff",
                color: "#111",
              }}
            >
              Branded Workwear Northamptonshire
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Why Quality Workwear Matters For Tradespeople</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Your workwear represents your business every day. Clean,
            professionally branded clothing helps customers identify your team
            and can create a more professional first impression.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Durable garments can also improve comfort during long working days,
            while suitable jackets, trousers and layers help workers adapt to
            changing weather and working environments.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Whether you are working on a construction site, visiting customer
            homes or managing a commercial project, professionally branded
            clothing can help increase visibility for your company.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Businesses looking for custom uniforms locally can explore our{" "}
            <a
              href="/branded-workwear-printing-northamptonshire"
              style={linkStyle}
            >
              branded workwear printing in Northamptonshire
            </a>{" "}
            service for personalised business clothing and workwear.
          </p>
        </div>
      </section>

      {/* IMAGE */}
      <section style={sectionStyle}>
        <img
          src="/images/Polo.jpg"
          alt="Branded workwear for tradespeople in Northamptonshire"
          style={{
            width: "100%",
            borderRadius: "15px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.12)",
          }}
        />
      </section>

      {/* RECOMMENDED BY TRADE */}
      <section style={sectionStyle}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "15px",
          }}
        >
          Recommended Workwear By Trade
        </h2>

        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto 40px",
            textAlign: "center",
            color: "#555",
            lineHeight: "1.8",
          }}
        >
          Different trades have different workwear requirements. Here are some
          popular garment choices for businesses and tradespeople.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          <div style={cardStyle}>
            <h3>Builders</h3>

            <p style={{ lineHeight: "1.8", color: "#555" }}>
              Durable polo shirts, hoodies, work trousers, hi-vis clothing and
              jackets are useful choices for construction and building teams.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Electricians</h3>

            <p style={{ lineHeight: "1.8", color: "#555" }}>
              Branded polo shirts, T-shirts and soft shell jackets can provide a
              smart appearance when working in homes and commercial buildings.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Plumbers</h3>

            <p style={{ lineHeight: "1.8", color: "#555" }}>
              Comfortable polo shirts, hoodies and jackets help plumbers create
              a recognisable and consistent business image when visiting
              customers.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Landscapers</h3>

            <p style={{ lineHeight: "1.8", color: "#555" }}>
              Hard-wearing outdoor clothing including hoodies, jackets and
              suitable work trousers can help teams work comfortably outside.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Mechanics</h3>

            <p style={{ lineHeight: "1.8", color: "#555" }}>
              Branded polo shirts, T-shirts, sweatshirts and jackets can give
              garages and workshops a professional and consistent team look.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>General Trades</h3>

            <p style={{ lineHeight: "1.8", color: "#555" }}>
              Custom printed workwear is suitable for painters, decorators,
              carpenters, cleaners, installers and many other service
              businesses.
            </p>
          </div>
        </div>
      </section>

      {/* POPULAR PRODUCTS */}
      <section
        style={{
          background: "#fff",
          padding: "60px 20px",
        }}
      >
        <div style={sectionStyle}>
          <div style={cardStyle}>
            <h2>Popular Workwear For Tradespeople</h2>

            <p style={{ lineHeight: "1.9", color: "#444" }}>
              Many trade businesses choose a combination of lightweight
              clothing for indoor work and durable outerwear for colder
              conditions.
            </p>

            <ul style={{ lineHeight: "2", color: "#444" }}>
              <li>Branded Workwear Polo Shirts</li>
              <li>Custom Printed Hoodies</li>
              <li>Workwear T-Shirts</li>
              <li>Soft Shell Jackets</li>
              <li>Workwear Jackets</li>
              <li>Gilets</li>
              <li>Work Trousers</li>
              <li>Hi-Visibility Clothing</li>
              <li>Sweatshirts</li>
              <li>Branded Team Clothing</li>
            </ul>

            <p style={{ lineHeight: "1.9", color: "#444" }}>
              Adding your company logo can make it easier for customers to
              identify your team while helping your business maintain a
              consistent professional appearance.
            </p>
          </div>
        </div>
      </section>

      {/* SHOP */}
      <section
        id="shop-trade-workwear"
        style={{
          background: "#f8fafc",
          padding: "70px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto 40px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem,4vw,2.8rem)",
                marginBottom: "15px",
              }}
            >
              Shop Workwear For Tradespeople
            </h2>

            <p
              style={{
                lineHeight: "1.8",
                color: "#555",
                fontSize: "1.05rem",
              }}
            >
              Browse popular workwear products suitable for tradespeople,
              contractors and business teams. Choose your garment and
              personalise your order with your company branding.
            </p>
          </div>

          <RelatedProducts
            categories={[
              "Jacket",
              "Gilet",
              "Soft Shell Jacket",
              "Trousers",
              "Polo",
            ]}
            limit={8}
            title="Popular Trade Workwear"
          />
        </div>
      </section>

      {/* PRINTING METHODS */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Choosing The Right Workwear Branding Method</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Different garment types and logos may suit different branding
            methods. DTF printing is suitable for detailed and colourful
            designs on many types of clothing.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            The right option can depend on your artwork, garment choice,
            required finish and order size.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            For workwear printing services across the local area, visit our{" "}
            <a
              href="/branded-workwear-printing-northamptonshire"
              style={linkStyle}
            >
              Northamptonshire branded workwear page
            </a>
            .
          </p>
        </div>
      </section>

      {/* HOW TO CHOOSE */}
      <section
        style={{
          background: "#fff",
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
            How To Choose Workwear For Your Team
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: "25px",
            }}
          >
            <div style={cardStyle}>
              <h3>Consider The Job</h3>

              <p style={{ lineHeight: "1.8", color: "#555" }}>
                Think about whether your team mainly works indoors, outdoors,
                on construction sites or in customer-facing environments.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Choose Practical Clothing</h3>

              <p style={{ lineHeight: "1.8", color: "#555" }}>
                Select garments that allow workers to move comfortably and suit
                the conditions they work in.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Add Consistent Branding</h3>

              <p style={{ lineHeight: "1.8", color: "#555" }}>
                Using consistent colours and logo placement can help your team
                look more organised and recognisable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section style={sectionStyle}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Recent Workwear Projects
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
          }}
        >
          <img
            src="/images/Polo.jpg"
            alt="Branded workwear polo shirt project"
            style={{
              width: "100%",
              borderRadius: "12px",
            }}
          />

          <img
            src="/images/Polo1.jpg"
            alt="Custom printed polo shirt for business"
            style={{
              width: "100%",
              borderRadius: "12px",
            }}
          />

          <img
            src="/images/work1.jpg"
            alt="Custom branded workwear project"
            style={{
              width: "100%",
              borderRadius: "12px",
            }}
          />
        </div>
      </section>

      {/* LOCAL WORKWEAR CTA */}
      <section
        style={{
          background: "#111",
          color: "#fff",
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem,4vw,2.8rem)",
              marginBottom: "20px",
            }}
          >
            Need Branded Workwear In Northamptonshire?
          </h2>

          <p
            style={{
              lineHeight: "1.8",
              fontSize: "1.05rem",
              marginBottom: "25px",
            }}
          >
            Kett Press Co supplies personalised workwear for tradespeople,
            contractors and businesses across Kettering, Northampton and the
            surrounding Northamptonshire area.
          </p>

          <a
            href="/branded-workwear-printing-northamptonshire"
            style={{
              display: "inline-block",
              background: "#f97316",
              color: "#fff",
              padding: "15px 32px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            View Branded Workwear Northamptonshire
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section style={sectionStyle}>
        <div
          style={{
            ...cardStyle,
            textAlign: "center",
            padding: "45px 25px",
          }}
        >
          <h2>Get A Workwear Quote</h2>

          <p
            style={{
              lineHeight: "1.9",
              color: "#444",
              maxWidth: "750px",
              margin: "0 auto 20px",
            }}
          >
            Looking for branded workwear for your team? We supply and print
            professional clothing for businesses throughout Kettering,
            Northampton and Northamptonshire.
          </p>

          <p style={{ lineHeight: "1.8" }}>
            <strong>Kett Press Co</strong>
            <br />
            Kettering, Northamptonshire
            <br />
            Email: info@kettpressco.com
            <br />
            Phone: 07442 514098
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <a href="#shop-trade-workwear" style={orangeButtonStyle}>
              Shop Workwear
            </a>

            <a href="/contact" style={buttonStyle}>
              Request A Quote
            </a>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section style={{ paddingBottom: "60px" }}>
        <iframe
          title="Kett Press Co Kettering Northamptonshire Map"
          src="https://www.google.com/maps?q=Kettering,%20Northamptonshire&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

    </div>
  );
}