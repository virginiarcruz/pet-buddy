module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  babel: async (options) => ({
    ...options,
    plugins: [
      ...options.plugins,
      require.resolve('@babel/plugin-transform-react-jsx')
    ]
  }),
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    // Ignore SVG to storybook default loaders

    const rules = config.module.rules.map((rule) => {
      if (rule.test.test('.svg'))
        rule.test = RegExp(
          rule.test.toString().replace('/', '').replace('svg', 'svg_ignore')
        )
      return rule
    })

    // Add SVGR as the loader for svg
    config.module.rules = rules
    config.module.rules.unshift({
      test: /\.svg$/,
      loader: '@svgr/webpack',
      options: {
        svgoConfig: {
          plugins: {
            removeViewBox: false
          }
        }
      }
    })

    return config
  }
}
