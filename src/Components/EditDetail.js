import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Component.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { studentUpdated } from '../features/counter/StudentSlice';

const EditDetail = () => {
    const data=useLocation();
    console.log(data);
    const dataid=data.state.data;
    console.log(dataid);
    const stdDetail=useSelector((state)=>state.student.filter((item)=>item.id===dataid));
    const stdName=stdDetail[0].Name;
    const stdAge=stdDetail[0].Age;
    const stdCourse=stdDetail[0].Course;
    const stdBatch=stdDetail[0].Batch;
    const [name,setName]=useState(stdName);
    const [age,setAge]=useState(stdAge);
    const [course,setCourse]=useState(stdCourse);
    const [batch,setBatch]=useState(stdBatch);
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const submitHandler=()=>{
        if(name && age && course && batch){
          dispatch(studentUpdated({
            "id":dataid,
            "Name":name,
            "Age":age,
            "Course":course,
            "Batch":batch
          }))
          navigate("/student")
        }
    }
  return (
    <>
    <div className='header'>
            <label>Name : </label><br></br>
            <input type='text' name='name' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/><br></br>
            <label>Age : </label><br></br>
            <input type='text' name='age' placeholder='Age' value={age} onChange={(e)=>setAge(e.target.value)}/><br></br>
            <label>Course : </label><br></br>
            <input type='text' name='course' placeholder='course' value={course} onChange={(e)=>setCourse(e.target.value)}/><br></br>
            <label>Batch : </label><br></br>
            <input type='text' name='batch' placeholder='batch' value={batch} onChange={(e)=>setBatch(e.target.value)}/>
    </div>
    <div className='box2'>
    <button onClick={submitHandler}>Update</button>
    </div>
    </>
  )
}

export default EditDetail
