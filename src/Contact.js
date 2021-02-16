/*  Contact.js  */
/*  ReactJS To Do List App
    by Nigel Sampath
       Florida Atlantic University
       Full-Stack Developer Bootcamp
*/  

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

class Contact extends React.Component{
    constructor(props) {
        super(props)

        this.state= {nameFirst:'', nameLast:'', email:'', comment:'' };
        this.handleItemChange = this.handleItemChange.bind(this)
    }

    handleItemChange(event) {
        this.setState( {[event.target.name]: event.target.value} ) 
    }
    

    render() {
    return(
    <div>
    
    
            <div class='Intro'> 
            <p><br/><br/> <b> Contact Form - React state </b></p>
            
            

            </div>

    <div class='formdiv'>   
    <Container>   
    <Row>
        <Col xs={1}> </Col>

        <Col align={'left'} style={{border:'1px dotted red'}}> 
            <div>

            <input type= 'text'
                   name='nameFirst' 
                   class='inputfield'
                   placeholder='first name' 
                   value= {this.state.nameFirst}
                   onChange= {this.handleItemChange}  />
                   {this.state.nameFirst} 
            </div>

 

            <div>
            <input type= 'text'
                   name='nameLast' 
                   class='inputfield'
                   placeholder='last name' 
                   value= {this.state.nameLast}
                   onChange= {this.handleItemChange}  />
                   {this.state.nameLast} 
            </div>
 

            <div>
            <input type= 'email'
                   name='email' 
                   class='inputfield'
                   placeholder='email' 
                   value= {this.state.email}
                   onChange= {this.handleItemChange}  />
                   {this.state.email} 
            </div>  


            <div>
            <Row>
            <Col>
            <textarea rows='4'
                   name='comment' 
                   class='inputfield'
                   placeholder='comments' 
                   value= {this.state.comment}
                   onChange= {this.handleItemChange}  />
                   {this.state.comment}
            </Col>       
            </Row>
            </div>
            </Col>

            <Col xs={1}> </Col>
            </Row>
            </Container>
    </div>
                   

    <div>
        <br/> <br/> <br/>             
        <button onClick=''> Submit </button> 
    </div>

           {/* Footer space  */}
           <div style={{height:'60px'}} >
 
    </div>

 
</div>
    )
    }
}    
  
  export default Contact;