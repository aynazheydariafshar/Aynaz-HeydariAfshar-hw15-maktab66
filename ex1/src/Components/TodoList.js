import React from 'react';
import {Card} from 'react-bootstrap';
import {FaTrashAlt , FaEdit} from 'react-icons/fa'

class TodoList extends React.Component {
    render() {
        return (
            <div>
                {this.props.listCheck.map((item) => 
                    <Card border="dark" className='mt-5'>
                        <Card.Header>{item.Name}</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>{item.description}</p>
                            </blockquote>
                        <FaTrashAlt className='m-1' onClick={this.props.removetodo}/>
                        <FaEdit className='m-1' onClick={this.props.editetodo}/>
                        </Card.Body>
                    </Card>
                )}
            </div>
        );
    }
}


export default TodoList;
