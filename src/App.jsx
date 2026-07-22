import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import portfolio from "./data/portfolio";
import reviews from "./data/reviews";
import FeaturedProducts from "./components/FeaturedProducts";

const BRAND = {
  dark: "#111827",
  darker: "#030712",
  orange: "#f97316",
  orangeDark: "#ea580c",
  green: "#16a34a",
  light: "#f8fafc",
  border: "#e5e7eb",
  text: "#374151",
};

const services = [
  {
    title: "Custom T-Shirts",
    text: "Create personalised T-shirts for businesses, events, teams, brands and everyday wear.",
    image: "/images/tshirt4.jpg",
    link: "/shop",
    button: "Shop T-Shirts",
  },
  {
    title: "Branded Workwear",
    text: "Professional workwear printed with your company logo for teams, trades and businesses.",
    image: "/images/PoloTshirt.jpg",
    link: "/shop",
    button: "Shop Workwear",
  },
  {
    title: "Custom Hoodies",
    text: "Premium personalised hoodies for schools, churches, clubs, teams, events and businesses.",
    image: "/images/Tshirt10.jpg",
    link: "/shop",
    button: "Shop Hoodies",
  },
];

const packages = [
  {
    title: "Get Started Package",
    price: "£68",
    image: "/images/tshirt.jpg",
    items: [
      "4 Printed T-Shirts",
      "1 Printed Hoodie or Sweatshirt",
      "Logo Printing Included",
    ],
  },
  {
    title: "Smart Workwear Deal",
    price: "£89",
    image: "/images/workwear.jpg",
    items: [
      "3 Printed T-Shirts",
      "2 Printed Hoodies or Sweatshirts",
      "Logo Printing Included",
    ],
  },
  {
    title: "Business Starter Pack",
    price: "£95.99",
    image: "/images/Polo.jpg",
    items: [
      "4 Printed T-Shirts",
      "1 Printed Hoodie or Sweatshirt",
      "1 Printed Polo Shirt",
      "Logo Printing Included",
    ],
  },
  {
    title: "Best Value Workwear Bundle",
    price: "£120",
    image: "/images/workwear4.jpg",
    popular: true,
    items: [
      "6 Printed T-Shirts",
      "3 Printed Hoodies or Sweatshirts",
      "1 Printed Polo Shirt",
      "Logo Printing Included",
    ],
  },
];

const whyChooseUs = [
  {
    icon: "⚡",
    title: "Fast Turnaround",
    text: "Quick production for customers who need their printed clothing without unnecessary delays.",
  },
  {
    icon: "✓",
    title: "Quality Printing",
    text: "Professional DTF printing designed to deliver colourful, detailed and durable results.",
  },
  {
    icon: "1",
    title: "Small Orders Welcome",
    text: "Need just one personalised garment? You can order small quantities as well as larger runs.",
  },
  {
    icon: "£",
    title: "Bulk Order Savings",
    text: "Ordering for a team, business or event? Larger quantities can benefit from bulk pricing.",
  },
  {
    icon: "🎨",
    title: "Artwork Support",
    text: "Upload your design when ordering and we'll help make sure it is suitable for printing.",
  },
  {
    icon: "📍",
    title: "Local & UK Service",
    text: "Based in Kettering with local collection available and delivery to customers across the UK.",
  },
];

const faqItems = [
  {
    question: "Can I order custom printed clothing online?",
    answer:
      "Yes. Browse our online shop, choose your garment, select your size and colour, choose your printing options and upload your artwork before checkout.",
  },
  {
    question: "Do you accept small orders?",
    answer:
      "Yes. We can help with single personalised garments as well as larger business, workwear, team and event orders.",
  },
  {
    question: "Can you print my company logo?",
    answer:
      "Yes. We print company logos and custom artwork on T-shirts, hoodies, polos, workwear, uniforms and other garments.",
  },
  {
    question: "How long does printing take?",
    answer:
      "Turnaround depends on garment availability, quantity and artwork requirements. We aim to complete orders quickly while maintaining good print quality.",
  },
  {
    question: "Do you deliver across the UK?",
    answer:
      "Yes. Kett Press Co is based in Kettering, Northamptonshire, with local service and UK delivery available.",
  },
];

