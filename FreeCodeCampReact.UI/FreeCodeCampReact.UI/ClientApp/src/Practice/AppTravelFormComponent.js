import React from "react";

function AppTravelFormComponent(props) {
    return (
        <main>
            <form>
                <input
                    name="firstName"
                    value={props.data.firstName}
                    onChange={props.handleChange}
                    placeholder="First Name"
                />
                <br />

                <input
                    name="lastName"
                    value={props.data.lastName}
                    onChange={props.handleChange}
                    placeholder="Last Name"
                />
                <br />

                <input
                    name="age"
                    value={props.data.age}
                    onChange={props.handleChange}
                    placeholder="Age"
                />
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={props.data.gender === "male"}
                        onChange={props.handleChange}
                    /> Male
                        </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={props.data.gender === "female"}
                        onChange={props.handleChange}
                    /> Female
                        </label>

                <br />
                <select
                    name="destination"
                    value={props.data.destination}
                    onChange={props.handleChange}
                >
                    <option value="">-- Please select a destination --</option>
                    <option value="germany">Germany</option>
                    <option value="norway">Norway</option>
                    <option value="north pole">North Pole</option>
                    <option value="south pole">South Pole</option>
                </select>

                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isVegan"
                        onChange={props.handleChange}
                        checked={props.data.isVegan}
                    /> vegan
                        </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isKosher"
                        onChange={props.handleChange}
                        checked={props.data.isKosher}
                    /> kosher
                        </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isLactoseFree"
                        onChange={props.handleChange}
                        checked={props.data.isLactoseFree}
                    /> lactose free
                        </label>


                <br />
                <button>Submit</button>
            </form>
            <hr />
            <h3>Entered information:</h3>
            <p>Your name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            <div>Your dietary restrictions:
                <p>{props.data.isVegan ? "Vegan" : ""}</p>
                <p>{props.data.isKosher ? "Kosher" : ""}</p>
                <p>{props.data.isLactoseFree ? "Lactose Free" : ""}</p>
            </div>
        </main>
    )
}

export default AppTravelFormComponent;