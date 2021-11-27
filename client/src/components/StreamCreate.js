
import React, {useState} from 'react'
import { Field, formValues, formValueSelector, getFormValues, reduxForm } from 'redux-form'
import { connect, useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { insert } from '../services/apiServices'
const StreamCreate = (props) => {
   
 const [newStream, setNewStream] = useState({
    id: "",
    title: "",
    description:"",
    userID:""
  })
  
    const submit = values => {
      setNewStream({
        id: 1,
        title: values.title,
        description: values.description,
        userID: props.userID
      })
  }
  console.log(newStream)
  const { handleSubmit, pristine, submitting } = props
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label style={{display:"block"}}>Title</label>
        <div className="ui error input" style={{width:"70%"}}>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder="Enter stream title"
          />
        </div>
      </div>
      <div>
        <label style={{display:"block"}}>Description</label>
        <div className="ui error input" style={{width:"70%"}}>
          <Field
            name="description"
            component="input"
            type="text"
            placeholder="Enter stream description"
          />
        </div>
      </div>
      <div>
        <button className="ui primary button" type="submit" disabled={pristine || submitting} style={{marginTop:"1%"}}>
          Submit
        </button>
      </div>
    </form>
  )
}
  
  export default reduxForm({
    form: 'createStream' 
  })(StreamCreate)
  

