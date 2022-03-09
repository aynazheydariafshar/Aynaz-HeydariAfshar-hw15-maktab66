import React from 'react';
import TodoForm from './TodoForm';

class Todo extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    };
};

    render() {
        return (
            <div className='header text-center p-5 w-100'>
                <h1>ToDo List</h1>
                <TodoForm />
            </div>
        );
    };
};


export default Todo;