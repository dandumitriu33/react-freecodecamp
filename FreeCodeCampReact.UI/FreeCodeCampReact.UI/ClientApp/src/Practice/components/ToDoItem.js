import React from "react";

class ToDoItem extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="todo-item">
                <input
                    type="checkbox"
                    onChange={(event) => this.props.handleChange(this.props.item.id)}
                    checked={this.props.item.completed}
                />
                <p>{this.props.item.text}</p>
            </div>
        )
    }
    
    
    
}


export default ToDoItem;