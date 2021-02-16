/*  
    SelectComplete.js  
    called from class ToDoMain

/*  
   { item.toggleComplete===true && item.item }
   MUST be in this order: 
   Expression TRUE &&  Item   gives  Item   (Javascript) 
*/    

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function SelectComplete(props) {
    console.log("call SelectComplete");
    
    if (props.setting==='complete') {
        const proplist = props.todoArr;
        const listItems = proplist.map( (item) =>
        <div> { item.toggleComplete===true && item.item } </div>
        )
        return(
            <div>    
           <Container>   
                <Row>
                    <Col xs={2}> </Col>
                    
                    <Col style={{border:'1px dotted purple'}}> 
                    <p> <b> Complete: </b> </p>   
                    {listItems}
                    </Col>
                    
                    <Col xs={2}> </Col>
                </Row>
            </Container>
            </div>
        );
    }
    else { return (
                   null )
    }
};
export default SelectComplete;
   
    



