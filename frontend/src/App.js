import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import UserList from "./pages/list/UserList";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import ProductAdd from "./pages/new/ProductAdd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { productInputs, taskInputs, userInputs } from "./formSource";
import ProductList from "./pages/list/ProductList";
import Tasklist from "./pages/list/Tasklist"
import ProductView from "./pages/single/ProductView";
import TaskView from "./pages/single/TaskView";
import TaskAdd from "./pages/new/TaskAdd"
import WarehouseList from "./pages/list/WarehouseList";
import WarehouseView from "./pages/single/WarehouseView";
import WarehouseAdd from "./pages/new/WarehouseAdd";
function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<UserList/>} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New title="Add new Users" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<ProductList/>} />
              <Route path=":productId" element={<ProductView/>} />
              <Route
                path="new"
                element={<ProductAdd title="Add new Product"/>}
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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
