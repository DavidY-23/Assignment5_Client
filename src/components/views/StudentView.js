/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { useState } from 'react';
import { deleteStudent } from '../../store/actions/actionCreators';

const StudentView = (props) => {
  const { student, deleteStudent } = props;
  const [studentDeleteMessage, setStudentDeleteMessage] = useState("");
  //If the student does not exist!
  if (student === null) {
    return (
      <div>
        <h1>This student does not exist, as the ID does not exist or has been deleted.</h1>
      </div>
    )
  }
  let campus;
  //Used to delete the student
  const deletingTheStudent= () => {
    console.log("STUDENT ID:: ", student.id)
    deleteStudent(student.id)

    //deleteStudent(students.student.id)
    setStudentDeleteMessage("Student has been deleted!");
  }
  //If the campus has been deleted. 
  if (student.campus) {
    campus = student.campus.name;
  } else {
    campus = "This student has no campus as the ID does not exist."
  }
  //Default image will be used if user did not input one.
  console.log("STUDNET URL", student.imageUrl)
  let imageLink;
  if (!student.imageUrl) {
    imageLink = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
  } else {
    imageLink = student.imageUrl;
  }


  // Render a single Student view 
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h2>{"Students Email: " + student.email}</h2>
      <h3>{campus}</h3>
      <h2>{"GPA: " + student.gpa}</h2>
      <img src={imageLink} alt="img" height={100} width={100}/>

      <br></br>

      <button onClick={() => deletingTheStudent(student.id)}>Delete</button>
      <p>{studentDeleteMessage}</p>

    </div>
  );

};

export default StudentView;