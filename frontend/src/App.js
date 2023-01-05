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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;