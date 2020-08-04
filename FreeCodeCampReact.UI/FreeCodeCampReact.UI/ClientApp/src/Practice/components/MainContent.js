import React from "react";
import ToDoItem from "./ToDoItem";
import ContactCard from "./ContactCard";
import Joke from "./Joke";
import jokesData from "./data/jokesData";
import vschoolProducts from "./data/vschoolProducts";
import Product from "./Product";
import todosData from "./data/todosData";

class MainContent extends React.Component {

    constructor() {
        super();
        let todoComponents = todosData.map(item => {
            return <ToDoItem key={item.id} item={item} />
        })
        this.state = {
            todoComponents: todoComponents
        }
    }

    render() {
        let firstName = "Bob";
        let lastName = "Bobson";
        const date = new Date();
        let hours = date.getHours();
        let timeOfDay;
        const styles = {
            fontSize: 22
        }

        if (hours < 12) {
            timeOfDay = "morning";
            styles.color = "#04756F";
        }
        else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon";
            styles.color = "#8914A3";
        }
        else {
            timeOfDay = "evening";
            styles.color = "#D90000";
        }

        //quarks
        // this is a JS object
        // 1. JS can't have - like for background-color - well, it can with 'background-color' but
        // the solution is to turn it to Camel case after the dash like below
        // 2. The fontSize takes by default px. Also we can write it without the "30px" as a string, cuz valid JS
        //const styles = {
        //    color: "#FF8C00",
        //    backgroundColor: "aquamarine",
        //    fontSize: 30
        //}


        let jokeComponents = jokesData.map(joke => {
            return <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />;
        })

        let productComponents = vschoolProducts.map(item => {
            return <Product key={item.id} product={item} />
        })

        return (
            <main>
                <h3>This is the vacation list for {`${firstName} ${lastName}`}.</h3>
                <p style={styles}>It's currently about {hours % 12} o'clock. Good {timeOfDay}!</p>

                <div className="todo-list">
                    {this.state.todoComponents}
                </div>
                <br />
                <br />
                <br />
                <hr />
                <div className="jokes">
                    <Joke
                        question="Woof?"
                        punchLine="Bork"
                    />
                    <Joke
                        punchLine="Bork? No question."
                    />
                </div>
                <hr />

                <div>
                    {jokeComponents}
                </div>

                <hr />
                {productComponents}
                <hr />
                <div className="contacts">
                    <ContactCard
                        // an object also works but local img needs tweaking with require
                        //contact={{
                        //    name: "Mr. Hidebone",
                        //    imgUrl: "./img/puppy1.jpg",
                        //    phone: "(123) 123-1234",
                        //    email: "mr.hidebone@pups.woof"
                        //}}
                        name="Mr. Hidebone"
                        imgUrl="./img/puppy1.jpg"
                        phone="(123) 123-1234"
                        email="mr.hidebone@pups.woof" />
                    <ContactCard
                        name="Mr. Fluff"
                        imgUrl="./img/puppy2.jpg"
                        phone="(323) 123-1234"
                        email="mr.fluff@pups.woof" />
                    <ContactCard
                        name="Mr. Ears"
                        imgUrl="./img/puppy3.jpg"
                        phone="(222) 123-1234"
                        email="mr.ears@pups.woof" />
                    <ContactCard
                        name="Mr. Hide"
                        imgUrl="./img/puppy4.jpg"
                        phone="(111) 123-1234"
                        email="mr.hide@pups.woof" />

                </div>
            </main>
        )
    }
    
}

export default MainContent

    