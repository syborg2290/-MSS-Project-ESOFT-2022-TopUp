import "./taskDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../tasktablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllTasksQuery } from "../../graphql/queries/getTasksGraphql";
import { apiCaller } from "../../utils/axios-request-caller";

const TaskDatatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllTasks();
  }, [data]);

  const getAllTasks = async () => {
    const graphqlQuery = {
      operationName: "getAllTasks",
      query: getAllTasksQuery,
      variables: {
        test: "",
      },
    };
    const res = await apiCaller(graphqlQuery, "");
    console.log(res);
    setData(res.data.data.getAllTasks);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/tasks/test" style={{ textDecoration: "none" }}>
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
        Tasks
        <Link to="/tasks/new" className="link">
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

export default TaskDatatable;
