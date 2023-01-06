import "./Userdatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../Userdatatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllUsersQuery } from "../../graphql/queries/getUsersGraphql";
import { apiCaller } from "../../utils/axios-request-caller";

const UserDatatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, [data]);

  const getAllUsers = async () => {
    const graphqlQuery = {
      operationName: "getAllUsers",
      query: getAllUsersQuery,
      variables: {
        test: "",
      },
    };
    const res = await apiCaller(graphqlQuery, "");
    setData(res.data.data.getAllUsers);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
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
        Users
        <Link to="/users/new" className="link">
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

export default UserDatatable;
