module.exports = {
  env: {'node': true},
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:security/recommended',
    'plugin:sonarjs/recommended',
  ],
  parserOptions: {'ecmaVersion': 2020},
  plugins: ['sonarjs'],
  rules: {
    'arrow-spacing': ['warn', {before: true, after: true}],
    'arrow-parens': ['warn', 'as-needed'],
    'arrow-body-style': ['warn', 'as-needed'],
    'block-scoped-var': 'warn',
    'camelcase': 'warn',
    // 'comma-dangle': ['warn', {
    //   'arrays': 'only-multiline',
    //   'objects': 'only-multiline',
    //   'imports': 'only-multiline',
    //   'exports': 'only-multiline',
    //   'functions': 'only-multiline'
    // }],
    'complexity': ['warn',5],
    'eol-last': ['warn', 'always'],
    'indent': ['warn', 2],
    'key-spacing': 'warn',
    'max-len': [
      'warn',
      {
        'code': 100,
        'ignoreComments': false,
        'ignoreRegExpLiterals': false,
        'ignoreStrings': false,
        'ignoreTemplateLiterals': false,
        'ignoreUrls': false,
      }
    ],
    'max-lines': ['warn', 150],
    'max-statements': ['warn', 15],
    'max-lines-per-function': ['warn', 40],
    'max-nested-callbacks': ['warn', 2],
    'no-console': 'warn',
    'no-await-in-loop': 'warn',
    'no-empty-function': 'warn',
    'no-extra-parens': 'warn',
    'no-implicit-globals': 'warn',
    'no-labels': 'warn',
    'no-lone-blocks': 'warn',
    'no-loop-func': 'warn',
    'no-lonely-if': 'warn',
    // 'no-magic-numbers': 'warn',
    'no-multi-assign': 'warn',
    'no-multi-spaces': 'warn',
    'no-multi-str': 'warn',
    'no-multiple-empty-lines': [
      'warn',
      {
        'max': 1,
        'maxEOF': 0,
      }
    ],
    'no-nested-ternary': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-dupe-else-if': 'warn',
    'no-else-return': 'warn',
    'no-new-func': 'warn',
    'no-new-wrappers': 'warn',
    'no-path-concat': 'warn',
    'no-process-exit': 'warn',
    'no-proto': 'warn',
    'no-restricted-properties': 'warn',
    'no-return-assign': 'warn',
    'no-return-await': 'warn',
    'no-sync': 'warn',
    'no-throw-literal': 'warn',
    'no-trailing-spaces': 'warn',
    'no-undef': 'error',
    'no-undefined': 'error',
    // 'no-underscore-dangle': 'warn',
    'no-unused-vars': 'warn',
    'no-use-before-define': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'warn',
    'no-var': 'warn',
    'no-whitespace-before-property': 'warn',
    'no-with': 'warn',
    'object-curly-newline': 'warn',
    'object-curly-spacing': 'warn',
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'warn',
    'prefer-numeric-literals': 'warn',
    'prefer-object-spread': 'off',
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    'quotes': ['warn', 'single'],
    'rest-spread-spacing': 'warn',
    'require-await': 'warn',
    'semi': ['error', 'never'],
    'space-before-blocks': 'warn',
    'space-before-function-paren': 'warn',
    'space-infix-ops': 'warn',
    'space-unary-ops': 'warn',
    'spaced-comment': 'warn',
    'node/no-extraneous-require': 'error',
    'node/no-unpublished-require': 'warn',
    'node/no-missing-require': 'error',
    'node/shebang': 'off',
    'sonarjs/cognitive-complexity': ['warn', 6],
    'sonarjs/no-identical-functions': 'warn',
    'sonarjs/prefer-immediate-return': 'warn',
    'sonarjs/no-duplicate-string': ['warn', 4],
    'sonarjs/no-redundant-jump': 'warn',
    'sonarjs/prefer-object-literal': 'warn'
  },
  overrides: [
    {
      files: [
        '**/tests/**',
        '**/fixtures/**',
      ],
      rules: {
        'max-lines': ['warn', 200],
        'max-nested-callbacks': ['warn', 3],
        'no-console': 'off',
        'no-sync': 'off',
        'node/no-unpublished-require': 'off',
        'sonarjs/no-duplicate-string': 'off',
      }
    }
  ]
}
