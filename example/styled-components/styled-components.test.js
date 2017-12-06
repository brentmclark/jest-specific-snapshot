import React from 'react';
import renderer from 'react-test-renderer';
import StyledComponent from './index';
import styleSheetSerializer from 'jest-styled-components/src/styleSheetSerializer';
import { addSerializer } from '../../src/index';

test('test that handles serializers', () => {
  addSerializer(styleSheetSerializer);
  const tree = renderer.create(<StyledComponent />).toJSON();
  expect(tree).toMatchSpecificSnapshot('./index.shot');
});
