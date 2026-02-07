import * as React from "react"
import { useTranslation } from "react-i18next"
import Layout from "../components/layout"

const CodeOfConductPage = () => {
  const { t } = useTranslation()
  const expectedList = t("codeOfConduct.expectedList", { returnObjects: true })
  const unacceptableList = t("codeOfConduct.unacceptableList", { returnObjects: true })

  return (
    <Layout>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">{t("codeOfConduct.heroTitle")}</h1>
            <p className="subtitle is-3">{t("codeOfConduct.heroSubtitle")}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="notification is-warning">
            <p className="is-size-5 has-text-weight-semibold">
              {t("codeOfConduct.warning")}
            </p>
          </div>

          <div className="content is-medium mt-6">
            <h2 className="title is-2">{t("codeOfConduct.commitmentTitle")}</h2>
            <p>
              {t("codeOfConduct.commitmentBody")}
            </p>

            <h2 className="title is-2 mt-6">{t("codeOfConduct.expectedTitle")}</h2>
            <ul>
              {expectedList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className="title is-2 mt-6">{t("codeOfConduct.unacceptableTitle")}</h2>
            <p>{t("codeOfConduct.unacceptableIntro")}</p>
            <ul>
              {unacceptableList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className="title is-2 mt-6">{t("codeOfConduct.reportingTitle")}</h2>
            <p>
              {t("codeOfConduct.reportingBody")}
            </p>

            <div className="box has-background-info-light mt-4">
              <p className="has-text-weight-semibold">
                Email: <a href="mailto:Panama-org@kubernetescommunitydays.org">Panama-org@kubernetescommunitydays.org</a>
              </p>
            </div>

            <h2 className="title is-2 mt-6">{t("codeOfConduct.additionalTitle")}</h2>
            <p>
              {t("codeOfConduct.additionalBody")}{" "}
              <a href="https://www.cncf.io/conduct/" target="_blank" rel="noopener noreferrer">
                CNCF Code of Conduct
              </a>
            </p>
          </div>

          <div className="notification is-primary mt-6">
            <p className="has-text-centered has-text-weight-semibold">
              {t("codeOfConduct.closing")}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CodeOfConductPage

export const Head = () => {
  const { t } = useTranslation()
  return <title>{t("head.codeOfConduct")}</title>
}
