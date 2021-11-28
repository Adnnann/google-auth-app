
import React, {useState} from 'react'
import { Field, reduxForm } from 'redux-form'
import { useDispatch, useSelector } from 'react-redux'
import { insert } from '../services/apiServices'
import { createStream } from '../actions'

const StreamCreate = (props) => {
   
 const [newStream, setNewStream] = useState({
    id: "",
    title: "",
    description:"",
    userID:""
  })

  const dispatcher = useDispatch()  
  const storedStreams = useSelector((state) => state.streams.streams)

  newStream.userID = props.userID;
  newStream.id = storedStreams.lenght
  const test = (event, newValue, previousValue, name) => {
    newStream.title = newValue
  } 

  const test2 = (event, newValue, previousValue, name) => {
    newStream.description = newValue
  } 


    const submit = values => {
      insert('streams', newStream, data => {
        dispatcher(createStream(data))
      })
      values.title = "";
      values.description = ""
      window.history.back()
  }
 
  const { handleSubmit, pristine, submitting } = props
  return (
    <>
    <h1>Create a Stream</h1>
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label style={{display:"block"}}>Enter title</label>
        <div className="ui error input" style={{width:"70%"}}>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder="Enter stream title"
            onChange={test}
          />
        </div>
      </div>
      <div>
        <label style={{display:"block"}}>Enter description</label>
        <div className="ui error input" style={{width:"70%"}}>
          <Field
            name="description"
            component="input"
            type="text"
            placeholder="Enter stream description"
            onChange={test2}
          />
        </div>
      </div>
      <div>
        <button className="ui primary button" type="submit" disabled={pristine || submitting} style={{marginTop:"1%"}}>
          Submit
        </button>
      </div>
    </form>
    </>
  )
}
  export default reduxForm({
    form: 'createStream' 
  })(StreamCreate)
  

