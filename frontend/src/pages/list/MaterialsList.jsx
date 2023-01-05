import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ProductDatatable from "../../components/datatable/MaterialsDatatable"
import MaterialsDatatable from "../../components/datatable/MaterialsDatatable"

const MaterialsList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
      <MaterialsDatatable/>
      </div>
    </div>
  )
}

export default MaterialsList;