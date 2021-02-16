/*  SelectAll.js  was TestFunc.js  */
/*  this is now working for 'all' 
    Sun 2-14-21 9:05p           */

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SelectAll(props) {
    console.log("call SelectAll");
    
    if (props.setting==='all') {
        const proplist = props.todoArr;
        const listItems = proplist.map( (item) =>
        <div> {item.item} </div>
        )
        return(
            <div>
            <Container>   
                <Row>
                    <Col xs={2}> </Col>
                    
                    <Col style={{border:'1px dotted purple'}}> 
                    <p> <b> All: </b> </p>   
                    {listItems}
                    </Col>
                    
                    <Col xs={2}> </Col>
                </Row>
            </Container>
            </div >
        );
    }
    else { return (
                   null)
    }
};
export default SelectAll;



