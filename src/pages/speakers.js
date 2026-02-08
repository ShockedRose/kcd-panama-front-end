import * as React from "react"
import { useTranslation } from "react-i18next"
import Layout from "../components/layout"

const SpeakersPage = () => {
  const { t } = useTranslation()
  const topics = t("speakers.cfpTopics", { returnObjects: true })

  return (
    <Layout>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">{t("speakers.heroTitle")}</h1>
            <p className="subtitle is-3">{t("speakers.heroSubtitle")}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="box has-background-info-light">
            <h2 className="title is-3 has-text-centered has-text-dark">{t("speakers.cfpTitle")}</h2>
            <p className="subtitle has-text-centered has-text-dark">{t("speakers.cfpSubtitle")}</p>
            <div className="content">
              <p className="has-text-centered">
                {t("speakers.cfpBody")}
              </p>
              <p className="has-text-centered"><strong className="has-text-dark">{t("speakers.cfpTopicsIntro")}</strong></p>
              <div className="columns">
                <div className="column is-6 is-offset-3">
                  <ul>
                    {topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="has-text-centered mt-5">
                <a href="/cfp" className="button is-primary is-large">
                  <strong>{t("speakers.cfpCta")}</strong>
                </a>
              </div>
            </div>
          </div>

          <h2 className="title is-2 mt-6 mb-5 has-text-centered">{t("speakers.featuredTitle")}</h2>
          <p className="has-text-centered mb-6">{t("speakers.featuredSubtitle")}</p>

          <div className="columns is-multiline">
            {[1, 2, 3].map((i) => (
              <div key={i} className="column is-4">
                <div className="card">
                  <div className="card-content has-text-centered">
                    <div className="mb-4">
                      <div style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: "50%",
                        backgroundColor: "#326ce5",
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "3rem",
                        color: "white"
                      }}>
                        ?
                      </div>
                    </div>
                    <p className="title is-4">{t("speakers.placeholderName")}</p>
                    <p className="subtitle is-6">{t("speakers.placeholderRole")}</p>
                    <p>{t("speakers.placeholderBody")}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SpeakersPage

export const Head = () => {
  const { t } = useTranslation()
  return <title>{t("head.speakers")}</title>
}
