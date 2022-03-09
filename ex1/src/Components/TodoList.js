import React from 'react';
import AddTask from '../modals/AddTask';

class TodoList extends React.Component {
constructor(props) {
    super(props);

    this.state = {

    };
}

    render() {
        return (
            <div className='header text-center p-5 w-100'>
                <h1>ToDo List</h1>
                <AddTask />
            </div>
        );
    }
}


export default TodoList;
