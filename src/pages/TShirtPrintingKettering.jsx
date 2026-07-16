import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import RelatedProducts from "../components/RelatedProducts";

const sectionStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "70px 20px",
};

const serviceCard = {
  background: "#fff",
  padding: "28px",
  borderRadius: "16px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
  height: "100%",
};

const primaryButton = {
  display: "inline-block",
  background: "#f97316",
  color: "#fff",
  border: "none",
  padding: "15px 30px",
  borderRadius: "9px",
  textDecoration: "none",
  fontWeight: "800",
  cursor: "pointer",
};

const darkButton = {
  display: "inline-block",
  background: "#111827",
  color: "#fff",
  border: "1px solid #374151",
  padding: "15px 30px",
  borderRadius: "9px",
  textDecoration: "none",
  fontWeight: "800",
  cursor: "pointer",
};

const whatsappButton = {
  display: "inline-block",
  background: "#16a34a",
  color: "#fff",
  border: "none",
  padding: "15px 30px",
  borderRadius: "9px",
  textDecoration: "none",
  fontWeight: "800",
  cursor: "pointer",
};

const textStyle = {
  lineHeight: "1.9",
  color: "#4b5563",
  fontSize: "1.02rem",
};

const faqItems = [
  {
    question:
      "How much does T-shirt printing in Kettering cost?",
    answer:
      "The price depends on the garment, quantity and printing options you choose. Standard front printing is included in the customised product price shown in our online shop, with optional extras such as back and sleeve printing available.",
  },
  {
    question:
      "Do you accept single T-shirt orders?",
    answer:
      "Yes. Kett Press Co accepts small orders, including single personalised T-shirts, as well as larger orders for businesses, teams, schools, churches and events.",
  },
  {
    question:
      "Can I upload my own logo or artwork?",
    answer:
      "Yes. You can upload your logo, design or artwork directly from the product customisation page when placing your order online.",
  },
  {
    question:
      "Can you help if my artwork is not ready for printing?",
    answer:
      "Yes. Artwork editing and new artwork design options are available when customising selected products online.",
  },
  {
    question:
      "Do you offer local collection in Kettering?",
    answer:
      "Yes. Kett Press Co is based in Kettering and local collection is available. UK delivery is also available for customers ordering from further away.",
  },
  {
    question:
      "Do you offer bulk T-shirt printing?",
    answer:
      "Yes. We print larger quantities for businesses, events, organisations and teams. Bulk discounts may apply depending on the order quantity.",
  },
];

