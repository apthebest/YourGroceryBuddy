import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items,removeItem,editItem}) => {
  
  return (
    <div className="grocery-list">
         {
        items.map((item)=>{
          const {id,title,quantity}=item;
          
          return <div key={id} className='grocery-item'>
              <p className='title'>{title}({quantity}) </p>
              {/* <span className='quantity'>({quantity})</span> */}

           
              <div className="btn-container">
                <button  type='button' className='edit-btn' onClick={()=>editItem(id)} ><FaEdit/></button>
                <button type='button' className='delete-btn' onClick={()=>removeItem(id)}><FaTrash/></button>
              </div>
          </div>
        })
      }
    </div>
     
  )
}

export default List
