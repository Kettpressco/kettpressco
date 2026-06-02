import React from "react";
import portfolio from "./data/portfolio";

const services = [
  {
    icon: "👕",
    title: "T-Shirt Printing",
    text: "High-quality custom tees for businesses, gyms, brands and events.",
    image: "/images/tshirt.jpg",
  },
  {
    icon: "🦺",
    title: "Workwear Printing",
    text: "Professional branded uniforms and durable workwear solutions.",
    image: "/images/workwear.jpg",
  },
  {
    icon: "🎨",
    title: "Logo Printing",
    text: "Sharp logo printing and custom branding for workwear, hoodies and uniforms.",
    image: "/images/logo.jpg",
  },
];
export default function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#253b52ff",
        color: "#111",
      }}
    >
      {/* NAVBAR */}
      <img src="/images/logo.png" alt="Logo" />

      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "#111",
          color: "white",
          padding: "18px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <img
  src="/images/logo.jpg"
  alt="Kett Press Co Logo"
  style={{
    width: "60px",
    height: "60px",
    objectFit: "cover",
    borderRadius: "50%",
  }}
/>
          <div>
            <h2 style={{ margin: 0 }}>Kett Press Co</h2>

            <small style={{ color: "#6f1d1dff" }}>
              Custom Printing & Workwear
            </small>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="#home" style={navLink}>
            Home
          </a>

          <a href="#services" style={navLink}>
            Services
          </a>

          <a href="#portfolio" style={navLink}>
            Portfolio
          </a>

          <a href="#quote" style={navLink}>
            Quote
          </a>

          <a href="#contact" style={navLink}>
            Contact
          </a>

          <a href="#quote">
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
        </div>
      </nav>

      {/* HERO */}

      <section
        id="home"
        style={{
          minHeight: "90vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(42px,5vw,58px)",
            lineHeight: "1.3",
            textAlign: "center",
            marginBottom: "20px",
            color: "#fff",
          }}
        >

  T-Shirt Printing & Workwear Printing in 
  <br />
  Kettering, Northamptonshire
        </h1>

        <p
          style={{
            fontSize: "clamp(18px,2vw,24px)",
            lineHeight: "1.8",
            maxWidth: "850px",
            margin: "0 auto 20px auto",
            textAlign: "center",
            padding: "0 20px",
            color: "#ddd",
        
          }}
        >
          T-Shirts • Workwear • Hoodies • Business Branding
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#bbb",
          }}
        >
          Serving Kettering & Northamptonshire
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "35px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a href="#quote">
            <button style={heroButton}>
              Get Instant Quote
            </button>
          </a>

          <a
            href="https://wa.me/447770118148"
            target="_blank"
            rel="noreferrer"
          >
            <button style={whatsappButton}>
              WhatsApp Us
            </button>
          </a>
        </div>
      </section>

      {/* SERVICES */}

      <section
        id="services"
        style={{
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(32px,5vw,50px)",
            marginBottom: "20px",
          }}
        >
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
            maxWidth: "1200px",
            margin: "60px auto 0",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={service.image}
               alt={`${service.title} in Kettering Northamptonshire`}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "30px" }}>
                <h3
                  style={{
                    color: "#D62828",
                    fontSize: "26px",
                  }}
                >
                  {service.icon} {service.title}
                </h3>

                <p
                  style={{
                    color: "#555",
                    lineHeight: 1.7,
                  }}
                >
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        
        {/* POPULAR PACKAGES */}

