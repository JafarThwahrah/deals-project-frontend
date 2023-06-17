import { useState } from "react";
import axios from "../api/axios";
const REGISTER_URL = "/register";

const Register = () => {
  const [formValues, setFormValues] = useState({});
  const [errMsg, setErrMsg] = useState({});

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };
  console.log(errMsg);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(REGISTER_URL, formValues);
      console.log(response);
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg(err.response.data.errors);
      } else if (err.response?.status === 409) {
        setErrMsg(err.response.data.errors);
      } else {
        setErrMsg("Login Failed");
      }
    }
  };
  console.log(formValues);
  return (
    <div className="d-flex justify-content-center items-center p-5">
      <form
        className="border p-5 mt-5 rounded d-flex flex-column justify-content-center"
        style={{ width: "26rem" }}
      >
        <div className="mb-3">
          <h3 className="mb-5 text-center">Sign up</h3>
          <label htmlFor="name" className="form-label">
            Username
          </label>
          <p className="text-danger">{errMsg?.name}</p>
          <input
            className="form-control"
            id="name"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <p className="text-danger">{errMsg?.email}</p>

          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <p className="text-danger">{errMsg?.password}</p>

          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password_confirmation" className="form-label">
            Confirm Password
          </label>
          <p className="text-danger">{errMsg?.password_confirmation}</p>

          <input
            type="password"
            className="form-control"
            id="password_confirmation"
            name="password_confirmation"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <p className="text-danger">{errMsg?.phone}</p>

          <input
            className="form-control"
            id="phone"
            name="phone"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="date_of_birth" className="form-label">
            Date of birth
          </label>
          <p className="text-danger">{errMsg?.date_of_birth}</p>

          <input
            type="date"
            className="form-control"
            id="date_of_birth"
            name="date_of_birth"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Gender
          </label>
          <p className="text-danger">{errMsg?.gender}</p>

          <select
            name="gender"
            className="form-select"
            aria-label="Default select example"
            onChange={handleChange}
            defaultValue="select gender"
          >
            <option
              value="select gender"
              style={{ backgroundColor: "gray", color: "white" }}
            >
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <a className="text-decoration-none mb-4" href="/login">
          Do you have an account?
        </a>

        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
