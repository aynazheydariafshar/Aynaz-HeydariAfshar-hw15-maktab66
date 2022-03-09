import React from 'react';
import {Card} from 'react-bootstrap';
import {FaTrashAlt , FaEdit} from 'react-icons/fa'

class TodoList extends React.Component {
    render() {
        return (
            <div>
                {this.props.listCheck.map((item , index) => 
                    <Card className='card mt-5'>
                        <Card.Header>{index+1} . {item.Name} </Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>{item.description}</p>
                            </blockquote>
                        <FaTrashAlt className='trash m-3' onClick={()=>this.props.deleteRow(index)}/>
                        <FaEdit className='m-3'/>
                        </Card.Body>
                    </Card>
                )}
            </div>
        );
    }
}


export default TodoList;
