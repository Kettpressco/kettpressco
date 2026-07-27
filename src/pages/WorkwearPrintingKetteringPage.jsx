import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import RelatedProducts from "../components/RelatedProducts";

export default function WorkwearPrintingKetteringPage() {
  const colours = {
    dark: "#111111",
    darkSoft: "#1d1d1d",
    red: "#d62828",
    redDark: "#ad1f1f",
    white: "#ffffff",
    background: "#f5f6f8",
    muted: "#60646c",
    border: "#e5e7eb",
    green: "#176b3a",
  };

  const sectionStyle = {
    padding: "clamp(60px, 8vw, 95px) 20px",
  };

  const containerStyle = {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const cardStyle = {
    background: colours.white,
    border: `1px solid ${colours.border}`,
    borderRadius: "18px",
    padding: "clamp(24px, 4vw, 38px)",
    boxShadow: "0 12px 35px rgba(17, 24, 39, 0.07)",
  };

  const primaryButtonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "52px",
    padding: "14px 25px",
    borderRadius: "10px",
    background: colours.red,
    color: colours.white,
    textDecoration: "none",
    fontWeight: "800",
    fontSize: "16px",
    border: `2px solid ${colours.red}`,
    transition: "0.2s ease",
  };

  const secondaryButtonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "52px",
    padding: "14px 25px",
    borderRadius: "10px",
    background: colours.white,
    color: colours.dark,
    textDecoration: "none",
    fontWeight: "800",
    fontSize: "16px",
    border: `2px solid ${colours.white}`,
    transition: "0.2s ease",
  };

  const outlineButtonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "50px",
    padding: "13px 23px",
    borderRadius: "10px",
    background: "transparent",
    color: colours.dark,
    textDecoration: "none",
    fontWeight: "800",
    fontSize: "16px",
    border: `2px solid ${colours.dark}`,
  };

  const sectionLabelStyle = {
    display: "inline-block",
    marginBottom: "12px",
    color: colours.red,
    fontSize: "14px",
    fontWeight: "900",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
  };

  const sectionTitleStyle = {
    margin: "0 0 18px",
    fontSize: "clamp(30px, 5vw, 46px)",
    lineHeight: "1.12",
    color: colours.dark,
    fontWeight: "900",
  };

  const paragraphStyle = {
    margin: "0 0 18px",
    color: colours.muted,
    fontSize: "17px",
    lineHeight: "1.8",
  };

  const products = [
    {
      title: "Printed Polo Shirts",
      text: "Smart, comfortable branded polos for customer-facing teams, trades and local businesses.",
      image: "/images/PoloTshirt.jpg",
    },
    {
      title: "Branded Hoodies",
      text: "Warm, practical hoodies with your business logo for staff, trades and outdoor work.",
      image: "/images/work1.jpg",
    },
    {
      title: "Jackets & Outerwear",
      text: "Professional branded layers for teams working outdoors throughout the year.",
      image: "/images/workwear4.jpg",
    },
  ];

  const industries = [
    "Construction companies",
    "Builders and property services",
    "Electricians and plumbers",
    "Landscapers and gardeners",
    "Cleaning companies",
    "Warehouses and logistics teams",
    "Restaurants, cafés and hospitality",
    "Gyms and fitness businesses",
    "Schools, clubs and organisations",
  ];

  const benefits = [
    {
      icon: "📍",
      title: "Local Kettering Service",
      text: "Speak directly with a local printing business serving Kettering and surrounding areas.",
    },
    {
      icon: "👕",
      title: "Professional Garments",
      text: "Choose from polos, T-shirts, hoodies, jackets, gilets, trousers and hi-vis workwear.",
    },
    {
      icon: "🎨",
      title: "Your Logo Printed",
      text: "Send us your existing artwork or ask for help preparing your logo for printing.",
    },
    {
      icon: "📦",
      title: "Single & Bulk Orders",
      text: "We support small teams, growing companies and larger branded workwear requirements.",
    },
    {
      icon: "⚡",
      title: "Fast Turnaround",
      text: "Clear communication and practical turnaround times for local business orders.",
    },
    {
      icon: "💬",
      title: "Personal Support",
      text: "Get help choosing suitable garments, print placement and quantities before ordering.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Choose your workwear",
      text: "Browse suitable polos, hoodies, jackets, trousers, gilets and hi-vis garments.",
    },
    {
      number: "02",
      title: "Send your logo",
      text: "Upload your artwork or contact us if you need help preparing your design.",
    },
    {
      number: "03",
      title: "Approve your order",
      text: "Confirm garment colours, sizes, quantities and print requirements.",
    },
    {
      number: "04",
      title: "We print your workwear",
      text: "Your order is produced and prepared for collection or agreed delivery.",
    },
  ];

  const faqs = [
    {
      question: "Can I order only one printed workwear item?",
      answer:
        "Yes. We can help with single garments as well as larger team and business orders. Bulk quantities normally provide better value per item.",
    },
    {
      question: "Can you print my company logo?",
      answer:
        "Yes. You can provide your business logo or artwork when requesting a quote or placing an order. Clear, high-resolution artwork normally produces the best result.",
    },
    {
      question: "What types of workwear can you supply?",
      answer:
        "Options can include polo shirts, T-shirts, hoodies, sweatshirts, jackets, softshells, gilets, trousers and hi-vis garments, subject to current product availability.",
    },
    {
      question: "Do you offer bulk workwear printing?",
      answer:
        "Yes. We can quote for team uniforms and bulk orders. Send us the garment types, quantities, sizes and logo requirements for accurate pricing.",
    },
    {
      question: "Which areas do you serve?",
      answer:
        "We serve Kettering and surrounding areas, including Corby, Wellingborough, Burton Latimer, Rothwell, Desborough, Rushden and wider Northamptonshire.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Workwear Printing Kettering",
    description:
      "Professional branded workwear and logo printing for businesses in Kettering and Northamptonshire.",
    provider: {
      "@type": "LocalBusiness",
      name: "Kett Press Co",
      url: "https://www.kettpressco.com",
      telephone: "+447442514098",
      email: "info@kettpressco.com",
      areaServed: [
        "Kettering",
        "Northamptonshire",
        "Corby",
        "Wellingborough",
        "Rushden",
        "Market Harborough",
      ],
    },
    serviceType: [
      "Workwear printing",
      "Branded workwear",
      "Logo printing",
      "Printed polo shirts",
      "Hi-vis printing",
    ],
    url: "https://www.kettpressco.com/workwear-printing-kettering",
  };

  return (
    <>
      <Helmet>
        <title>
          Workwear Printing Kettering | Branded Clothing & Uniforms
        </title>

        <meta
          name="description"
          content="Professional workwear printing in Kettering. Shop branded polos, hoodies, jackets, hi-vis clothing and company uniforms. Upload your logo and request a quote."
        />

        <meta
          name="keywords"
          content="workwear printing Kettering, branded workwear Kettering, printed workwear, company uniforms Kettering, logo printing workwear, printed polo shirts Kettering"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.kettpressco.com/workwear-printing-kettering"
        />

        <meta
          property="og:title"
          content="Workwear Printing Kettering | Kett Press Co"
        />

        <meta
          property="og:description"
          content="Shop professional branded workwear and request a quote for logo printing in Kettering and Northamptonshire."
        />

        <meta
          property="og:url"
          content="https://www.kettpressco.com/workwear-printing-kettering"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="https://www.kettpressco.com/images/workwear.jpg"
        />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div
        style={{
          background: colours.background,
          color: colours.dark,
          overflow: "hidden",
        }}
      >
        {/* HERO */}
        <section
          style={{
            position: "relative",
            minHeight: "650px",
            display: "flex",
            alignItems: "center",
            background:
              "linear-gradient(90deg, rgba(5,5,5,0.94) 0%, rgba(5,5,5,0.79) 48%, rgba(5,5,5,0.46) 100%), url('/images/workwear.jpg') center/cover no-repeat",
            color: colours.white,
            padding: "80px 20px",
          }}
        >
          <div style={containerStyle}>
            <div style={{ maxWidth: "760px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "22px",
                  padding: "9px 14px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.13)",
                  border: "1px solid rgba(255,255,255,0.26)",
                  fontSize: "14px",
                  fontWeight: "800",
                }}
              >
                📍 Local workwear printing in Kettering
              </span>

              <h1
                style={{
                  margin: "0 0 22px",
                  maxWidth: "850px",
                  fontSize: "clamp(42px, 7vw, 72px)",
                  lineHeight: "1.02",
                  letterSpacing: "-1.5px",
                  fontWeight: "950",
                }}
              >
                Professional Workwear Printing in Kettering
              </h1>

              <p
                style={{
                  maxWidth: "720px",
                  margin: "0 0 30px",
                  color: "#eeeeee",
                  fontSize: "clamp(18px, 2.3vw, 22px)",
                  lineHeight: "1.7",
                }}
              >
                Branded polos, hoodies, jackets, hi-vis clothing and uniforms
                printed with your company logo for a professional, consistent
                team appearance.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "14px",
                  marginBottom: "32px",
                }}
              >
                <Link to="/contact" style={primaryButtonStyle}>
                  Get a Free Workwear Quote
                </Link>

                <Link to="/shop" style={secondaryButtonStyle}>
                  Shop Workwear
                </Link>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px 24px",
                  color: "#f2f2f2",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                <span>✓ Single and bulk orders</span>
                <span>✓ Upload your company logo</span>
                <span>✓ Local personal service</span>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section
          style={{
            background: colours.dark,
            color: colours.white,
            padding: "20px",
          }}
        >
          <div
            style={{
              ...containerStyle,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
              gap: "16px",
              textAlign: "center",
            }}
          >
            {[
              "Local Northamptonshire Printer",
              "Fast, Helpful Quotations",
              "Quality DTF Logo Printing",
              "Business & Trade Orders",
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: "8px 12px",
                  fontWeight: "800",
                  fontSize: "15px",
                }}
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* INTRODUCTION */}
        <section style={sectionStyle}>
          <div
            style={{
              ...containerStyle,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "45px",
              alignItems: "center",
            }}
          >
            <div>
              <span style={sectionLabelStyle}>Kett Press Co</span>

              <h2 style={sectionTitleStyle}>
                Custom-branded workwear that helps your business look
                professional
              </h2>

              <p style={paragraphStyle}>
                Kett Press Co provides professional workwear printing for
                businesses, tradespeople, schools, clubs and organisations in
                Kettering and across Northamptonshire.
              </p>

              <p style={paragraphStyle}>
                Whether you need one branded polo shirt or coordinated uniforms
                for your whole team, we can help you select suitable garments
                and print your logo clearly and professionally.
              </p>

              <p style={paragraphStyle}>
                Your workwear can promote your business wherever your team is
                working while helping customers identify your staff quickly.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginTop: "28px",
                }}
              >
                <Link to="/contact" style={primaryButtonStyle}>
                  Request a Quote
                </Link>

                <a href="tel:07442514098" style={outlineButtonStyle}>
                  Call 07442 514098
                </a>
              </div>
            </div>

            <div
              style={{
                position: "relative",
                minHeight: "460px",
              }}
            >
              <img
                src="/images/PoloTshirt.jpg"
                alt="Branded polo shirt printing in Kettering"
                loading="lazy"
                style={{
                  width: "88%",
                  height: "420px",
                  objectFit: "cover",
                  borderRadius: "20px",
                  display: "block",
                  marginLeft: "auto",
                  boxShadow: "0 18px 45px rgba(0,0,0,0.15)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  maxWidth: "300px",
                  background: colours.white,
                  borderRadius: "16px",
                  padding: "24px",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.14)",
                  border: `1px solid ${colours.border}`,
                }}
              >
                <div
                  style={{
                    color: colours.red,
                    fontSize: "30px",
                    marginBottom: "8px",
                  }}
                >
                  ★★★★★
                </div>

                <strong
                  style={{
                    display: "block",
                    marginBottom: "7px",
                    fontSize: "18px",
                  }}
                >
                  Made for local businesses
                </strong>

                <span
                  style={{
                    color: colours.muted,
                    lineHeight: "1.6",
                  }}
                >
                  Practical garments, professional branding and personal
                  support.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section
          style={{
            ...sectionStyle,
            background: colours.white,
          }}
        >
          <div style={containerStyle}>
            <div
              style={{
                maxWidth: "750px",
                margin: "0 auto 45px",
                textAlign: "center",
              }}
            >
              <span style={sectionLabelStyle}>Why choose us?</span>

              <h2 style={sectionTitleStyle}>
                Workwear printing designed around your business
              </h2>

              <p style={paragraphStyle}>
                We keep the process straightforward, whether you are ordering
                your first branded garment or equipping a growing team.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "22px",
              }}
            >
              {benefits.map((benefit) => (
                <article key={benefit.title} style={cardStyle}>
                  <div
                    style={{
                      width: "54px",
                      height: "54px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "18px",
                      borderRadius: "14px",
                      background: "#fff1f1",
                      fontSize: "27px",
                    }}
                  >
                    {benefit.icon}
                  </div>

                  <h3
                    style={{
                      margin: "0 0 10px",
                      fontSize: "21px",
                      lineHeight: "1.3",
                    }}
                  >
                    {benefit.title}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      color: colours.muted,
                      lineHeight: "1.7",
                    }}
                  >
                    {benefit.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SHOP SECTION */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "20px",
                marginBottom: "36px",
              }}
            >
              <div style={{ maxWidth: "730px" }}>
                <span style={sectionLabelStyle}>Shop workwear</span>

                <h2 style={sectionTitleStyle}>
                  Browse popular garments for your team
                </h2>

                <p
                  style={{
                    ...paragraphStyle,
                    marginBottom: 0,
                  }}
                >
                  Explore practical workwear options and choose a product to
                  customise with your logo, print placement and required
                  quantities.
                </p>
              </div>

              <Link to="/shop" style={outlineButtonStyle}>
                View Full Shop
              </Link>
            </div>

            <div
              style={{
                background: colours.white,
                borderRadius: "20px",
                padding: "clamp(20px, 4vw, 38px)",
                border: `1px solid ${colours.border}`,
                boxShadow: "0 12px 35px rgba(17, 24, 39, 0.06)",
              }}
            >
              <RelatedProducts
                categories={[
                  "Jacket",
                  "Gilet",
                  "Soft Shell Jacket",
                  "Trousers",
                  "Polo",
                ]}
                limit={8}
                title="Popular Branded Workwear"
              />
            </div>
          </div>
        </section>

        {/* PRODUCT TYPES */}
        <section
          style={{
            ...sectionStyle,
            background: colours.dark,
            color: colours.white,
          }}
        >
          <div style={containerStyle}>
            <div
              style={{
                maxWidth: "750px",
                marginBottom: "42px",
              }}
            >
              <span
                style={{
                  ...sectionLabelStyle,
                  color: "#ff7373",
                }}
              >
                Workwear options
              </span>

              <h2
                style={{
                  ...sectionTitleStyle,
                  color: colours.white,
                }}
              >
                Build a consistent uniform for your whole team
              </h2>

              <p
                style={{
                  ...paragraphStyle,
                  color: "#cfcfcf",
                  marginBottom: 0,
                }}
              >
                Select garments that suit your working environment and create a
                professional company image across different roles and seasons.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
              }}
            >
              {products.map((product) => (
                <article
                  key={product.title}
                  style={{
                    overflow: "hidden",
                    background: colours.darkSoft,
                    borderRadius: "18px",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <img
                    src={product.image}
                    alt={`${product.title} Kettering`}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "260px",
                      display: "block",
                      objectFit: "cover",
                    }}
                  />

                  <div style={{ padding: "26px" }}>
                    <h3
                      style={{
                        margin: "0 0 10px",
                        fontSize: "23px",
                      }}
                    >
                      {product.title}
                    </h3>

                    <p
                      style={{
                        margin: "0 0 20px",
                        color: "#cecece",
                        lineHeight: "1.7",
                      }}
                    >
                      {product.text}
                    </p>

                    <Link
                      to="/shop"
                      style={{
                        color: "#ff7b7b",
                        textDecoration: "none",
                        fontWeight: "800",
                      }}
                    >
                      Browse products →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section style={sectionStyle}>
          <div
            style={{
              ...containerStyle,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "45px",
              alignItems: "center",
            }}
          >
            <div>
              <span style={sectionLabelStyle}>Who we help</span>

              <h2 style={sectionTitleStyle}>
                Branded workwear for trades, teams and organisations
              </h2>

              <p style={paragraphStyle}>
                We help businesses create a consistent appearance across
                customer-facing staff, tradespeople, contractors and support
                teams.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "12px",
                  marginTop: "28px",
                }}
              >
                {industries.map((industry) => (
                  <div
                    key={industry}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      padding: "14px 16px",
                      background: colours.white,
                      borderRadius: "10px",
                      border: `1px solid ${colours.border}`,
                      fontWeight: "700",
                      lineHeight: "1.5",
                    }}
                  >
                    <span style={{ color: colours.green }}>✓</span>
                    <span>{industry}</span>
                  </div>
                ))}
              </div>
            </div>

            <img
              src="/images/work3.jpg"
              alt="Printed workwear for local Kettering businesses"
              loading="lazy"
              style={{
                width: "100%",
                height: "560px",
                objectFit: "cover",
                borderRadius: "20px",
                boxShadow: "0 18px 45px rgba(0,0,0,0.14)",
              }}
            />
          </div>
        </section>

        {/* PROCESS */}
        <section
          style={{
            ...sectionStyle,
            background: colours.white,
          }}
        >
          <div style={containerStyle}>
            <div
              style={{
                maxWidth: "720px",
                margin: "0 auto 45px",
                textAlign: "center",
              }}
            >
              <span style={sectionLabelStyle}>How it works</span>

              <h2 style={sectionTitleStyle}>
                From your logo to finished workwear
              </h2>

              <p style={paragraphStyle}>
                A clear four-step process makes it easier to order correctly
                and avoid delays.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(230px, 1fr))",
                gap: "22px",
              }}
            >
              {steps.map((step) => (
                <article key={step.number} style={cardStyle}>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "54px",
                      height: "54px",
                      marginBottom: "18px",
                      borderRadius: "50%",
                      background: colours.red,
                      color: colours.white,
                      fontWeight: "900",
                    }}
                  >
                    {step.number}
                  </div>

                  <h3
                    style={{
                      margin: "0 0 10px",
                      fontSize: "21px",
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      color: colours.muted,
                      lineHeight: "1.7",
                    }}
                  >
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PRINT QUALITY */}
        <section style={sectionStyle}>
          <div
            style={{
              ...containerStyle,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "45px",
              alignItems: "center",
            }}
          >
            <img
              src="/images/work1.jpg"
              alt="Durable DTF workwear logo printing Kettering"
              loading="lazy"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                borderRadius: "20px",
                boxShadow: "0 18px 45px rgba(0,0,0,0.14)",
              }}
            />

            <div>
              <span style={sectionLabelStyle}>Print quality</span>

              <h2 style={sectionTitleStyle}>
                Clear, vibrant printing for everyday workwear
              </h2>

              <p style={paragraphStyle}>
                We use DTF printing to create detailed, full-colour branding
                suitable for many common workwear garments.
              </p>

              <p style={paragraphStyle}>
                This method is suitable for company logos containing multiple
                colours, smaller details and strong visual branding.
              </p>

              <div
                style={{
                  display: "grid",
                  gap: "13px",
                  marginTop: "25px",
                }}
              >
                {[
                  "Suitable for detailed and multi-colour logos",
                  "Strong, professional visual finish",
                  "Available on a range of garment types",
                  "Artwork checked before production",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "11px",
                      fontWeight: "750",
                    }}
                  >
                    <span style={{ color: colours.green }}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section
          style={{
            ...sectionStyle,
            background: colours.white,
          }}
        >
          <div style={containerStyle}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "35px",
                alignItems: "stretch",
              }}
            >
              <div style={cardStyle}>
                <span style={sectionLabelStyle}>Local service area</span>

                <h2
                  style={{
                    ...sectionTitleStyle,
                    fontSize: "clamp(29px, 4vw, 40px)",
                  }}
                >
                  Workwear printing across Kettering and Northamptonshire
                </h2>

                <p style={paragraphStyle}>
                  We support businesses in Kettering and surrounding towns,
                  including Corby, Wellingborough, Burton Latimer, Rothwell,
                  Desborough, Rushden and nearby areas.
                </p>

                <p style={paragraphStyle}>
                  Being local means you can discuss your order directly with
                  us, receive help choosing suitable garments and arrange
                  collection where agreed.
                </p>

                <Link to="/areas-we-cover" style={outlineButtonStyle}>
                  View Areas We Cover
                </Link>
              </div>

              <iframe
                title="Kett Press Co workwear printing service area"
                src="https://www.google.com/maps?q=Kettering,+Northamptonshire&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  minHeight: "430px",
                  border: 0,
                  borderRadius: "18px",
                  boxShadow: "0 12px 35px rgba(17,24,39,0.08)",
                }}
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={sectionStyle}>
          <div style={{ ...containerStyle, maxWidth: "900px" }}>
            <div
              style={{
                textAlign: "center",
                marginBottom: "40px",
              }}
            >
              <span style={sectionLabelStyle}>Frequently asked questions</span>

              <h2 style={sectionTitleStyle}>
                Workwear printing questions
              </h2>
            </div>

            <div style={{ display: "grid", gap: "16px" }}>
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  style={{
                    background: colours.white,
                    border: `1px solid ${colours.border}`,
                    borderRadius: "14px",
                    padding: "0 22px",
                    boxShadow: "0 8px 25px rgba(17,24,39,0.05)",
                  }}
                >
                  <summary
                    style={{
                      padding: "21px 0",
                      cursor: "pointer",
                      fontSize: "18px",
                      fontWeight: "850",
                    }}
                  >
                    {faq.question}
                  </summary>

                  <p
                    style={{
                      margin: "0 0 22px",
                      color: colours.muted,
                      fontSize: "16px",
                      lineHeight: "1.75",
                    }}
                  >
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          style={{
            padding: "30px 20px 90px",
          }}
        >
          <div
            style={{
              ...containerStyle,
              position: "relative",
              overflow: "hidden",
              padding: "clamp(40px, 7vw, 75px)",
              borderRadius: "24px",
              background:
                "linear-gradient(135deg, #111111 0%, #252525 60%, #7f1717 100%)",
              color: colours.white,
              boxShadow: "0 22px 55px rgba(0,0,0,0.2)",
            }}
          >
            <div style={{ maxWidth: "780px", position: "relative", zIndex: 2 }}>
              <span
                style={{
                  display: "inline-block",
                  marginBottom: "13px",
                  color: "#ff8888",
                  fontWeight: "900",
                  letterSpacing: "1.4px",
                  textTransform: "uppercase",
                  fontSize: "14px",
                }}
              >
                Start your order
              </span>

              <h2
                style={{
                  margin: "0 0 18px",
                  fontSize: "clamp(34px, 6vw, 58px)",
                  lineHeight: "1.08",
                }}
              >
                Ready to create professional workwear for your team?
              </h2>

              <p
                style={{
                  maxWidth: "720px",
                  margin: "0 0 30px",
                  color: "#e4e4e4",
                  fontSize: "18px",
                  lineHeight: "1.75",
                }}
              >
                Tell us what garments you need, your quantities and where you
                want your logo printed. We will help you take the next step.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "13px",
                }}
              >
                <Link to="/contact" style={primaryButtonStyle}>
                  Get a Free Quote
                </Link>

                <Link to="/shop" style={secondaryButtonStyle}>
                  Shop Workwear
                </Link>

                <a
                  href="https://wa.me/447442514098?text=Hello%20Kett%20Press%20Co,%20I%20would%20like%20a%20quote%20for%20printed%20workwear."
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    ...secondaryButtonStyle,
                    background: "#25d366",
                    borderColor: "#25d366",
                    color: "#071a0d",
                  }}
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT DETAILS */}
        <section
          style={{
            padding: "0 20px 75px",
          }}
        >
          <div
            style={{
              ...containerStyle,
              ...cardStyle,
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "25px",
            }}
          >
            <div>
              <strong
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "18px",
                }}
              >
                Email
              </strong>

              <a
                href="mailto:info@kettpressco.com"
                style={{
                  color: colours.red,
                  textDecoration: "none",
                  fontWeight: "750",
                }}
              >
                info@kettpressco.com
              </a>
            </div>

            <div>
              <strong
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "18px",
                }}
              >
                Telephone
              </strong>

              <a
                href="tel:07442514098"
                style={{
                  color: colours.red,
                  textDecoration: "none",
                  fontWeight: "750",
                }}
              >
                07442 514098
              </a>
            </div>

            <div>
              <strong
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "18px",
                }}
              >
                Service Area
              </strong>

              <span style={{ color: colours.muted }}>
                Kettering and Northamptonshire
              </span>
            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}
        <section
          style={{
            background: "#eceef1",
            padding: "42px 20px",
          }}
        >
          <div style={containerStyle}>
            <h2
              style={{
                margin: "0 0 20px",
                fontSize: "25px",
              }}
            >
              Related printing services
            </h2>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              {[
                {
                  text: "T-Shirt Printing Kettering",
                  link: "/tshirt-printing-kettering",
                },
                {
                  text: "Hi-Vis Workwear Printing",
                  link: "/hi-vis-workwear-printing-kettering",
                },
                {
                  text: "Construction Workwear",
                  link: "/construction-workwear-kettering",
                },
                {
                  text: "Branded Workwear Northamptonshire",
                  link: "/branded-workwear-printing-northamptonshire",
                },
                {
                  text: "Visit Our Shop",
                  link: "/shop",
                },
              ].map((service) => (
                <Link
                  key={service.link}
                  to={service.link}
                  style={{
                    display: "inline-block",
                    padding: "12px 16px",
                    borderRadius: "9px",
                    background: colours.white,
                    color: colours.dark,
                    textDecoration: "none",
                    fontWeight: "750",
                    border: `1px solid ${colours.border}`,
                  }}
                >
                  {service.text}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}