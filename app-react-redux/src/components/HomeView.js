import {connect} from 'react-redux';
import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {fetchStudents} from '../redux/actions';

function HomeView({students: state}) {

  useEffect(() => {
    fetchStudents();
  }, []);

  return (<div>
    <h1>Students</h1>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th/>
      </tr>
      </thead>
      <tbody>
      {(state || []).map((s, i) => (
        <tr key={i}>
          <td>{s.id}</td>
          <td>{s.name}</td>
          <td>{s.email}</td>
          <td>
            <Link to={`/students/${s.id}/courses`}>Courses</Link>
            | <Link to={`/students/${s.id}/rewards`}>Rewards</Link>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  </div>)
}


export default connect(({students}) => ({students}))(HomeView);
