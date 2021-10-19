const eslintConfig = `{
  "parserOptions": {
    "ecmaVersion": 2015,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "env": {
    "browser": true,
    "serviceworker": true
  },
  "rules": {
    "no-var": 2,
    "indent": ["error", 2]
  }
}`
// const eslintConfig = '{}'

module.exports =  {
  eslintConfig
}