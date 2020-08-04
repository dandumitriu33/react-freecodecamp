import React from "react";

class ToDoItem extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    handleCheckBoxOnChange() {
        console.log("error gone");
    }

    render() {
        return (
            <div className="todo-item">
                <input
                    type="checkbox"
                    onChange={this.handleCheckBoxOnChange}
                    checked={this.props.item.completed}
                />
                <p>{this.props.item.text}</p>
            </div>
        )
    }
    
    
    
}


export default ToDoItem;