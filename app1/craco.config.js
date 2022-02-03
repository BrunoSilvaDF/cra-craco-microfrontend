const { whenDev } = require('@craco/craco')
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin')
const pkgJson = require('./package.json')
const appName = pkgJson.name
const deps = pkgJson.dependencies
// run
const port = 8081

const devServerConfig = {
  port,
  historyApiFallback: {
    index: '/index.html',
  },
}

const outputDevConfig = {
  publicPath: `http://localhost:${port}/`,
}

const outputProdConfig = {
  filename: '[name].[contenthash].js',
  publicPath: `/${appName}/latest/`,
}

module.exports = function ({ env }) {
  return {
    devServer: whenDev(() => devServerConfig, []),
    webpack: {
      configure: {
        output: env === 'development' ? outputDevConfig : outputProdConfig,
        plugins: [
          new ModuleFederation({
            name: appName,
            filename: 'remoteEntry.js',
            exposes: {
              './App1': './src/bootstrap',
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
}
