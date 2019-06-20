const fetchStudent = (cb) => {
  fetch('http://localhost:4001/students')
    .then(r => r.json())
    .then(r => cb && cb(r));
};

const fetchStudentCourses = (cb, studentId) => {
  fetch(`http://localhost:4001/courses/?student_id=${studentId}`)
    .then(r => r.json())
    .then(r => cb && cb(r));
};

const fetchStudentRewards = (cb, studentId) => {
  fetch(`http://localhost:4001/rewards/?student_id=${studentId}`)
    .then(r => r.json())
    .then(r => cb && cb(r));
};

export default {
  student: {
    fetch: fetchStudent,
    courses: {fetch: fetchStudentCourses},
    rewards: {fetch: fetchStudentRewards},
  }
};
