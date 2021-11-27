import React from 'react'
import { Field, formValues, formValueSelector, getFormValues, reduxForm } from 'redux-form'
import { connect, useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { insert } from '../services/apiServices'
const StreamDelete = props => {
    const { handleSubmit, pristine, submitting } = props
    
    const submit = (e) => {
        e.preventDefault()
        console.log(test.title)
    }

    return (
      <form onSubmit={submit}>
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
    form: 'deleteStream' 
  })(StreamDelete)