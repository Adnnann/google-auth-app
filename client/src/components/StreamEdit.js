import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { update } from '../services/apiServices'
import { connect, useDispatch, useSelector } from 'react-redux'
import { editStream, selectedStream } from '../actions'
import { select } from '../services/apiServices'


const StreamEdit = props => {
const dispatch = useDispatch()

  useEffect(()=>{
    select('streams',id,data => {
        if(data) dispatch(selectedStream(data))
    })
},[])

const stream = useSelector((state) => state.stream)



const paramID = useParams()
const id = paramID.id
const [editedStream, setNewStream] = useState({
  id: "",
  title: "",
  description:"",
  userID:""
})

editedStream.userID = props.userID;
editedStream.id = paramID.id


const val1 = (event, newValue, previousValue, name) => {
  editedStream.title = newValue
} 

const val2 = (event, newValue, previousValue, name) => {
  editedStream.description = newValue
} 


const submit = values => {
  update('streams',id, editedStream, data=>{
    dispatch(editStream(data))
  })
  values.title = "";
  values.description = ""
  window.history.back()
}

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
          onChange={val1}
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
          onChange={val2}
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

const mapStateToProps = (state) => {
  return {
    initialValues: {
      title: state.stream.title,
      description: state.stream.description,
    }
  }
}

export default connect(mapStateToProps)(reduxForm({
  form: 'editStream',
  enableReinitialize: true
})(StreamEdit))




