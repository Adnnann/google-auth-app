import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { Field, formValues, reduxForm } from 'redux-form'
import { update } from '../services/apiServices'
import { connect, useDispatch, useSelector } from 'react-redux'
import { editStream, selectedStream } from '../actions'
import { select } from '../services/apiServices'

const renderError = ({error, touched}) => {

  return(
    
    <div className="ui error input" style={{width:"70%",color:"red"}}>{error}</div>
    
  )


}

const renderField = ({ input, label, type, meta}) => (
<>
<div>
  <label style={{display:"block"}}>{label}</label>
  <div className="ui error input" style={{width:"70%"}}>
    <input {...input} type={type}/>
  </div>
  {renderError(meta)}
</div>

</>
)
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


const { handleSubmit} = props

const onSubmit = values => {
  editedStream.title = values.title;
  editedStream.description = values.description

  update('streams',id, editedStream, data=>{
    dispatch(editStream(data))
  })
  window.history.back()

}

   
return (
  <form onSubmit={handleSubmit(onSubmit)}>
   
   <Field name="title"
    type="text"
    component={renderField}
    label="Enter title"
    onChange={val1}
  />

  <Field name="description"
  type="text"
  component={renderField}
  label="Enter description"
  onChange={val2}
  />

      <button className="ui primary button" type="submit" style={{marginTop:"1%"}}>
        Submit
      </button>
    
  </form>
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
  enableReinitialize: true,
  validate,
})(StreamEdit))




