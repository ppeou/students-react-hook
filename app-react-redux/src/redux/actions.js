import Api from '../api/api';
import {dispatch} from "./store";

const fetchStudents = async () => {
  const value = await Api.student.fetch();
  dispatch({type: 'fetch-student', value});
};

const fetchStudentCourses = async (studentId) => {
  const value = await Api.student.courses.fetch(studentId);
  dispatch({type: 'fetch-student-courses', value});
};

const fetchStudentRewards = async (studentId) => {
  const value = await Api.student.rewards.fetch(studentId);
  dispatch({type: 'fetch-student-rewards', value});
};

export {
  fetchStudents,
  fetchStudentCourses,
  fetchStudentRewards,
};
