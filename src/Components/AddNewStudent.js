import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { studentAdded } from '../features/counter/StudentSlice';
import { useDispatch, useSelector } from 'react-redux';

const AddNewStudent = () => {
    const data=useSelector((state)=>state.student);
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [course,setCourse]=useState("");
    const [batch,setBatch]=useState("");
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const cancelAddStudent =()=>{
        navigate("/student")
    }
    const submitNewStudent=()=>{
        if(name&&age&&course&&batch){
            dispatch(studentAdded({
                "id":data.length,
                "Name":name,
                "Age":age,
                "Course":course,
                "Batch":batch
            }))
        }
        navigate("/student")
    }
  return (
    <>
        <div className='header'>
            <label>Name : </label><br></br>
            <input type='text' name='name' placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/><br></br>
            <label>Age : </label><br></br>
            <input type='text' name='age' placeholder='Enter Age' value={age} onChange={(e)=>setAge(e.target.value)}/><br></br>
            <label>Course : </label><br></br>
            <input type='text' name='course' placeholder='Enter Course' value={course} onChange={(e)=>setCourse(e.target.value)}/><br></br>
            <label>Batch : </label><br></br>
            <input type='text' name='batch' placeholder='Enter Batch' value={batch} onChange={(e)=>setBatch(e.target.value)}/>
        </div>
    <div className='box2'>
    <button onClick={cancelAddStudent} className='btn1'>Cancel</button>
    <button onClick={submitNewStudent}>Submit</button>
    </div>
    </>
  )
}

export default AddNewStudent