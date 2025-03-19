import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Form() {
     const[isValid,setIsValid]=useState(true);

    const [user,setUser]=useState({
      name:"",
      age:"",
      email:"",
      profession:"",
      course:[],
      gender:""
    });

    const navigate = useNavigate();

  // function event(e){
  //        const name=e.target.name;
  //        const value=e.target.type=="checkbox"?e.target.checked:e.target.value;
  //        setUser({...user,[name]:value});
  // }

  function event(e) {
    const { name, value, type,checked } = e.target;

    if (type === "checkbox") {
       setUser((prevuser)=>({
             ...prevuser,[name]:checked?[...prevuser[name],value] : prevuser[name].filter((course)=>course!== value)
             
                  }));
                  setIsValid(true);
    } else if(type=== "radio"){
       setUser({...user,[name]:value});
    }
    else {
      setUser({ ...user, [name]: value });
    }
  }

  function handleSubmit(e){
    e.preventDefault();
    if(user.course.length===0 || user.profession==="" ||user.profession ==="select"){
       setIsValid(false);
       return;
    }
    navigate("/results",{state:user});
  }

  return (
   <>
     <div className="full">
    <div className="container">
     <h1 className="text">Course Survey Form</h1>
     <form onSubmit={handleSubmit}>
       <label htmlFor='name'>Name:<span style={{color:"red"}}>*</span></label>
       <input type='text'id="name" name="name" value={user.name} required placeholder='Enter your name here' onChange={event}></input>

       <label htmlFor='email'>Email:<span style={{color:"red"}}>*</span></label>
       <input type='text'id="email" name="email" value={user.email} required placeholder='Enter your email here' onChange={event}></input>   
     
       <label htmlFor='age'>Age:<span style={{color:"red"}}>*</span></label>
       <input type='number'id="age" name="age" value={user.age} required placeholder='Enter your age here' onChange={event}></input>
       
       <label htmlFor="select">Which option best describes you ?<span style={{color:"red"}}>*</span> </label>
       <select id="select" value={user.profession} required onChange={event} name="profession">
        <option value="" >select</option>
        <option >Student</option>
        <option >Professor</option>
        <option  >other</option>
       </select>
       { !isValid && user.profession === ""&& <p>Please enter this field</p>}

       <label >would you recommend this course to a friend:<span style={{color:"red"}}>*</span></label>
      
       <label>
        <input type="radio" required name="choose" className="choose" onChange={event} value="yes" ></input>Yes
       </label>
       <label>
       <input type="radio" name="choose"  required className="choose" onChange={event} value="No"></input>No
       </label>
       <label>
       <input type="radio" name="choose" required className="choose" onChange={event} value="maybe"></input>maybe 
       </label>

       <label >Gender: <span style={{color:"red"}}>*</span></label>
      
       <label>
        <input type="radio" name="gender" checked={user.gender==="Male"} value="Male" required  onChange={event}  className="click" ></input>Male
       </label>
       <label>
       <input type="radio" name="gender"   checked={user.gender==="Female"} value="Female" required  onChange={event} className="click" ></input>Female
       </label>
       <label></label>

       <label>Select your course : <span style={{color:"red"}}>*</span></label>
       <div >
       <label>
         <input type="checkbox"  checked={user.course.includes("C")}  value="C"  onChange={event} name= "course"></input>C
         </label>
         <label>
         <input type="checkbox" checked={user.course.includes("C++")}  value="C++"  onChange={event} name= "course"></input>C++
         </label>
         <label>
         <input type="checkbox"  checked={user.course.includes("java")}  value="java" onChange={event} name= "course"></input>java
         </label>
         <label>
         <input type="checkbox"  checked={user.course.includes("Python")}  value="Python" onChange={event} name= "course"></input>Python
         </label>
         <label>
         <input type="checkbox" checked={user.course.includes("SQL")}  value="SQL" onChange={event} name= "course" ></input>SQL
         </label>
         <label>
         <input type="checkbox" checked={user.course.includes("Springboot")}  value="Springboot" onChange={event} name= "course" ></input>Springboot
         </label>
         </div>

         { !isValid && user.course.length===0&& <p>Please enter this field</p>}

       <label htmlFor="comments">Any comments :<span style={{color:"red"}}>*</span></label>
       <textarea rows="5" cols="5" name="comments" id="comments" required placeholder='enter something about you'></textarea>

       <button type="submit" >SUBMIT</button>
       </form>
     </div>
     </div>
     
   </>
  )
}
 export default Form;