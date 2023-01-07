import "./prototypeDatatable.scss"
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { userColumns } from "../../prototypeTableSource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllPrototypesQuery } from "../../graphql/queries/getPrototypesGraphql";
import { apiCaller } from "../../utils/axios-request-caller";

const PrototypeDatatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllPrototypes();
  }, [data]);

  const getAllPrototypes = async () => {
    const graphqlQuery = {
      operationName: "getAllPrototypes",
      query: getAllPrototypesQuery,
      variables: {
        test: "",
      },
    };
    const res = await apiCaller(graphqlQuery, "");
    setData(res.data.data.getAllPrototypes);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/prototype/test" style={{ textDecoration: "none" }}>
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
        Prototype
        <Link to="/prototype/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        components={{ Toolbar: GridToolbar }}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default PrototypeDatatable;