<section
  style={{
    padding: "90px 20px",
    background: "#111",
    color: "white",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "clamp(32px,5vw,50px)",
      marginBottom: "15px",
      color: "#D62828",
    }}
  >
    Popular Packages
  </h2>

  <p
    style={{
      color: "#ccc",
      marginBottom: "50px",
      fontSize: "18px",
    }}
  >
    Professional branded workwear packages with logo printing included.
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "25px",
      maxWidth: "1300px",
      margin: "auto",
    }}
  >
    {[
      {
        title: "Get Started Package",
        price: "£58",
        image: "/images/tshirt.jpg",
        items: [
          "4 T-Shirts",
          "1 Hoodie or Sweatshirt",
          "Logo Printing Included",
        ],
      },
      {
        title: "Smart Workwear Deal",
        price: "£70",
        image: "/images/workwear.jpg",
        items: [
          "3 T-Shirts",
          "2 Hoodies or Sweatshirts",
          "Logo Printing Included",
        ],
      },
      {
        title: "Business Starter Pack",
        price: "£75",
        image: "/images/logo.jpg",
        items: [
          "4 T-Shirts",
          "1 Hoodie or Sweatshirt",
          "1 Polo Shirt",
          "Logo Printing Included",
        ],
      },
      {
        title: "Best Value Workwear Bundle",
        price: "£105",
        image: "/images/workwear4.jpg",
        popular: true,
        items: [
          "6 T-Shirts",
          "3 Hoodies or Sweatshirts",
          "1 Polo Shirt",
          "Logo Printing Included",
        ],
      },
    ].map((pkg, index) => (
      <div
        key={index}
        style={{
          background: pkg.popular ? "#D62828" : "#222",
          borderRadius: "20px",
          overflow: "hidden",
          position: "relative",
          padding: pkg.popular ? "45px 25px" : "25px",
          transform: pkg.popular ? "scale(1.03)" : "scale(1)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
        }}
      >
        {pkg.popular && (
          <div
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              background: "#FFD700",
              color: "#111",
              padding: "8px 14px",
              borderRadius: "20px",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            MOST POPULAR
          </div>
        )}

        <img
          src={pkg.image}
          alt={`${pkg.title} - Custom Workwear Printing Northamptonshire`}
          style={{
            width: "100%",
            height: pkg.popular ? "260px" : "220px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "20px",
          }}
        />

        <h3
          style={{
            fontSize: "24px",
            marginBottom: "15px",
          }}
        >
          {pkg.title}
        </h3>

        <h2
          style={{
            fontSize: "42px",
            margin: "20px 0",
          }}
        >
          {pkg.price}
        </h2>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            lineHeight: 2,
            marginBottom: "25px",
          }}
        >
          {pkg.items.map((item, i) => (
            <li key={i}>✓ {item}</li>
          ))}
        </ul>

        <a href="#quote">
          <button
            style={{
              background: "white",
              color: "#111",
              border: "none",
              padding: "14px 24px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Get Quote
          </button>
        </a>
      </div>
    ))}
  </div>
</section>
      </section> 
{/* WHY CHOOSE US */}
<section
  style={{
    padding: "80px 20px",
    background: "white",
    textAlign: "center",
  }}
>
  <h2
  style={{
    fontSize: "clamp(32px,5vw,50px)",
    marginBottom: "25px",
    color: "#D62828",
  }}
>
    Why Choose Kett Press Co?
  </h2>

  <p
    style={{
      maxWidth: "900px",
      margin: "0 auto 50px",
      color: "#555",
      lineHeight: 1.8,
      fontSize: "18px",
    }}
  >
    Kett Press Co provides professional T-shirt printing,
    branded workwear, logo printing and custom apparel for
    businesses, gyms, events and organisations across
    Kettering, Northampton, Corby, Wellingborough and
    Northamptonshire. We focus on premium print quality,
    reliable service and fast turnaround times.
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: "20px",
      maxWidth: "1100px",
      margin: "auto",
    }}
  >
    {[
      "Fast Turnaround",
      "Premium Print Quality",
      "Bulk Order Discounts",
      "Business & Event Specialists",
      "Custom Branding Solutions",
      "Local Northamptonshire Service",
    ].map((item, index) => (
      <div
        key={index}
        style={{
          background: "#F8F9FA",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
        }}
      >
        <h3 style={{ color: "#D62828" }}>✓ {item}</h3>
      </div>
    ))}
  </div>
</section>
{/* TESTIMONIALS */}

