// const cracoModuleFederation = require('craco-module-federation')
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin')
const deps = require('./package.json').dependencies

module.exports = {
  devServer: {
    port: 8082,
    historyApiFallback: {
      index: '/index.html',
    },
  },
  webpack: {
    configure: {
      output: {
        publicPath: 'http://localhost:8082/',
      },
      plugins: [
        new ModuleFederation({
          name: 'app2',
          filename: 'remoteEntry.js',
          exposes: {
            './App2': './src/bootstrap',
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