const seoLinks = [
  ["T-Shirt Printing UK", "/t-shirt-printing-uk"],
  ["Custom T-Shirts UK", "/custom-t-shirts-uk"],
  ["Personalised T-Shirts UK", "/personalised-t-shirts-uk"],
  ["Workwear Printing UK", "/workwear-printing-uk"],
  ["T-Shirt Printing Kettering", "/t-shirt-printing-kettering"],
  ["Workwear Printing Kettering", "/workwear-printing-kettering"],
  ["Custom T-Shirt Printing Northampton", "/custom-t-shirt-printing-northampton"],
  ["T-Shirt Printing Northampton", "/t-shirt-printing-northampton"],
  ["Hoodie Printing Northampton", "/hoodie-printing-northampton"],
  ["T-Shirt Printing Corby", "/t-shirt-printing-corby"],
  ["T-Shirt Printing Wellingborough", "/t-shirt-printing-wellingborough"],
  ["T-Shirt Printing Rugby", "/tshirt-printing-rugby"],
  ["T-Shirt Printing Leicester", "/t-shirt-printing-leicester"],
  ["DTF Printing Northamptonshire", "/dtf-printing-northamptonshire"],
  ["Areas We Cover", "/areas-we-cover"],
];
const productCategories = [
  {
    title: "T-Shirts",
    text: "Custom printed T-shirts for businesses, events, teams, brands and personal orders.",
    image: "/images/tshirt4.jpg",
    link: "/shop?category=T-Shirts",
  },
  {
    title: "Hoodies",
    text: "Personalised hoodies with your logo, artwork or custom design.",
    image: "/images/work10.jpg",
    link: "/shop?category=Hoodies",
  },
  {
    title: "Workwear",
    text: "Professional branded workwear for tradespeople, companies and teams.",
    image: "/images/workwear.jpg",
    link: "/shop?category=Workwear",
  },
  {
    title: "Polo Shirts",
    text: "Smart personalised polo shirts for staff uniforms and business branding.",
    image: "/images/PoloTshirt.jpg",
    link: "/shop?category=Polos",
  },
  {
    title: "Hi-Vis",
    text: "Printed hi-vis clothing for construction, logistics and workplace teams.",
    image: "/images/workwear4.jpg",
    link: "/shop?category=Hi-Vis",
  },
];

