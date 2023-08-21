import React,{useState} from 'react'
import people from './data'
import { NavLink } from 'react-router-dom'
import Alert from './Alert'

const imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcxzjmaAzYM2zcoqPitltJSao3sS9KrD0IhhyuZ_16BA&s';

const AddReview = () => {
 const [alert,setAlert]=useState({msg:'',type:''});
 const[showAlert,setShowAlert] = useState(false);
 const removeAlert=()=>setAlert((alert)=>{
return {...alert,show:false};
 })
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(feedBack){
        const newEntry={
            id:new Date().getTime().toString(),
            image: imageUrl,
            name:name,
            quote:feedBack
        }
        people.push(newEntry);
        setAlert({msg:'Thanks for your feedback',type:'success'});
        setShowAlert(true);
    }
    else{
        
    }

    }
    const [name,setName]=useState('');
    const [feedBack,setFeedBack]=useState('');
    
  return (
     <main>
      {showAlert && <Alert alert={alert} removeAlert={removeAlert}></Alert>}
        <div className="title">
             <h3>Add Your Review </h3>
    </div>
           <section className='section-center'>
    

  
    <form onSubmit={handleSubmit} className='form-control'>
      <div className="grocery">
      <label htmlFor="name" className='form-label' style={{marginRight:'0.15rem'}} >Name</label>
           <input type="text"
    name="name"
    id="name"
    style={{width:'50%'}}
    value={name}
    
    onChange={(e)=>setName(e.target.value)}
    />
    <label htmlFor="feedback" className='form-label'  >Your Feedback</label>
           <input type="text-area"
    name="feeback"
    id="feedback"
    style={{width:'50%',display:'block'}}
    value={feedBack}
    
    onChange={(e)=>setFeedBack(e.target.value)}
    />
      </div> 
    <button type="submit" title="Submit Feedback" className='submit-btn' >Submit Feedback</button>

    </form>
    </section>
    <NavLink to="/">Back to Home</NavLink>
    </main>
   
  );
}

export default AddReview