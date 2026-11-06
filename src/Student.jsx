
function Student(props) {
    return (
        <div className="student">
            <h2>Student Information</h2>

            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>

            <p>
                Enrollment: {props.isEnrolled ? "Yes" : "No"}
            </p>

            <p>Course: {props.courses[0]}</p>
        </div>
    );
}

export default Student;
