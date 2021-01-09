module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'plugin:prettier/recommended',
    'standard',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'semi': ['error', 'always'], // セミコロン必須
    'quotes': ['error', 'single'], // シングルクォート
    'comma-dangle': ['error', 
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'functions': 'never'
      }
    ], // 行末カンマ必須
    'object-curly-spacing': ['error', 'always'], // オブジェクトの{の後と}の前にスペース必須
    'space-before-function-paren': [
      'error',
      {
        "named": "never", // 関数名の後にスペース入れない
        "asyncArrow": "always" // asyncの後はスペース入れる
      }
    ],
    'array-callback-return': 'off',
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true, // シングルクォート
        'trailingComma': 'es5',
      },
    ],
  },
}
