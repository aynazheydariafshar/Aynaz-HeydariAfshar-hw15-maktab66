import React from 'react';
import { Button } from 'react-bootstrap';

class TodoList extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return (
            <div className='header text-center'>
                <h3>Todo List</h3>
                <Button variant='primary'>Create Task</Button>
            </div>
        );
    }
}


export default TodoList;
