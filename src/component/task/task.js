import React, { useState } from 'react'
import "./style.css";

const Task = () => {
  const[inputData,setInputData]=useState('');
  const[items,setItems]=useState([]);
  const addItem=()=>{
    if(!inputData){
      
    }
    else{setItems([...items,inputData]);
      setInputData('');
    }
  }
  const deleteItem = (id) => {
    const updatedItems = items.filter((elem,ind)=>{
      return ind !== id;
    }
    );
    setItems(updatedItems);
  };

  return (
    <>
        <div className='main-div'>
            <div className='child-div'>
            <figure>
                <img src="./images/todo.svg" alt="logo"/>
                <figcaption>Daily Task Manager App</figcaption>
            </figure>

            <div className='addItems'>
             <input type='text' placeholder='✍ Add Task'
             className='form-control'
             value={inputData}
             onChange={(e)=>setInputData(e.target.value )}/>
             <i className="fa fa-plus add-btn" onClick={addItem}></i>
             </div> 
            
            <div className='showItems'>

              {
                items.map((elem,ind)=>{
                  return (
                  <div className='eachItem'>
                  <h3>{elem}</h3>
                  <i
                  className='far fa-trash-alt add-btn'
                  title='Delete'
                  onClick={() => deleteItem(ind)}
                ></i>
                  </div> 
                  )
                })
              }
                
            </div>  
              <div className='showItems'>
                  <button className='btn effect04' data-sm-link-text="Remove ALL" onClick={()=>setItems([])}><span>CheckList</span></button>
              </div>
            </div>
            

        </div>
    </>
  )
}
export default Task

