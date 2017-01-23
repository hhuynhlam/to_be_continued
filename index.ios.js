import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/configuration/store';
import App from './src/App';

export default class ToBeContinued extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('to_be_continued', () => ToBeContinued);