<section
  style={{
    padding: "90px 20px",
    background: "#F8F9FA",
    textAlign: "center",
  }}
>
 <h2
  style={{
    fontSize: "clamp(32px,5vw,50px)",
    marginBottom: "50px",
    color: "#D62828",
  }}
>
  What Our Customers Say
</h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: "25px",
      maxWidth: "1200px",
      margin: "auto",
    }}
  >
    {[
      {
        name: "Ian",
        company: "Local Gym",
        review:
          "Fantastic quality workwear and excellent service from start to finish.",
      },
      {
        name: "Sarah",
        company: "Event Organiser",
        review:
          "Quick turnaround and brilliant print quality. Highly recommended.",
      },
      {
        name: "Itai",
        company: "Construction Company",
        review:
          "Professional branded uniforms delivered on time and exactly as requested.",
      },
    ].map((review, index) => (
      <div
        key={index}
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}
      >
        <p
          style={{
            color: "#555",
            lineHeight: 1.8,
            marginBottom: "20px",
          }}
        >
          "{review.review}"
        </p>

        <h3 style={{ color: "#D62828", margin: 0 }}>
          {review.name}
        </h3>

        <small>{review.company}</small>
      </div>
    ))}
  </div>
  {/* FAQ */}

<section
  style={{
    padding: "90px 20px",
    background: "white",
    maxWidth: "1000px",
    margin: "auto",
  }}
>
  <h2
    style={{
      textAlign: "center",
      fontSize: "clamp(32px,5vw,50px)",
      marginBottom: "50px",
    }}
  >

  </h2>
<h2
  style={{
    textAlign: "center",
    fontSize: "clamp(32px,5vw,50px)",
    marginBottom: "50px",
    color: "#D62828",
  }}
>
  Frequently Asked Questions
</h2>

<div style={{ display: "grid", gap: "25px" }}>
  
    <div>
      <h3>Do you offer workwear printing in Northampton?</h3>
      <p>
        Yes. We provide branded workwear, uniforms and logo printing
        for businesses across Northampton, Kettering, Corby,
        Wellingborough and Northamptonshire.
      </p>
    </div>

    <div>
      <h3>What is the minimum order quantity?</h3>
      <p>
        We can accommodate both small and large orders depending on
        the garment and printing requirements.
      </p>
    </div>

    <div>
      <h3>Can you print company logos on clothing?</h3>
      <p>
        Absolutely. We specialise in logo printing for T-shirts,
        hoodies, workwear, uniforms and promotional apparel.
      </p>
    </div>

    <div>
      <h3>How long does printing take?</h3>
      <p>
        Turnaround times vary depending on order size, but we always
        aim to deliver quickly while maintaining premium quality.
      </p>
    </div>

    <div>
      <h3>Do you provide printing services throughout Northamptonshire?</h3>
      <p>
        Yes. We serve customers in Kettering, Northampton, Corby,
        Wellingborough and surrounding areas across Northamptonshire.
      </p>
    </div>
  </div>
</section>
{/* AREAS WE COVER */}

<section
  style={{
    padding: "90px 20px",
    background: "#F8F9FA",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "clamp(32px,5vw,50px)",
      marginBottom: "30px",
      color: "#D62828",
    }}
  >
    Areas We Cover
  </h2>
<a href="/t-shirt-printing-kettering">
  T-Shirt Printing Kettering
</a>
  <p
    style={{
      maxWidth: "900px",
      margin: "0 auto 40px",
      lineHeight: 1.8,
      color: "#555",
      fontSize: "18px",
    }}
  >
    Kett Press Co provides T-shirt printing, workwear printing,
    logo printing and custom branded clothing throughout
    Northamptonshire.
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
      gap: "20px",
      maxWidth: "1000px",
      margin: "auto",
    }}
  >
    {[
      "Kettering",
      "Northampton",
      "Corby",
      "Wellingborough",
      "Rushden",
      "Burton Latimer",
      "Rothwell",
      "Desborough",
      "Northamptonshire",
    ].map((area, index) => (
      <div
        key={index}
        style={{
          background: "Gold",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
          fontWeight: "bold",
        }}
      >
        {area}
      </div>
    ))}
  </div>
