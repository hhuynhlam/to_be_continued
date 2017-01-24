import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Library } from './library/container';

export default function App() {
  return (
    <Router>
      <Scene key="root">
        <Scene key="library" component={Library} title="Library"/>
      </Scene>
    </Router>
  );
}
