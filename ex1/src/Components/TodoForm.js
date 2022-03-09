import React from "react";
import {Form , Button} from 'react-bootstrap'

class TodoForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() { 
        return (
            <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="text" placeholder="Add to do" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}
 
export default TodoForm;