import React, { useEffect } from 'react'

const Alert = ({msg,type,removeAlert,list}) => {
  useEffect(()=>{
    let removeModal=setTimeout(()=>{
      removeAlert();
    },3000)
    return ()=>clearTimeout(removeModal);
  },[list])
  return <div className='alert'>
    {
    type 
    && 
    <p className={`alert alert-${type}`}>{msg}</p>
    }

  </div>
}

export default Alert
