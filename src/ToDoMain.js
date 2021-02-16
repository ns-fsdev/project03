/*  
    ToDoMain.js
    MAIN Class Component
    
*/
/*  ReactJS To Do List App
    by Nigel Sampath
       Florida Atlantic University
       Full-Stack Developer Bootcamp
*/  

import React from 'react';

/*    My Components */
import SelectAll from './SelectAll.js';
import SelectActive from './SelectActive.js';
import SelectComplete from './SelectComplete.js';


/* React-Bootstrap Lib */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

/* React-Icons  Lib  */
import { BsTrash, BsTrashFill, BsTrash2, BsTrash2Fill } from 'react-icons/bs';
/* React-Icons Flat Color Icons */
import { FcCheckmark, FcOk, FcDeleteDatabase } from "react-icons/fc";



class ToDoMain extends React.Component{
    constructor(props) {
        super(props)
        
        /*   State and event Bind   */
        this.state = {item:'', toggleComplete: false , Setting:'', ListArr: [] }
        this.handleItemChange = this.handleItemChange.bind(this)
        this.AddItem = this.AddItem.bind(this)
        this.DeleteItem = this.DeleteItem.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
        this.SettingAll = this.SettingAll.bind(this)
        this.SettingActive = this.SettingActive.bind(this)
        this.SettingComplete = this.SettingComplete.bind(this)
    }  
    
      /* OnClick ADD to do item to  ListArr  */  
      AddItem(event) {
        event.preventDefault()
        
        /*  create todo object from input  */
        const todoObj= {item:this.state.item, toggleComplete:this.state.toggleComplete}
        console.log("call func AddItem")
        console.log(todoObj)

        /*   copy array from state, push todo obj to ArrayCopy  */
        let ArrayCopy=[]
        ArrayCopy = Array.from(this.state.ListArr)
        ArrayCopy.push(todoObj)
        
        /*  Update state Array   */
        this.setState( {ListArr: ArrayCopy} , () => {
        console.log("state Arr after setState")
        console.log(this.state.ListArr);
        })
      }


      /* Input text UPDATE state  - this is a callback function */
      handleItemChange(event){
        this.setState( {item: event.target.value} , () => {

        console.log(this.state.item)
        })
      } 

      /* Input completed status    */
      handleToggle(index){
        console.log("call handleToggle")

        /* copy array from state  */
        let ArrayCopy=[]
        ArrayCopy = Array.from(this.state.ListArr)

        /* toggleComplete - my own code */
          if (ArrayCopy[index].toggleComplete===false) {
              ArrayCopy[index].toggleComplete=true
             }
          else { ArrayCopy[index].toggleComplete=false }
         
          /* Update state  */
          this.setState( {ListArr: ArrayCopy} )
          console.log(this.state.ListArr)
          

        }  
      

      // Onclick DELETE to do item
      DeleteItem(index) {
        
        /*  event.preventDefault()    */
        /*  console.log("call DeleteItem func")
        console.log("props is")
        console.log(index)       */

        /*   copy array from state  */
        let getArray =[];
        getArray = Array.from(this.state.ListArr)

        console.log("this is getArray")
        console.log(getArray)

        /*  delete item at index   */
        getArray.splice(index,1)
        
       /*   update state   */
       this.setState( {ListArr: getArray} )

      }

      /*  Button Setting - show 'All'  'Completed' 'Active'  
          and Update state    
          calback func neccessary or state will not update   */
      SettingAll() {
        console.log("state Setting ALL")
        this.setState( {Setting: 'all'} , () => {
        console.log(this.state.Setting)
        })  
      }

      SettingActive() {
        console.log("state Setting ACTIVE")
        this.setState( {Setting: 'active'} , () => {
        console.log(this.state.Setting)
        })  
      }

      SettingComplete() {
        console.log("state Setting COMPLETE")
        this.setState( {Setting: 'complete'} , () => {
        console.log(this.state.Setting)
        })  
      }
      
      

      /**   RENDER     **/
      render(){
        return (
		<div> 
    <Container>
        <div class='Intro'> 
          <p> <br/> <br/> <b> To Do app </b></p>
        </div>

    
    {/* DISPLAY  Input field / Button  */}
    <div>
        <input type= 'text'
              value= {this.state.item}
              onChange= {this.handleItemChange}  />
    </div>        

    <div>             
        <button onClick={this.AddItem}> Add Item </button> 
    </div> <br/> <br/>


    {/*  DISPLAY  ToDo List  */}
    <div> 
     
     { this.state.ListArr.map( (element, index) => {

        return (
        <div>
          <Row>
          <Col xs={2} style={{border:'1px dotted red', padding:'4px'}}> </Col>
          
          <Col style={{border:'1px dotted green', padding:'4px'}} > 
              
               <li key={index}>  {element.item}  </li>
          </Col>

          <Col style={{border:'1px dotted green', padding:'4px'}}> 
          <li class='StatusBox' key={index}> {element.toggleComplete ? "Complete" : " " }  </li>
          
          </Col>
 


          <Col xs={1} style={{border:'1px dotted green', padding:'4px'}}> 
          <button onClick={ ()=> this.handleToggle(index) } > <FcCheckmark /> </button>

          </Col>

          <Col xs={1} style={{border:'1px dotted red', padding:'4px'}}> 
          <button onClick={ ()=> this.DeleteItem(index) } > <BsTrash /> </button>
           </Col>

          <br/><br/><br/>
          </Row>
        </div>
        )
    } ) 
    }
    </div>
    
    {/*  SELECT  Items to show:  All,Active,Cmplete*/}
    <div>   
        <p> show items : </p>

        <button onClick= { this.SettingAll } > All </button>
        <button onClick= { this.SettingActive } > Active </button> 
        <button onClick= { this.SettingComplete } > Complete </button>  
        <div id='FilterBox'> 
          <SelectAll setting={this.state.Setting} todoArr={this.state.ListArr} />
          <SelectActive setting={this.state.Setting} todoArr={this.state.ListArr} />
          <SelectComplete setting={this.state.Setting} todoArr={this.state.ListArr} />
        </div>
        
        {/* Footer space  */}
        <div style={{height:'60px'}} >
 
        </div>
    </div>
    

		</Container>
		</div>
		)
    }
}
export default ToDoMain;







