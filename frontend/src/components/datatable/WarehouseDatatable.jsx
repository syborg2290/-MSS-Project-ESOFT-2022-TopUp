import "./warehouseDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../WarehouseDatatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllWarehouseInventroiesQuery } from "../../graphql/queries/getWarehouseInventoriesGraphql";
import { apiCaller } from "../../utils/axios-request-caller";

const WarehouseDatatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllWarehouse();
  }, [data]);

  const getAllWarehouse = async () => {
    const graphqlQuery = {
      operationName: "getAllWarehouse",
      query: getAllWarehouseInventroiesQuery,
      variables: {
        test: "",
      },
    };
    const res = await apiCaller(graphqlQuery, "");
    setData(res.data.data.getAllWarehouse);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/warehouse/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Warehouse
        <Link to="/warehouse/new" className="link">
          Add New
        </Link>
      </div>
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

export default WarehouseDatatable;
