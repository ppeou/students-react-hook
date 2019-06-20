const students = (state = [], action) => {
  const {type, value} = action;
  return type === 'fetch-student' && value
    ? value : state;
};

const studentCourses = (state = [], action) => {
  const {type, value} = action;
  return type === 'fetch-student-courses' && value
    ? value : state;
};

const studentRewards = (state = [], action) => {
  const {type, value} = action;
  return type === 'fetch-student-rewards' && value
    ? value : state;
};

export default {
  students,
  studentCourses,
  studentRewards
};
