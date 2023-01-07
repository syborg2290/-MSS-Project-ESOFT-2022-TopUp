import "./TaskAdd.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { apiCaller } from "../../utils/axios-request-caller";
import { getAllProjectsQuery } from "../../graphql/queries/getProjectsGraphql";
import { getAllUnitsQuery } from "../../graphql/queries/getUnitsGraphql";
import { getAllEmployeesQuery } from "../../graphql/queries/getEmployeeGraphql";
import { getAllPrototypesQuery } from "../../graphql/queries/getPrototypesGraphql";
import { createTaskQuery } from "../../graphql/mutations/createTaskGraphql";

const TaskAdd = ({ inputs, title }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [taskTitle, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [induvidualOrUnit, setInduvidualOrUnit] = useState("individual");
  const [project, setProject] = useState("");
  const [unit, setUnit] = useState("");
  const [employee, setEmployee] = useState("");
  const [prototype, setPrototype] = useState("");
  const [startingTime, setStartingTime] = useState("");
  const [finishedTime, setFinishedTime] = useState("");

  const [projectdata, setProjectData] = useState([]);
  const [unitdata, setUnitData] = useState([]);
  const [employeedata, setEmployeeData] = useState([]);
  const [prototypedata, setPrototypeData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getAllProjects();
    getAllUnits();
    getAllEmployees();
    getAllPrototypes();
  }, [projectdata, unitdata, employeedata, prototypedata]);

  const getAllProjects = async () => {
    const graphqlQuery = {
      operationName: "getAllProjects",
      query: getAllProjectsQuery,
      variables: {
        test: "",
      },
    };
    const res = await apiCaller(graphqlQuery, "");
    setProjectData(res.data.data.getAllProjects);
    setProject(res.data.data.getAllProjects[0].id);
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
    setEmployeeData(res.data.data.getAllEmployees);
    setEmployee(res.data.data.getAllEmployees[0].id);
  };

  const getAllPrototypes = async () => {
    const graphqlQuery = {
      operationName: "getAllPrototypes",
      query: getAllPrototypesQuery,
      variables: {
        test: "",
      },
    };
    const res = await apiCaller(graphqlQuery, "");
    setPrototypeData(res.data.data.getAllPrototypes);
    setPrototype(res.data.data.getAllPrototypes[0].id);
  };

  const getAllUnits = async () => {
    const graphqlQuery = {
      operationName: "getAllUnits",
      query: getAllUnitsQuery,
      variables: {
        test: "",
      },
    };
    const res = await apiCaller(graphqlQuery, "");
    setUnitData(res.data.data.getAllUnits);
    setUnit(res.data.data.getAllUnits[0].id);
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      if (
        taskTitle.length !== 0 &&
        supervisor.length !== 0 &&
        startingTime.length !== 0 &&
        finishedTime.length !== 0
      ) {
        setIsLoading(true);
        const graphqlQuery = {
          operationName: "addTask",
          query: createTaskQuery,
          variables: {
            id: uuidv4(),
            title: taskTitle,
            description: description,
            taskstatus: "pending",
            progress: 0,
            supervisor: supervisor,
            induvidualOrUnit: induvidualOrUnit,
            project: project,
            unit: unit,
            employee: employee,
            prototype: prototype,
            start_time: startingTime,
            finished_time: finishedTime,
          },
        };
        const res = await apiCaller(graphqlQuery, "");
        if (res.data.data !== null) {
          navigate("/tasks/");
          setIsLoading(false);
        } else {
          if (
            res.data.errors[0].message !==
            'Expected Iterable, but did not find one for field "Mutation.createEmployee".'
          ) {
            alert(res.data.errors[0].message);
          } else {
            navigate("/tasks/");
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
                <label>Title</label>
                <input
                  type="text"
                  placeholder="Title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                ></input>
              </div>
              <div className="formInput">
                <label>Description</label>
                <input
                  type="text"
                  placeholder="Description"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                ></input>
              </div>
              <div className="formInput">
                <label>Supervisor</label>
                <input
                  type="text"
                  placeholder="Supervisor"
                  onChange={(e) => {
                    setSupervisor(e.target.value);
                  }}
                ></input>
              </div>
              <div className="formInput">
                <label>Induvidual Or Unit</label>
                <select
                  defaultValue={induvidualOrUnit}
                  onChange={(e) => {
                    setInduvidualOrUnit(e.target.value);
                  }}
                >
                  <option value="individual">Individual</option>
                  <option value="unit">Unit</option>
                </select>
              </div>
              <div className="formInput">
                <label>Project</label>
                <select
                  defaultValue={project}
                  onChange={(e) => {
                    setProject(e.target.value);
                  }}
                >
                  {projectdata.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.title}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="formInput">
                <label>Unit</label>
                <select
                  defaultValue={unit}
                  onChange={(e) => {
                    setUnit(e.target.value);
                  }}
                >
                  {unitdata.map((item, index) => {
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
                  {employeedata.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.firstName} {item.lastName}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="formInput">
                <label>Prototype</label>
                <select
                  defaultValue={prototype}
                  onChange={(e) => {
                    setPrototype(e.target.value);
                  }}
                >
                  {prototypedata.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="formInput">
                <label>Start Time</label>
                <input
                  type="date"
                  placeholder="Start Time"
                  onChange={(e) => {
                    setStartingTime(e.target.value);
                  }}
                ></input>
              </div>
              <div className="formInput">
                <label>Finished Time</label>
                <input
                  type="date"
                  placeholder="Finished Time"
                  onChange={(e) => {
                    setFinishedTime(e.target.value);
                  }}
                ></input>
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

export default TaskAdd;
