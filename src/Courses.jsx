function Courses() {
 const course1 = "React";
 const course2 = "Bootstrap";
  return (
    <ul className="food-list">
      <li>Python</li>
      <li>{course1}</li>
      <li>{course2.toUpperCase()}</li>
      
    </ul>
  );
}
export default Courses;