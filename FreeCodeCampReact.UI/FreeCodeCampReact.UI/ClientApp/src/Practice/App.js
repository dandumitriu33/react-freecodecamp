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
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            answer: "Yes",
            name: "Bob",
            age: 52,
            count: 0
        }
        this.handleCountClick = this.handleCountClick.bind(this);
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
    }

    handleClick() {
        alert("I was clicked ...method...");
    }

    handleMouseLeavePara() {
        //alert("Mouse left paragraph.")
    }

    handleCountClick() {
        console.log("+1 pressed");
        //this.setState({ count: 1})
        this.setState((previousState) => {
            return {
                answer: previousState.answer,
                name: previousState.name,
                age: previousState.age,
                count: previousState.count + 1
            }
        })
    }

    handleDoubleClick() {
        console.log("Double is pressed");
        this.setState((previousState) => {
            return {
                answer: previousState.answer,
                name: previousState.name,
                age: previousState.age,
                count: previousState.count * 2
            }
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div>
                    <hr />
                    <p>Changing state exercise</p>
                    <h1>{this.state.count}</h1>
                    <button onClick={ this.handleCountClick }>Change!</button>
                    <button onClick={ this.handleDoubleClick }>Double!</button>
                    <hr />
                </div>
                <div>
                    <hr />
                    <p onMouseLeave={this.handleMouseLeavePara}>Click event exercise.</p>
                    <br />
                    <br />
                    <button onClick={this.handleClick}>Click me!</button>
                    <hr />
                </div>
                <div>
                    <h1>Is state important to know? Answer: {this.state.answer}</h1>
                    
                    <p>This is the vacation list for {this.state.name} who is {this.state.age} years old.</p>
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

// EXERCISE LOG IN/OUT
//class App extends Component {
//    constructor() {
//        super();
//        this.state = {
//            isLoggedIn: false
//        }

//    }

//    render() {
//        return (
//            <div>
//                <h1>You are currently logged {this.state.isLoggedIn ? "in" : "out"}.</h1>
//                </div>
//            )
//    }
//}

export default App;
