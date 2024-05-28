import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { isEmail, isLength } from "validator";

import backgroundImage from '../Components/images/adminbg.jpg';

function Register() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};

    if (!isLength(first_name, { min: 2 })) {
      errors.first_name = "First name must be at least 2 characters long.";
    }

    if (!isLength(last_name, { min: 2 })) {
      errors.last_name = "Last name must be at least 2 characters long.";
    }

    if (!isEmail(email)) {
      errors.email = "Invalid email address.";
    }

    if (!isLength(password, { min: 8 })) {
      errors.password = "Password must be at least 8 characters long.";
    }

    if (!phone_number) {
      errors.phone_number = "Phone number is required.";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  async function save(event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await axios.post("http://localhost:9090/api/v1/addcustomer", {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,

        phone_number: phone_number,
      });
      alert("Account created Successfully");
      navigate("/");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        minWidth: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link to="/">
        <h3
          className="text-primary"
          style={{ marginTop: "-300px", marginLeft: "-400px" }}
        >
          <button className="btn btn-dark">Login</button>
        </h3>
      </Link>

      <form>
        <h1>
          <b>SIGN UP</b>
        </h1>
        <table className="table-sm table-hover">
          <tbody>
            <tr>
              <th>
                <label>
                  <b>First Name:</b>
                </label>
              </th>
              <th>
                <input
                  type="text"
                  className={`form-control ${
                    errors.first_name ? "is-invalid" : ""
                  }`}
                  placeholder="Enter First Name"
                  size="30"
                  value={first_name}
                  required
                  onChange={(event) => {
                    setFirstName(event.target.value);
                  }}
                />
                {errors.first_name && (
                  <div className="invalid-feedback">{errors.first_name}</div>
                )}
              </th>
            </tr>

            <tr>
              <th>
                <label>
                  <b>Last Name:</b>
                </label>
              </th>
              <th>
                <input
                  type="text"
                  className={`form-control ${
                    errors.last_name ? "is-invalid" : ""
                  }`}
                  placeholder="Enter Last Name"
                  value={last_name}
                  required
                  onChange={(event) => {
                    setLastName(event.target.value);
                  }}
                />
                {errors.last_name && (
                  <div className="invalid-feedback">{errors.last_name}</div>
                )}
              </th>
            </tr>

            <tr>
              <th>
                <label>
                  <b>Email:</b>
                </label>
              </th>
              <th>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Enter Email"
                  value={email}
                  required
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </th>
            </tr>

            <tr>
              <th>
                <label>
                  <b>Phone number:</b>
                </label>
              </th>
              <th>
                <input
                  type="text"
                  className={`form-control ${
                    errors.phone_number ? "is-invalid" : ""
                  }`}
                  placeholder="Phone Number"
                  value={phone_number}
                  required
                  onChange={(event) => {
                    setPhoneNumber(event.target.value);
                  }}
                />
                {errors.phone_number && (
                  <div className="invalid-feedback">{errors.phone_number}</div>
                )}
              </th>
            </tr>

            <tr>
              <th>
                <label>
                  <b>Password:</b>
                </label>
              </th>
              <th>
                <input
                  type="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  placeholder="Enter Password"
                  value={password}
                  required
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </th>
            </tr>

            <tr>
              <th colSpan={2}>
                <button
                  type="submit"
                  className="form-control btn btn-primary rounded submit px-3 btn-dark text-white"
                  onClick={save}
                >
                  <b>Register</b>
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Register;
