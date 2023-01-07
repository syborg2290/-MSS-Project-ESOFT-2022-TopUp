import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/UnitSuppliedMaterialCost";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import UnitTaskProgress from "../../components/featured/AllEmployeeTaskProgress";
import AllUnitsTargeProgress from "../../components/featured/AllUnitsTargetCoverage";
import AllUnitSupliedMaterialCost from "../../components/featured/AllUnitSupliedMaterialCost";
import EmployeeReputation from "../../components/featured/EmployeeRetention";
import EmployeeTaskProgress from "../../components/featured/EmployeeTaskProgress";
import UnitTargeetProgress from "../../components/featured/UnitTargetCoverage";
import AllEmployeeTaskProgress from "../../components/featured/AllEmployeeTaskProgress";
import EmployeeRetention from "../../components/featured/EmployeeRetention";
import EmployeeReorderedMaterial from "../../components/featured/EmployeeReorderedMaterial";
import AllEmployeeReorderedMaterial from "../../components/featured/AllEmployeeReorderedMaterial";
import UnitSuppliedMaterialCost from "../../components/featured/UnitSuppliedMaterialCost";
import OveralIncome from "../../components/featured/OveralIncome";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="emp"/>
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
        <div className="charts">
          <EmployeeRetention/>
          <Chart title="EmployeeRetention Monthly" aspect={4/ 1} />
        </div>
        <div className="charts">
          <EmployeeTaskProgress/>
          <Chart title="Employee task Progress Monthly" aspect={4/ 1} />
        </div>
        <div className="charts">
          <AllEmployeeTaskProgress/>
          <Chart title="All Employee Task Progress Monthly" aspect={4/ 1} />
        </div>
        <div className="charts">
          <UnitTargeetProgress/>
          <Chart title="Unit Targeet Progress Monthly" aspect={4/ 1} />
        </div>
        <div className="charts">
          <AllUnitsTargeProgress/>
          <Chart title="All Units Target Progress Monthly" aspect={4/ 1} />
        </div>
        <div className="charts">
          <EmployeeReorderedMaterial/>
          <Chart title="Employee Reordered Material Monthly" aspect={4/ 1} />
        </div>
        <div className="charts">
          <AllEmployeeReorderedMaterial/>
          <Chart title="All Employee Reordered Material Monthly" aspect={4/ 1} />
        </div>
        <div className="charts">
          <UnitSuppliedMaterialCost/>
          <Chart title="Unit Supplied Material Cost Monthly" aspect={4/ 1} />
        </div>
        <div className="charts">
          <AllUnitSupliedMaterialCost/>
          <Chart title="All Unit Suplied Material Cost Monthly" aspect={4/ 1} />
        </div>
        <div className="charts">
          <OveralIncome/>
          <Chart title="Overal Income Monthly" aspect={4/ 1} />
        </div>
      </div>
    </div>
  );
};

export default Home;
