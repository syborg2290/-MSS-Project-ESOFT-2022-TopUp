import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import InventoryRequestDatatable from "../../components/datatable/InventoryRequestDatatable"

const InventoryRequesList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
      <InventoryRequestDatatable/>
      </div>
    </div>
  )
}

export default InventoryRequesList;