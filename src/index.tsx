import App from './App';
import ReactDOM from 'react-dom';
import React from 'react';
import './scss/index.scss';

// import { render } from 'react-dom';
// import ParentSize from '@visx/responsive/lib/components/ParentSize';
// import Example from './components/Example';
// render(
  // <ParentSize>{({ width, height }) => <Example width={width} height={height} />}</ParentSize>,
  // document.getElementById('root'),
// );



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
