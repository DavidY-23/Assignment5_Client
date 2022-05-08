/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
const StudentView = (props) => {
  const { student } = props;
  let campus;
  console.log(student.imageUrl)
  //If the campus has been deleted. 
  if (student.campus) {
    campus = student.campus.name;
  } else {
    campus = "This student has no campus as the ID does not exist."
  }
  //Default image will be used if user did not input one.
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
    </div>
  );

};

export default StudentView;