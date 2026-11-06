import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Courses.jsx";
// import './App.css';
import Student from "./Student.jsx";
import icons from "./icons.svg";

function App() {
  return (
    <> 
     <img src={icons} alt=" Icon" />  
    <Header/>
    <Food/> 
    <Food/> 
    <Food/> 
    
     <div>
       
            <h1>Student Management System</h1>

            <Student
                name="Abel"
                age={21}
                isEnrolled={true}
                courses={["React", "Java", "Python"]}
            />

            <Student
                name="Dawit"
                age={22}
                isEnrolled={false}
                courses={["HTML", "CSS", "JavaScript"]}
            />

            <Student
                name="Mekdes"
                age={20}
                isEnrolled={true}
                courses={["C++", "Database", "React"]}
                
            />
            <Footer/> 
        </div>
        
    </> 
  );
}

export default App;