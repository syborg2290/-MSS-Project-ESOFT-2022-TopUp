import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import WarehouseDatatable from "../../components/datatable/WarehouseDatatable"

const WarehouseList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
      <WarehouseDatatable/>
      </div>
    </div>
  )
}

export default WarehouseList;