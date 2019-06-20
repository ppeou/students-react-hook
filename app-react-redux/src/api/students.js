module.exports = () => {
  let [students, courses, rewards] = [[], [], []];
  const fakeCourse = (sid, id) => ({
    id, name: `course-${id}`, desc: `course description ${id}`,
    student_id: sid,
  });
  const fakeCourses = (sid) => ([1, 2, 3].forEach(i => {
    courses.push(fakeCourse(sid, `1${sid}${i}`));
  }));

  const fakeReward = (sid, id) => ({
    id, name: `reward ${id}`, date: `${sid}-May-2019`, student_id: sid,
  });

  const fakeRewards = (sid) => ([1, 2].forEach(i => {
    rewards.push(fakeReward(sid, `2${sid}${i}`));
  }));


  for (let i = 1; i < 11; i++) {
    students.push({
      id: i, name: `student ${i}`,
      email: `student-${i}@school.edu`,
    });
    fakeCourses(i);
    fakeRewards(i);
  }
  return {students, courses, rewards};
};
