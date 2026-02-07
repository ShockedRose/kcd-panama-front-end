import * as React from "react"
import { useTranslation } from "react-i18next"
import Layout from "../components/layout"

const CFPPage = () => {
  const { t } = useTranslation()
  const topicsLeft = t("cfp.topicsLeft", { returnObjects: true })
  const topicsRight = t("cfp.topicsRight", { returnObjects: true })
  const sessionFormats = t("cfp.sessionFormats", { returnObjects: true })
  const whySpeak = t("cfp.whySpeak", { returnObjects: true })
  const dates = t("cfp.dates", { returnObjects: true })

  return (
    <Layout>
      <section className="hero is-primary is-medium">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1">{t("cfp.heroTitle")}</h1>
            <p className="subtitle is-3">{t("cfp.heroSubtitle")}</p>
            <p className="subtitle is-5">{t("cfp.heroDetails")}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <div className="box has-background-info-light mb-5">
                <h2 className="title is-3 has-text-centered">{t("cfp.introTitle")}</h2>
                <div className="content">
                  <p className="is-size-5 has-text-centered">
                    {t("cfp.introBody")}
                  </p>
                  <p className="is-size-5 has-text-centered mt-4">
                    {t("cfp.introBody2")}
                  </p>
                </div>
              </div>

              <div className="box mb-5">
                <h3 className="title is-4 has-text-centered">{t("cfp.lookingTitle")}</h3>
                <div className="content">
                  <p className="has-text-centered mb-4">
                    {t("cfp.lookingBody")}
                  </p>
                  <div className="columns is-multiline">
                    <div className="column is-6">
                      <ul>
                        {topicsLeft.map((topic) => (
                          <li key={topic}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="column is-6">
                      <ul>
                        {topicsRight.map((topic) => (
                          <li key={topic}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box mb-5">
                <h3 className="title is-4 has-text-centered">{t("cfp.sessionFormatsTitle")}</h3>
                <div className="content">
                  <div className="columns">
                    {sessionFormats.map((format) => (
                      <div className="column is-4" key={format.title}>
                        <div className="has-text-centered">
                          <p className="title is-5">{format.title}</p>
                          <p className="subtitle is-6">{format.duration}</p>
                          <p>{format.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="box mb-5 has-background-light">
                <h3 className="title is-4 has-text-centered">{t("cfp.whySpeakTitle")}</h3>
                <div className="content">
                  <div className="columns">
                    {whySpeak.map((item) => (
                      <div className="column is-4 has-text-centered" key={item.title}>
                        <p className="title is-1 has-text-primary">{item.emoji}</p>
                        <p className="mt-3"><strong>{item.title}</strong></p>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="box mb-5">
                <h3 className="title is-4 has-text-centered">{t("cfp.datesTitle")}</h3>
                <div className="content">
                  <div className="columns has-text-centered">
                    {dates.map((date) => (
                      <div className="column is-4" key={date.title}>
                        <p className="title is-6">{date.title}</p>
                        <p className="subtitle is-5">{date.date}</p>
                        <p className="has-text-grey">{date.time}</p>
                      </div>
                    ))}
                  </div>
                  <div className="notification is-success is-light has-text-centered mt-4">
                    <strong>{t("cfp.cfpOpen")}</strong>
                  </div>
                </div>
              </div>

              {/* Sessionize CFP Form Link */}
              <div className="box has-background-primary-light">
                <h2 className="title is-2 has-text-centered mb-4">{t("cfp.readyTitle")}</h2>
                <div className="content has-text-centered">
                  <p className="is-size-5 mb-5">
                    {t("cfp.readyBody")}
                  </p>
                  <a
                    href="https://sessionize.com/kcd-Panama-2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button is-primary is-large"
                  >
                    <strong>{t("cfp.readyCta")}</strong>
                  </a>
                  <p className="mt-4 has-text-grey">
                    <small>{t("cfp.readyNote")}</small>
                  </p>
                </div>
              </div>

              <div className="box has-background-light mt-5">
                <h3 className="title is-5 has-text-centered">{t("cfp.helpTitle")}</h3>
                <p className="has-text-centered">
                  {t("cfp.helpBody")}{" "}
                  <a href="mailto:Panama-org@kubernetescommunitydays.org"><strong>Panama-org@kubernetescommunitydays.org</strong></a>
                </p>
                <p className="has-text-centered mt-3 has-text-grey">
                  <small>
                    {t("cfp.reminder")}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CFPPage

export const Head = () => {
  const { t } = useTranslation()
  return <title>{t("head.cfp")}</title>
}