</section>
</section>
      {/* PORTFOLIO */}

      <section
        id="portfolio"
        style={{
          background: "#111",
          color: "white",
          padding: "90px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(32px,5vw,50px)",
            marginBottom: "60px",
          }}
        >
          Recent Work
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
            maxWidth: "1300px",
            margin: "auto",
          }}
        >
          {portfolio.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#222",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <img
                src={item.image}
               alt={`${item.title} - Kett Press Co`}
                style={{
                  width: "100%",
                  height: "320px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "20px" }}>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}

      <section
        id="quote"
        style={{
          padding: "90px 20px",
          background: "white",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "auto",
            background: "#fff",
            borderRadius: "25px",
            padding: "50px",
            boxShadow: "0 10px 35px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(32px,5vw,48px)",
              marginBottom: "40px",
            }}
          >
            Request A Quote
          </h2>

<form
  action="https://formsubmit.co/info@kettpressco.com"
  method="POST"
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "20px",
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
    value="https://www.kettpressco.com"
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
>
  <option>T-Shirts</option>
  <option>Hoodies</option>
  <option>Workwear</option>
</select>

<input
  type="number"
  name="quantity"
  placeholder="Quantity Needed"
  style={inputStyle}
/>
<textarea
  name="message"
  rows="5"
  placeholder="Tell us about your order..."
  style={inputStyle}
  required
/>

            <button
              style={{
                background: "#D62828",
                color: "white",
                border: "none",
                padding: "18px",
                borderRadius: "12px",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Send Quote Request
            </button>
          </form>
        </div>
      </section>
<section
  style={{
    padding: "80px 20px",
    maxWidth: "1100px",
    margin: "auto",
    textAlign: "center",
  }}
>
  <h2>Custom Printing Across Northamptonshire</h2>

  <p
    style={{
      lineHeight: 1.9,
      color: "#555",
      fontSize: "18px",
    }}
  >
    Kett Press Co provides professional T-shirt printing,
    workwear printing, logo printing, custom hoodies,
    branded uniforms and promotional clothing throughout
    Kettering, Northampton, Corby, Wellingborough,
    Rushden, Rothwell, Burton Latimer and the wider
    Northamptonshire area.
  </p>
</section>
      {/* CONTACT */}

      <section
        id="contact"
        style={{
          background: "#111",
          color: "white",
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(34px,5vw,52px)",
            marginBottom: "30px",
          }}
        >
          Contact Kett Press Co
        </h2>

        <p>📞 07770 118148</p>

        <p>✉ info@kettpressco.com</p>

        <p>📍 Kettering, Northamptonshire</p>

        <a
          href="https://wa.me/447770118148"
          target="_blank"
          rel="noreferrer"
        >
          <button style={whatsappButton}>
            WhatsApp Us
          </button>
        </a>
      </section>

      {/* FOOTER */}

      <footer
        style={{
          background: "black",
          color: "#bbb",
          textAlign: "center",
          padding: "25px",
        }}
      >
        © 2026 Kett Press Co | Custom Printing | Workwear
      </footer>
    </div>
  );
}

const navLink = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

const heroButton = {
  background: "#D62828",
  color: "white",
  border: "none",
  padding: "18px 35px",
  borderRadius: "12px",
  cursor: "pointer",
  fontSize: "18px",
  fontWeight: "bold",
};

const whatsappButton = {
  background: "#25D366",
  color: "white",
  border: "none",
  padding: "18px 35px",
  borderRadius: "12px",
  cursor: "pointer",
  fontSize: "18px",
  fontWeight: "bold",
};

const inputStyle = {
  padding: "16px",
  borderRadius: "12px",
  border: "1px solid #ddd",
  fontSize: "16px",
  outline: "none",
};