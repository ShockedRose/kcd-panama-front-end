import * as React from "react"
import { useTranslation } from "react-i18next"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const VenuePage = () => {
  const { t } = useTranslation()
  const venueSpaces = t("venue.spaces", { returnObjects: true })
  const travelItems = t("venue.travel", { returnObjects: true })
  const exploreList = t("venue.exploreList", { returnObjects: true })

  return (
    <Layout>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">{t("venue.heroTitle")}</h1>
            <p className="subtitle is-3">{t("venue.heroSubtitle")}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="box has-background-primary-light">
            <h2 className="title is-3 has-text-centered">{t("venue.venueTitle")}</h2>
            <p className="has-text-centered is-size-5 mb-4">
              <strong>{t("venue.venueAddress")}</strong>
            </p>
            <p className="has-text-centered mb-5">
              {t("venue.venueBody")}
            </p>

            {/* Venue Photo from Homepage */}
            <div className="photo-gallery-item mb-2">
              <StaticImage
                src="../images/homepage/IMG_7170.JPG"
                alt={t("venue.venueAlt")}
                placeholder="blurred"
              />
            </div>

            {/* Quay Venue Photos Gallery */}
            <h3 className="title is-4 has-text-centered mb-4 mt-5">{t("venue.spacesTitle")}</h3>
            <div className="columns is-multiline">
              <div className="column is-6">
                <div className="photo-gallery-item">
                  <StaticImage
                    src="../images/venue/Gala-hall-v1.jpg"
                    alt={venueSpaces[0]?.alt}
                    placeholder="blurred"
                  />
                </div>
                <p className="has-text-centered mt-2 has-text-weight-semibold">{venueSpaces[0]?.title}</p>
              </div>
              <div className="column is-6">
                <div className="photo-gallery-item">
                  <StaticImage
                    src="../images/venue/Gala-Lounge.jpg"
                    alt={venueSpaces[1]?.alt}
                    placeholder="blurred"
                  />
                </div>
                <p className="has-text-centered mt-2 has-text-weight-semibold">{venueSpaces[1]?.title}</p>
              </div>
              <div className="column is-4">
                <div className="photo-gallery-item">
                  <StaticImage
                    src="../images/venue/Entrance.jpg"
                    alt={venueSpaces[2]?.alt}
                    placeholder="blurred"
                  />
                </div>
                <p className="has-text-centered mt-2 has-text-weight-semibold">{venueSpaces[2]?.title}</p>
              </div>
              <div className="column is-4">
                <div className="photo-gallery-item">
                  <StaticImage
                    src="../images/venue/Boardroom.jpg"
                    alt={venueSpaces[3]?.alt}
                    placeholder="blurred"
                  />
                </div>
                <p className="has-text-centered mt-2 has-text-weight-semibold">{venueSpaces[3]?.title}</p>
              </div>
              <div className="column is-4">
                <div className="photo-gallery-item">
                  <StaticImage
                    src="../images/venue/Workshops1.jpg"
                    alt={venueSpaces[4]?.alt}
                    placeholder="blurred"
                  />
                </div>
                <p className="has-text-centered mt-2 has-text-weight-semibold">{venueSpaces[4]?.title}</p>
              </div>
            </div>
          </div>

          <div className="content is-medium mt-6">
            <h2 className="title is-2">{t("venue.gettingThereTitle")}</h2>

            <div className="columns is-multiline">
              {travelItems.map((item) => (
                <div className="column is-6" key={item.title}>
                  <div className="box">
                    <h3 className="title is-4">{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="title is-2 mt-6">{t("venue.exploreTitle")}</h2>
            <p>{t("venue.exploreIntro")}</p>
            <ul>
              {exploreList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="box has-background-light mt-6">
            <p>
              <strong>{t("venue.questionsTitle")}</strong>{" "}
              {t("venue.questionsBody")}{" "}
              <a href="mailto:Panama-org@kubernetescommunitydays.org">Panama-org@kubernetescommunitydays.org</a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default VenuePage

export const Head = () => {
  const { t } = useTranslation()
  return <title>{t("head.venue")}</title>
}
