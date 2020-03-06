
import React from 'react';
// import App from './App';
import renderer from 'react-test-renderer';
// import VodkaList from './components/VodkaList.js';
// import Popular from './components/Popular.js';
import TequilaList from './components/TequilaList';

// test('renders VodkaList correctly', () => {
//   const vodka = renderer
//     .create(<VodkaList />)
//     .toJSON();
//   expect(vodka).toMatchSnapshot();
// });

// test('renders popular list correctly', () => {
//   const popular = renderer
//     .create(<Popular />)
//     .toJSON();
//   expect(popular).toMatchSnapshot();
// });

test('renders tequila list correctly', () => {
  const tequila = renderer
    .create(<TequilaList />)
    .toJSON();
  expect(tequila).toMatchSnapshot();
});


