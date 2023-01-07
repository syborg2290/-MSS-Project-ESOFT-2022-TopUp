import "./projectDatatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { userColumns } from "../../ProjectTableSource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProjectsQuery } from "../../graphql/queries/getProjectsGraphql";
import { apiCaller } from "../../utils/axios-request-caller";

const ProjectDatatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllProjects();
  }, [data]);

  const getAllProjects = async () => {
    const graphqlQuery = {
      operationName: "getAllProjects",
      query: getAllProjectsQuery,
      variables: {
        test: "",
      },
    };
    const res = await apiCaller(graphqlQuery, "");
    setData(res.data.data.getAllProjects);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/projects/test" style={{ textDecoration: "none" }}>
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
        Projects
        <Link to="/projects/new" className="link">
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

export default ProjectDatatable;
