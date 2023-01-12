import { useState } from "react";

import "./new.scss";
import { v4 as uuidv4 } from "uuid";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { apiCaller } from "../../utils/axios-request-caller";
import { useNavigate } from "react-router-dom";
import { createUserQuery } from "../../graphql/mutations/createUserGraphql";

const New = ({ inputs, title }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [nic, setNic] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");

  const navigate = useNavigate();

  const submit = async () => {
    if (username.length !== 0 && nic.length !== 0 && password.length !== 0) {
      setIsLoading(true);
      const graphqlQuery = {
        operationName: "createUser",
        query: createUserQuery,
        variables: {
          id: uuidv4(),
          username: username,
          password: password,
          employeeId: nic,
          role: role,
        },
      };
      const res = await apiCaller(graphqlQuery, "");
      if (res.data.data !== null) {
        navigate("/users/");
        setIsLoading(false);
      } else {
        if (
          res.data.errors[0].message !==
          'Expected Iterable, but did not find one for field "Mutation.createUser".'
        ) {
          alert(res.data.errors[0].message);
        } else {
          navigate("/users/");
        }
        setIsLoading(false);
      }
    } else {
      alert("Please fill out required fields!");
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput">
                <label>UserName</label>
                <input
                  type="text"
                  placeholder="Username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                ></input>
              </div>
              <div className="formInput">
                <label>Employee NIC</label>
                <input
                  type="text"
                  placeholder="NIC"
                  onChange={(e) => {
                    setNic(e.target.value);
                  }}
                ></input>
              </div>
              <div className="formInput">
                <label>Password</label>
                <input
                  type="text"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></input>
              </div>
              <div className="formInput">
                <label>Role</label>
                <select
                  defaultValue={role}
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                >
                  <option value="admin">Admin</option>
                  <option value="manager">Manager</option>
                  <option value="supervisor">Supervisor</option>
                  <option value="warehouse_manager">Warehouse Manager</option>
                </select>
              </div>
              <button disabled={isLoading} onClick={submit}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
