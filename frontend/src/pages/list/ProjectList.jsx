import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ProjectDatatable from "../../components/datatable/ProjectDatatable"

const ProjectList= () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
      <ProjectDatatable/>
      </div>
    </div>
  )
}

export default ProjectList;