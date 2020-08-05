import React, { Component } from "react";

class AppAPI extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        fetch("https://swapi.dev/api/people/1/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data      
                })
            })
    }

    render() {
        let text = this.state.loading ? "Loading..." : this.state.character.name;
        return (
            <div>
                <p>{text}</p>
            </div>
            )
    }
}

export default AppAPI;