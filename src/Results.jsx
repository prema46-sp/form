import React from 'react'
import {useLocation} from 'react-router-dom'

export default function Results() {
    const location =useLocation();
    const user = location.state;
    
    if (!user) {
      return <p>No data available. Please fill the form first.</p>;
    }
    
  return (
    <>
    <div>
      <h1> submitted form</h1>
     <table >
      <tbody>
      <tr>
        <td>Name</td>
        <td>{user.name}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>{user.email}</td>
      </tr>
      <tr>
        <td>Age</td>
        <td>{user.age}</td>
      </tr>
      <tr>
        <td>profession</td>
        <td>{user.profession}</td>
      </tr>
      <tr>
        <td>course</td>
        <td>{user.course.join(",")}</td>
      </tr>
      <tr>
        <td>Gender</td>
        <td>{user.gender}</td>
      </tr>
      </tbody>
     </table>
    
     </div>
    </>
  );
}
