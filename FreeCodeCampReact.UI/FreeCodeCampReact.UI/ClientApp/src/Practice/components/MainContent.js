import React from "react";

function MainContent() {
    let firstName = "Bob";
    let lastName = "Bobson";
    const date = new Date();
    let hours = date.getHours();
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
        <main>
            <h3>This is the vacation list for {`${firstName} ${lastName}`}.</h3>
            <p>It's currently about {hours % 12} o'clock. Good {timeOfDay}!</p>
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