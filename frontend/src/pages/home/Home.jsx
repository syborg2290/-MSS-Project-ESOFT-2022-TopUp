import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import AllUnitsTargeProgress from "../../components/featured/AllUnitsTargetCoverage";
import AllUnitSupliedMaterialCost from "../../components/featured/AllUnitSupliedMaterialCost";
import EmployeeTaskProgress from "../../components/featured/EmployeeTaskProgress";
import UnitTargeetProgress from "../../components/featured/UnitTargetCoverage";
import AllEmployeeTaskProgress from "../../components/featured/AllEmployeeTaskProgress";
import EmployeeRetention from "../../components/featured/EmployeeRetention";
import EmployeeReorderedMaterial from "../../components/featured/EmployeeReorderedMaterial";
import AllEmployeeReorderedMaterial from "../../components/featured/AllEmployeeReorderedMaterial";
import UnitSuppliedMaterialCost from "../../components/featured/UnitSuppliedMaterialCost";
import OveralIncome from "../../components/featured/OveralIncome";
import { getAllEmployeesReten1Query } from "../../graphql/queries/getEmployeeReten1Graphql";
import { apiCaller } from "../../utils/axios-request-caller";
import { useEffect, useState } from "react";
import { getAllEmployeesReten2Query } from "../../graphql/queries/getEmployeeReten2Graphql";

const Home = () => {
  const [widget1, setWidget1] = useState({});
  const [chart1, setChart1] = useState([]);
  useEffect(() => {
    getAllEmployeesRet1();
    getAllEmployeesRet2();
  }, [chart1, widget1]);

  const getAllEmployeesRet1 = async () => {
    const graphqlQuery = {
      operationName: "getAllEmployeesThatRetireInNextYear",
      query: getAllEmployeesReten1Query,
      variables: {
        test: "",
      },
    };
    const res = await apiCaller(graphqlQuery, "");
    if (res !== undefined) {
      setWidget1(res.data.data.getAllEmployeesThatRetireInNextYear);
    }
  };

  const getAllEmployeesRet2 = async () => {
    const graphqlQuery = {
      operationName: "getAllEmployeesThatRetireInNextYears",
      query: getAllEmployeesReten2Query,
      variables: {
        test: "",
      },
    };
    const res = await apiCaller(graphqlQuery, "");

    if (res !== undefined) {
      const data = [];
      const keys = Object.keys(
        JSON.parse(res.data.data.getAllEmployeesThatRetireInNextYears.ret)
      );
      const values = Object.values(
        JSON.parse(res.data.data.getAllEmployeesThatRetireInNextYears.ret)
      );
      for (var i = 0; values.length > i; i++) {
        const key = keys[i];
        const value = values[i];
        data.push({ year: key, age: value });
      }
      setChart1(data);
    }
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="emp" dataObj={widget1} />
          <Widget type="emp2" />
          <Widget type="emp3" />
          <Widget type="emp4" />
          <Widget type="emp5" />
          <Widget type="emp6" />
          <Widget type="emp7" />
          <Widget type="emp8" />
          <Widget type="emp9" />
          <Widget type="emp10" />
        </div>
        {chart1?.length > 0 ? (
          <div className="charts">
            <EmployeeRetention percentage={widget1.presentage} />
            <Chart
              title="EmployeeRetention Yearly Trend"
              aspect={4 / 1}
              chart1={chart1}
            />
          </div>
        ) : (
          <div className="charts"></div>
        )}
        <div className="charts">
          <EmployeeTaskProgress />
          <Chart title="Employee task Progress Monthly" aspect={4 / 1} />
        </div>
        <div className="charts">
          <AllEmployeeTaskProgress />
          <Chart title="All Employee Task Progress Monthly" aspect={4 / 1} />
        </div>
        <div className="charts">
          <UnitTargeetProgress />
          <Chart title="Unit Targeet Progress Monthly" aspect={4 / 1} />
        </div>
        <div className="charts">
          <AllUnitsTargeProgress />
          <Chart title="All Units Target Progress Monthly" aspect={4 / 1} />
        </div>
        <div className="charts">
          <EmployeeReorderedMaterial />
          <Chart title="Employee Reordered Material Monthly" aspect={4 / 1} />
        </div>
        <div className="charts">
          <AllEmployeeReorderedMaterial />
          <Chart
            title="All Employee Reordered Material Monthly"
            aspect={4 / 1}
          />
        </div>
        <div className="charts">
          <UnitSuppliedMaterialCost />
          <Chart title="Unit Supplied Material Cost Monthly" aspect={4 / 1} />
        </div>
        <div className="charts">
          <AllUnitSupliedMaterialCost />
          <Chart
            title="All Unit Suplied Material Cost Monthly"
            aspect={4 / 1}
          />
        </div>
        <div className="charts">
          <OveralIncome />
          <Chart title="Overal Income Monthly" aspect={4 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Home;
