import React from 'react';
import { Button,Modal ,Form } from 'react-bootstrap'
import TodoList from './TodoList';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showHide : false,
            taskName : '',
            description : '',
            list : []
        };

        this.handleModalShow = this.handleModalShow.bind(this);
        this.handleshow = this.handleshow.bind(this);
        this.handleSave = this.handleSave.bind(this);
    };


    handleshow(){
        this.setState({
            showHide: !this.state.showHide
        })
    }

    
    handleModalShow(taskobj) {
        let templist = this.state.list
        templist.push(taskobj)
        this.setState({
            showHide: !this.state.showHide ,
            list : templist
        })
    }

    handleSave(){
        let taskobj = {};
        taskobj["Name"] = this.state.taskName;
        taskobj["desc"] = this.state.description;
        this.handleModalShow(taskobj);
    }

    handleChange(e){
        const {name,value} = e.target;

        if(name === "TitleName"){
            this.setState({
                taskName : value
            })
        }else{
            this.setState({
                description : value
            })
        }
    }


    render() {
        return (
            <div>
                <Button variant='dark' className='mt-3' onClick={this.handleshow}>
                    Create Task
                </Button>
                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={this.handleshow}>
                        <Modal.Title>Create Task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="Title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control 
                                    name = "TitleName"
                                    type="text" 
                                    placeholder="Enter Title" 
                                    onChange = {(e)=>{this.handleChange(e)}}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="Description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control 
                                    name = "description"
                                    as="textarea" 
                                    rows={3} 
                                    onChange = {(e) => {this.handleChange(e)}}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleSave}>
                            Create
                        </Button>
                    </Modal.Footer>
                </Modal>
                <TodoList listCheck={this.state.list}/>
            </div>
        );
    };
};


export default TodoForm;