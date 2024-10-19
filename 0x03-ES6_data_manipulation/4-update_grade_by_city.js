/* Create a function updateStudentGradeByCity that returns an array
of students for a specific city with their new grade
It should accept a list of students (from getListStudents),
a city (String), and newGrades (Array of “grade” objects) as parameters.
newGrades is an array of objects with this format: */

export default function updateStudentGradeByCity(listObj, city, newGrades) {
  return (listObj
    .filter((item) => item.location === city)
    .map((item) => {
      const grades = newGrades.filter((value) => item.id === value.studentId);
      return ({ ...item, grade: grades.reduce((value, key) => key.grade, 'N/A') });
    }));
}
