/*==================================================
NewCampusView.js

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
  const {handleChange, handleSubmit} = props;
  const [validateName, setValidateName] = useState("")
  const [validateAddress, setValidateAddress] = useState("")
  const [validateDescription, setValidateDescription] = useState("")

  const classes = useStyles();
  //Function used to validate form
  //Checks if the fields are empty if they are then it will tell the user. If all the required fields are filled out, then the form will submit.
  function ValidateForm(e) {
    e.preventDefault();
    if (e.target[0].value && e.target[2].value && e.target[3].value) 
      handleSubmit(e)
    
    if (!e.target[0].value) 
      setValidateName("There is no campus name.")
    else 
      setValidateName("")
    if (!e.target[2].value) 
      setValidateAddress("There is no campus address.")
    else  
      setValidateAddress("")
    if (!e.target[3].value) 
      setValidateDescription("There is no campus description.")
    else
      setValidateDescription("")
  }

  // Render a New Campus view with an input form
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
          <p>{validateName}</p>
          <p>{validateAddress}</p>
          <p>{validateDescription}</p>
      </div>
    </div>    
  )
}

export default NewCampusView;