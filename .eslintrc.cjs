// http://eslint.org/docs/user-guide/configuring

const ERROR_LEVELS = Object.freeze({
   off: 0,
   warn: 1,
   error: 2,
})

const eslintSettings = {
   root: true,
   parserOptions: {
      sourceType: 'module',
      ecmaVersion: '2022',
   },
   env: {
      es2022: true,
      browser: true,
   },
   globals: {
      aptrinsic: 'readonly',
      __dirname: true,
      process: true,
      module: true,
      global: 'readonly', // Add 'global' as a global variable and mark it as readonly
      Buffer: 'readonly', // Add 'Buffer' as a global variable and mark it as readonly
      require: true,
   },
   // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
   extends: [ 'eslint:recommended', 'plugin:vue/vue2-recommended' ],
   // Required to lint *.vue files
   plugins: [
      'vue',
   ],
   rules: {
      'vue/html-indent': ERROR_LEVELS.off,
      'vue/no-restricted-html-elements': [
         ERROR_LEVELS.error,
         {
            element: 'RouterLink',
            message: `Use RouterLinkCfm instead.`,
         },
      ],
      'vue/no-multiple-template-root': [ ERROR_LEVELS.error, { disallowComments: true } ],
      //#endregion Vue - HTML
   },
}

module.exports = eslintSettings