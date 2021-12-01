
import React, {useRef, useState} from 'react'
import { Field, reduxForm } from 'redux-form'
import { useDispatch, useSelector } from 'react-redux'
import { insert } from '../services/apiServices'
import { createStream } from '../actions'
import {useNavigate} from 'react-router-dom'

const renderError = ({error, touched}) => {
  if(error && touched){
    return(
      <div className="ui error input" style={{width:"70%",color:"red"}}>{error}</div>   
    ) 

  }
 
}
const renderField = ({ input, label, type, meta}) => (
  <>
  <div>
    <label style={{display:"block"}}>{label}</label>
    <div className="ui error input" style={{width:"70%"}}>
      <input {...input} type={type} placeholder={label}/>
    </div>
  {renderError(meta)}
  </div>
  
  </>
)
const StreamCreate = (props) => {
   
 const [newStream, setNewStream] = useState({
    id: "",
    title: "",
    description:"",
    userID:""
  })
  const dispatcher = useDispatch()  
  const storedStreams = useSelector((state) => state.streams.streams)
  const navigate = useNavigate()

  newStream.userID = props.userID;
  newStream.id = storedStreams.lenght
  const val1 = (event, newValue, previousValue, name) => {
    newStream.title = newValue
  } 

  const val2 = (event, newValue, previousValue, name) => {
    newStream.description = newValue
  } 

  const { handleSubmit, pristine, submitting } = props

  const onSubmit = values => {
    insert('streams', newStream, data => {
      dispatcher(createStream(data))
    })
    values.title = "";
    values.description = ""
    navigate("/")
}
  return (
<>
    <h1>Create a Stream</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
   
        <Field name="title"
          type="text"
          component={renderField}
          label="Enter title"
          onChange={val1}
          onFocus={(e)=>e.target.placeholder = ""}
        />

        <Field name="description"
        type="text"
        component={renderField}
        label="Enter description"
        onChange={val2}
        onFocus={(e)=>e.target.placeholder = ""}
        />

      <button className="ui primary button" type="submit" style={{marginTop:"1%"}} disabled={pristine || submitting}>
        Submit
      </button>
    
  </form>
  </>
)
  
}
const validate = formValues => {
  const errors = {}
  if(!formValues.title){
    errors.title = "You must enter a title"
  }
  if(!formValues.description){
    errors.description = "You must enter a description"
  }
  return errors;
}

  export default reduxForm({
    form: 'createStream',
    validate 
  })(StreamCreate)
  

