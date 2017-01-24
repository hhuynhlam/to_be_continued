import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

jest.unmock('../index.ios.js');
import Index from '../index.ios.js';

it('should render Index', () => {
  renderer.create(<Index />);
});
