const course = {
  courseName: "JS Hindi",
  price: "999",
  courseIntructor: "Hitesh",
};

// console.log(course.courseIntructor)
const { courseIntructor: teacher, courseName: name } = course;
console.log(teacher, name);
