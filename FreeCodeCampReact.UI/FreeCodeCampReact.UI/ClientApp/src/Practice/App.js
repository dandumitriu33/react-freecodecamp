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





// MAIN APP HERE ***************************
// passing info to child components done via props
// <ChildComponent answer={this.state.answer} />
//class App extends React.Component {
//    constructor() {
//        super();
//        this.state = {
//            answer: "Yes",
//            name: "Bob",
//            age: 52
//        }
//    }

//    render() {
//        return (
//            <div>
//                <Header />
//                <div>
//                    <h1>Is state important to know? Answer: {this.state.answer}</h1>
                    
//                    <p>This is the vacation list for {this.state.name} who is {this.state.age} years old.</p>
//                </div>
//                <MainContent />
//                <Footer />
//            </div>
//        )
//    }
//}







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

// EXERCISE LOG IN/OUT
class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false
        }

    }

    render() {
        return (
            <div>
                <h1>You are currently logged {this.state.isLoggedIn ? "in" : "out"}.</h1>
                </div>
            )
    }
}

export default App;
