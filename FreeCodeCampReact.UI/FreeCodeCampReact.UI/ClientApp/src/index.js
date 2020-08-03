// WARNING - LEAVE THIN ON AFTER EXERCISES

//import 'bootstrap/dist/css/bootstrap.css';
//import React from 'react';
//import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router-dom';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
//const rootElement = document.getElementById('root');


//ReactDOM.render(
//  <BrowserRouter basename={baseUrl}>
//    <App />
//  </BrowserRouter>,
//  rootElement);

//registerServiceWorker();





// Exercise 1 - JSX
import React from "react";
import ReactDom from "react-dom";

//ReactDom.render(<div><h1>Hello</h1><p>This is a paragraph.</p></div>, document.getElementById("root"));
ReactDom.render(
    <div>
        <ul>
            <li>Jim</li>
            <li>Bob</li>
            <li>Ana</li>
        </ul>
    </div>,
    document.getElementById("root"));
