if(__DEV__) {
    import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
  }
/**
 * @format
 */
import React from 'react'
import {Provider} from 'react-redux'
import {AppRegistry} from 'react-native';
import App from './src/index';
import {name as appName} from './app.json';
import storeConfig from './src/store/storeConfig'

const store = storeConfig()
const Redux = ()=>(
    <Provider store ={store}>
        <App/>
    </Provider>
)


AppRegistry.registerComponent(appName, () => Redux);
