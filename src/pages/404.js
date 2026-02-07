import * as React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage = () => {
  const { t } = useTranslation()

  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>{t("notFound.title")}</h1>
      <p style={paragraphStyles}>
        {t("notFound.body")}
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            {t("notFound.devHint")} <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">{t("notFound.goHome")}</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => {
  const { t } = useTranslation()
  return <title>{t("head.notFound")}</title>
}
