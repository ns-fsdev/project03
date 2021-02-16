/*  About.js   */
/*  ReactJS To Do List App
    by Nigel Sampath
       Florida Atlantic University
       Full-Stack Developer Bootcamp
*/  

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

class About extends React.Component{
    constructor(props) {
        super(props)

    }
    

    render() {
        return (
            <div>
            <div class='Intro'> 
                <p><br/><br/> <b> About </b></p>
            </div>
            
            <div class='formdiv'>   
            <Container>   
            <Row>
                <Col xs={1}> </Col>
        
                <Col align={'left'} style={{border:'1px dotted red'}}>
                    <div class='About'>
                        <pre class='aboutProgram'>
                            <p > <b>Programmed</b>   :    Nigel Sampath </p>
                            <p>                   Florida Atlantic University    </p>
                            <p>                   Full-Stack Developer Bootcamp  </p>
                        </pre> 

                        <pre class='aboutTech'>   
                            <p>                                                  </p>
                            <p> <b>Technologies</b> :    Web           - HTML           </p>
                            <p>                   Style         - CSS  Bootstrap </p>
                            <p>                   Page Render   - ReactJS        </p>
                            
                        </pre>
                    </div>

                </Col>

        
                <Col xs={1}> </Col>
            </Row>
            </Container>
            </div>        
            </div>
            )}
}
  export default About;