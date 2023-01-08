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
import Chart2 from "../../components/chart/Chart2";
import Chart3 from "../../components/chart/Chart3";
import Chart4 from "../../components/chart/Chart4";

const Home = () => {
  const [widget1, setWidget1] = useState({});
  const [chart1, setChart1] = useState([]);
  const [widget2, setWidget2] = useState({});
  const [chart2, setChart2] = useState([]);
  const [widget3, setWidget3] = useState({});
  const [chart3, setChart3] = useState([]);
  const [widget4, setWidget4] = useState({});
  const [chart4, setChart4] = useState([]);
  const [widget5, setWidget5] = useState({});
  const [chart5, setChart5] = useState([]);
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
          <Widget type="emp2" dataObj={widget2} />
          <Widget type="emp3" dataObj={widget3} />
          <Widget type="emp4" dataObj={widget4} />
          <Widget type="emp5" dataObj={widget5} />
          <Widget type="emp6" dataObj={widget5} />
          <Widget type="emp7" />
          <Widget type="emp8" />
          <Widget type="emp9" />
          <Widget type="emp10" />
        </div>

        <div className="charts">
          <EmployeeRetention percentage={widget1.presentage} />
          <Chart
            chart1={chart1}
            title="EmployeeRetention Yearly Trend"
            aspect={4 / 1}
          />
        </div>

        <div className="charts">
          <EmployeeTaskProgress />
          <Chart2 title="Employee task Progress Monthly" aspect={4 / 1} />
        </div>
        <div className="charts">
          <AllEmployeeTaskProgress />
          <Chart3 title="All Employee Task Progress Monthly" aspect={4 / 1} />
        </div>
        <div className="charts">
          <UnitTargeetProgress />
          <Chart4 title="Unit Targeet Progress Monthly" aspect={4 / 1} />
        </div>
        <div className="charts">
          <AllUnitsTargeProgress />
          <Chart4 title="All Units Target Progress Monthly" aspect={4 / 1} />
        </div>
        <div className="charts">
          <EmployeeReorderedMaterial />
          <Chart4 title="Employee Reordered Material Monthly" aspect={4 / 1} />
        </div>
        <div className="charts">
          <AllEmployeeReorderedMaterial />
          <Chart4
            title="All Employee Reordered Material Monthly"
            aspect={4 / 1}
          />
        </div>
        <div className="charts">
          <UnitSuppliedMaterialCost />
          <Chart4 title="Unit Supplied Material Cost Monthly" aspect={4 / 1} />
        </div>
        <div className="charts">
          <AllUnitSupliedMaterialCost />
          <Chart4
            title="All Unit Suplied Material Cost Monthly"
            aspect={4 / 1}
          />
        </div>
        <div className="charts">
          <OveralIncome />
          <Chart4 title="Overal Income Monthly" aspect={4 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Home;
