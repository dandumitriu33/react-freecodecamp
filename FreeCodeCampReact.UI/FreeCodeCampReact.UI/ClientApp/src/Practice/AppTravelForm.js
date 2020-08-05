import React, { Component } from "react";

class AppTravelForm extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
            
        }
        this.handleChange = this.handleChange.bind(this)
    }

// the way where dietaryRestrictions is an object in state

    //dietaryRestrictions: {
    //    isVegan: false,
    //    isKosher: false,
    //    isLactoseFree: false
    //}

    //handleChange(event) {
    //    const { name, value, type, checked } = event.target;
    //    type === "checkbox" ?
    //        this.setState(prevState => {
    //            return {
    //                dietaryRestrictions: {
    //                    ...prevState.dietaryRestrictions,
    //                    [name]: checked
    //                }
    //            }
    //        })
    //    :
    //    this.setState({
    //        [name]: value
    //    })
    //}

    handleChange(event) {
        const { name, value, type, checked } = event.target;
        type === "checkbox" ?
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <main>
                <form>
                    <input
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        placeholder="First Name"
                    />
                    <br />

                    <input
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        placeholder="Last Name"
                    />
                    <br />

                    <input
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                        placeholder="Age"
                    />
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        /> Male
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        /> Female
                    </label>

                    <br />
                    <select
                        name="destination"
                        value={this.state.destination}
                        onChange={this.handleChange}
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
                            onChange={this.handleChange}
                            checked={this.state.isVegan}
                            /> vegan
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="isKosher"
                            onChange={this.handleChange}
                            checked={this.state.isKosher}
                        /> kosher
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="isLactoseFree"
                            onChange={this.handleChange}
                            checked={this.state.isLactoseFree}
                        /> lactose free
                    </label>


                    <br />
                    <button>Submit</button>
                </form>
                <hr />
                <h3>Entered information:</h3>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>Your dietary restrictions:
                    <p>{this.state.isVegan ? "Vegan" : ""}</p>
                    <p>{this.state.isKosher ? "Kosher" : ""}</p>
                    <p>{this.state.isLactoseFree ? "Lactose Free" : ""}</p>
                </p>
            </main>
        )
    }
}

export default AppTravelForm;