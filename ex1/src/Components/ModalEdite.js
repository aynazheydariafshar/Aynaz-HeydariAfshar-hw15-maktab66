import React from 'react';
import { Button,Modal ,Form} from 'react-bootstrap'

class ModalEdite extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            taskName : '',
            description : ''
        }
    }

    handleChange(e){
        const {name,value} = e.target;
        if(name === "TitleName"){
            this.setState({
                taskName : value
            });
        }else{
            this.setState({
                description : value
            });
        };
    }

    componentDidMount(){
        this.setState({
            taskName : taskobj.Name ,
            description : taskobj.description
        })
    }

    
    render(){
        return(

        );
    };
};

export default ModalEdite