import React from "react";

function Joke(props) {
    return (
        <div>
            <p style={{ display: props.question ? "block" : "none" }}>Question: {props.question}</p>
            <p style={{ color: props.question ? "blue" : "red" }}>Answer: {props.punchline}</p> 
            <p style={{ color: !props.question && "#888888"}}>Heeheehee.</p>
        </div>
        )
}

export default Joke;


//function Joke(props) {
//    let question;
//    if (props.question) {
//        question = `Question: ${props.question}`;
//    }
//    return (
//        <div>
//            <p>{question}</p>
//            <p>Answer: {props.punchline}</p>
//            <p>Heeheehee.</p>
//        </div>
//    )
//}