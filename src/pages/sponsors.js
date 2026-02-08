import * as React from "react"
import { useTranslation } from "react-i18next"
import Layout from "../components/layout"

const SponsorsPage = () => {
  const { t } = useTranslation()
  const whyItems = t("sponsors.whyItems", { returnObjects: true })
  const platinumIncluded = t("sponsors.platinumIncluded", { returnObjects: true })
  const goldIncluded = t("sponsors.goldIncluded", { returnObjects: true })
  const silverIncluded = t("sponsors.silverIncluded", { returnObjects: true })
  const communityIncluded = t("sponsors.communityIncluded", { returnObjects: true })

  return (
    <Layout>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">{t("sponsors.heroTitle")}</h1>
            <p className="subtitle is-3">{t("sponsors.heroSubtitle")}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="box has-background-info-light">
            <h2 className="title is-3 has-text-centered has-text-dark">{t("sponsors.becomeTitle")}</h2>
            <div className="content">
              <p className="has-text-centered is-size-5">
                {t("sponsors.becomeBody")}
              </p>
              <div className="has-text-centered mt-5">
                <div className="buttons is-centered">
                  <a
                    href="/KCD Panama 2026 Sponsor Prospectus v2.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button is-primary is-large"
                  >
                    <strong>{t("sponsors.prospectusCta")}</strong>
                  </a>
                  <a href="mailto:Panama-org@kubernetescommunitydays.org" className="button is-outlined is-primary is-large">
                    <strong>{t("sponsors.contactCta")}</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <h2 className="title is-2 mt-6 mb-5">{t("sponsors.whyTitle")}</h2>
          <div className="columns is-multiline">
            {whyItems.map((item, index) => (
              <div className="column is-6" key={`${item.title}-${index}`}>
                <div className="box">
                  <h3 className="title is-4">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="title is-2 mt-6 mb-5 has-text-centered">{t("sponsors.tiersTitle")}</h2>

          <div className="box mb-5" style={{ borderLeft: "6px solid #B9F2FF" }}>
            <div className="columns">
              <div className="column is-8">
                <h3 className="title is-3" style={{ color: "#326ce5" }}>{t("sponsors.diamondTitle")}</h3>
                <p className="mb-3">
                  {t("sponsors.diamondBody")}
                </p>
                <p className="mb-3"><strong>{t("sponsors.diamondSpots")}</strong></p>
              </div>
              <div className="column is-4">
                <a href="https://www.rbc.com" target="_blank" rel="noopener noreferrer">
                  <div className="box has-text-centered has-background-white" style={{ border: "3px solid #B9F2FF", padding: "2rem" }}>
                    <img src="/sponsors/RBC-logo.png" alt="RBC - Diamond/Committee Partner Sponsor" style={{ maxWidth: '100%', height: 'auto' }} />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="box mb-5" style={{ borderLeft: "6px solid #E5E4E2" }}>
            <div className="columns">
              <div className="column is-8">
                <h3 className="title is-3" style={{ color: "#C0C0C0" }}>{t("sponsors.platinumTitle")}</h3>
                <p className="mb-3">
                  {t("sponsors.platinumBody")}
                </p>
                <p className="mb-3"><strong>{t("sponsors.platinumSpots")}</strong></p>
                <div className="content">
                  <p className="has-text-weight-semibold">{t("sponsors.platinumIncludedTitle")}</p>
                  <ul>
                    {platinumIncluded.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="column is-4">
                <div className="box has-text-centered has-background-light" style={{ border: "2px dashed #ccc", padding: "3rem" }}>
                  <p className="has-text-grey is-size-5">{t("sponsors.platinumPlaceholder")}</p>
                  <p className="has-text-grey is-size-7 mt-2">{t("sponsors.platinumPlaceholderNote")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="box mb-5" style={{ borderLeft: "6px solid #FFD700" }}>
            <div className="columns">
              <div className="column is-8">
                <h3 className="title is-3" style={{ color: "#FFD700" }}>{t("sponsors.goldTitle")}</h3>
                <p className="mb-3">
                  {t("sponsors.goldBody")}
                </p>
                <p className="mb-3"><strong>{t("sponsors.goldSpots")}</strong></p>
                <div className="content">
                  <p className="has-text-weight-semibold">{t("sponsors.goldIncludedTitle")}</p>
                  <ul>
                    {goldIncluded.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="column is-4">
                <div className="box has-text-centered has-background-light" style={{ border: "2px dashed #ccc", padding: "3rem" }}>
                  <p className="has-text-grey is-size-5">{t("sponsors.goldPlaceholder")}</p>
                  <p className="has-text-grey is-size-7 mt-2">{t("sponsors.goldPlaceholderNote")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="box mb-5" style={{ borderLeft: "6px solid #C0C0C0" }}>
            <div className="columns">
              <div className="column is-8">
                <h3 className="title is-3" style={{ color: "#C0C0C0" }}>{t("sponsors.silverTitle")}</h3>
                <p className="mb-3">
                  {t("sponsors.silverBody")}
                </p>
                <p className="mb-3"><strong>{t("sponsors.silverSpots")}</strong></p>
                <div className="content">
                  <p className="has-text-weight-semibold">{t("sponsors.silverIncludedTitle")}</p>
                  <ul>
                    {silverIncluded.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="column is-4">
                <a href="https://tremolo.io" target="_blank" rel="noopener noreferrer">
                  <div className="box has-text-centered has-background-white" style={{ border: "3px solid #C0C0C0", padding: "2rem" }}>
                    <img src="/sponsors/ts-logo-300w.png" alt="Tremolo Security - Silver Sponsor" style={{ maxWidth: '100%', height: 'auto' }} />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="box mb-5" style={{ borderLeft: "6px solid #E91E63" }}>
            <div className="columns">
              <div className="column is-8">
                <h3 className="title is-3" style={{ color: "#E91E63" }}>{t("sponsors.communityTitle")}</h3>
                <p className="mb-3">
                  {t("sponsors.communityBody")}
                </p>
                <div className="content">
                  <p className="has-text-weight-semibold">{t("sponsors.communityIncludedTitle")}</p>
                  <ul>
                    {communityIncluded.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="column is-4">
                <a href="https://www.cncf.io" target="_blank" rel="noopener noreferrer">
                  <div className="box has-text-centered has-background-white" style={{ border: "3px solid #E91E63", padding: "2rem" }}>
                    <img src="/sponsors/cncf-color.png" alt="CNCF - Community Partner" style={{ maxWidth: '100%', height: 'auto' }} />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="box has-background-light mt-6">
            <h3 className="title is-4 has-text-dark">{t("sponsors.interestedTitle")}</h3>
            <p className="has-text-dark">
              {t("sponsors.interestedBody")}
            </p>
            <p className="mt-3">
              <strong className="has-text-dark">{t("sponsors.emailLabel")}</strong>{" "}
              <a href="mailto:Panama-org@kubernetescommunitydays.org">Panama-org@kubernetescommunitydays.org</a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SponsorsPage

export const Head = () => {
  const { t } = useTranslation()
  return <title>{t("head.sponsors")}</title>
}