export default function TshirtPrintingKettering() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div
      style={{
        background: "#f8fafc",
      }}
    >
      <Helmet>
        <title>
          T-Shirt Printing Kettering | Custom Printed T-Shirts | Kett Press Co
        </title>

        <meta
          name="description"
          content="Professional T-shirt printing in Kettering for businesses, events, schools, gyms and individuals. Order custom printed T-shirts online with artwork upload, secure payment and local collection from Kett Press Co."
        />

        <link
          rel="canonical"
          href="https://www.kettpressco.com/t-shirt-printing-kettering"
        />

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* ======================================
          HERO
      ====================================== */}

      <section
        style={{
          backgroundImage:
            "linear-gradient(rgba(3,7,18,0.78), rgba(3,7,18,0.78)), url('/images/tshirt.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          textAlign: "center",
          padding: "110px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "920px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontWeight: "800",
              fontSize: "0.85rem",
              color: "#fed7aa",
              marginBottom: "15px",
            }}
          >
            Local Custom Printing in Kettering
          </p>

          <h1
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4.4rem)",
              lineHeight: "1.1",
              margin: "0 0 22px",
              letterSpacing: "-1.5px",
            }}
          >
            T-Shirt Printing in Kettering
          </h1>

          <p
            style={{
              maxWidth: "780px",
              margin: "0 auto",
              fontSize: "1.15rem",
              lineHeight: "1.8",
              color: "#e5e7eb",
            }}
          >
            Professional custom T-shirt printing for individuals,
            businesses, events, gyms, schools, charities and organisations
            in Kettering and across Northamptonshire.
          </p>

          <p
            style={{
              maxWidth: "760px",
              margin: "18px auto 0",
              color: "#d1d5db",
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            Choose your garment online, select your size and colour, add your
            printing options, upload your artwork and complete your order
            securely.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "14px",
              marginTop: "32px",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/shop?category=T-Shirts"
              style={primaryButton}
            >
              Shop Custom T-Shirts
            </Link>

            <a
              href="/#quote"
              style={darkButton}
            >
              Get a Free Quote
            </a>

            <a
              href="https://wa.me/447770118148"
              target="_blank"
              rel="noreferrer"
              style={whatsappButton}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ======================================
          TRUST BAR
      ====================================== */}

      <section
        style={{
          background: "#fff",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "24px 20px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "18px",
            textAlign: "center",
            fontWeight: "800",
            color: "#374151",
          }}
        >
          <div>✓ Single & Bulk Orders</div>

          <div>🎨 Upload Artwork Online</div>

          <div>📍 Kettering Collection</div>

          <div>🔒 Secure Online Payment</div>
        </div>
      </section>

      {/* ======================================
          INTRODUCTION
      ====================================== */}

      <section style={sectionStyle}>
        <div
          style={{
            background: "#fff",
            padding: "40px",
            borderRadius: "18px",
            boxShadow:
              "0 8px 25px rgba(15,23,42,0.06)",
          }}
        >
          <h2
            style={{
              fontSize:
                "clamp(1.8rem, 4vw, 2.6rem)",
              color: "#111827",
              marginTop: 0,
              marginBottom: "20px",
            }}
          >
            Custom T-Shirt Printing for Kettering
          </h2>

          <p style={textStyle}>
            Kett Press Co provides professional T-shirt printing in Kettering
            for customers who need personalised clothing for businesses,
            staff teams, events, gyms, schools, charities, churches, clubs
            and community organisations.
          </p>

          <p style={textStyle}>
            Whether you need one personalised T-shirt or a larger branded
            clothing order, our online shop makes it easy to choose your
            garment, select your size and colour, add printing options and
            upload your artwork.
          </p>

          <p style={textStyle}>
            We are based in Kettering, Northamptonshire, making us a convenient
            choice for local customers who want a nearby T-shirt printing
            service, while UK delivery is also available for online orders.
          </p>

          <div
            style={{
              marginTop: "28px",
            }}
          >
            <Link
              to="/shop?category=T-Shirts"
              style={primaryButton}
            >
              Browse Printed T-Shirts
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================
          SERVICES
      ====================================== */}

      <section style={sectionStyle}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "45px",
          }}
        >
          <p
            style={{
              color: "#ea580c",
              textTransform: "uppercase",
              fontSize: "13px",
              letterSpacing: "1.5px",
              fontWeight: "900",
            }}
          >
            Custom Printing Services
          </p>

          <h2
            style={{
              fontSize:
                "clamp(1.8rem, 4vw, 2.7rem)",
              color: "#111827",
              marginBottom: "15px",
            }}
          >
            T-Shirt Printing for Businesses, Events & Individuals
          </h2>

          <p
            style={{
              ...textStyle,
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            Custom printed clothing for a wide range of customers throughout
            Kettering and Northamptonshire.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          <div style={serviceCard}>
            <h3>
              Business T-Shirt Printing
            </h3>

            <p style={textStyle}>
              Custom branded T-shirts for local businesses, company teams,
              staff uniforms and promotional campaigns.
            </p>
          </div>

          <div style={serviceCard}>
            <h3>
              Event T-Shirt Printing
            </h3>

            <p style={textStyle}>
              Custom printed clothing for events, fundraisers, celebrations,
              clubs and promotional activities.
            </p>
          </div>

          <div style={serviceCard}>
            <h3>
              Gym & Fitness Clothing
            </h3>

            <p style={textStyle}>
              Printed T-shirts and branded garments for gyms, personal
              trainers, sports teams and fitness businesses.
            </p>
          </div>

          <div style={serviceCard}>
            <h3>
              Staff & Team Clothing
            </h3>

            <p style={textStyle}>
              Help your employees or team look professional and consistent
              with customised clothing featuring your branding.
            </p>
          </div>

          <div style={serviceCard}>
            <h3>
              Personalised T-Shirts
            </h3>

            <p style={textStyle}>
              Create individual printed T-shirts using your own design, logo,
              text or artwork.
            </p>
          </div>

          <div style={serviceCard}>
            <h3>
              School & Group Orders
            </h3>

            <p style={textStyle}>
              Printed T-shirts for schools, churches, charities, clubs,
              community groups and organisations.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================
          WHY CHOOSE KETT PRESS CO
      ====================================== */}

      <section style={sectionStyle}>
        <div
          style={{
            background: "#111827",
            color: "#fff",
            padding: "50px 35px",
            borderRadius: "22px",
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
                fontSize:
                  "clamp(1.8rem, 4vw, 2.6rem)",
                marginTop: 0,
                marginBottom: "15px",
              }}
            >
              Why Choose Kett Press Co for T-Shirt Printing in Kettering?
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
              }}
            >
              Flexible custom printing with a simple online ordering process
              and local service from Kettering.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                title: "Quality DTF Printing",
                text:
                  "Professional printing suitable for logos, artwork and detailed designs.",
              },
              {
                title: "Single Orders Welcome",
                text:
                  "Order one personalised garment or larger quantities for your organisation.",
              },
              {
                title: "Bulk Order Savings",
                text:
                  "Larger orders may benefit from bulk discounts.",
              },
              {
                title: "Artwork Upload",
                text:
                  "Upload your design directly when customising your garment online.",
              },
              {
                title: "Local Kettering Service",
                text:
                  "We are based locally in Kettering with collection available.",
              },
              {
                title: "Secure Online Ordering",
                text:
                  "Customise your product and complete payment securely online.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#1f2937",
                  padding: "25px",
                  borderRadius: "14px",
                  border:
                    "1px solid #374151",
                }}
              >
                <h3
                  style={{
                    marginTop: 0,
                    color: "#fff",
                  }}
                >
                  ✓ {item.title}
                </h3>

                <p
                  style={{
                    color: "#d1d5db",
                    lineHeight: "1.7",
                    marginBottom: 0,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          PRODUCTS
      ====================================== */}

      <RelatedProducts
        categories={["T-Shirt"]}
        limit={4}
        title="Popular Custom T-Shirts"
      />

      {/* ======================================
          HOW TO ORDER
      ====================================== */}

      <section style={sectionStyle}>
        <div
          style={{
            background: "#fff",
            padding: "40px 30px",
            borderRadius: "18px",
            boxShadow:
              "0 8px 25px rgba(15,23,42,0.06)",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            <h2
              style={{
                fontSize:
                  "clamp(1.8rem, 4vw, 2.5rem)",
                color: "#111827",
                marginBottom: "15px",
              }}
            >
              How to Order Custom Printed T-Shirts
            </h2>

            <p
              style={{
                ...textStyle,
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Ordering personalised T-shirts from Kett Press Co is simple.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "25px",
            }}
          >
            {[
              {
                number: "1",
                title:
                  "Choose Your T-Shirt",
                text:
                  "Browse our online shop and select the garment you want.",
              },
              {
                number: "2",
                title:
                  "Select Size & Colour",
                text:
                  "Choose your preferred garment size, colour and quantity.",
              },
              {
                number: "3",
                title:
                  "Customise Your Printing",
                text:
                  "Add your required printing positions and upload your artwork.",
              },
              {
                number: "4",
                title:
                  "Complete Your Order",
                text:
                  "Add your customised garment to the cart and checkout securely.",
              },
            ].map((step) => (
              <div
                key={step.number}
                style={{
                  padding: "25px",
                  background: "#f8fafc",
                  borderRadius: "14px",
                  border:
                    "1px solid #e5e7eb",
                }}
              >
                <div
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    background: "#f97316",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "900",
                    marginBottom: "18px",
                  }}
                >
                  {step.number}
                </div>

                <h3>
                  {step.title}
                </h3>

                <p style={textStyle}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "35px",
            }}
          >
            <Link
              to="/shop?category=T-Shirts"
              style={primaryButton}
            >
              Start Your T-Shirt Order
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================
          LOCAL SEO / LOCAL TRUST
      ====================================== */}

      <section style={sectionStyle}>
        <div
          style={{
            background: "#fff",
            padding: "40px",
            borderRadius: "18px",
            boxShadow:
              "0 8px 25px rgba(15,23,42,0.06)",
          }}
        >
          <h2
            style={{
              fontSize:
                "clamp(1.8rem, 4vw, 2.5rem)",
              color: "#111827",
              marginTop: 0,
              marginBottom: "20px",
            }}
          >
            Local T-Shirt Printers in Kettering
          </h2>

          <p style={textStyle}>
            If you are searching for T-shirt printing in Kettering, Kett Press
            Co offers a local custom clothing service with online ordering and
            local collection available.
          </p>

          <p style={textStyle}>
            We work with individuals, businesses, tradespeople, schools,
            gyms, churches, charities, clubs and event organisers who need
            personalised T-shirts and branded clothing.
          </p>

          <p style={textStyle}>
            Our Kettering location also makes us convenient for customers
            across Burton Latimer, Rothwell, Desborough, Corby,
            Wellingborough and the wider Northamptonshire area.
          </p>

          <div
            style={{
              marginTop: "25px",
              padding: "20px",
              background: "#f8fafc",
              borderRadius: "12px",
              border:
                "1px solid #e5e7eb",
            }}
          >
            <strong
              style={{
                display: "block",
                color: "#111827",
                marginBottom: "8px",
              }}
            >
              Kett Press Co
            </strong>

            <p
              style={{
                margin: 0,
                color: "#4b5563",
                lineHeight: "1.7",
              }}
            >
              10 Market Street
              <br />
              The Shops at the Yards
              <br />
              Kettering
              <br />
              NN16 0AH
            </p>
          </div>
        </div>
      </section>

      {/* ======================================
          USEFUL INTERNAL LINKS
      ====================================== */}

      <section
        style={{
          ...sectionStyle,
          paddingTop: "20px",
        }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#111827",
              fontSize:
                "clamp(1.7rem, 4vw, 2.3rem)",
            }}
          >
            Helpful Custom Printing Guides
          </h2>

          <p
            style={{
              ...textStyle,
              maxWidth: "700px",
              margin: "0 auto 30px",
            }}
          >
            Learn more about pricing, printing methods and choosing the right
            option for your custom clothing.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <Link
              to="/t-shirt-printing-cost-guide"
              style={darkButton}
            >
              T-Shirt Printing Cost Guide
            </Link>

            <Link
              to="/dtf-vs-vinyl-printing"
              style={darkButton}
            >
              DTF vs Vinyl Printing
            </Link>

            <Link
              to="/how-long-does-dtf-printing-last"
              style={darkButton}
            >
              How Long Does DTF Printing Last?
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================
          FAQ
      ====================================== */}

      <section style={sectionStyle}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            <p
              style={{
                color: "#ea580c",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                fontSize: "13px",
                fontWeight: "900",
              }}
            >
              T-Shirt Printing FAQ
            </p>

            <h2
              style={{
                fontSize:
                  "clamp(1.8rem, 4vw, 2.6rem)",
                color: "#111827",
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gap: "14px",
            }}
          >
            {faqItems.map((faq) => (
              <details
                key={faq.question}
                style={{
                  background: "#fff",
                  border:
                    "1px solid #e5e7eb",
                  borderRadius: "12px",
                  padding: "20px 22px",
                }}
              >
                <summary
                  style={{
                    fontWeight: "800",
                    color: "#111827",
                    fontSize: "17px",
                    cursor: "pointer",
                  }}
                >
                  {faq.question}
                </summary>

                <p
                  style={{
                    ...textStyle,
                    marginBottom: 0,
                    paddingTop: "10px",
                  }}
                >
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          FINAL CTA
      ====================================== */}

      <section
        style={{
          background: "#111827",
          color: "#fff",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              color: "#fb923c",
              fontWeight: "900",
              letterSpacing: "1.5px",
              fontSize: "13px",
              textTransform: "uppercase",
            }}
          >
            Start Your Order
          </p>

          <h2
            style={{
              fontSize:
                "clamp(2rem, 4vw, 3rem)",
              marginBottom: "20px",
            }}
          >
            Ready to Order Custom T-Shirts in Kettering?
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.8",
              color: "#d1d5db",
              fontSize: "1.05rem",
            }}
          >
            Browse our T-shirt range and customise your order online, or
            contact Kett Press Co if you need help with a larger business,
            team or event order.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "14px",
              flexWrap: "wrap",
              marginTop: "30px",
            }}
          >
            <Link
              to="/shop?category=T-Shirts"
              style={primaryButton}
            >
              Shop Custom T-Shirts
            </Link>

            <a
              href="/#quote"
              style={darkButton}
            >
              Request a Quote
            </a>

            <a
              href="https://wa.me/447770118148"
              target="_blank"
              rel="noreferrer"
              style={whatsappButton}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}