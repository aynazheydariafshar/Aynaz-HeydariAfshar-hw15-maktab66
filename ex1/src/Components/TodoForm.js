import React from "react";
import {Form} from 'react-bootstrap'

class TodoForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            input : '',
            setInput : ''
        }
    }
    render() { 
        return (
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Add a todo" value={this.state.input} name='inputText'/>
                </Form.Group>
            </Form>    
        );
    }
}
 
export default TodoForm;