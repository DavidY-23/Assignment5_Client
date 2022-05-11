/*==================================================
EditStudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new student page.
================================================== */
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

// Create styling for the input form
const useStyles = makeStyles( () => ({
  formContainer:{  
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  }, 
  customizeAppBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle:{
    backgroundColor:'#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
}));

const EditStudentView = (props) => {
  const {handleChange, handleSubmit, student } = props;
  const classes = useStyles();
  const [validatefName, setvalidatefName] = useState("")
  const [validatelName, setvalidatelName] = useState("")
  const [validateEmail, setvalidateEmailn] = useState("")
  const [edit, setEdit] = useState("")
  

  //console.log("STUDENT INSIDE EDITVIEW", student)
  function ValidateForm(e) {
    e.preventDefault();
    if (e.target[0].value && e.target[1].value && e.target[2].value) 
      handleSubmit(e)
    if (!e.target[0].value) 
      setvalidatefName("There is no first name.")
    else 
      setvalidatefName("")
    if (!e.target[1].value) 
      setvalidatelName("There is no last name.")
    else  
      setvalidatelName("")
    if (!e.target[2].value) 
      setvalidateEmailn("There is no email.")
    else
      setvalidateEmailn("")
  }
  function editedTheForm(e) {
    e.preventDefault();
    handleSubmit(e)
    setEdit("The student has information edited.")
  }

  // Render a New Student view with an input form
  return (
    <div>
      <h1>Edit Student: {student.firstname}  {student.lastname}</h1>

      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
              Editing Student 
            </Typography>
          </div>
          <form style={{textAlign: 'center'}} onSubmit={(e) => editedTheForm(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
            <input type="text" name="firstname" onChange ={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
            <input type="text" name="lastname" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Email: </label>
            <input type="text" name="email"  onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Image Link: (A default one will be used if a link is not provided)</label>
            <input type="text" name="imageUrl" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>GPA: </label>
            <input type="text" name="gpa" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Campus Id: </label>
            <input type="text" name="campusId" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <br/>
            <br/>
          </form>
          </div>
          <h3>{validatefName}</h3>
          <h3>{validatelName}</h3>
          <h3>{validateEmail}</h3>
          <h3>{edit}</h3>

      </div>
    </div>    
  )
}

export default EditStudentView;