import "./unitsMemberDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../UnitsMemberTableSource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllUnitMembersQuery } from "../../graphql/queries/getUnitMembersGraphql";
import { apiCaller } from "../../utils/axios-request-caller";

const UnitsMemberDatatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllUnitMemberss();
  }, [data]);

  const getAllUnitMemberss = async () => {
    const graphqlQuery = {
      operationName: "getAllUnitMembers",
      query: getAllUnitMembersQuery,
      variables: {
        test: "",
      },
    };
    const res = await apiCaller(graphqlQuery, "");
    setData(res.data.data.getAllUnitMembers);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/unitsmember/test" style={{ textDecoration: "none" }}>
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
        UnitsMembers
        <Link to="/unitsmember/new" className="link">
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

export default UnitsMemberDatatable;