export default function App() {
  return (
    <div
      style={{
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        background: "#fff",
        color: BRAND.dark,
      }}
    >
      {/* ANNOUNCEMENT BAR */}

      <div
        style={{
          background: BRAND.orange,
          color: "#fff",
          textAlign: "center",
          padding: "10px 16px",
          fontSize: "14px",
          fontWeight: "700",
        }}
      >
        Fast UK Delivery • Local Kettering Collection • Small & Bulk Orders
        Welcome
      </div>

      {/* HERO */}

      <section
        style={{
          background:
            "linear-gradient(115deg, rgba(3,7,18,0.97), rgba(17,24,39,0.88)), url('/images/workwear.jpg') center/cover",
          color: "#fff",
          padding: "90px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "50px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                background: "rgba(249,115,22,0.15)",
                border: "1px solid rgba(249,115,22,0.5)",
                color: "#fed7aa",
                padding: "8px 15px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: "700",
                marginBottom: "24px",
              }}
            >
              CUSTOM CLOTHING PRINTED IN KETTERING
            </div>

            <h1
              style={{
                fontSize: "clamp(42px, 7vw, 72px)",
                lineHeight: "1.05",
                margin: "0 0 24px",
                letterSpacing: "-2px",
                maxWidth: "850px",
              }}
            >
              Custom T-Shirts & Workwear,
              <span style={{ color: "#fb923c" }}> Printed Your Way.</span>
            </h1>

            <p
              style={{
                fontSize: "clamp(18px, 2vw, 21px)",
                lineHeight: "1.7",
                color: "#d1d5db",
                maxWidth: "700px",
                marginBottom: "32px",
              }}
            >
              Choose your garment, select your colour and size, add your
              printing options and upload your artwork. Order personalised
              clothing online with UK delivery or local collection in
              Kettering.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                marginBottom: "32px",
              }}
            >
              <Link to="/shop" style={primaryButton}>
                Shop & Customise
              </Link>

              <a href="#quote" style={secondaryButton}>
                Get a Quote
              </a>

              <a
                href="https://wa.me/447770118148"
                target="_blank"
                rel="noreferrer"
                style={whatsappLink}
              >
                WhatsApp Us
              </a>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "18px",
                color: "#e5e7eb",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              <span>✓ Secure Online Checkout</span>
              <span>✓ Upload Artwork Online</span>
              <span>✓ Small Orders Welcome</span>
            </div>
          </div>

          <div
            style={{
              background: "#fff",
              color: BRAND.dark,
              padding: "30px",
              borderRadius: "24px",
              boxShadow: "0 30px 70px rgba(0,0,0,0.35)",
            }}
          >
            <div
              style={{
                color: "#f59e0b",
                fontSize: "23px",
                letterSpacing: "3px",
                marginBottom: "10px",
              }}
            >
              ★★★★★
            </div>

            <h2
              style={{
                fontSize: "28px",
                margin: "0 0 12px",
              }}
            >
              Custom Printing Made Simple
            </h2>

            <p
              style={{
                color: BRAND.text,
                lineHeight: "1.7",
              }}
            >
              Need printed clothing for yourself, your business, team, church,
              school or event? Start with one item or order in bulk.
            </p>

            <div
              style={{
                display: "grid",
                gap: "12px",
                marginTop: "25px",
              }}
            >
              {[
                "Choose from our garment range",
                "Select sizes and colours",
                "Add your printing options",
                "Upload your artwork",
                "Checkout securely online",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    background: BRAND.light,
                    padding: "13px 15px",
                    borderRadius: "10px",
                    fontWeight: "600",
                  }}
                >
                  <span style={{ color: BRAND.green }}>✓</span>
                  {item}
                </div>
              ))}
            </div>

            <Link
              to="/shop"
              style={{
                ...primaryButton,
                display: "block",
                textAlign: "center",
                marginTop: "25px",
              }}
            >
              Start Your Order
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}

      <section
        style={{
          borderBottom: `1px solid ${BRAND.border}`,
          background: "#fff",
          padding: "22px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "15px 40px",
            fontWeight: "700",
            color: BRAND.text,
          }}
        >
          <span>★★★★★ Customer Rated</span>
          <span>📍 Kettering Based</span>
          <span>🇬🇧 UK Delivery</span>
          <span>👕 Single & Bulk Orders</span>
        </div>
      </section>


{/* SHOP BY CATEGORY */}

<section
  style={{
    padding: "90px 20px",
    background: "#f8fafc",
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
        maxWidth: "760px",
        margin: "0 auto 45px",
        textAlign: "center",
      }}
    >
      <span
        style={{
          display: "block",
          color: "#ea580c",
          fontSize: "13px",
          fontWeight: "900",
          letterSpacing: "1.6px",
          marginBottom: "12px",
        }}
      >
        SHOP BY CATEGORY
      </span>

      <h2
        style={{
          fontSize: "clamp(32px, 5vw, 48px)",
          color: "#111827",
          margin: "0 0 18px",
          letterSpacing: "-1px",
        }}
      >
        Find The Right Clothing For Your Order
      </h2>

      <p
        style={{
          color: "#6b7280",
          fontSize: "17px",
          lineHeight: "1.8",
          margin: 0,
        }}
      >
        Choose a category to quickly find the right garment, then customise
        it with your size, colour, printing options and artwork.
      </p>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "22px",
      }}
    >
      {productCategories.map((category) => (
        <Link
          key={category.title}
          to={category.link}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <article
            style={{
              background: "#fff",
              borderRadius: "18px",
              overflow: "hidden",
              border: "1px solid #e5e7eb",
              boxShadow: "0 10px 30px rgba(15,23,42,0.06)",
              height: "100%",
            }}
          >
            <div
              style={{
                height: "220px",
                background: "#fff",
                overflow: "hidden",
              }}
            >
              <img
                src={category.image}
                alt={`${category.title} custom printing`}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div
              style={{
                padding: "24px",
              }}
            >
              <h3
                style={{
                  fontSize: "22px",
                  color: "#111827",
                  margin: "0 0 10px",
                }}
              >
                {category.title}
              </h3>

              <p
                style={{
                  color: "#6b7280",
                  lineHeight: "1.7",
                  fontSize: "14px",
                  marginBottom: "18px",
                }}
              >
                {category.text}
              </p>

              <span
                style={{
                  color: "#ea580c",
                  fontWeight: "800",
                  fontSize: "14px",
                }}
              >
                Shop {category.title} →
              </span>
            </div>
          </article>
        </Link>
      ))}
    </div>
  </div>
