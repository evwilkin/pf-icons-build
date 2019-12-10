module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    [
      "transform-imports",
      {
        "@patternfly/react-icons": {
          // Use "transform: '@material-ui/core/${member}'," if your bundler does not support ES modules
          transform: (importName, matches) => `@patternfly/react-icons/dist/js/icons/${importName.split(/(?=[A-Z])/).join('-').toLowerCase()}`,
          preventFullImport: true
        }
      }
    ]
  ]
}
