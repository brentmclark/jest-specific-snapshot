import React from 'react';
import renderer from 'react-test-renderer';
import StyledComponent from './index';
import 'jest-styled-components';

test('test that handles serializers', () => {
  const tree = renderer.create(<StyledComponent />).toJSON();
  expect(tree).toMatchSpecificSnapshot('./index.shot');
});
