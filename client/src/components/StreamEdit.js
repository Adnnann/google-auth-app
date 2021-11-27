import React from 'react'
import { Field, reduxForm } from 'redux-form'

const StreamEdit = props => {

    const submit = values => {
        console.log(values)
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
    form: 'editStream' 
  })(StreamEdit)