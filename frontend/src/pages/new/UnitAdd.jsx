import "./unitAdd.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { apiCaller } from "../../utils/axios-request-caller";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { createUnitQuery } from "../../graphql/mutations/createUnitGraphql";

const UnitAdd = ({ inputs, title }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState("");
  const [department, setDepartment] = useState("salesMarketing");

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      if (
        code.length !== 0 &&
        department.length !== 0
      ) {
        setIsLoading(true);
        const graphqlQuery = {
          operationName: "createUnit",
          query: createUnitQuery,
          variables: {
            id: uuidv4(),
            code: code,
            department: department,
          },
        };
        const res = await apiCaller(graphqlQuery, "");
        if (res.data.data !== null) {
          navigate("/units/");
          setIsLoading(false);
        } else {
          if (
            res.data.errors[0].message !==
            'Expected Iterable, but did not find one for field "Mutation.createEmployee".'
          ) {
            alert(res.data.errors[0].message);
          } else {
            navigate("/units/");
            setIsLoading(false);
          }
        }
      } else {
        alert("Please fill out required fields!");
      }
    } catch (error) {
      console.log(error);
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
                <label>Unit Code</label>
                <input
                  type="text"
                  placeholder="Code"
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                ></input>
              </div>
              <div className="formInput">
                <label>Department</label>
                <select
                  defaultValue={department}
                  onChange={(e) => {
                    setDepartment(e.target.value);
                  }}
                >
                  <option value="salesMarketing">Sales & Marketing</option>
                  <option value="purchasing">Purchasing</option>
                  <option value="finance">Finance</option>
                  <option value="it">IT</option>
                  <option value="hr">HR</option>
                  <option value="rd">R&D</option>
                  <option value="engineeringDesign">Engineering Design</option>
                  <option value="engineering">Engineering</option>
                  <option value="factoryManagement">Factory Management</option>
                </select>
              </div>
              <button disabled={isLoading} onClick={submit}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitAdd;
