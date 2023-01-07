import "./unitDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../UnitTableSource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllUnitsQuery } from "../../graphql/queries/getUnitsGraphql";
import { apiCaller } from "../../utils/axios-request-caller";

const UnitDatatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllUnits();
  }, [data]);

  const getAllUnits = async () => {
    const graphqlQuery = {
      operationName: "getAllUnits",
      query: getAllUnitsQuery,
      variables: {
        test: "",
      },
    };
    const res = await apiCaller(graphqlQuery, "");
    setData(res.data.data.getAllUnits);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/units/test" style={{ textDecoration: "none" }}>
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
        Units
        <Link to="/units/new" className="link">
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

export default UnitDatatable;
