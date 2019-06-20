import React, {useState, useEffect} from 'react';
import Api from "../api/api";
import {Link} from "react-router-dom";

function CoursesView({match}) {
  const {params:{id:studentId}} = match;
  const [state, setState] = useState([]);
  useEffect(()=>{
    Api.student.courses.fetch(setState, studentId);
    return () => {setState([])};
  }, [studentId]);

  return (<div>
    <h1>Courses for Student {studentId}</h1>
    <table>
      <thead>
      <tr>
        <th>Id</th>
        <th>Course Name</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>

      {(state).map((s, i) => (
        <tr key={i}>
          <td>{s.id}</td>
          <td>{s.name}</td>
          <td>{s.desc}</td>
        </tr>
      ))}
      </tbody>
    </table>

    <Link to={'/'}>Home</Link>
  </div>);
}

export default CoursesView;
