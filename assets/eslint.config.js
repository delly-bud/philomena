import tsEslint from 'typescript-eslint';
import vitestPlugin from 'eslint-plugin-vitest';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

export default tsEslint.config(
  ...tsEslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    name: 'PhilomenaConfig',
    files: ['**/*.js', '**/*.ts'],
    languageOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'accessor-pairs': 2,
      'array-bracket-spacing': 0,
      'array-callback-return': 2,
      'arrow-body-style': 0,
      'arrow-spacing': 2,
      'block-scoped-var': 2,
      'block-spacing': 2,
      'callback-return': 0,
      camelcase: [2, { allow: ['camo_url', 'spoiler_image_uri', 'image_ids'] }],
      'class-methods-use-this': 0,
      'comma-dangle': [2, 'only-multiline'],
      'comma-spacing': 2,
      'comma-style': 2,
      complexity: 0,
      'computed-property-spacing': [2, 'never'],
      'consistent-return': 0,
      'consistent-this': [2, 'that'],
      'constructor-super': 2,
      curly: [2, 'multi-line', 'consistent'],
      'default-case': 2,
      'dot-location': [2, 'property'],
      'dot-notation': [2, { allowKeywords: true }],
      'eol-last': 2,
      eqeqeq: 2,
      'func-call-spacing': 0,
      'func-name-matching': 2,
      'func-names': 0,
      'func-style': 0,
      'generator-star-spacing': 2,
      'global-require': 2,
      'guard-for-in': 0,
      'handle-callback-err': 2,
      'id-blacklist': 0,
      'id-length': 0,
      'id-match': 2,
      'init-declarations': 0,
      'jsx-quotes': 0,
      'key-spacing': 0,
      'keyword-spacing': 2,
      'line-comment-position': 0,
      'linebreak-style': [2, 'unix'],
      'lines-around-comment': 0,
      'lines-around-directive': 2,
      'max-depth': 0,
      'max-len': 0,
      'max-lines': 0,
      'max-nested-callbacks': 0,
      'max-params': 0,
      'max-statements-per-line': 0,
      'max-statements': 0,
      'multiline-ternary': 0,
      'new-cap': 2,
      'new-parens': 2,
      'newline-after-var': 0,
      'newline-before-return': 0,
      'newline-per-chained-call': 0,
      'no-alert': 0,
      'no-array-constructor': 2,
      'no-caller': 2,
      'no-case-declarations': 2,
      'no-catch-shadow': 2,
      'no-class-assign': 2,
      'no-cond-assign': 2,
      'no-confusing-arrow': 2,
      'no-console': 0,
      'no-const-assign': 2,
      'no-constant-condition': 2,
      'no-control-regex': 2,
      'no-debugger': 2,
      'no-delete-var': 2,
      'no-div-regex': 2,
      'no-dupe-args': 2,
      'no-dupe-class-members': 2,
      'no-dupe-keys': 2,
      'no-duplicate-case': 2,
      'no-duplicate-imports': 2,
      'no-else-return': 2,
      'no-empty-character-class': 2,
      'no-empty-function': 0,
      'no-empty-pattern': 2,
      'no-empty': 2,
      'no-eq-null': 2,
      'no-eval': 2,
      'no-ex-assign': 2,
      'no-extend-native': 2,
      'no-extra-bind': 2,
      'no-extra-boolean-cast': 2,
      'no-extra-label': 2,
      'no-extra-parens': [2, 'all', { nestedBinaryExpressions: false }],
      'no-extra-semi': 2,
      'no-fallthrough': 2,
      'no-floating-decimal': 2,
      'no-func-assign': 2,
      'no-global-assign': 2,
      'no-implicit-coercion': 2,
      'no-implicit-globals': 2,
      'no-implied-eval': 2,
      'no-inline-comments': 0,
      'no-inner-declarations': [2, 'both'],
      'no-invalid-regexp': 2,
      'no-invalid-this': 2,
      'no-irregular-whitespace': 2,
      'no-iterator': 2,
      'no-label-var': 2,
      'no-labels': 2,
      'no-lone-blocks': 2,
      'no-lonely-if': 0,
      'no-loop-func': 2,
      'no-magic-numbers': 0,
      'no-mixed-operators': 0,
      'no-mixed-requires': 0,
      'no-mixed-spaces-and-tabs': 2,
      'no-multi-spaces': 0,
      'no-multi-str': 2,
      'no-multiple-empty-lines': [2, { max: 3, maxBOF: 0, maxEOF: 1 }],
      'no-native-reassign': 2,
      'no-negated-condition': 0,
      'no-negated-in-lhs': 2,
      'no-nested-ternary': 2,
      'no-new-func': 2,
      'no-new-object': 2,
      'no-new-require': 2,
      'no-new-symbol': 2,
      'no-new-wrappers': 2,
      'no-new': 2,
      'no-obj-calls': 2,
      'no-octal-escape': 2,
      'no-octal': 2,
      'no-param-reassign': 2,
      'no-path-concat': 2,
      'no-plusplus': 0,
      'no-process-env': 2,
      'no-process-exit': 2,
      'no-proto': 2,
      'no-prototype-builtins': 0,
      'no-redeclare': 2,
      'no-regex-spaces': 2,
      'no-restricted-globals': [2, 'event'],
      'no-restricted-imports': 2,
      'no-restricted-modules': 2,
      'no-restricted-properties': 0,
      'no-restricted-syntax': 2,
      'no-return-assign': 0,
      'no-script-url': 2,
      'no-self-assign': 2,
      'no-self-compare': 2,
      'no-sequences': 2,
      'no-shadow-restricted-names': 2,
      'no-shadow': 2,
      'no-spaced-func': 2,
      'no-sparse-arrays': 2,
      'no-sync': 0,
      'no-tabs': 2,
      'no-template-curly-in-string': 2,
      'no-ternary': 0,
      'no-this-before-super': 2,
      'no-throw-literal': 2,
      'no-trailing-spaces': 2,
      'no-undef-init': 2,
      'no-undef': 2,
      'no-undefined': 2,
      'no-underscore-dangle': 0,
      'no-unexpected-multiline': 2,
      'no-unmodified-loop-condition': 2,
      'no-unneeded-ternary': 2,
      'no-unreachable': 2,
      'no-unsafe-finally': 2,
      'no-unsafe-negation': 2,
      'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
      'no-unused-labels': 2,
      'no-unused-vars': [2, { vars: 'all', args: 'after-used', varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
      'no-use-before-define': [2, 'nofunc'],
      'no-useless-call': 2,
      'no-useless-computed-key': 2,
      'no-useless-concat': 2,
      'no-useless-constructor': 2,
      'no-useless-escape': 2,
      'no-useless-rename': 2,
      'no-var': 2,
      'no-void': 2,
      'no-warning-comments': 0,
      'no-whitespace-before-property': 2,
      'no-with': 2,
      'object-curly-newline': 0,
      'object-curly-spacing': 0,
      'object-property-newline': 0,
      'object-shorthand': 2,
      'one-var-declaration-per-line': 0,
      'one-var': 0,
      'operator-assignment': [2, 'always'],
      'operator-linebreak': 0,
      'padded-blocks': 0,
      'prefer-arrow-callback': 2,
      'prefer-const': 2,
      'prefer-numeric-literals': 2,
      'prefer-reflect': 0,
      'prefer-rest-params': 2,
      'prefer-spread': 0,
      'prefer-template': 2,
      'quote-props': [2, 'as-needed'],
      radix: 2,
      'require-jsdoc': 0,
      'require-yield': 2,
      'rest-spread-spacing': 2,
      'semi-spacing': [2, { before: false, after: true }],
      semi: 2,
      'sort-imports': 0,
      'sort-keys': 0,
      'sort-vars': 0,
      'space-before-blocks': [2, 'always'],
      'space-in-parens': [2, 'never'],
      'space-infix-ops': 2,
      'space-unary-ops': [2, { words: true, nonwords: false }],
      'spaced-comment': 0,
      strict: [2, 'function'],
      'symbol-description': 2,
      'template-curly-spacing': [2, 'never'],
      'unicode-bom': 2,
      'use-isnan': 2,
      'valid-jsdoc': 0,
      'valid-typeof': 2,
      'vars-on-top': 2,
      'wrap-iife': 2,
      'wrap-regex': 0,
      'yield-star-spacing': 2,
      yoda: [2, 'never'],
    },
    ignores: ['js/vendor/*', 'vite.config.ts'],
  },
  {
    files: ['**/*.js'],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  {
    files: ['**/*.ts'],
    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'no-redeclare': 'off',
      'no-shadow': 'off',
      '@typescript-eslint/no-unused-vars': [
        2,
        { vars: 'all', args: 'after-used', varsIgnorePattern: '^_.*', argsIgnorePattern: '^_.*' },
      ],
      '@typescript-eslint/no-redeclare': 2,
      '@typescript-eslint/no-shadow': 2,
    },
  },
  {
    files: ['**/*.spec.ts', '**/test/*.ts'],
    plugins: {
      vitest: vitestPlugin,
    },
    rules: {
      ...vitestPlugin.configs.recommended.rules,
      'no-undef': 'off',
      'no-undefined': 'off',
      'no-unused-expressions': 0,
      'vitest/valid-expect': 0,
      '@typescript-eslint/no-unused-expressions': 0,
    },
  },
);
