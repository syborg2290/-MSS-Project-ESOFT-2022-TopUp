import "./subInventoryAdd.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUnitsQuery } from "../../graphql/queries/getUnitsGraphql";
import { getAllMaterialsQuery } from "../../graphql/queries/getMaterialsGraphql";
import { apiCaller } from "../../utils/axios-request-caller";
import { v4 as uuidv4 } from "uuid";
import { createInventoryQuery } from "../../graphql/mutations/createInventoryGraphql";

const SubInventoryAdd = ({ inputs, title }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [materialData, setMaterialData] = useState([]);
  const [unitData, setUnitData] = useState([]);
  const [qty, setQty] = useState(0);
  const [material, setMaterial] = useState("");
  const [unit, setUnit] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getAllMaterials();
    getAllUnits();
  }, [materialData, unitData]);

  const getAllMaterials = async () => {
    const graphqlQuery = {
      operationName: "getAllMaterials",
      query: getAllMaterialsQuery,
      variables: {
        test: "",
      },
    };
    const res = await apiCaller(graphqlQuery, "");
    setMaterialData(res.data.data.getAllMaterials);
    setMaterial(res.data.data.getAllMaterials[0].id);
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
      if (qty !== 0) {
        setIsLoading(true);
        const graphqlQuery = {
          operationName: "addInventory",
          query: createInventoryQuery,
          variables: {
            id: uuidv4(),
            unit: unit,
            qty: qty,
            material: material,
          },
        };
        const res = await apiCaller(graphqlQuery, "");
        if (res.data.data !== null) {
          navigate("/subinventory/");
          setIsLoading(false);
        } else {
          if (
            res.data.errors[0].message !==
            'Expected Iterable, but did not find one for field "Mutation.createEmployee".'
          ) {
            alert(res.data.errors[0].message);
          } else {
            navigate("/subinventory/");
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
                <label>Unit</label>
                <select
                  defaultValue={unit}
                  onChange={(e) => {
                    setUnit(e.target.value);
                  }}
                >
                  {unitData.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.code}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="formInput">
                <label>Qty</label>
                <input
                  type="number"
                  placeholder="QTY"
                  onChange={(e) => {
                    setQty(parseInt(e.target.value));
                  }}
                ></input>
              </div>
              <div className="formInput">
                <label>Material</label>
                <select
                  defaultValue={material}
                  onChange={(e) => {
                    setMaterial(e.target.value);
                  }}
                >
                  {materialData.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.name}
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

export default SubInventoryAdd;
