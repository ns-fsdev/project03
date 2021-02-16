/*  SelectActive.js  */
/*  this is now working for 'all' 
    Sun 2-14-21 11:50p
    All selectAll, Active, Complete Working          */

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function SelectActive(props) {
    console.log("call SelectActive");
    
    if (props.setting==='active') {
        const proplist = props.todoArr;
        const listItems = proplist.map( (item) =>
        <div> { item.toggleComplete===!true && item.item }  </div>
        )
        return(
            <div>
            <Container>   
                <Row>
                    <Col xs={2}> </Col>
                    
                    <Col style={{border:'1px dotted purple'}}> 
                    <p> <b> Active: </b> </p>   
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
export default SelectActive;



