import React from 'react';
import TodoList from './TodoList';

class Todo extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    };
};

    render() {
        return (
            <div>
                <TodoList />
            </div>
        );
    };
};


export default Todo;