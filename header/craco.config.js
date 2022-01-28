const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin')
const deps = require('./package.json').dependencies

module.exports = {
  devServer: {
    port: 8083,
    historyApiFallback: {
      index: '/index.html',
    },
  },
  webpack: {
    configure: {
      output: {
        publicPath: 'http://localhost:8083/',
      },
      plugins: [
        new ModuleFederation({
          name: 'header',
          filename: 'remoteEntry.js',
          exposes: {
            './Header': './src/bootstrap',
          },
          shared: {
            ...deps,
            react: {
              singleton: true,
              requiredVersion: deps['react'],
            },
            'react-dom': {
              singleton: true,
              requiredVersion: deps['react-dom'],
            },
          },
        }),
      ],
    },
  },
}
