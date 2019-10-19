module.exports = {
  'env': {'node': true},
  'extends': [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:security/recommended',
    'plugin:jest/recommended',
    'plugin:sonarjs/recommended'
  ],
  'parserOptions': {'ecmaVersion': 2019},
  'plugins': ['sonarjs', 'jest'],
  'rules': {
    'block-scoped-var': 'warn',
    'complexity': ['warn',5],
    'eol-last': ['warn', 'always'],
    'indent': ['warn', 2],
    'key-spacing': 'warn',
    'max-len': [
      'warn',
      {
        'code': 120,
        'ignoreComments': false,
        'ignoreRegExpLiterals': false,
        'ignoreStrings': false,
        'ignoreTemplateLiterals': false,
        'ignoreUrls': false
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
    'no-labels': 'warn',
    'no-lone-blocks': 'warn',
    'no-loop-func': 'warn',
    'no-lonely-if': 'warn',
    'no-magic-numbers': 'warn',
    'no-multi-assign': 'warn',
    'no-multi-spaces': 'warn',
    'no-multi-str': 'warn',
    'no-multiple-empty-lines': [
      'warn',
      {
        'max': 1,
        'maxEOF': 0
      }
    ],
    'no-nested-ternary': 'warn',
    'no-new-function': 'warn',
    'no-new-wrapper': 'warn',
    'no-path-concat': 'warn',
    'no-process-exit': 'warn',
    'no-proto': 'warn',
    'no-return-await': 'warn',
    'no-sync': 'warn',
    'no-throw-literal': 'warn',
    'no-trailing-spaces': 'warn',
    'no-undef': 'error',
    'no-underscore-dangle': 'warn',
    'no-unused-vars': 'warn',
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
    'semi': ['error', 'never'],
    'space-before-function-paren': 'warn',
    'jest/no-disabled-tests': 'warn',
    'node/no-extraneous-require': 'error',
    'node/no-unpublished-require': 'warn',
    'node/shebang': 'off',
    'security/detect-non-literal-fs-filename': 'off',
    'security/detect-object-injection': 'off',
    'sonarjs/cognitive-complexity': ['warn', 6],
    'sonarjs/no-identical-functions': 'warn',
    'sonarjs/prefer-immediate-return': 'warn',
    'sonarjs/no-duplicate-string': ['warn', 4]
  },
  'overrides': {
    'files': [
      '**/tests/**',
      '**/fixtures/**'
    ],
    'rules': {
      'node/no-unpublished-require': 'off',
      'max-nested-callbacks': ['warn', 3],
      'max-lines': ['warn', 200],
      'sonarjs/no-duplicate-string': 'off',
      'no-console': 'off',
      'no-sync': 'off',
    }
  }
}
