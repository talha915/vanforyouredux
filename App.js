/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import Tab from './src/config/router'
import Index from './src/components/Index';
import rootReducers from './src/reducers';
const store = createStore(
  rootReducers,
  window.devToolsExtension && window.devToolsExtension(),
);

export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <Index/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
