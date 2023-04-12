import React from 'react'
import Nav from './Nav'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Student = () => {
    const state=useSelector((state)=>state.student);
    console.log(state);
    const navigate=useNavigate();
    const AddNewStudent=()=>{
        navigate("/addnewstudent")
    }
  return (
    <div>
        <Nav/>
        <div className='details'>
        <h1>Students Details</h1>
        <button onClick={AddNewStudent}>Add New Student</button>
        </div>
        <div className='table'>
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                    </tr>
                </thead>
            {state.map((item,index)=>(
                <tbody key={item.id}>
                    <tr>
                        <td>{item.Name}</td>
                        <td>{item.Age}</td>
                        <td>{item.Course}</td>
                        <td>{item.Batch}</td>
                        <td><Link to='/editdetails' state={{data:item.id}}>Edit</Link></td>
                    </tr>
                </tbody>
            ))}
            </table>
        </div>
    </div>
  )
}

export default Student