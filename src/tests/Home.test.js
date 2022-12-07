import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

it('Home component should render correctly', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
