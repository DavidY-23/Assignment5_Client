/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";
import { useState } from 'react';

// Take in props data to construct the component
const CampusView = (props) => {
  //Creating a state to show if a campus has been deleted.
  const [campusDeleteMessage, setCampusDeleteMessage] = useState("");
  const {campus, deleteCampus} = props;
  let checkingStudent;
  //If statement to see if there are any students.
  if (campus.students.length === 0) {
    checkingStudent = <h3>There are no students in this campus</h3>
  } else {
    checkingStudent = <h3>Students in this campus:</h3>
  }
  //Used to delete the campus and to return a message to the user. 
  const deletingTheCampus= () => {
    deleteCampus(campus.id)
    setCampusDeleteMessage("Campus has been deleted!");
  }

  // Render a single Campus view with list of its students
  return (
    <div>
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      {checkingStudent}
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h2>{name}</h2>
            </Link>   
          </div>
        );
      })}

    <button onClick={() => deletingTheCampus(campus.id)}>Delete</button>
    <p>{campusDeleteMessage}</p>


    </div>
  );
};

export default CampusView;