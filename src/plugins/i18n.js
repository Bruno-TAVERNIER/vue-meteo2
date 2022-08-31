// plugins/i18n.js
export default {
  install: (app, options) => {
    // inject a globally available $translate() method
    app.config.globalProperties.$translate = (key) => {
      // retrieve a nested property in `options`
      // using `key` as the path
      return key.split('.').reduce((o, i) => {
        if (o) return o[i]
      }, options)
    };

    app.config.globalProperties.$maFonction = () => "Wesh mon Pote !";

    app.config.globalProperties.double = (nb) => (nb * 2);

    app.config.globalProperties.mult = (nb1, nb2) => (nb1 * nb2);
  }
}