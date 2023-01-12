import "./employeedatatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { userColumns } from "../../EmployeeTableSource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllEmployeesQuery } from "../../graphql/queries/getEmployeeGraphql";
import { apiCaller } from "../../utils/axios-request-caller";
import { updateLeavesQuery } from "../../graphql/mutations/updateLeavesGraphql";
import { Button } from "@mui/material";

const EmployeeDatatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllEmployees();
  }, [data]);

  const getAllEmployees = async () => {
    const graphqlQuery = {
      operationName: "getAllEmployees",
      query: getAllEmployeesQuery,
      variables: {
        test: "",
      },
    };
    const res = await apiCaller(graphqlQuery, "");
    setData(res.data.data.getAllEmployees);
  };

  const getLeaveFunc = async (id) => {
    const graphqlQuery = {
      operationName: "employeeLeavesUpdate",
      query: updateLeavesQuery,
      variables: {
        id: id,
      },
    };
    const res = await apiCaller(graphqlQuery, "");
    if (res.data.data !== null) {
      window.location.reload();
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/employee/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>

            <Button
              onClick={() => {
                getLeaveFunc(params.row.id);
              }}
            >
              Get A Leave
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Employee
        <Link to="/employee/new" className="link">
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

export default EmployeeDatatable;
