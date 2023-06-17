import { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
const LOGIN_URL = "/auth/login/password";

const Login = () => {
  const [formValues, setFormValues] = useState({});
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL, formValues);
      if (response.status == 200) {
        // navigate("/profile");
        console.log(response);
      }
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };
  console.log(formValues);
  return (
    <div className="d-flex justify-content-center items-center vh-100">
      <form
        className="border p-5 mt-5 rounded d-flex flex-column justify-content-center"
        style={{ height: "27rem" }}
      >
        <div className="mb-3">
          <h3 className="mb-5 text-center">Login</h3>
          <label htmlFor="name" className="form-label">
            Username
          </label>
          <input
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your informations with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            onChange={handleChange}
          />
        </div>
        <a className="text-decoration-none mb-4" href="/register">
          Dont have account yet?
        </a>

        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
