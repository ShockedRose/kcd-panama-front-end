import * as React from "react"
import { useTranslation } from "react-i18next"
import Layout from "../components/layout"

const AboutPage = () => {
  const { t } = useTranslation()
  const highlights = t("about.highlights", { returnObjects: true })
  const whoAttendList = t("about.whoAttendList", { returnObjects: true })

  return (
    <Layout>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">{t("about.heroTitle")}</h1>
            <p className="subtitle is-3">{t("about.heroSubtitle")}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content is-medium">
            <h2 className="title is-2">{t("about.whatIsTitle")}</h2>
            <p>
              {t("about.whatIsBody")}
            </p>
            <p>
              {t("about.whatIsBody2")}
            </p>

            <h2 className="title is-2 mt-6">{t("about.panamaTitle")}</h2>
            <p>
              {t("about.panamaBody")}
            </p>

            <h2 className="title is-2 mt-6">{t("about.highlightsTitle")}</h2>
            <div className="columns is-multiline">
              {highlights.map((item, index) => (
                <div className="column is-6" key={`${item.title}-${index}`}>
                  <div className="box">
                    <h3 className="title is-4">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="title is-2 mt-6">{t("about.whoAttendTitle")}</h2>
            <div className="content">
              <ul>
                {whoAttendList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage

export const Head = () => {
  const { t } = useTranslation()
  return <title>{t("head.about")}</title>
}
