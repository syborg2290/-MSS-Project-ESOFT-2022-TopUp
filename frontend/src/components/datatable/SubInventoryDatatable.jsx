import "./subinventoryDatatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { userColumns } from "../../SubInventoryTableSource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllInventroiesQuery } from "../../graphql/queries/getInventoriesGraphql";
import { apiCaller } from "../../utils/axios-request-caller";

const SubInventoryDatatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllInventroies();
  }, [data]);

  const getAllInventroies = async () => {
    const graphqlQuery = {
      operationName: "getAllInventory",
      query: getAllInventroiesQuery,
      variables: {
        test: "",
      },
    };
    const res = await apiCaller(graphqlQuery, "");
    setData(res.data.data.getAllInventory);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/subinventory/test" style={{ textDecoration: "none" }}>
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
        Sub Inventory
        <Link to="/subinventory/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        components={{ Toolbar: GridToolbar }}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default SubInventoryDatatable;
