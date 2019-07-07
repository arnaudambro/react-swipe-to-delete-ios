import { addParameters, addDecorator, configure } from '@storybook/react';
import { addReadme } from 'storybook-readme';

import '../src/index.css';
// addDecorator(storyFn => (
//     {storyFn()}
// ));
addDecorator(addReadme);
// addParameters({
//   options: {
//     isFullScreen: true,

//   }
// })


function loadStories() {
  const req = require.context('../stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
