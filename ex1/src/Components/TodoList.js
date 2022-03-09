import React from 'react';

class TodoList extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.listCheck.map(item => <li>{item.Name}</li>)}
                </ul>
            </div>
        );
    }
}


export default TodoList;
