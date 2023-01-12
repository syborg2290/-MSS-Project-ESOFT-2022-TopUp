import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignInQuery } from "../../graphql/mutations/signInGraphql";
import { apiCaller } from "../../utils/axios-request-caller";
import "./login.scss";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();
    if (username.length !== 0 && password.length !== 0) {
      setIsLoading(true);
      const graphqlQuery = {
        operationName: "signIn",
        query: SignInQuery,
        variables: {
          username: username,
          password: password,
        },
      };
      const res = await apiCaller(graphqlQuery, "");
      if (res.data.data.signIn.token !== null) {
        localStorage.setItem("token", res.data.data.signIn.token);
        navigate("/home/");
        setIsLoading(false);
      } else {
        alert(res.data.data.signIn.message);

        setIsLoading(false);
      }
    } else {
      alert("Username and password is required!");
    }
  };

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input
            type="text"
            placeholder="Username"
            name="uname"
            required
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            placeholder="Password"
            name="pass"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="button-container">
          <input type="submit" disabled={isLoading} onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );

  return (
    <div className="login">
      <div className="login-form">
        <div className="title">Sign In</div>
        {renderForm}
      </div>
    </div>
  );
}

export default Login;