</section>

      {/* FEATURED PRODUCTS */}

      <section
        style={{
          padding: "90px 20px",
          background: "#fff",
        }}
      >
        <div style={sectionHeader}>
          <span style={eyebrow}>SHOP ONLINE</span>

          <h2 style={sectionTitle}>
            Choose a Product & Start Customising
          </h2>

          <p style={sectionDescription}>
            Shop our popular garments online. Choose your size, colour and
            printing options, then upload your logo or artwork.
          </p>
        </div>

        <FeaturedProducts />

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link to="/shop" style={primaryButton}>
            View All Products
          </Link>
        </div>
      </section>

      {/* SHOP BY NEED */}

      <section
        id="services"
        style={{
          padding: "90px 20px",
          background: BRAND.light,
        }}
      >
        <div style={sectionHeader}>
          <span style={eyebrow}>WHAT ARE YOU LOOKING FOR?</span>

          <h2 style={sectionTitle}>Custom Printing For Every Need</h2>

          <p style={sectionDescription}>
            From one personalised T-shirt to branded workwear for an entire
            team, choose the service that matches your order.
          </p>
        </div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "50px auto 0",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                background: "#fff",
                borderRadius: "18px",
                overflow: "hidden",
                border: `1px solid ${BRAND.border}`,
                boxShadow: "0 10px 30px rgba(15,23,42,0.07)",
              }}
            >
              <img
                src={service.image}
                alt={`${service.title} by Kett Press Co`}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "28px" }}>
                <h3
                  style={{
                    margin: "0 0 12px",
                    fontSize: "24px",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: BRAND.text,
                    lineHeight: "1.7",
                    minHeight: "80px",
                  }}
                >
                  {service.text}
                </p>

                <Link
                  to={service.link}
                  style={{
                    color: BRAND.orangeDark,
                    fontWeight: "800",
                    textDecoration: "none",
                  }}
                >
                  {service.button} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>


{/* T-SHIRT PRINTING NORTHAMPTON */}

<section
  style={{
    padding: "80px 20px",
    background: "#fff",
  }}
>
  <div
    style={{
      maxWidth: "1000px",
      margin: "0 auto",
      background: "#f8fafc",
      border: `1px solid ${BRAND.border}`,
      borderRadius: "20px",
      padding: "50px 30px",
      textAlign: "center",
      boxShadow: "0 10px 30px rgba(15,23,42,0.06)",
    }}
  >
    <span style={eyebrow}>
      CUSTOM PRINTING IN NORTHAMPTON
    </span>

    <h2
      style={{
        ...sectionTitle,
        marginBottom: "20px",
      }}
    >
      T-Shirt Printing Northampton
    </h2>

    <p
      style={{
        maxWidth: "750px",
        margin: "0 auto 25px",
        color: BRAND.text,
        fontSize: "17px",
        lineHeight: "1.8",
      }}
    >
      Looking for professional T-shirt printing in Northampton?
      Kett Press Co provides custom printed T-shirts for businesses,
      events, gyms, schools, clubs and organisations across Northampton
      and Northamptonshire. Browse personalised clothing online or learn
      more about our local T-shirt printing service.
    </p>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "14px",
        flexWrap: "wrap",
      }}
    >
      <Link
        to="/t-shirt-printing-northampton"
        style={primaryButton}
      >
        T-Shirt Printing Northampton
      </Link>

      <Link
        to="/shop"
        style={{
          ...primaryButton,
          background: BRAND.dark,
        }}
      >
        Shop T-Shirts
      </Link>
    </div>
  </div>
