import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import SubInventoryDatatable from "../../components/datatable/SubInventoryDatatable"

const SubInvenotryList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
      <SubInventoryDatatable/>
      </div>
    </div>
  )
}

export default SubInvenotryList;