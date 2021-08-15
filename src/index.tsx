import React from 'react';
import { render } from 'react-dom';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import Example from './components/Example';
import './scss/index.scss';
// import App from './App';


render(
  <ParentSize>{({ width, height }) => <Example width={width} height={height} />}</ParentSize>,
  document.getElementById('root'),
);



// import ReactDOM from 'react-dom';
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
