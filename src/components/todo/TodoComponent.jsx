import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { retrieveTodoApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { ErrorMessage, Field, Form, Formik } from "formik";

export const TodoComponent = () => {
  const { id } = useParams();
  const { username } = useAuth();
  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const retrieveTodo = () => {
    retrieveTodoApi(username, id)
      .then((res) => {
        setDescription(res.data.description);
        setTargetDate(res.data.targetDate);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => retrieveTodo, [id]);

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleValidate = (values) => {
    let errors = {
      // description: "Enter a valid description",
      // targetDate: "Enter a valid target date",
    };
    if (values.description.length < 5) {
      errors.description = "Enter at least 5 characters";
    }
    if (values.targetDate === null) {
      errors.targetDate = "Enter a target Date";
    }
    console.log(values);
    return errors;
  };

  return (
    <div className="container">
      <h1>Enter Todo Details</h1>
      <div>
        <Formik
          initialValues={{ description, targetDate }}
          enableReinitialize={true}
          onSubmit={handleSubmit}
          validate={handleValidate}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {(props) => (
            <Form>
              <ErrorMessage
                name="description"
                component={"div"}
                className="alert alert-warning"
              />
              <ErrorMessage
                name="targetDate"
                component={"div"}
                className="alert alert-warning"
              />
              <fieldset className="form-group">
                <label>Description</label>
                <Field
                  type="text"
                  className="form-control"
                  name="description"
                />
              </fieldset>
              <fieldset className="form-group">
                <label>Target Date</label>
                <Field type="date" className="form-control" name="targetDate" />
              </fieldset>
              <div>
                <button className="btn btn-success mt-5" type="submit">
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
