import React, {useEffect, useState} from 'react'
import { withFormik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

const PrisonerForm = ({ errors, touched }) => {
  return (
    <Form className='prisonerForm'>
      <h1>Add Prisoner Form</h1>

      {touched.name && errors.name && <p className="error">{errors.name}</p>}
      <Field type="text" name="name" placeholder="Name" />

      {touched.skills && errors.skills && <p className="error">{errors.skills}</p>}
      <Field type="text" name="skills" placeholder="Skills" />

      {touched.prisonID && errors.prisonID && <p className="error">{errors.prisonID}</p>}
      <Field type="text" name="prisonID" placeholder="Prison ID" />

      {/* {touched.id && errors.id && <p className="error">{errors.id}</p>}
      <Field type="text" name="id" placeholder="Prisoner ID" /> */}

      {touched.biography && errors.biography && <p className="error">{errors.biography}</p>}
      <Field type="text" name="biography" placeholder="Biography" />

      {touched.DOB && errors.DOB && <p className="error">{errors.DOB}</p>}
      <Field type="text" name="DOB" placeholder="Date Of Birth" />

      {touched.releaseDate && errors.releaseDate && <p className="error">{errors.dor}</p>}
      <Field type="text" name="releaseDate" placeholder="Date Of Release" />
​
      <button type="submit">Submit</button>
    </Form>
  )
}

export default withFormik({
  // Values come from formik automatically --- magic!
  mapPropsToValues: (values) => {
    // this makes these inputs "controlled", sets the values automatically for us
    return {
      // these keys line up with the "name" attribute on our Fields
      DOB: values.DOB || '',
      biography: values.biography || '',
      name: values.name || '',
      prisonID: values.prisonID || '',
      releaseDate: values.releaseDate || '',
      skills: values.skills || ''
    }
  },
  validationSchema: yup.object().shape({
    name: yup.string().required('Name is required!'),
    skills: yup.string().required('Skills are required!'),
    prisonID: yup.string().required('Prison ID is required!'),
    biography: yup.string().required('Biography is required!'),
    DOB: yup.string().required('Date of Birth is required!'),
    releaseDate: yup.string().required('Date of Release is required!')
  }),
  handleSubmit: (values, {resetForm}) => {
    
    axios
      .post(`https://lambdaprisonerskills.herokuapp.com/prisoners`, values)
      .then(response => {
        console.log(response);
        resetForm();
      })
      .catch(error => {
        console.log(values);
        console.error(error);
      });

  }
})(PrisonerForm)
