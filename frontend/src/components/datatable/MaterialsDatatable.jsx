import "./materialsDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../MaterialsTablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllMaterialsQuery } from "../../graphql/queries/getMaterialsGraphql";
import { apiCaller } from "../../utils/axios-request-caller";

const MaterialsDatatable = () => {
  const [data, setData] = useState([]);

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
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/materials/test" style={{ textDecoration: "none" }}>
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
        Materials
        <Link to="/materials/new" className="link">
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

export default MaterialsDatatable;
