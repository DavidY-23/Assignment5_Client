/*==================================================
NewStudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new student page.
================================================== */
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useState} from 'react';
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

const NewCampusView = (props) => {
  const {handleChange, handleSubmit, campusValidation} = props;
  const [validateName, setValidateName] = useState("")
  const classes = useStyles();
  console.log("campus view valid", campusValidation);
  let campusValidationTest;
  //Function used to validate form! 
  function ValidateForm(e) {
    e.preventDefault();
    if (!e.target[0].value) {
      console.log("inside if!")
      setValidateName("There is no campus name!")
    }
    console.log("The value of e is", e.target[0].value);
  }

  // Render a New Student view with an input form
  return (
    <div>
      <h1>New Campus</h1>

      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
              Add a Campus
            </Typography>
          </div>
{          //onSubmit={(e) => handleSubmit(e)}
}
          <form style={{textAlign: 'center'}} onSubmit={(e) => ValidateForm(e)}>

            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Campus Name: </label>
            <input type="text" name="campusname" onChange ={(e) => handleChange(e)} />
            <br/>
            <br/>
        
            <label style={{color:'#11153e', fontWeight: 'bold'}}>ImageURL: </label>
            <input type="text" name="imageUrl" onChange={(e) => handleChange(e)}/>
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Campus Address: </label>
            <input type="text" name="campusaddress" onChange={(e) => handleChange(e)}  />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Campus Description: </label>
            <input type="text" name="campusdescription" onChange={(e) => handleChange(e)}/>
            <br/>
            <br/>

            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <br/>
            <br/>
          </form>
          </div>
          {console.log("CampusValidation is:", campusValidation)}
          <p>{validateName}</p>
      </div>
    </div>    
  )
}

export default NewCampusView;