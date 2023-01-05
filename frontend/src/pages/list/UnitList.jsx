import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import UnitDatatable from "../../components/datatable/UnitDatatable"

const UnitList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
      <UnitDatatable/>
      </div>
    </div>
  )
}

export default UnitList;