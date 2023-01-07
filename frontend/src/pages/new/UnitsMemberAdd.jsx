import "./unitsMemeberAdd.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getAllUnitsQuery } from "../../graphql/queries/getUnitsGraphql";
import { apiCaller } from "../../utils/axios-request-caller";
import { getAllEmployeesQuery } from "../../graphql/queries/getEmployeeGraphql";
import { createUnitMemberQuery } from "../../graphql/mutations/createUnitMemberGraphql";
import { useNavigate } from "react-router-dom";

const UnitsMemberAdd = ({ inputs, title }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [unitsData, setUnitsData] = useState([]);
  const [employeeData, setEmployeesData] = useState([]);
  const [unit, setUnit] = useState("");
  const [employee, setEmployee] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getAllUnits();
    getAllEmployees();
  }, [unitsData, employeeData]);

  const getAllUnits = async () => {
    const graphqlQuery = {
      operationName: "getAllUnits",
      query: getAllUnitsQuery,
      variables: {
        test: "",
      },
    };
    const res = await apiCaller(graphqlQuery, "");
    setUnitsData(res.data.data.getAllUnits);
    setUnit(res.data.data.getAllUnits[0].id);
  };

  const getAllEmployees = async () => {
    const graphqlQuery = {
      operationName: "getAllEmployees",
      query: getAllEmployeesQuery,
      variables: {
        test: "",
      },
    };
    const res = await apiCaller(graphqlQuery, "");
    setEmployeesData(res.data.data.getAllEmployees);
    setEmployee(res.data.data.getAllEmployees[0].id);
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      if (unit.length !== 0 && employee.length !== 0) {
        setIsLoading(true);

        const graphqlQuery = {
          operationName: "addUnitMember",
          query: createUnitMemberQuery,
          variables: {
            id: uuidv4(),
            employeeId: employee,
            unitId: unit,
          },
        };
        const res = await apiCaller(graphqlQuery, "");
        if (res.data.data !== null) {
          navigate("/unitsmember/");
          setIsLoading(false);
        } else {
          if (
            res.data.errors[0].message !==
            'Expected Iterable, but did not find one for field "Mutation.createEmployee".'
          ) {
            alert(res.data.errors[0].message);
          } else {
            navigate("/unitsmember/");
          }
          setIsLoading(false);
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
                <label>Unit</label>
                <select
                  defaultValue={unit}
                  onChange={(e) => {
                    setUnit(e.target.value);
                  }}
                >
                  {unitsData.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.code}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="formInput">
                <label>Employee</label>
                <select
                  defaultValue={employee}
                  onChange={(e) => {
                    setEmployee(e.target.value);
                  }}
                >
                  {employeeData.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.firstName} {item.lastName}
                      </option>
                    );
                  })}
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

export default UnitsMemberAdd;
