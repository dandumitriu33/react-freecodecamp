import React from "react";

class ToDoItem extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecoration: "line-through"
        }
        return (
            <div className="todo-item">
                <input
                    type="checkbox"
                    onChange={(event) => this.props.handleChange(this.props.item.id)}
                    checked={this.props.item.completed}
                />
                <p style={this.props.item.completed ? completedStyle : null} >{this.props.item.text}</p>
            </div>
        )
    }
    
    
    
}


export default ToDoItem;