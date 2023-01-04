import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import TaskDatatable from "../../components/datatable/TaskDatatable"


const TaskList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
      <TaskDatatable/>
      </div>
    </div>
  )
}

export default TaskList;