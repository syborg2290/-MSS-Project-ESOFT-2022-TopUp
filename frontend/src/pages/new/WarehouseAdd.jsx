import "./warehouseAdd.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getAllMaterialsQuery } from "../../graphql/queries/getMaterialsGraphql";
import { apiCaller } from "../../utils/axios-request-caller";
import { createWarehouseInventoryQuery } from "../../graphql/mutations/createWarehouseInventoryGraphql";
import { useNavigate } from "react-router-dom";

const WarehouseAdd = ({ inputs, title }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [material, setMaterial] = useState("");
  const [qty, setQty] = useState(0);

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
    setData(res.data.data.getAllMaterials);
    setMaterial(res.data.data.getAllMaterials[0].id);
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      if (material.length !== 0 && qty !== 0) {
        setIsLoading(true);
        const graphqlQuery = {
          operationName: "addWarehouseInventory",
          query: createWarehouseInventoryQuery,
          variables: {
            id: uuidv4(),
            qty: qty,
            material: material,
          },
        };
        const res = await apiCaller(graphqlQuery, "");
        if (res.data.data !== null) {
          navigate("/warehouse/");
          setIsLoading(false);
        } else {
          if (
            res.data.errors[0].message !==
            'Expected Iterable, but did not find one for field "Mutation.createEmployee".'
          ) {
            alert(res.data.errors[0].message);
          } else {
            navigate("/warehouse/");
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
                <label>Material</label>
                <select
                  defaultValue={material}
                  onChange={(e) => {
                    setMaterial(e.target.value);
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
                <label>Qty</label>
                <input
                  type="number"
                  placeholder="QTY"
                  onChange={(e) => {
                    setQty(parseInt(e.target.value));
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

export default WarehouseAdd;
