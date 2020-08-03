import React from "react";

function MainContent() {
    let firstName = "Bob";
    let lastName = "Bobson";
    const date = new Date();
    let hours = date.getHours();
    let timeOfDay;
    const styles = {
        fontSize: 30
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
    return (
        <main>
            <h3>This is the vacation list for {`${firstName} ${lastName}`}.</h3>
            <p style={styles}>It's currently about {hours % 12} o'clock. Good {timeOfDay}!</p>
            <hr />
            <input type="checkbox" />
            <p>Vacation to go on.</p>

            <input type="checkbox" />
            <p>Vacation to go on.</p>

            <input type="checkbox" />
            <p>Vacation to go on.</p>

            <input type="checkbox" />
            <p>Vacation to go on.</p>
        </main>
        )
}

export default MainContent

    //< div className = "container" >
    //    <hr />
    //    <div className="custom-control custom-checkbox">
    //        <input type="checkbox" className="custom-control-input" id="rio" />
    //        <label className="custom-control-label" htmlFor="rio">Rio</label>
    //    </div>
    //    <div className="custom-control custom-checkbox">
    //        <input type="checkbox" className="custom-control-input" id="bahamas" />
    //        <label className="custom-control-label" htmlFor="bahamas">Bahamas</label>
    //    </div>
    //    <div className="custom-control custom-checkbox">
    //        <input type="checkbox" className="custom-control-input" id="maui" />
    //        <label className="custom-control-label" htmlFor="maui">Maui</label>
    //    </div>
    //    <div className="custom-control custom-checkbox">
    //        <input type="checkbox" className="custom-control-input" id="bali" />
    //        <label className="custom-control-label" htmlFor="bali">Bali</label>
    //    </div>
    //    <hr />
    //        </div >