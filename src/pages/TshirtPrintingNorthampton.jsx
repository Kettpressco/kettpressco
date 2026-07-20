import { useEffect } from "react";
import RelatedProducts from "../components/RelatedProducts";

const serviceCard = {
  background: "#fff",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

export default function TshirtPrintingNorthampton() {
  useEffect(() => {
    document.title =
      "T-Shirt Printing Northampton | Custom Printed T-Shirts | Kett Press Co";

    const existingMeta = document.querySelector(
      'meta[name="description"]'
    );

    const previousContent = existingMeta?.getAttribute("content");

    if (existingMeta) {
      existingMeta.setAttribute(
        "content",
        "Professional T-shirt printing in Northampton for businesses, events, gyms, schools and organisations. Shop custom printed T-shirts or request a quote from Kett Press Co."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Professional T-shirt printing in Northampton for businesses, events, gyms, schools and organisations. Shop custom printed T-shirts or request a quote from Kett Press Co.";
      document.head.appendChild(meta);

      return () => {
        document.head.removeChild(meta);
      };
    }

    return () => {
      if (existingMeta && previousContent) {
        existingMeta.setAttribute("content", previousContent);
      }
    };
  }, []);

  const sectionStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "60px 20px",
  };

  const buttonStyle = {
    display: "inline-block",
    background: "#f97316",
    color: "#fff",
    padding: "14px 30px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "700",
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    background: "#111",
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
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "40px 20px 20px",
        }}
      >
        <div
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/images/tshirt4.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            textAlign: "center",
            padding: "120px 20px",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              maxWidth: "850px",
              margin: "0 auto",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(40px,5vw,60px)",
                marginBottom: "20px",
              }}
            >
              T-Shirt Printing Northampton
            </h1>

            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.7",
                marginBottom: "10px",
              }}
            >
              Custom printed T-shirts for businesses, events, gyms, schools,
              clubs and organisations across Northampton and Northamptonshire.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.8",
                opacity: 0.95,
              }}
            >
              Order personalised clothing online or contact Kett Press Co for
              help with larger and more complex printing requirements.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                marginTop: "30px",
                flexWrap: "wrap",
              }}
            >
              <a href="#shop-tshirts" style={buttonStyle}>
                Shop T-Shirts
              </a>

              <a href="/#quote" style={secondaryButtonStyle}>
                Get a Quote
              </a>

              <a
                href="https://wa.me/447770118148"
                target="_blank"
                rel="noreferrer"
                style={{
                  ...buttonStyle,
                  background: "#25D366",
                }}
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={sectionStyle}>
        <div style={serviceCard}>
          <h2>Custom T-Shirt Printing In Northampton</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Kett Press Co provides professional T-shirt printing in Northampton
            for businesses, events, gyms, schools, clubs and organisations.
            Whether you need one personalised shirt or branded clothing for a
            larger team, we can help you create custom printed garments for your
            requirements.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            We are based in Kettering, Northamptonshire, and provide custom
            clothing services for customers throughout Northampton and the
            surrounding area.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Our T-shirt printing service is suitable for company uniforms,
            promotional clothing, events, clubs, fitness businesses, schools,
            charities and individuals looking for personalised garments.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section style={sectionStyle}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "32px",
          }}
        >
          Our T-Shirt Printing Services In Northampton
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          <div style={serviceCard}>
            <h3>Custom Business T-Shirts</h3>

            <p style={{ lineHeight: "1.8", color: "#555" }}>
              Professionally printed T-shirts for businesses, employees,
              contractors and customer-facing teams.
            </p>
          </div>

          <div style={serviceCard}>
            <h3>Event T-Shirt Printing</h3>

            <p style={{ lineHeight: "1.8", color: "#555" }}>
              Custom T-shirts for events, celebrations, promotions, charity
              activities and special occasions.
            </p>
          </div>

          <div style={serviceCard}>
            <h3>Gym & Fitness Clothing</h3>

            <p style={{ lineHeight: "1.8", color: "#555" }}>
              Personalised clothing for gyms, fitness trainers, sports groups
              and activewear brands.
            </p>
          </div>

          <div style={serviceCard}>
            <h3>Staff & Team Clothing</h3>

            <p style={{ lineHeight: "1.8", color: "#555" }}>
              Printed team clothing designed to help your employees or members
              look consistent and recognisable.
            </p>
          </div>

          <div style={serviceCard}>
            <h3>Promotional T-Shirts</h3>

            <p style={{ lineHeight: "1.8", color: "#555" }}>
              Custom printed clothing for marketing campaigns, giveaways,
              launches and brand promotion.
            </p>
          </div>

          <div style={serviceCard}>
            <h3>Personalised T-Shirts</h3>

            <p style={{ lineHeight: "1.8", color: "#555" }}>
              Create custom T-shirts with your own artwork, logo, message or
              design.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        style={{
          background: "#fff",
          padding: "70px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "35px",
              fontSize: "32px",
            }}
          >
            Why Choose Kett Press Co?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: "20px",
            }}
          >
            <div style={serviceCard}>
              <h3>Quality Printing</h3>

              <p style={{ lineHeight: "1.8", color: "#555" }}>
                We focus on producing clean and professional prints for custom
                clothing orders.
              </p>
            </div>

            <div style={serviceCard}>
              <h3>No Large Minimum Required</h3>

              <p style={{ lineHeight: "1.8", color: "#555" }}>
                We can help with both smaller personalised orders and larger
                business requirements.
              </p>
            </div>

            <div style={serviceCard}>
              <h3>Local Northamptonshire Business</h3>

              <p style={{ lineHeight: "1.8", color: "#555" }}>
                Kett Press Co is based in Kettering and serves customers across
                Northamptonshire.
              </p>
            </div>

            <div style={serviceCard}>
              <h3>Bulk Order Options</h3>

              <p style={{ lineHeight: "1.8", color: "#555" }}>
                Larger teams and organisations can contact us to discuss
                quantity requirements and pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SHOP SECTION */}
      <section
        id="shop-tshirts"
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
              maxWidth: "800px",
              margin: "0 auto 40px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem,4vw,2.8rem)",
                marginBottom: "15px",
              }}
            >
              Shop Custom T-Shirts
            </h2>

            <p
              style={{
                lineHeight: "1.8",
                color: "#555",
                fontSize: "1.05rem",
              }}
            >
              Browse popular T-shirts available for custom printing. Choose your
              garment, colour and size, then personalise your order with your
              artwork or business logo.
            </p>
          </div>

          <RelatedProducts
            categories={[
              "T-Shirt",
              "Tshirt",
              "T Shirt",
            ]}
            limit={8}
            title="Popular T-Shirts For Custom Printing"
          />
        </div>
      </section>

      {/* WHO WE PRINT FOR */}
      <section style={sectionStyle}>
        <div style={serviceCard}>
          <h2>Who Uses Our Northampton T-Shirt Printing Service?</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Custom printed T-shirts are suitable for a wide variety of local
            businesses, groups and organisations.
          </p>

          <ul
            style={{
              columns: 2,
              lineHeight: "2",
              color: "#444",
            }}
          >
            <li>Local Businesses</li>
            <li>Construction Companies</li>
            <li>Gyms & Personal Trainers</li>
            <li>Schools</li>
            <li>Charities</li>
            <li>Churches</li>
            <li>Sports Clubs</li>
            <li>Community Groups</li>
            <li>Events</li>
            <li>Hospitality Businesses</li>
            <li>Retail Teams</li>
            <li>Start-Up Businesses</li>
          </ul>
        </div>
      </section>

      {/* PRINTING */}
      <section
        style={{
          background: "#fff",
          padding: "70px 20px",
        }}
      >
        <div style={sectionStyle}>
          <div style={serviceCard}>
            <h2>Professional DTF T-Shirt Printing</h2>

            <p style={{ lineHeight: "1.9", color: "#444" }}>
              We use DTF printing for many of our custom clothing orders. This
              method can reproduce colourful, detailed designs and is suitable
              for many popular garment types.
            </p>

            <p style={{ lineHeight: "1.9", color: "#444" }}>
              Your artwork, garment choice and intended use can all affect the
              best way to produce your custom clothing. Contact us if you need
              help choosing the right option for your order.
            </p>

            <p style={{ lineHeight: "1.9", color: "#444" }}>
              You can learn more about our local custom clothing services on our{" "}
              <a
                href="/custom-t-shirt-printing-northampton"
                style={linkStyle}
              >
                custom T-shirt printing Northampton
              </a>{" "}
              page.
            </p>
          </div>
        </div>
      </section>

      {/* LOCAL AREA */}
      <section style={sectionStyle}>
        <div style={serviceCard}>
          <h2>Serving Northampton & Northamptonshire</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Kett Press Co is based in Kettering and provides personalised
            clothing for customers across Northampton and the wider
            Northamptonshire area.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Customers outside Northampton can also explore our{" "}
            <a href="/t-shirt-printing-kettering" style={linkStyle}>
              T-shirt printing in Kettering
            </a>
            ,{" "}
            <a
              href="/t-shirt-printing-wellingborough"
              style={linkStyle}
            >
              T-shirt printing in Wellingborough
            </a>{" "}
            and{" "}
            <a href="/t-shirt-printing-corby" style={linkStyle}>
              T-shirt printing in Corby
            </a>{" "}
            services.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          background: "#f8fafc",
          padding: "70px 20px",
        }}
      >
        <div style={sectionStyle}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "40px",
              fontSize: "32px",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div
            style={{
              display: "grid",
              gap: "20px",
            }}
          >
            <div style={serviceCard}>
              <h3>Do you offer T-shirt printing in Northampton?</h3>

              <p style={{ lineHeight: "1.8", color: "#555" }}>
                Yes. Kett Press Co provides custom printed clothing for
                businesses, groups and individuals across Northampton and
                Northamptonshire.
              </p>
            </div>

            <div style={serviceCard}>
              <h3>Can I order a small number of T-shirts?</h3>

              <p style={{ lineHeight: "1.8", color: "#555" }}>
                Yes. We can handle smaller personalised orders as well as larger
                requirements for businesses and organisations.
              </p>
            </div>

            <div style={serviceCard}>
              <h3>Can you print my business logo?</h3>

              <p style={{ lineHeight: "1.8", color: "#555" }}>
                Yes. You can provide your logo or artwork when placing your
                custom clothing order.
              </p>
            </div>

            <div style={serviceCard}>
              <h3>Can I order online?</h3>

              <p style={{ lineHeight: "1.8", color: "#555" }}>
                Yes. You can browse selected T-shirts on this page and continue
                through the online ordering process.
              </p>
            </div>

            <div style={serviceCard}>
              <h3>Do you offer larger business orders?</h3>

              <p style={{ lineHeight: "1.8", color: "#555" }}>
                Yes. Businesses, schools, clubs and organisations can contact us
                for help with larger custom clothing orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={sectionStyle}>
        <div
          style={{
            background: "#111",
            color: "#fff",
            padding: "60px 30px",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          <h2>Order Custom T-Shirts In Northampton</h2>

          <p
            style={{
              maxWidth: "750px",
              margin: "20px auto",
              lineHeight: "1.8",
            }}
          >
            Looking for professional T-shirt printing in Northampton? Browse
            our available garments online or contact Kett Press Co for help with
            your custom clothing order.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
              marginTop: "25px",
            }}
          >
            <a href="#shop-tshirts" style={buttonStyle}>
              Shop T-Shirts
            </a>

            <a
              href="/#quote"
              style={{
                ...buttonStyle,
                background: "#fff",
                color: "#111",
              }}
            >
              Request A Quote
            </a>

            <a
              href="tel:07770118148"
              style={{
                ...buttonStyle,
                background: "#25D366",
              }}
            >
              Call 07770 118148
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}