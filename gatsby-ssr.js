const React = require("react");
const { I18nextProvider } = require("react-i18next");
const i18n = require("./src/i18n/i18n").default;

const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "es" });
};

const wrapRootElement = ({ element }) => (
  <I18nextProvider i18n={i18n}>{element}</I18nextProvider>
);

module.exports = {
  onRenderBody,
  wrapRootElement,
};
