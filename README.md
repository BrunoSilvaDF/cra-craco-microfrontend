Hey guys!

This is a example of using Create-React-App to build a Microfrontend application

Based on https://stackoverflow.com/questions/67297300/how-to-use-webpack-module-federation-plugin-with-create-react-app-without-ejecti

### Individual Apps (app1 and app2)

1. We need to inject Webpack's ModuleFederation plugin (I'm using CRACO)
1. Then, setup the plugin to provide the remote entry point in development
1. Also, config the devServer to run in a desired port
1. create index/bootstrap files, due to the MF mecanism
1. After all, run the application in _isolation_ mode (`yarn start` on the app folder), so you can develop it independently

### Container App

1. Inject ModuleFederation plugin
1. Setup the remotes apps to consume
1. Create separated components inside project, importing the remotes
1. Run the container App - `yarn start` on the container folder!

### Dependencies

1. Create-React-App 5.0.0 (https://github.com/facebook/create-react-app)
1. Craco 6.4.3 (https://github.com/gsoft-inc/craco)
