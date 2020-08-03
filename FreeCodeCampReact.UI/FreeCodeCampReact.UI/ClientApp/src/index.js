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

// Exercise 2 - Functional components
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import ReactDOM from "react-dom";

function Vacations() {
    return (
        <div class="container">
            <h1>Bob</h1>
            <p>These are the favorite vacation spots:</p>
            <ol class="list-group">
                <li class="list-group-item">Maui</li>
                <li class="list-group-item">Bali</li>
                <li class="list-group-item">Hawaii</li>
            </ol>
            </div>
        )
}

ReactDOM.render(
    <Vacations />,
    document.getElementById("root"));