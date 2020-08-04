import React from "react";

function Conditional(props) {
    console.log("Loading: " + props.isLoading);
    //if (props.isLoading) {
    //    return (
    //        <h1>Loading...</h1>
    //    )
    //}
    //else {
    //    return (
    //        <h1>Conditional rendering exercise.</h1>
    //    )
    //}

    //return (
    //    <div>
    //        <h1>Some text</h1>
    //        {props.isLoading === true ? <h1>Loading...</h1> : <h1>Conditional rendering exercise.</h1>}
    //        <h1>Some other text</h1>
    //    </div>
    //    )

    return (
        <div>
            <h1>Conditional rendering exercise.</h1>
        </div>
        )
    
}

export default Conditional