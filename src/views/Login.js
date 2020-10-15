import React from "react";
import { Formik, Field, Form } from "formik";
import { handleLogin } from "../interactors/handleLogin";
import "./login.css";
import { toast } from "react-toastify";

function Login() {
  return (
    <div className="login text-center">
      <Formik
        initialValues={{
          user_id: "",
          user_password: "",
        }}
        onSubmit={(values) => {
          handleLogin(values)
            .then(() => {
              window.location = "/dashboard";
            })
            .catch((err) => {
              toast.error(err.toString());
              window.location = "/dashboard";
            });
        }}
      >
        <Form>
          <h1 className="h3 mb-3 font-weight-bold">新選課系統</h1>
          <Field
            type="username"
            id="user_id"
            name="user_id"
            className="form-control"
            placeholder="學號"
          />
          <Field
            type="password"
            id="user_password"
            name="user_password"
            className="form-control"
            placeholder="密碼"
          />
          <button
            className="btn btn-lg btn-primary btn-block mt-3"
            type="submit"
          >
            登入
          </button>
        </Form>
      </Formik>
      <div>
        <p className="mt-5 mb-3 text-muted">&copy; NCUIM 2020</p>
      </div>
    </div>
  );
}

export default Login;
