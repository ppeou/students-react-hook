import React, {useState, useEffect} from 'react';
import Api from "../api/api";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchStudentCourses} from "../redux/actions";

function CoursesView({match, studentCourses: state}) {
  const {params: {id: studentId}} = match;

  useState(() => {
    fetchStudentCourses(studentId);
    return () => {
      console.log('unmount CoursesView');
      state = [];
    };
  }, []);

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

      {(state || []).map((s, i) => (
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

const mapStateToProps = ({studentCourses}) => ({studentCourses});
export default connect(mapStateToProps)(CoursesView);
