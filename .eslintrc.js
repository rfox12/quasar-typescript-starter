module.exports = {
  root: true,

  // Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working
  // See https://eslint.vuejs.org/user-guide/#how-to-use-custom-parser
  // `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted
  parserOptions: {
    // Needed to make the parser take into account 'vue' files
    // See https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration
    extraFileExtensions: ['.vue'],
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    sourceType: 'module'
  },

  env: {
    browser: true
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    // Base ESLint recommended rules
    'eslint:recommended',

    // ESLint typescript rules
    // See https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',

    // https://eslint.vuejs.org/rules/#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules
    'plugin:vue/essential',

    // Usage with Prettier, provided by 'eslint-config-prettier'.
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage-with-prettier
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/vue'
  ],

  plugins: [
    // Required to apply rules which need type information
    '@typescript-eslint',
    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
    // required to lint *.vue files
    'vue'
    // Prettier has not been included as plugin to avoid performance impact
    // See https://github.com/typescript-eslint/typescript-eslint/issues/389#issuecomment-509292674
    // Add it as an extension for your IDE
  ],

  globals: {
    'ga': true, // Google Analytics
    'cordova': true,
    '__statics': true,
    'process': true,
    'Capacitor': true,
    'chrome': true
  },

  // add your custom rules here
  rules: {
    'prefer-promise-reject-errors': 'off',
    quotes: ['warn', 'single'],

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // TypeScript
    '@typescript-eslint/explicit-function-return-type': 'off'
  }
}
