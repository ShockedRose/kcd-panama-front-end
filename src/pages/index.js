import * as React from "react"
import { useTranslation } from "react-i18next"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  const { t } = useTranslation()
  const expectations = t("home.expectations.items", { returnObjects: true })
  console.log(expectations);
  

  return (
    <Layout>
      {/* Hero Section with Banner */}
      <section className="hero is-primary is-medium hero-with-banner" style={{
        backgroundImage: "url('/IMG_7165.JPG')"
      }}>
        <div className="hero-body" style={{ position: 'relative', zIndex: 1 }}>
          <div className="container has-text-centered">
            <h1 className="title is-1 is-spaced">
              {t("home.hero.titleLine1")}
              <br />
              {t("home.hero.titleLine2")}
            </h1>
            <p className="subtitle is-3">
              {t("home.hero.subtitle")}
            </p>
            <div className="box mt-5" style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}>
              <p className="is-size-4 has-text-dark">
                <strong className="has-text-dark">{t("home.hero.dateLabel")}:</strong> {t("home.hero.dateValue")} | <strong className="has-text-dark">{t("home.hero.locationLabel")}:</strong> {t("home.hero.locationValue")}
              </p>
            </div>
            <div className="buttons is-centered mt-5">
              <a href="https://community.cncf.io/events/details/cncf-kcd-Panama-presents-kcd-Panama-2026/" target="_blank" rel="noopener noreferrer" className="button is-light is-large">
                <strong className="has-text-dark">{t("home.hero.ctaTickets")}</strong>
              </a>
              <a href="/sponsors" className="button is-outlined is-light is-large">
                <strong className="has-text-dark">{t("home.hero.ctaSponsor")}</strong>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="section has-background-white" style={{ padding: '3rem 1.5rem' }}>
        <div className="container has-text-centered">
          <img
            src="/Panama-cncf-horizontal-transparent.png"
            alt={t("home.logoAlt")}
            style={{ maxWidth: '600px', width: '100%', height: 'auto' }}
          />
        </div>
      </section>

      {/* About Section with Photo */}
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6">
              <h2 className="title is-2">{t("home.about.title")}</h2>
              <div className="content is-medium">
                <p>
                  {t("home.about.body")}
                </p>
              </div>
            </div>
            <div className="column is-6">
              <div className="photo-gallery-item">
                <StaticImage
                  src="../images/homepage/IMG_1196.jpeg"
                  alt={t("home.about.imageAlt")}
                  placeholder="blurred"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="section has-background-light">
        <div className="container">
          <h2 className="title is-2 has-text-centered mb-6">{t("home.expectations.title")}</h2>
          <div className="columns is-multiline">
            {expectations.map((item, index) => (
              <div className="column is-4" key={`${item.title}-${index}`}>
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      <h3 className="title is-4">{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Photos Section - Woven Design */}
      <section className="section">
        <div className="container">
          <h2 className="title is-2 has-text-centered mb-5">{t("home.community.title")}</h2>
          <p className="has-text-centered is-size-5 mb-6">
            {t("home.community.subtitle")}
          </p>

          {/* First Row - 2 Photos */}
          <div className="columns mb-4">
            <div className="column is-6">
              <div className="photo-gallery-item">
                <StaticImage
                  src="../images/homepage/IMG_0820.jpeg"
                    alt={t("home.community.altNetworking")}
                  placeholder="blurred"
                />
              </div>
            </div>
            <div className="column is-6">
              <div className="photo-gallery-item">
                <StaticImage
                  src="../images/homepage/IMG_4087.jpeg"
                    alt={t("home.community.altDiscussion")}
                  placeholder="blurred"
                />
              </div>
            </div>
          </div>

          {/* Second Row - 2 Photos with Text */}
          <div className="columns is-vcentered mb-4">
            <div className="column is-6">
              <div className="photo-gallery-item">
                <StaticImage
                  src="../images/homepage/IMG_8439.jpeg"
                    alt={t("home.community.altSpeaker")}
                  placeholder="blurred"
                />
              </div>
            </div>
            <div className="column is-6">
              <div className="content">
                <h3 className="title is-3">{t("home.community.buildingTogetherTitle")}</h3>
                <p className="is-size-5">
                  {t("home.community.buildingTogetherBody")}
                </p>
              </div>
            </div>
          </div>

          {/* Third Row - Text with 2 Photos */}
          <div className="columns is-vcentered mb-4">
            <div className="column is-6">
              <div className="content">
                <h3 className="title is-3">{t("home.community.learningSharingTitle")}</h3>
                <p className="is-size-5">
                  {t("home.community.learningSharingBody")}
                </p>
              </div>
            </div>
            <div className="column is-6">
              <div className="photo-gallery-item">
                <StaticImage
                  src="../images/homepage/IMG_9132.jpeg"
                    alt={t("home.community.altGroupPhoto")}
                  placeholder="blurred"
                />
              </div>
            </div>
          </div>

          {/* Fourth Row - 2 Photos */}
          <div className="columns">
            <div className="column is-6">
              <div className="photo-gallery-item">
                <StaticImage
                  src="../images/homepage/IMG_9503.jpeg"
                    alt={t("home.community.altWorkshop")}
                  placeholder="blurred"
                />
              </div>
            </div>
            <div className="column is-6">
              <div className="photo-gallery-item">
                <StaticImage
                  src="../images/homepage/IMG_9708.jpeg"
                    alt={t("home.community.altMingling")}
                  placeholder="blurred"
                />
              </div>
            </div>
          </div>

          <div className="has-text-centered mt-6">
            <a href="/community" className="button is-primary is-medium">
              <strong>{t("home.community.viewMorePhotos")}</strong>
            </a>
          </div>
        </div>
      </section>

      {/* Sponsors Showcase Section */}
      <section className="section has-background-light" id="sponsors">
        <div className="container">
          <h2 className="title is-2 has-text-centered mb-5 has-text-dark">{t("home.sponsors.title")}</h2>
          <p className="has-text-centered is-size-5 mb-6 has-text-dark">
            {t("home.sponsors.subtitle")}
          </p>

          {/* Diamond/Committee Partner */}
          <div className="mb-6">
            <h3 className="title is-4 has-text-centered mb-4 has-text-dark">{t("home.sponsors.diamondTitle")}</h3>
            <div className="columns is-centered">
              <div className="column is-3 has-text-centered has-text-dark">
                <a href="https://example.com/diamond-sponsor" target="_blank" rel="noopener noreferrer" className="sponsor-logo-link">
                  <div className="box" style={{ padding: '2rem', backgroundColor: 'white', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="/sponsors/mock-diamond.svg" alt="Mock Diamond Sponsor - Northwind Systems" style={{ maxWidth: '200px', width: '100%', height: 'auto' }} />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Silver Partners */}
          <div className="mb-6">
            <h3 className="title is-4 has-text-centered mb-4 has-text-dark">{t("home.sponsors.silverTitle")}</h3>
            <div className="columns is-centered">
              <div className="column is-3 has-text-centered has-text-dark">
                <a href="https://example.com/silver-sponsor" target="_blank" rel="noopener noreferrer" className="sponsor-logo-link">
                  <div className="box" style={{ padding: '2rem', backgroundColor: 'white', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="/sponsors/mock-silver.svg" alt="Mock Silver Sponsor - Pinecone Ops" style={{ maxWidth: '200px', width: '100%', height: 'auto' }} />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Community Partners */}
          <div className="mb-6">
            <h3 className="title is-4 has-text-centered mb-4 has-text-dark">{t("home.sponsors.communityTitle")}</h3>
            <div className="columns is-centered">
              <div className="column is-3 has-text-centered has-text-dark">
                <a href="https://www.cncf.io" target="_blank" rel="noopener noreferrer" className="sponsor-logo-link">
                  <div className="box" style={{ padding: '2rem', backgroundColor: 'white', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="/sponsors/cncf-color.png" alt="CNCF - Community Partner" style={{ maxWidth: '200px', width: '100%', height: 'auto' }} />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="has-text-centered mt-6">
            <a href="/sponsors" className="button is-primary is-large">
              <strong>{t("home.sponsors.cta")}</strong>
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="register" className="section">
        <div className="container">
          <div className="box has-background-primary-light">
            <div className="columns is-vcentered">
              <div className="column is-8">
                <h3 className="title is-3 has-text-dark">{t("home.cta.title")}</h3>
                <p className="subtitle is-5 has-text-dark">
                  {t("home.cta.subtitle")}
                </p>
              </div>
              <div className="column is-4 has-text-centered">
                <a href="https://community.cncf.io/events/details/cncf-kcd-Panama-presents-kcd-Panama-2026/" target="_blank" rel="noopener noreferrer" className="button is-primary is-large">
                  <strong>{t("home.cta.button")}</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => {
  const { t } = useTranslation()
  return <title>{t("head.home")}</title>
}
