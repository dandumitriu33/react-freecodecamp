import React, { Component } from "react";
import AppTravelFormComponent from "./AppTravelFormComponent";

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
            <AppTravelFormComponent
                handleChange={this.handleChange}
                data={this.state}
            />
        )
        
    }
}

export default AppTravelForm;