import "./InventoryRequestDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../inventoryrequesttablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllInventoryRequestQuery } from "../../graphql/queries/getInventoryRequestsGraphql";
import { apiCaller } from "../../utils/axios-request-caller";

const InventoryRequestDatatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllInventroyReq();
  }, [data]);

  const getAllInventroyReq = async () => {
    const graphqlQuery = {
      operationName: "getAllWarehouseRe",
      query: getAllInventoryRequestQuery,
      variables: {
        test: "",
      },
    };
    const res = await apiCaller(graphqlQuery, "");
    setData(res.data.data.getAllWarehouseRe);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to="/inventoryrequest/test"
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">Inventory Requests</div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default InventoryRequestDatatable;
