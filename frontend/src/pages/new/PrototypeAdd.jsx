import "./prototypeAdd.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { apiCaller } from "../../utils/axios-request-caller";
import { getAllMaterialsQuery } from "../../graphql/queries/getMaterialsGraphql";
import { useNavigate } from "react-router-dom";
import { createPrototypeQuery } from "../../graphql/mutations/createPrototypeGraphql";

const PrototypeAdd = ({ inputs, title }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [duration, setDuration] = useState(0);
  const [durationUnit, setDurationUnit] = useState("days");
  const [cost, setCost] = useState(0);
  const [material1, setMaterial1] = useState("");
  const [material2, setMaterial2] = useState("");
  const [material3, setMaterial3] = useState("");
  const [material4, setMaterial4] = useState("");
  const [material5, setMaterial5] = useState("");
  const [material6, setMaterial6] = useState("");

  const [material1Name, setMaterial1Name] = useState("");
  const [material2Name, setMaterial2Name] = useState("");
  const [material3Name, setMaterial3Name] = useState("");
  const [material4Name, setMaterial4Name] = useState("");
  const [material5Name, setMaterial5Name] = useState("");
  const [material6Name, setMaterial6Name] = useState("");

  const [qty1, setQty1] = useState(0);
  const [qty2, setQty2] = useState(0);
  const [qty3, setQty3] = useState(0);
  const [qty4, setQty4] = useState(0);
  const [qty5, setQty5] = useState(0);
  const [qty6, setQty6] = useState(0);

  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getAllMaterials();
  }, [data]);

  const getAllMaterials = async () => {
    const graphqlQuery = {
      operationName: "getAllMaterials",
      query: getAllMaterialsQuery,
      variables: {
        test: "",
      },
    };
    const res = await apiCaller(graphqlQuery, "");
    setMaterial1(res.data.data.getAllMaterials[0].id);
    setMaterial1Name(res.data.data.getAllMaterials[0].name);
    setData(res.data.data.getAllMaterials);
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      if (
        name.length !== 0 &&
        material1.length !== 0 &&
        material1Name.length !== 0 &&
        qty1 !== 0 &&
        duration !== 0
      ) {
        setIsLoading(true);

        const materialList = {
          Material1: {
            id: material1,
            name: material1Name,
            qty: qty1,
          },
          Material2: {
            id: material2,
            name: material2Name,
            qty: qty2,
          },
          Material3: {
            id: material3,
            name: material3Name,
            qty: qty3,
          },
          Material4: {
            id: material4,
            name: material4Name,
            qty: qty4,
          },
          Material5: {
            id: material5,
            name: material5Name,
            qty: qty5,
          },
          Material6: {
            id: material6,
            name: material6Name,
            qty: qty6,
          },
        };

        const graphqlQuery = {
          operationName: "createPrototype",
          query: createPrototypeQuery,
          variables: {
            id: uuidv4(),
            name: name,
            avg_duration: duration,
            time_unit: durationUnit,
            avg_cost: cost,
            materials: JSON.stringify(materialList),
          },
        };
        const res = await apiCaller(graphqlQuery, "");
        if (res.data.data !== null) {
          navigate("/prototype/");
          setIsLoading(false);
        } else {
          if (
            res.data.errors[0].message !==
            'Expected Iterable, but did not find one for field "Mutation.createEmployee".'
          ) {
            alert(res.data.errors[0].message);
          } else {
            navigate("/prototype/");
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
                <label>PrototypeName</label>
                <input
                  type="text"
                  placeholder="PrototypeName"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></input>
              </div>
              <div className="formInput">
                <label>Estimate Duration</label>
                <input
                  type="text"
                  placeholder="Estimate Duration"
                  onChange={(e) => {
                    setDuration(parseInt(e.target.value));
                  }}
                ></input>
              </div>
              <div className="formInput">
                <label>Duration Unit</label>
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
                <label>Estimate Cost(AD)</label>
                <input
                  type="number"
                  placeholder="Estimate Cost(AD)"
                  onChange={(e) => {
                    setCost(parseInt(e.target.value));
                  }}
                ></input>
              </div>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <div className="formInput" style={{ margin: "5px" }}>
                      <label>Material 1</label>
                      <select
                        defaultValue={material1}
                        onChange={(e) => {
                          setMaterial1(e.target.value);
                          var newArray = data.filter(function (el) {
                            return el.id === e.target.value;
                          });
                          setMaterial1Name(newArray[0].name);
                        }}
                      >
                        {data.map((item, index) => {
                          return (
                            <option key={index} value={item.id}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="formInput">
                      <label>QTY 1</label>
                      <input
                        type="number"
                        placeholder="QTY 1"
                        onChange={(e) => {
                          setQty1(parseInt(e.target.value));
                        }}
                      ></input>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <div className="formInput" style={{ margin: "5px" }}>
                      <label>Material 2</label>
                      <select
                        defaultValue={material2}
                        onChange={(e) => {
                          setMaterial2(e.target.value);
                          var newArray = data.filter(function (el) {
                            return el.id === e.target.value;
                          });
                          setMaterial2Name(newArray[0].name);
                        }}
                      >
                        {data.map((item, index) => {
                          return (
                            <option key={index} value={item.id}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="formInput">
                      <label>QTY 2</label>
                      <input
                        type="number"
                        placeholder="QTY 2"
                        onChange={(e) => {
                          setQty2(parseInt(e.target.value));
                        }}
                      ></input>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <div className="formInput" style={{ margin: "5px" }}>
                      <label>Material 3</label>
                      <select
                        defaultValue={material3}
                        onChange={(e) => {
                          setMaterial3(e.target.value);
                          var newArray = data.filter(function (el) {
                            return el.id === e.target.value;
                          });
                          setMaterial3Name(newArray[0].name);
                        }}
                      >
                        {data.map((item, index) => {
                          return (
                            <option key={index} value={item.id}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="formInput">
                      <label>QTY 3</label>
                      <input
                        type="number"
                        placeholder="QTY 3"
                        onChange={(e) => {
                          setQty3(parseInt(e.target.value));
                        }}
                      ></input>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <div className="formInput" style={{ margin: "5px" }}>
                      <label>Material 4</label>
                      <select
                        defaultValue={material4}
                        onChange={(e) => {
                          setMaterial4(e.target.value);
                          var newArray = data.filter(function (el) {
                            return el.id === e.target.value;
                          });
                          setMaterial4Name(newArray[0].name);
                        }}
                      >
                        {data.map((item, index) => {
                          return (
                            <option key={index} value={item.id}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="formInput">
                      <label>QTY 4</label>
                      <input
                        type="number"
                        placeholder="QTY 4"
                        onChange={(e) => {
                          setQty4(parseInt(e.target.value));
                        }}
                      ></input>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <div className="formInput" style={{ margin: "5px" }}>
                      <label>Material 5</label>
                      <select
                        defaultValue={material5}
                        onChange={(e) => {
                          setMaterial5(e.target.value);
                          var newArray = data.filter(function (el) {
                            return el.id === e.target.value;
                          });
                          setMaterial5Name(newArray[0].name);
                        }}
                      >
                        {data.map((item, index) => {
                          return (
                            <option key={index} value={item.id}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="formInput">
                      <label>QTY 5</label>
                      <input
                        type="number"
                        placeholder="QTY 5"
                        onChange={(e) => {
                          setQty5(parseInt(e.target.value));
                        }}
                      ></input>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <div className="formInput" style={{ margin: "5px" }}>
                      <label>Material 6</label>
                      <select
                        defaultValue={material6}
                        onChange={(e) => {
                          setMaterial6(e.target.value);
                          var newArray = data.filter(function (el) {
                            return el.id === e.target.value;
                          });
                          setMaterial6Name(newArray[0].name);
                        }}
                      >
                        {data.map((item, index) => {
                          return (
                            <option key={index} value={item.id}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="formInput">
                      <label>QTY 6</label>
                      <input
                        type="number"
                        placeholder="QTY 6"
                        onChange={(e) => {
                          setQty6(parseInt(e.target.value));
                        }}
                      ></input>
                    </div>
                  </div>
                </Grid>
              </Grid>

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

export default PrototypeAdd;
