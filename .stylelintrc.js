module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue/scss', 'stylelint-config-idiomatic-order', 'stylelint-config-prettier'],
  ignoreFiles: ['./src/assets/styles/element/element-variables.scss'],
  rules: {
    'scss/dollar-variable-pattern': [/^--/, {ignore: 'global'}],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep'],
      },
    ],
  },
};
