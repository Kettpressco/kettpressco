import React from "react";
import { Helmet } from "react-helmet-async";

export default function CustomTshirtPrintingKettering() {
  return (
    <>
      <Helmet>
        <title>
          Custom T-Shirt Printing Kettering | Workwear & Branded Clothing |
          Kett Press Co
        </title>

        <meta
          name="description"
          content="Custom t-shirt printing in Kettering. Premium printed workwear, branded clothing, uniforms, hoodies and event apparel for businesses, tradespeople, restaurants, churches and organisations."
        />

        <meta
          name="keywords"
          content="custom t-shirt printing Kettering, t-shirt printing Kettering, workwear printing Kettering, branded clothing Kettering, logo printing Kettering, custom hoodies Kettering"
        />

        <link
          rel="canonical"
          href="https://kettpressco.com/custom-t-shirt-printing-kettering"
        />
      </Helmet>

      <main className="geo-page">
        <section className="geo-hero">
          <div className="container">
            <span className="geo-badge">
              Custom T-Shirt Printing • Kettering • Northamptonshire
            </span>

            <h1>Custom T-Shirt Printing in Kettering</h1>

            <p>
              Kett Press Co provides premium custom t-shirt printing,
              workwear printing, branded uniforms and promotional clothing
              throughout Kettering and Northamptonshire.
            </p>

            <a href="/contact" className="primary-btn">
              Get a Free Quote
            </a>
          </div>
        </section>

        <section className="container section">
          <h2>Professional T-Shirt Printing for Businesses in Kettering</h2>

          <p>
            We work with local businesses, tradespeople, restaurants,
            churches, schools, gyms and event organisers looking for
            professional printed clothing that promotes their brand.
          </p>

          <p>
            Whether you need a handful of garments or a large bulk order,
            Kett Press Co delivers quality printing with a professional
            finish.
          </p>
        </section>

        <section className="container section">
          <h2>Serving Kettering and Surrounding Areas</h2>

          <iframe
            title="Kettering Map"
            src="https://www.google.com/maps?q=Kettering,+Northamptonshire&output=embed"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: "12px" }}
            loading="lazy"
          />

          <p>
            We serve customers throughout Kettering, Barton Seagrave,
            Burton Latimer, Rothwell, Desborough, Mawsley and surrounding
            Northamptonshire areas.
          </p>
        </section>

        <section className="container section">
          <h2>Who We Work With</h2>

          <ul>
            <li>Local Businesses</li>
            <li>Tradespeople</li>
            <li>Restaurants</li>
            <li>Churches</li>
            <li>Schools</li>
            <li>Gyms</li>
            <li>Sports Clubs</li>
            <li>Events & Festivals</li>
          </ul>
        </section>

        <section className="container section">
          <h2>Frequently Asked Questions</h2>

          <h3>Do you offer custom t-shirt printing in Kettering?</h3>
          <p>
            Yes. We provide custom printed garments throughout Kettering
            and Northamptonshire.
          </p>

          <h3>Can you print my company logo?</h3>
          <p>
            Absolutely. We print logos, artwork and branding onto a wide
            range of garments.
          </p>

          <h3>Do you offer workwear printing?</h3>
          <p>
            Yes. We print workwear, hoodies, polo shirts, hi-vis clothing
            and branded uniforms.
          </p>

          <h3>Can I supply my own artwork?</h3>
          <p>
            Yes. Simply send us your logo or artwork and we'll prepare it
            for production.
          </p>
        </section>

        <section className="container section">
          <h2>Get a Free Quote</h2>

          <p>
            Looking for custom t-shirt printing in Kettering? Contact
            Kett Press Co today for a fast, competitive quote.
          </p>
          <p>
  Looking for printing services outside Kettering? We also provide
  <a href="/custom-t-shirt-printing-northampton">
    {" "}custom T-shirt printing in Northampton
  </a>
  .
</p>

          <a href="/contact" className="primary-btn">
            Request a Quote
          </a>
        </section>
      </main>
    </>
  );
}