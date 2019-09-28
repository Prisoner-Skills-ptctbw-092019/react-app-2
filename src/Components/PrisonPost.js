import React from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";

function FormComp() {
  return (
    <Form>
      <h1>Add Prison Form</h1>
      <div>
        <Field type="text" name="Prison_Name" placeholder="Prison Name" />
      </div>
      <div>
        <Field type="text" name="description" placeholder="Description" />
      </div>
      <div>
        <Field type="text" name="prisonID" placeholder="Prison ID" />
      </div>
      <div>
        <Field type="text" name="Location" placeholder="Location" />
      </div>
      <button>Submit</button>
    </Form>
  );
}

const PrisonFormik = withFormik({
    mapPropsToValues({ Prison_Name, description, prisonID, Location }) {

        return {
            Prison_Name: Prison_Name || "",
            description: description || "",
            prisonID: prisonID || "",
            Location: Location || ""
        };
    },
    handleSubmit(values, { resetForm }) { 
        axios
            .post("https://lambdaprisonerskills.herokuapp.com/prisons", values)
            .then(res => {
                console.log(res);
                resetForm();
            })
            .catch(err => {
                console.log(err);
            });
    }
})(FormComp);

export default PrisonFormik;
