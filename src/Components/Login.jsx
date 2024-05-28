import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundImage from '../Components/images/adminbg.jpg';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();

    if (!email || !password) {
      setError("Please provide both email and password.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:9090/api/v1/login", {
        email: email,
        password: password,
      });

      const data = response.data;

      if (data.message === "Email not exists") {
        setError("Email does not exist.");
      } else if (data.message === "Login Success") {
        navigate("/home");
      } else {
        setError("Incorrect email and password combination.");
      }
    } catch (error) {
      setError("An error occurred while logging in.");
      console.error(error);
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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
    
      <div>
        <div>
          <h1
            className="text-center"
            style={{ marginTop: "-80px", fontSize: "70px" }}
          >
            <b>Rentify</b>
          </h1>
        </div>
        <br></br>
        <br></br>

        <table
          className="table-sm table-hover "
          style={{ marginLeft: "110px" }}
        >
          <tbody>
            <tr>
              <th colSpan="2">
                <h1>Sign In</h1>
              </th>
            </tr>

            <tr>
              <td>
                <label>
                  <b>Email</b>
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Email"
                  size="30"
                  value={email}
                  required
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setError("");
                  }}
                  className="form-control"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  <b>Password</b>
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="password"
                  required
                  placeholder="Password"
                  size="30"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setError("");
                  }}
                  className="form-control"
                />
              </td>
            </tr>

            <tr>
              <th colSpan={2}>
                <input
                  type="submit"
                  value="Login"
                  className="form-control btn btn-dark rounded submit px-3 text-white"
                  onClick={login}
                />
              </th>
            </tr>
            {error && (
              <tr>
                <td colSpan="2">
                  <p className="text-danger">{error}</p>
                </td>
              </tr>
            )}
            <tr>
              <td colSpan="2">
                <label>
                  <b>Not a member?</b>
                </label>
                <Link to="/register">
                  <b>Sign Up</b>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Login;
