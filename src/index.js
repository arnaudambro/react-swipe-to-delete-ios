import React from 'react';
import ReactDOM from 'react-dom';
import App from './demo/App';

const render = () => ReactDOM.render(<App />, document.getElementById('root'));
render();

if (module.hot) {
  module.hot.accept(['./demo/App'], () => {
    render();
  });
}
