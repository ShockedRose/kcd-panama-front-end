import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { resources } from "./translations"

const supportedLanguages = ["en", "es"]
const isBrowser = typeof window !== "undefined"

const detectLanguage = () => {
  if (!isBrowser) return "es"

  const storedLanguage = window.localStorage.getItem("language")
  if (storedLanguage && supportedLanguages.includes(storedLanguage)) {
    return storedLanguage
  }

  return "es"
}

i18n.use(initReactI18next).init({
  resources,
  lng: detectLanguage(),
  fallbackLng: "es",
  interpolation: { escapeValue: false }
})

export const setLanguage = (language) => {
  if (!supportedLanguages.includes(language)) return
  i18n.changeLanguage(language)
  if (isBrowser) {
    window.localStorage.setItem("language", language)
  }
}

export default i18n
