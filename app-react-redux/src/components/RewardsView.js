import React, {useState, useEffect} from 'react';
import Api from "../api/api";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchStudentRewards} from "../redux/actions";

function RewardsView({studentRewards: state, match}) {
  const {params:{id:studentId}} = match;

  useState(() => {
    fetchStudentRewards(studentId);
    return () => {
      console.log('unmount RewardsView');
      state = [];
    };
  });

  return (<div>
    <h1>Rewards for Student {studentId}</h1>
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
          <td>{s.date}</td>
        </tr>
      ))}
      </tbody>
    </table>

    <Link to={'/'}>Home</Link>
  </div>);
}

const mapStateToProps = ({studentRewards}) => ({studentRewards});
export default connect(mapStateToProps)(RewardsView);

