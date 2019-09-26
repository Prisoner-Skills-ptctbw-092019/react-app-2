import React from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";

function PrisonerForm() {
  return (
    <Form>
      <div>
        <Field type="text" name="name" placeholder="Prisoner Name" />
      </div>
      <div>
        <Field type="text" name="skills" placeholder="Skills" />
      </div>
      <div>
        <Field type="text" name="prisonID" placeholder="Prison ID" />
      </div>
      <div>
        <Field type="text" name="biography" placeholder="Biography" />
      </div>
      <div>
        <Field type="text" name="DOB" placeholder="DOB" />
      </div>
      <div>
        <Field type="text" name="releaseDate" placeholder="Release Date" />
      </div>
      <button>Submit</button>
    </Form>
  );
}

const PrisonerFormik = withFormik({
  mapPropsToValues({ name, skills, prisonID, biography, DOB, releaseDate }) {
    return {
      name: name || "",
      skills: skills || "",
      prisonID: prisonID || "",
      biography: biography || "",
      DOB: DOB || "",
      releaseDate: releaseDate || ""
    };
  },
  handleSubmit(values, { resetForm }) {
    axios
      .post("https://lambdaprisonerskills.herokuapp.com/prisoners", values)
      .then(res => {
        console.log(res);
        resetForm();
      })
      .catch(err => {
        console.log(err);
      });
  }
})(PrisonerForm);

export default PrisonerFormik;
