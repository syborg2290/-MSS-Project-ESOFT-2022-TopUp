import Home from "./pages/home/Home";
import UserList from "./pages/list/UserList";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tasklist from "./pages/list/Tasklist"
import TaskView from "./pages/single/TaskView";
import TaskAdd from "./pages/new/TaskAdd"
import WarehouseList from "./pages/list/WarehouseList";
import WarehouseView from "./pages/single/WarehouseView";
import WarehouseAdd from "./pages/new/WarehouseAdd";
import OrdersList from "./pages/list/OrdersList";
import OrdersView from "./pages/single/OrdersView";
import OrdersAdd from "./pages/new/OrdersAdd";
import MaterialsList from "./pages/list/MaterialsList";
import MaterialsView from "./pages/single/MaterialsView";
import MaterialsAdd from "./pages/new/MaterialsAdd";
import LoginPage from "./pages/login/Login";
import EmployeeView from "./pages/single/EmployeeView";
import EmployeeAdd from "./pages/new/EmployeeAdd";
import EmployeeList from "./pages/list/EmployeeList";
import PrototypeList from "./pages/list/PrototypeList";
import PrototypeView from "./pages/single/PrototypeView";
import PrototypeAdd from "./pages/new/PrototypeAdd";
import ProjectList from "./pages/list/ProjectList";
import ProjectView from "./pages/single/ProjectView";
import ProjectAdd from "./pages/new/ProjectAdd";
import UnitLIst from "./pages/list/UnitList";
import UnitList from "./pages/list/UnitList";
import UnitView from "./pages/single/UnitView";
import UnitAdd from "./pages/new/UnitAdd";
import UnitsMemeberList from "./pages/list/UnitsMemeberList";
import UnitsMemberView from "./pages/single/UnitsMemberView";
import UnitsMemberAdd from "./pages/new/UnitsMemberAdd";
import SubInvenotryList from "./pages/list/SubInvenotryList";
import SubInventoryView from "./pages/single/SubInventoryView";
import SubInventoryAdd from "./pages/new/SubInventoryAdd";
import InventoryRequesList from "./pages/list/InventoryRequesList";
import InventoryRwqueestView from "./pages/single/InventoryRwqueestView";
import InventroyRequestAdd from "./pages/new/InventroyRequestAdd";
import RequestRowMaterials from "./pages/single/RequestRowMaterials";

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
          <Route path="/">
            <Route index element={<LoginPage/>}/>
            <Route path="home">
              <Route index element={<Home/>} />
            </Route>
            <Route path="users">
              <Route index element={<UserList/>} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New title="Add new Users" />}
              />
            </Route>
            <Route path="login">
              <Route index element={<LoginPage/>} />
            </Route>
            <Route path="materials">
              <Route index element={<MaterialsList/>} />
              <Route path=":materialsId" element={<MaterialsView/>} />
              <Route
                path="new"
                element={<MaterialsAdd title="Add new Materials"/>}
              />
            </Route>
            <Route path="tasks">
              <Route index element={<Tasklist/>} />
              <Route path=":taskID" element={<TaskView/>} />
              <Route
                path="new"
                element={<TaskAdd title="Add new Task"/>}
              />
               <Route
                path="rowmaterials"
                element={<RequestRowMaterials/>}
              />
            </Route>
            <Route path="warehouse">
              <Route index element={<WarehouseList/>} />
              <Route path=":warehouseID" element={<WarehouseView/>} />
              <Route
                path="new"
                element={<WarehouseAdd title="Add new warehouse"/>}
              />
            </Route>
            <Route path="orders">
              <Route index element={<OrdersList/>} />
              <Route path=":warehouseID" element={<OrdersView/>} />
              <Route
                path="new"
                element={<OrdersAdd title="Add new Orders"/>}
              />
            </Route>
            <Route path="employee">
              <Route index element={<EmployeeList/>} />
              <Route path=":employeeID" element={<EmployeeView/>} />
              <Route
                path="new"
                element={<EmployeeAdd title="Add new Employee"/>}
              />
            </Route>
            <Route path="prototype">
              <Route index element={<PrototypeList/>} />
              <Route path=":employeeID" element={<PrototypeView/>} />
              <Route
                path="new"
                element={<PrototypeAdd title="Add new Prototype"/>}
              />
            </Route>
            <Route path="projects">
              <Route index element={<ProjectList/>} />
              <Route path=":projectID" element={<ProjectView/>} />
              <Route
                path="new"
                element={<ProjectAdd title="Add new Project"/>}
              />
            </Route>
            <Route path="units">
              <Route index element={<UnitList/>} />
              <Route path=":unitID" element={<UnitView/>} />
              <Route
                path="new"
                element={<UnitAdd title="Add new Units"/>}
              />
            </Route>
            <Route path="unitsmember">
              <Route index element={<UnitsMemeberList/>} />
              <Route path=":unitmemberID" element={<UnitsMemberView/>} />
              <Route
                path="new"
                element={<UnitsMemberAdd title="Add new UnitsMember"/>}/>
            </Route>
            <Route path="subinventory">
              <Route index element={<SubInvenotryList/>} />
              <Route path=":subinventoryID" element={<SubInventoryView/>} />
              <Route path=":rowmaterialID" element={<RequestRowMaterials/>} />
              <Route
                path="new"
                element={<SubInventoryAdd title="Add new subInventory"/>}/>
            </Route>
            <Route path="inventoryrequest">
              <Route index element={<InventoryRequesList/>} />
              <Route path=":inventoryrequestID" element={<InventoryRwqueestView/>} />
              <Route
                path="new"
                element={<InventroyRequestAdd title="Add new invenotry request"/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;