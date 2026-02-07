import * as React from "react"
import { useTranslation } from "react-i18next"
import Layout from "../components/layout"

const SchedulePage = () => {
  const { t } = useTranslation()
  const scheduleItems = t("schedule.items", { returnObjects: true })

  return (
    <Layout>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">{t("schedule.heroTitle")}</h1>
            <p className="subtitle is-3">{t("schedule.heroSubtitle")}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="notification is-info is-light">
            <p className="has-text-centered is-size-5">
              <strong>{t("schedule.noticeTitle")}</strong> {t("schedule.noticeBody")}
            </p>
          </div>

          <h2 className="title is-2 mt-6 mb-5">{t("schedule.sampleTitle")}</h2>
          <p className="subtitle mb-6">{t("schedule.sampleSubtitle")}</p>

          <div className="timeline">
            {scheduleItems.map((item, index) => (
              <div key={index} className="box mb-4">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong className="has-text-primary is-size-5">{item.time}</strong>
                        <br />
                        <strong className="is-size-4">{item.title}</strong>
                        {item.speaker && (
                          <>
                            <br />
                            <em className="has-text-grey">{item.speaker}</em>
                          </>
                        )}
                        <br />
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SchedulePage

export const Head = () => {
  const { t } = useTranslation()
  return <title>{t("head.schedule")}</title>
}
