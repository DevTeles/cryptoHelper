module.exports = {
  // Use the recommended TypeScript parser with default options
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },

  // Use recommended rules with type checking
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier',
  ],

  // Additional plugins
  plugins: [
    'promise', // https://github.com/xjamundx/eslint-plugin-promise
    'simple-import-sort', // https://github.com/lydell/eslint-plugin-simple-import-sort
    'prettier',
    '@typescript-eslint',
  ],

  // Customizations below considers the above extended rules as starting point
  rules: {
    'prettier/prettier': 'error',
    /**
     * DISABLED RECOMMENDED RULES
     */
    '@typescript-eslint/no-inferrable-types': ['off'], // Conflicts with typedef
    '@typescript-eslint/explicit-module-boundary-types': ['off'], // Sometimes we need to pass 'any' type argument

    /**
     * ADDITIONAL ERROR SEVERITY RULES
     */
    'no-throw-literal': ['error'], // No throwing non-error object
    complexity: ['error', 15], // Maximum cyclomatic complexity
    eqeqeq: ['error'], // Disables == and !=
    'no-dupe-else-if': ['error'], // No duplicates on else if
    'no-import-assign': ['error'], // No assign during imports
    'no-setter-return': ['error'], // No returning on setters
    'promise/prefer-await-to-then': ['error'], // No old sintaxe for promises

    /**
     * ADDITIONAL WARNING SEVERITY RULES
     */
    '@typescript-eslint/explicit-member-accessibility': ['warn'], // Must assign properties as public or private
    //'@typescript-eslint/indent': "off", // ['warn', 2], // 2 spaces indent
    '@typescript-eslint/semi': ['warn'], // Semicolons EOL
    // '@typescript-eslint/brace-style': [
    //   'warn',
    //   'stroustrup',
    //   { allowSingleLine: true },
    // ], // Line break on logic blocks keywords
    '@typescript-eslint/func-call-spacing': ['warn', 'never'], // No spaces on function calls
    '@typescript-eslint/quotes': ['warn', 'single', { avoidEscape: true }], // Single quotes only
    '@typescript-eslint/typedef': ['warn', { arrowParameter: false }], // Require type definitions except on arrow functions
    // '@typescript-eslint/type-annotation-spacing': [
    //   'warn',
    //   { before: false, after: true },
    // ], // Space on type annotations
    'simple-import-sort/sort': ['warn'], // Force import ordering
    'no-console': ['warn'], // No console.log

    curly: ['warn', 'multi-line', 'consistent'], // Logic brackets must be consistent
    'max-len': ['warn', { code: 180, comments: 180 }], // Maximum column length
    'no-extra-parens': ['warn'], // No unnecessary parenthesis
    'no-multiple-empty-lines': ['warn', { max: 1 }], // No double empty lines
    'eol-last': ['warn', 'always'], // File must end with line break
    'comma-dangle': ['warn', 'always-multiline'], // Multiline arrays and objects must end with comma

    'no-trailing-spaces': ['warn'], // No unnecessary spaces
    'no-multi-spaces': ['warn'], // No double spaces
    'object-curly-spacing': ['warn', 'always'], // Require spaces on single line objects
    'array-bracket-spacing': 'off', // Require spaces on single line arrays
    'spaced-comment': ['warn', 'always'], // Require spaces on single line commments
    'space-before-blocks': ['warn', 'always'], // Require block spaces
    'comma-spacing': ['warn', { before: false, after: true }], // Require comma spacing
    'keyword-spacing': ['warn', { before: true, after: true }], // Require keywords spaces
    'key-spacing': [
      'warn',
      { beforeColon: false, afterColon: true, mode: 'strict' },
    ], // Require key spaces
    'space-infix-ops': ['warn'], // Require spaces between math symbols
    '@typescript-eslint/no-unused-vars': 'off',
    'no-extra-parens': 'off',

    //Requires JSDoc
    'require-jsdoc': [
      'warn',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
          FunctionExpression: true,
        },
      },
    ],
  },
};
