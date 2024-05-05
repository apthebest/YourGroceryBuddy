import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
import {FaShoppingCart} from 'react-icons/fa'


function getLocalStorage()
{
  let list = localStorage.getItem('list');
  if(list){
    return JSON.parse(list);
  }
  else
  return [];
}

function Grocery() {
    
  const [value,setValue]=useState('');
  const [quantity,setQuantity]=useState('');
  const [list,setList]=useState(getLocalStorage());
  const [isEditing,setIsEditing]=useState(false);
  const [editId,setEditId]=useState(null);
  const [alert,setAlert]=useState({show:false,msg:'',type:''})
  
  const handleSubmit=(e)=>{
      e.preventDefault();
      if(!value||!quantity){
     showAlert(true,'danger','please Enter All fields!!!')
    }
      else if(value && isEditing){
        
        const newList = list.map((item)=>{
          if(item.id === editId){
            return {...item , title : value,quantity : quantity};
          }
          return item;
        })
        showAlert(true,'success','Item edited')
        setList(newList);
        setValue('');
        setEditId(null);
        setIsEditing(false);
      }
      else{
        let newItem={id:new Date().getTime().toString(),title:value,quantity:quantity};
        setList([...list,newItem]);
        showAlert(true,'success','Item Added!')
        setValue('');
        setQuantity('');

      }
  }
  //function to setAlert
 const showAlert=(show=false,type="",msg="")=>{
    setAlert({show,type,msg});
  }
  
  //function to remove Alert
  const removeAlert=()=>{
    showAlert();
  }

  //function to remove one item from the list
  const removeItem=(id)=>{
    const newList=list.filter((item)=>item.id!==id);
    setList(newList);
    showAlert(true,'danger','item removed')
  }

  //function to clear All items
  const clearList=()=>{
    setList([]);
    showAlert(true,'danger','All items were removed')
  }

  //function to edit item
  const editItem=(id)=>{
    const itemToBeEdited=list.find((item)=>item.id===id);
    setEditId(id);
    setValue(itemToBeEdited.title);
    setQuantity(itemToBeEdited.quantity)
    setIsEditing(true);

  }

  // storing the list in the local storage
  useEffect(()=>{
    localStorage.setItem('list', JSON.stringify(list));
  },[list])


  //the structure
  return (
    <main>
      
        <div className="title">
             <h3>Apka Grocery Buddy <FaShoppingCart/></h3>
             <br />
             <br />
    </div>
           <section className='section-center'>
    
    {alert.show&& <Alert {...alert} removeAlert={removeAlert} list={list}/>}

  
    <form onSubmit={handleSubmit} className='form-control'>
      <div className="grocery">
      <label htmlFor="item" className='form-label' style={{marginRight:'0.15rem'}} >Item</label>
           <input type="text"
    name="item"
    style={{width:'50%'}}
  
    value={value}
    placeholder="e.g. maida"
    onChange={(e)=>setValue(e.target.value)}
    />
    <label htmlFor="quantity"className='form-label' style={{marginLeft:'1.75rem', marginRight:'0.15rem'}}>Qty.</label>
      <input type="text"
    name="quantity"
    value={quantity}
    style={{width:'20%'}}
    placeholder="e.g. 5 kgs"
    onChange={(e)=>setQuantity(e.target.value)}
    />``
      </div> 
    <button type="submit" title="Add Item" className='submit-btn' >{isEditing?'edit': `Add Item `}</button>

    </form>
    {list.length>0 && 
    <div className="grocery-container">
      <List items={list} removeItem={removeItem} editItem={editItem}/>
      <button className='clear-btn' onClick={clearList}>Clear Items</button>
    </div>
   }
  </section>
    </main>
   

  );
}
export default Grocery;
