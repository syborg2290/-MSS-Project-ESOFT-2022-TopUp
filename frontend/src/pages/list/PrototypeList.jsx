import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import EmployeeDatatable from "../../components/datatable/PrototypeDatatable"
import PrototypeDatatable from "../../components/datatable/PrototypeDatatable"

const PrototypeList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
      <PrototypeDatatable/>
      </div>
    </div>
  )
}

export default PrototypeList;