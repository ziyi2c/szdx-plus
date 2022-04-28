module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'space-before-function-paren': 0,
    
    'comma-dangle': ["off"],
    
    'semi': 0,
    
    'indent': ["off", 2],
    
    'no-prototype-builtins': 0,
    
    'brace-style': 0,
    
    'object-curly-spacing': 0,
    
    'no-undef': 0
  }
}
