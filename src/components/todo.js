import React, { useState } from 'react'
import {Navbar,FormControl,Button,Form}from 'react-bootstrap'






function Todo() {
    const mystyle={
        textAlign:"center",
        marginTop:"60px",
        color:"coral"
    }
    
    const [todo, setTodo] = useState([]);
    const [todoItem, setTodoItem] = useState({
      
      task: "",
      date: "",
      time: "",
    });
  

    const { task, date, time } = todoItem;
  
    const onSubmit = (e) => {
      e.preventDefault();
      if (task !== "" || date !== "" || time !== "") {
    
        setTodo([...todo,todoItem]);
        setTodoItem({
          task: "",
          date: "",
          time: "",
          
          
         
        })
       
      
        
      }
    };
    const onChange = (e) => {
    setTodoItem({ ...todoItem, [e.target.name]: e.target.value });
    
  };

 
    
  
    
    return(
        <div>
              <Navbar bg="light" variant="light">
                 <Navbar.Brand href="/">TODOAPP</Navbar.Brand>
                     
              </Navbar>
               <div className="main">
                         <h3 style={mystyle}>Add Your Daily Schedule</h3><br/>
                         <Form onSubmit={onSubmit}>
                             <div className="container">
                                   <div className="row">
                                         <div className="col-sm-6 col-md-4">
                                        
                                                 <FormControl type="text"  name="task"placeholder=" enter your Task" value={task} onChange={onChange} /><br/>
                                                
                      

                                        </div>
                                        <div className="col-sm-6 col-md-4">
                                        <FormControl type="text"name="date" value={date} placeholder="date" onChange={onChange} /><br/>
                                                        
                                        </div>
                                        <div className="col-sm-6 col-md-4">

                                        <FormControl type="text" name="time" value={time}   placeholder="time" onChange={onChange}  />
      
                            
                                    </div>
                                       <div style={{paddingTop:"40px"}}>
                                       <Button className="md-5" variant="warning" type="submit" size="lg"  >ADD</Button>
                                       </div>
                                      
                                   
                                  </div>
                                  
                                
                   
                             </div>
                              </Form>
                             
                            
                             
                             <div>
                                   {todo.length === 0 ? (
                                          <h4 style={{textAlign:"center",paddingTop:"90px"}}>No todo</h4>
                                          ) : (
                                         todo.map((todo) => (
                                             <ul>
                                               <li  Key={todo.id}style={{textAlign:"center"}}><h5> task:{todo.task},date:{todo.date},time:{todo.time}</h5></li>
                                             </ul>
                                         ))
                                     )}
                                     <Button onClick={(e)=>{setTodo(e.target.name) }} className="float-right" style={{marginRight:"50%"}} variant="warning" size="lg">CLEAR</Button>
                                    
                               
                             </div>
                  
                

               </div>
              
        </div>
       
        
    )
}
export default Todo
    
   

