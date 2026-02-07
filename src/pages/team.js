import * as React from "react"
import { useTranslation } from "react-i18next"
import Layout from "../components/layout"

const TeamPage = () => {
  const { t } = useTranslation()
  const joinList = t("team.joinList", { returnObjects: true })
  const roleOrganizer = t("team.roleOrganizer")

  const teamMembers = [
    { name: "Adriana Villela", description: "Principal Developer Advocate | OTel End User SIG Maintainer" },
    { name: "Andre Marcelo-Tanner", description: "SRE" },
    { name: "Ayrat Khayretdinov", description: "CNCF Ambassador" },
    { name: "Jason Hadi", description: "SRE @ ecobee" },
    { name: "Jason Paolasini", description: "" },
    { name: "John Nixon", description: "" },
    { name: "Marino Wijay", description: "Channel Manager" },
    { name: "Michael Foster", description: "CNCF Ambassador / Kube Security Junkie / Red Hatter" },
  ]

  return (
    <Layout>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">{t("team.heroTitle")}</h1>
            <p className="subtitle is-3">{t("team.heroSubtitle")}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="has-text-centered is-size-5 mb-6">
            {t("team.introBody")}
          </p>

          <h2 className="title is-2 mb-5 has-text-centered">{t("team.sectionTitle")}</h2>

          <div className="columns is-multiline">
            {teamMembers.map((member, index) => (
              <div key={index} className="column is-4">
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
                        👤
                      </div>
                    </div>
                    <p className="title is-4">{member.name}</p>
                    <p className="subtitle is-6">{roleOrganizer}</p>
                    <p>{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="box has-background-info-light mt-6">
            <h2 className="title is-3 has-text-centered">{t("team.joinTitle")}</h2>
            <div className="content">
              <p className="has-text-centered">
                {t("team.joinBody")}
              </p>
              <p className="has-text-centered"><strong>{t("team.joinIntro")}</strong></p>
              <div className="columns">
                <div className="column is-6 is-offset-3">
                  <ul>
                    {joinList.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="has-text-centered mt-5">
                <a href="mailto:Panama-org@kubernetescommunitydays.org" className="button is-primary is-large">
                  <strong>{t("team.joinCta")}</strong>
                </a>
              </div>
            </div>
          </div>

          <div className="box has-background-light mt-6">
            <p>
              <strong>{t("team.questionsTitle")}</strong>{" "}
              {t("team.questionsBody")}{" "}
              <a href="mailto:Panama-org@kubernetescommunitydays.org">Panama-org@kubernetescommunitydays.org</a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default TeamPage

export const Head = () => {
  const { t } = useTranslation()
  return <title>{t("head.team")}</title>
}
