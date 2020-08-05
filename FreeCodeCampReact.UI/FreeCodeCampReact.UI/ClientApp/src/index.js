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
//import React from "react";
//import ReactDom from "react-dom";

//ReactDom.render(<div><h1>Hello</h1><p>This is a paragraph.</p></div>, document.getElementById("root"));

//function MyApp() {
//    return (
//        <div>
//          <p>An unordered list</p>
//          <ul>
//            <li>Jim</li>
//            <li>Bob</li>
//            <li>Ana</li>
//          </ul>
//        </div>
//    )
//}

//ReactDom.render(
//    <MyApp />,
//    document.getElementById("root"));

// Exercise 2 - Functional components + move to new file
//import 'bootstrap/dist/css/bootstrap.css';
//import React from "react";
//import ReactDOM from "react-dom";

//import Vacations from "./components/Vacations";


//ReactDOM.render(
//    <Vacations />,
//    document.getElementById("root"));


// Creating the App entry point element - same level as Components in tree
//import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import ReactDOM from "react-dom";

import App from "./Practice/App";
import AppAPI from "./Practice/AppAPI";
import AppForms from "./Practice/AppForms";

ReactDOM.render(<AppForms />, document.getElementById("root"))