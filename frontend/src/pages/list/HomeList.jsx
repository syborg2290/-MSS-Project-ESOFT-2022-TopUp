import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import EmployeeDatatable from "../../components/datatable/EmployeeDatatable"

const EmployeeList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
      <EmployeeDatatable/>
      </div>
    </div>
  )
}

export default EmployeeList;