export default function getStudentIdsSum(students) {
  const sum = students
    .map((student) => student.id)
    .reduce((acc, id) => acc + id, 0);
  return sum;
}
