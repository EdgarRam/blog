import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {validate} from '../validations/addPost'
import { Link } from 'react-router'

const renderInput = ( type, label, input ) =>{

    if( type === 'text')
        return <input {...input} placeholder={label} type={type} className="form-control"/>
    else
        return <textarea {...input} placeholder={label} type={type} className="form-control"/>
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className={`form-group ${ error && touched ? 'has-danger' : '' }`}>
        <label>{label}</label>
        {renderInput( type, label, input )}
        {touched && ((error && <span  className="text-help">{error}</span>) )}
    </div>
)


let ContactForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={ handleSubmit }>
            <h3>Create a new form</h3>

            <Field name="title" label="Title" component={renderField} type="text" />
            <Field name="categories" component={renderField} type="text" label="Categories"/>
            <Field name="content" component={renderField} type="textarea" label="Content"/>


            <input type="submit" value="Submit" className="btn  btn-primary"/>
            <Link to="/" className="btn btn-danger" > Cancelar </Link>
        </form>
  )
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'addPost',
  validate
})(ContactForm)

export default ContactForm;
