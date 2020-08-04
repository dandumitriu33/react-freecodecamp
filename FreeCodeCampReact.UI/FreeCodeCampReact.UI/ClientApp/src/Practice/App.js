import React, {Component} from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

import "./style.css"

//function App() {
//    return (
//        <div>
//            <Header />
//            <MainContent />
//            <Footer />
//        </div>
//        )
//}
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            answer: "Yes"
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div>
                    <h1>Is state important to know? Answer: {this.state.answer}</h1>
                    <ChildComponent answer={this.state.answer}/>
                </div>
                <MainContent />
                <Footer />
            </div>
        )
    }
}
 
//class Header extends React.Component {
//    render() {
//        return (
//            <header>
//                <p>Welcome, {this.props.username}</p>
//            </header>
//        )
//    }
    
//}

class Greeting extends React.Component {
    render() {
        const date = new Date();
        const hours = date.getHours();
        let timeOfDay;
        if (hours < 12) {
            timeOfDay = "morning";
        }
        else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon";
        }
        else {
            timeOfDay = "evening";
        }
        return (
                <p>It's currently about {hours % 12} o'clock. Good {timeOfDay}!</p>
            )
    }
    
}


// {props.whatever} is now {this.props.whatever}
//class App extends React.Component {

//    myMethod() {
//        return "geegee"
//    }

//    render() {
//        let gg = this.myMethod();
//        return (
//            <div>
//                <Header />
//                <MainContent />
//                <Footer />
//                <p>{currentTime}</p>
//                <p>{gg}</p>
//            </div>
//            )
//    }
//}

export default App;
