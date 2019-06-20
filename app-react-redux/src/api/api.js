const fetchStudent = async (cb) => {
  const data = await fetch('http://localhost:4001/students')
    .then(r => r.json())
    .then(r => r);
  return data;
};

const fetchStudentCourses =  async (studentId) => {
  const data = await fetch(`http://localhost:4001/courses/?student_id=${studentId}`)
    .then(r => r.json())
    .then(r => r);
  return data;
};

const fetchStudentRewards =  async (studentId) => {
  const data = await fetch(`http://localhost:4001/rewards/?student_id=${studentId}`)
    .then(r => r.json())
    .then(r => r);
  return data;
};

export default {
  student: {
    fetch: fetchStudent,
    courses: {fetch: fetchStudentCourses},
    rewards: {fetch: fetchStudentRewards},
  }
};
