import "./MaterialsAdd.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { apiCaller } from "../../utils/axios-request-caller";
import { createMaterialQuery } from "../../graphql/mutations/createMaterialGraphql";

const MaterialsAdd = ({ inputs, title }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [measurementUnit, setMeasurementUnit] = useState("");
  const [costPerUnit, setCostPerUnit] = useState(0);

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      if (
        name.length !== 0 &&
        description.length !== 0 &&
        measurementUnit.length !== 0 &&
        costPerUnit !== 0
      ) {
        setIsLoading(true);
        const graphqlQuery = {
          operationName: "createMaterial",
          query: createMaterialQuery,
          variables: {
            id: uuidv4(),
            name: name,
            description: description,
            measurement_unit: measurementUnit,
            cost_pre_unit: costPerUnit,
          },
        };
        const res = await apiCaller(graphqlQuery, "");
        if (res.data.data !== null) {
          navigate("/materials/");
          setIsLoading(false);
        } else {
          if (
            res.data.errors[0].message !==
            'Expected Iterable, but did not find one for field "Mutation.createEmployee".'
          ) {
            alert(res.data.errors[0].message);
          } else {
            navigate("/materials/");
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
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  onChange={(e) => {
                    setName(e.target.value);
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
                <label>Measurement Unit</label>
                <input
                  type="text"
                  placeholder="Measurement Unit"
                  onChange={(e) => {
                    setMeasurementUnit(e.target.value);
                  }}
                ></input>
              </div>
              <div className="formInput">
                <label>Cost Per Unit(AD)</label>
                <input
                  type="text"
                  placeholder="Cost Per Unit(AD)"
                  onChange={(e) => {
                    setCostPerUnit(parseInt(e.target.value));
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

export default MaterialsAdd;