</section>

      {/* HOW IT WORKS */}

      <section
        style={{
          padding: "90px 20px",
          background: "#fff",
        }}
      >
        <div style={sectionHeader}>
          <span style={eyebrow}>SIMPLE ONLINE ORDERING</span>

          <h2 style={sectionTitle}>From Idea To Printed Clothing</h2>

          <p style={sectionDescription}>
            You don't need to know anything about printing. Choose what you
            need and we'll guide your order through the process.
          </p>
        </div>

        <div
          style={{
            maxWidth: "1100px",
            margin: "50px auto 0",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >
          {[
            {
              number: "1",
              title: "Choose Your Garment",
              text: "Browse the shop and choose the T-shirt, hoodie, polo or workwear you want customised.",
            },
            {
              number: "2",
              title: "Customise Your Order",
              text: "Select your colour, size, quantity and printing options, then upload your artwork.",
            },
            {
              number: "3",
              title: "Checkout Securely",
              text: "Complete your order online. We'll prepare your garments and print your design.",
            },
          ].map((step) => (
            <div
              key={step.number}
              style={{
                border: `1px solid ${BRAND.border}`,
                padding: "32px",
                borderRadius: "18px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: BRAND.orange,
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "900",
                  fontSize: "20px",
                  marginBottom: "22px",
                }}
              >
                {step.number}
              </div>

              <h3
                style={{
                  fontSize: "22px",
                  marginBottom: "12px",
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  color: BRAND.text,
                  lineHeight: "1.7",
                  margin: 0,
                }}
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "45px" }}>
          <Link to="/shop" style={primaryButton}>
            Browse Products
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section
        style={{
          background: BRAND.dark,
          color: "#fff",
          padding: "90px 20px",
        }}
      >
        <div style={sectionHeader}>
          <span style={{ ...eyebrow, color: "#fb923c" }}>
            WHY KETT PRESS CO?
          </span>

          <h2 style={{ ...sectionTitle, color: "#fff" }}>
            Printing You Can Order With Confidence
          </h2>

          <p
            style={{
              ...sectionDescription,
              color: "#cbd5e1",
            }}
          >
            Professional custom printing with flexible order quantities,
            artwork support and convenient online ordering.
          </p>
        </div>

        <div
          style={{
            maxWidth: "1100px",
            margin: "50px auto 0",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "18px",
          }}
        >
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#1f2937",
                padding: "27px",
                borderRadius: "16px",
                border: "1px solid #374151",
              }}
            >
              <div
                style={{
                  fontSize: "27px",
                  marginBottom: "15px",
                }}
              >
                {item.icon}
              </div>

              <h3 style={{ marginBottom: "10px" }}>
                {item.title}
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.7",
                  marginBottom: 0,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}

      <section
        style={{
          padding: "90px 20px",
          background: BRAND.light,
        }}
      >
        <div style={sectionHeader}>
          <span style={eyebrow}>CUSTOMER FEEDBACK</span>

          <h2 style={sectionTitle}>What Our Customers Say</h2>

          <p style={sectionDescription}>
            Real feedback from customers who chose Kett Press Co for custom
            printed clothing.
          </p>
        </div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "50px auto 0",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
          }}
        >
          {reviews.slice(0, 6).map((review, index) => (
            <div
              key={`${review.name}-${index}`}
              style={{
                background: "#fff",
                padding: "28px",
                borderRadius: "16px",
                border: `1px solid ${BRAND.border}`,
                boxShadow: "0 8px 25px rgba(15,23,42,0.06)",
              }}
            >
              <div
                style={{
                  color: "#f59e0b",
                  fontSize: "20px",
                  marginBottom: "15px",
                }}
              >
                ★★★★★
              </div>

              <p
                style={{
                  color: BRAND.text,
                  lineHeight: "1.8",
                  fontStyle: "italic",
                }}
              >
                "{review.review}"
              </p>

              <strong>{review.name}</strong>

              <div
                style={{
                  color: BRAND.green,
                  fontSize: "13px",
                  marginTop: "5px",
                  fontWeight: "700",
                }}
              >
                Google Review
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGES */}

      <section
        style={{
          padding: "90px 20px",
          background: "#fff",
        }}
      >
        <div style={sectionHeader}>
          <span style={eyebrow}>BUSINESS & TEAM ORDERS</span>

          <h2 style={sectionTitle}>Popular Workwear Packages</h2>

          <p style={sectionDescription}>
            Need several garments for your business or team? Start with one of
            our popular branded clothing packages.
          </p>
        </div>

        <div
          style={{
            maxWidth: "1250px",
            margin: "50px auto 0",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "22px",
          }}
        >
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              style={{
                border: pkg.popular
                  ? `2px solid ${BRAND.orange}`
                  : `1px solid ${BRAND.border}`,
                borderRadius: "18px",
                overflow: "hidden",
                position: "relative",
                background: "#fff",
                boxShadow: pkg.popular
                  ? "0 15px 40px rgba(249,115,22,0.15)"
                  : "0 10px 30px rgba(15,23,42,0.06)",
              }}
            >
              {pkg.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    right: "14px",
                    zIndex: 2,
                    background: BRAND.orange,
                    color: "#fff",
                    padding: "7px 11px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontWeight: "800",
                  }}
                >
                  BEST VALUE
                </div>
              )}

              <img
                src={pkg.image}
                alt={pkg.title}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "210px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "25px" }}>
                <h3 style={{ fontSize: "21px" }}>
                  {pkg.title}
                </h3>

                <div
                  style={{
                    fontSize: "35px",
                    fontWeight: "900",
                    margin: "15px 0",
                  }}
                >
                  {pkg.price}
                </div>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    lineHeight: "2",
                    color: BRAND.text,
                  }}
                >
                  {pkg.items.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>

                <a
                  href="#quote"
                  style={{
                    ...primaryButton,
                    display: "block",
                    textAlign: "center",
                    marginTop: "20px",
                  }}
                >
                  Request This Package
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}

      <section
        id="portfolio"
        style={{
          background: BRAND.darker,
          color: "#fff",
          padding: "90px 20px",
        }}
      >
        <div style={sectionHeader}>
          <span style={{ ...eyebrow, color: "#fb923c" }}>
            REAL PRINTING WORK
          </span>

          <h2 style={{ ...sectionTitle, color: "#fff" }}>
            See What We Print
          </h2>

          <p
            style={{
              ...sectionDescription,
              color: "#9ca3af",
            }}
          >
            A selection of custom printed clothing created by Kett Press Co.
          </p>
        </div>

        <div
          style={{
            maxWidth: "1250px",
            margin: "50px auto 0",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "18px",
          }}
        >
          {portfolio.slice(0, 8).map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              style={{
                background: "#111827",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <img
                src={item.image}
                alt={`${item.title} - Kett Press Co`}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "290px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "18px" }}>
                <strong>{item.title}</strong>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link to="/shop" style={primaryButton}>
            Create Your Own
          </Link>
        </div>
      </section>

      {/* VIDEO */}

      <section
        style={{
          padding: "90px 20px",
          background: "#fff",
          textAlign: "center",
        }}
      >
        <div style={sectionHeader}>
          <span style={eyebrow}>BEHIND THE SCENES</span>

          <h2 style={sectionTitle}>Watch Kett Press Co In Action</h2>

          <p style={sectionDescription}>
            See the printing process and some of the custom clothing we produce
            for our customers.
          </p>
        </div>

        <iframe
  width="315"
  height="560"
  src="https://www.youtube.com/embed/O-v_228ekIQ"
  title="Kett Press Co printing video"
  style={{
    border: "none",
    borderRadius: "18px",
    margin: "40px auto 0",
    display: "block",
    maxWidth: "100%",
    boxShadow: "0 20px 45px rgba(15,23,42,0.15)",
  }}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
/>
      </section>

      {/* FAQ */}

      <section
        style={{
          padding: "90px 20px",
          background: BRAND.light,
        }}
      >
        <div style={sectionHeader}>
          <span style={eyebrow}>NEED TO KNOW</span>

          <h2 style={sectionTitle}>Frequently Asked Questions</h2>
        </div>

        <div
          style={{
            maxWidth: "850px",
            margin: "50px auto 0",
            display: "grid",
            gap: "14px",
          }}
        >
          {faqItems.map((faq) => (
            <details
              key={faq.question}
              style={{
                background: "#fff",
                border: `1px solid ${BRAND.border}`,
                borderRadius: "12px",
                padding: "20px 22px",
              }}
            >
              <summary
                style={{
                  fontWeight: "800",
                  cursor: "pointer",
                  fontSize: "17px",
                }}
              >
                {faq.question}
              </summary>

              <p
                style={{
                  color: BRAND.text,
                  lineHeight: "1.8",
                  marginBottom: 0,
                  paddingTop: "10px",
                }}
              >
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CONVERSION CTA */}

      <section
        style={{
          padding: "80px 20px",
          background: BRAND.orange,
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(32px,5vw,50px)",
            margin: "0 auto 18px",
          }}
        >
          Ready To Create Your Custom Clothing?
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto 30px",
            lineHeight: "1.7",
            fontSize: "18px",
          }}
        >
          Order directly online or request a quote for larger or more complex
          requirements.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "14px",
          }}
        >
          <Link
            to="/shop"
            style={{
              ...primaryButton,
              background: BRAND.dark,
            }}
          >
            Shop & Customise
          </Link>

          <a
            href="#quote"
            style={{
              ...secondaryButton,
              borderColor: "#fff",
            }}
          >
            Request a Quote
          </a>
        </div>
      </section>

      {/* QUOTE */}

      <section
        id="quote"
        style={{
          padding: "90px 20px",
          background: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          <div style={sectionHeader}>
            <span style={eyebrow}>LARGER OR CUSTOM ORDER?</span>

            <h2 style={sectionTitle}>Request A Quote</h2>

            <p style={sectionDescription}>
              Tell us what you need and we'll get back to you about your custom
              printing requirements.
            </p>
          </div>

          <form
            action="https://formsubmit.co/info@kettpressco.com"
            method="POST"
            style={{
              marginTop: "40px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              background: BRAND.light,
              border: `1px solid ${BRAND.border}`,
              borderRadius: "20px",
              padding: "35px",
            }}
          >
            <input
              type="hidden"
              name="_subject"
              value="New Quote Request - Kett Press Co"
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <input
              type="hidden"
              name="_next"
              value="https://www.kettpressco.com/thank-you"
            />

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              style={inputStyle}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              style={inputStyle}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              style={inputStyle}
            />

            <select
              name="product"
              style={inputStyle}
              defaultValue=""
              required
            >
              <option value="" disabled>
                What do you need?
              </option>

              <option value="T-Shirts">T-Shirts</option>
              <option value="Hoodies">Hoodies</option>
              <option value="Workwear">Workwear</option>
              <option value="Polos">Polo Shirts</option>
              <option value="Other">Other</option>
            </select>

            <input
              type="number"
              name="quantity"
              min="1"
              placeholder="Approximate Quantity"
              style={inputStyle}
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your order, printing positions and any deadline..."
              style={{
                ...inputStyle,
                resize: "vertical",
              }}
              required
            />

            <button
              type="submit"
              style={{
                background: BRAND.orange,
                color: "#fff",
                border: "none",
                padding: "17px",
                borderRadius: "10px",
                fontSize: "17px",
                fontWeight: "800",
                cursor: "pointer",
              }}
            >
              Send Quote Request
            </button>

            <p
              style={{
                textAlign: "center",
                fontSize: "13px",
                color: "#6b7280",
                margin: "2px 0 0",
              }}
            >
              Prefer a faster conversation? WhatsApp us on 07770 118148.
            </p>
          </form>
        </div>
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        style={{
          background: BRAND.dark,
          color: "#fff",
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(30px,5vw,44px)",
            marginBottom: "18px",
          }}
        >
          Visit or Contact Kett Press Co
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            lineHeight: "1.9",
          }}
        >
          10 Market Street, The Shops at the Yards
          <br />
          Kettering, NN16 0AH
          <br />
          07770 118148
          <br />
          info@kettpressco.com
        </p>

        <a
          href="https://wa.me/447770118148"
          target="_blank"
          rel="noreferrer"
          style={{
            ...whatsappLink,
            display: "inline-block",
            marginTop: "20px",
          }}
        >
          Chat On WhatsApp
        </a>
      </section>

      {/* FOOTER */}

      <footer
        style={{
          background: "#000",
          color: "#9ca3af",
          padding: "60px 20px 30px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "45px",
          }}
        >
          <div>
            <h3 style={footerHeading}>Kett Press Co</h3>

            <p style={footerText}>
              Custom T-shirt printing, branded workwear, personalised hoodies
              and printed clothing for individuals, businesses, teams, schools,
              churches and events.
            </p>

            <Link
              to="/shop"
              style={{
                color: "#fb923c",
                fontWeight: "800",
                textDecoration: "none",
              }}
            >
              Shop Online →
            </Link>
          </div>

          <div>
            <h3 style={footerHeading}>Contact</h3>

            <p style={footerText}>
              10 Market Street
              <br />
              The Shops at the Yards
              <br />
              Kettering
              <br />
              NN16 0AH
            </p>

            <p style={footerText}>
              07770 118148
              <br />
              info@kettpressco.com
            </p>
          </div>

          <div>
            <h3 style={footerHeading}>Quick Links</h3>

            <div style={footerLinkList}>
              <Link to="/shop" style={footerLink}>
                Shop
              </Link>

              <a href="#quote" style={footerLink}>
                Request a Quote
              </a>

              <a href="#portfolio" style={footerLink}>
                Recent Work
              </a>


              <a href="#contact" style={footerLink}>
                Contact
              </a>
<a
  href="/returns-policy"
  style={{
    color: "#fff",
    textDecoration: "none",
  }}
>
  Returns & Refund Policy
</a>
              <a
                href="https://www.youtube.com/@Kettpressco"
                target="_blank"
                rel="noreferrer"
                style={footerLink}
              >
                YouTube
              </a>
            </div>
          </div>

          <div>
            <h3 style={footerHeading}>Printing Services</h3>

            <div style={footerLinkList}>
              {seoLinks.map(([label, url]) => (
                <Link
                  key={url}
                  to={url}
                  style={footerLink}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "22px",
            marginTop: "45px",
          }}
        >
          <a
            href="https://www.facebook.com/Kettpress"
            target="_blank"
            rel="noreferrer"
            aria-label="Kett Press Co Facebook"
            style={socialLink}
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.instagram.com/kettpressco/"
            target="_blank"
            rel="noreferrer"
            aria-label="Kett Press Co Instagram"
            style={socialLink}
          >
            <FaInstagram />
          </a>
        </div>

        <p
          style={{
            maxWidth: "850px",
            margin: "35px auto 0",
            textAlign: "center",
            fontSize: "14px",
            lineHeight: "1.7",
          }}
        >
          Kett Press Co provides custom T-shirt printing, workwear printing,
          hoodie printing and branded clothing from Kettering,
          Northamptonshire, serving local customers and delivering across the
          UK.
        </p>

        <p
          style={{
            textAlign: "center",
            borderTop: "1px solid #222",
            paddingTop: "22px",
            marginTop: "30px",
            fontSize: "13px",
          }}
        >
          © 2026 Kett Press Co | Custom Printing & Workwear
        </p>
      </footer>
    </div>
  );
}

