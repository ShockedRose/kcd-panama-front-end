import * as React from "react"
import { useTranslation } from "react-i18next"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const CommunityPage = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">{t("community.heroTitle")}</h1>
            <p className="subtitle is-3">{t("community.heroSubtitle")}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content has-text-centered mb-6">
            <h2 className="title is-2">{t("community.meetupsTitle")}</h2>
            <p className="is-size-5">
              {t("community.meetupsBody")}
            </p>
          </div>

          <div className="photo-gallery">
            <div className="photo-gallery-item">
              <StaticImage
                src="../images/community/IMG_0762.jpeg"
                alt={t("community.galleryAlt")}
                placeholder="blurred"
              />
            </div>
            <div className="photo-gallery-item">
              <StaticImage
                src="../images/community/IMG_0816.jpeg"
                alt={t("community.galleryAlt")}
                placeholder="blurred"
              />
            </div>
            <div className="photo-gallery-item">
              <StaticImage
                src="../images/community/IMG_1188.jpeg"
                alt={t("community.galleryAlt")}
                placeholder="blurred"
              />
            </div>
            <div className="photo-gallery-item">
              <StaticImage
                src="../images/community/IMG_2691.jpeg"
                alt={t("community.galleryAlt")}
                placeholder="blurred"
              />
            </div>
            <div className="photo-gallery-item">
              <StaticImage
                src="../images/community/IMG_2717.jpeg"
                alt={t("community.galleryAlt")}
                placeholder="blurred"
              />
            </div>
            <div className="photo-gallery-item">
              <StaticImage
                src="../images/community/IMG_5050.jpeg"
                alt={t("community.galleryAlt")}
                placeholder="blurred"
              />
            </div>
            <div className="photo-gallery-item">
              <StaticImage
                src="../images/community/IMG_6734.jpeg"
                alt={t("community.galleryAlt")}
                placeholder="blurred"
              />
            </div>
            <div className="photo-gallery-item">
              <StaticImage
                src="../images/community/IMG_8504.jpeg"
                alt={t("community.galleryAlt")}
                placeholder="blurred"
              />
            </div>
            <div className="photo-gallery-item">
              <StaticImage
                src="../images/community/IMG_9719.jpeg"
                alt={t("community.galleryAlt")}
                placeholder="blurred"
              />
            </div>
            <div className="photo-gallery-item">
              <StaticImage
                src="../images/community/IMG_9854.jpeg"
                alt={t("community.galleryAlt")}
                placeholder="blurred"
              />
            </div>
          </div>

          <div className="box has-background-primary-light mt-6">
            <h3 className="title is-3 has-text-centered has-text-dark">{t("community.joinTitle")}</h3>
            <div className="content has-text-centered">
              <p className="is-size-5">
                {t("community.joinBody")}
              </p>
              <div className="buttons is-centered mt-5">
                <a
                  href="https://cloud-native.slack.com/archives/C0913H8TSPN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is-primary is-large"
                >
                  <strong>{t("community.joinCta")}</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CommunityPage

export const Head = () => {
  const { t } = useTranslation()
  return <title>{t("head.community")}</title>
}
