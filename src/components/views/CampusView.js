/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";
import { deleteCampusThunk } from "../../store/thunks";
import AllCampusesView from '../views/AllCampusesView';


// Take in props data to construct the component
const CampusView = (props) => {
  const {campus, deleteCampus} = props;
  console.log(campus.id)
  let checkingStudent;
  //If statement to see if there are any students.
  if (campus.students.length === 0) {
    checkingStudent = <h3>There are no students in this campus</h3>
  } else {
    checkingStudent = <h3>Students in this campus:</h3>
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

    <button onClick={() => deleteCampus(campus.id)}>Deleting</button>


    </div>
  );
};

export default CampusView;