/* SHARED STYLES */

const primaryButton = {
  display: "inline-block",
  background: "#f97316",
  color: "#fff",
  padding: "15px 25px",
  borderRadius: "9px",
  textDecoration: "none",
  fontWeight: "800",
  fontSize: "16px",
};

const secondaryButton = {
  display: "inline-block",
  background: "transparent",
  color: "#fff",
  padding: "13px 24px",
  borderRadius: "9px",
  border: "2px solid rgba(255,255,255,0.8)",
  textDecoration: "none",
  fontWeight: "800",
  fontSize: "16px",
};

const whatsappLink = {
  display: "inline-block",
  background: "#16a34a",
  color: "#fff",
  padding: "15px 25px",
  borderRadius: "9px",
  textDecoration: "none",
  fontWeight: "800",
  fontSize: "16px",
};

const sectionHeader = {
  maxWidth: "800px",
  margin: "0 auto",
  textAlign: "center",
};

const eyebrow = {
  display: "block",
  color: "#ea580c",
  fontSize: "13px",
  fontWeight: "900",
  letterSpacing: "1.8px",
  marginBottom: "12px",
};

const sectionTitle = {
  fontSize: "clamp(32px, 5vw, 48px)",
  lineHeight: "1.15",
  letterSpacing: "-1px",
  color: "#111827",
  margin: "0 0 18px",
};

const sectionDescription = {
  maxWidth: "700px",
  margin: "0 auto",
  color: "#4b5563",
  fontSize: "17px",
  lineHeight: "1.8",
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "15px 16px",
  borderRadius: "9px",
  border: "1px solid #d1d5db",
  background: "#fff",
  fontSize: "16px",
  outline: "none",
};

const footerHeading = {
  color: "#fff",
  marginBottom: "18px",
};

const footerText = {
  lineHeight: "1.8",
};

const footerLinkList = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const footerLink = {
  color: "#d1d5db",
  textDecoration: "none",
  lineHeight: "1.5",
};

const socialLink = {
  color: "#fff",
  fontSize: "28px",
};