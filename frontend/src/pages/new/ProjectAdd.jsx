import "./projectAdd.scss";
import { v4 as uuidv4 } from "uuid";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProjectQuery } from "../../graphql/mutations/createProjectGraphql";
import { apiCaller } from "../../utils/axios-request-caller";

const ProjectAdd = ({ inputs, title }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");
  const [factory, setFactory] = useState("factory1");
  const [description, setDescription] = useState("");
  const [client, setClient] = useState("");
  const [budget, setBudget] = useState(0);
  const [duration, setDuration] = useState(0);
  const [durationUnit, setDurationUnit] = useState("days");
  const [startingDate, setStartingDate] = useState("");

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      if (
        projectTitle.length !== 0 &&
        description.length !== 0 &&
        client.length !== 0 &&
        startingDate.length !== 0
      ) {
        setIsLoading(true);
        const graphqlQuery = {
          operationName: "createProject",
          query: createProjectQuery,
          variables: {
            id: uuidv4(),
            title: projectTitle,
            factory: factory,
            description: description,
            client: client,
            estimation_budget: budget,
            estimation_duration: duration,
            duration_unit: durationUnit,
            starting_date: startingDate,
          },
        };
        const res = await apiCaller(graphqlQuery, "");
        if (res.data.data !== null) {
          navigate("/projects/");
          setIsLoading(false);
        } else {
          if (
            res.data.errors[0].message !==
            'Expected Iterable, but did not find one for field "Mutation.createEmployee".'
          ) {
            alert(res.data.errors[0].message);
          } else {
            navigate("/projects/");
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
                <label>Title</label>
                <input
                  type="text"
                  placeholder="Title"
                  onChange={(e) => {
                    setProjectTitle(e.target.value);
                  }}
                ></input>
              </div>
              <div className="formInput">
                <label>Factory</label>
                <select
                  defaultValue={factory}
                  onChange={(e) => {
                    setFactory(e.target.value);
                  }}
                >
                  <option value="factory1">Factory 1</option>
                  <option value="factory2">Factory 2</option>
                  <option value="factory3">Factory 3</option>
                </select>
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
                <label>Client</label>
                <input
                  type="text"
                  placeholder="Client"
                  onChange={(e) => {
                    setClient(e.target.value);
                  }}
                ></input>
              </div>
              <div className="formInput">
                <label>Budget(AD)</label>
                <input
                  type="number"
                  placeholder="Budget(AD)"
                  onChange={(e) => {
                    setBudget(parseInt(e.target.value));
                  }}
                ></input>
              </div>
              <div className="formInput">
                <label>Estimation Duration</label>
                <input
                  type="number"
                  placeholder="Estimation Duration"
                  onChange={(e) => {
                    setDuration(parseInt(e.target.value));
                  }}
                ></input>
              </div>
              <div className="formInput">
                <label>Duration unit</label>
                <select
                  defaultValue={durationUnit}
                  onChange={(e) => {
                    setDurationUnit(e.target.value);
                  }}
                >
                  <option value="days">Days</option>
                  <option value="months">Months</option>
                  <option value="years">Years</option>
                </select>
              </div>
              <div className="formInput">
                <label>Starting Date</label>
                <input
                  type="date"
                  placeholder="Starting Date"
                  required={true}
                  onChange={(e) => {
                    setStartingDate(e.target.value);
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

export default ProjectAdd;
