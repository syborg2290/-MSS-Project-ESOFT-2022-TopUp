import { color } from "@mui/system";

export const userColumns = [
  {
    field: "project",
    headerName: "Project",
    width: 230,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.project.title}</div>;
    },
  },
  {
    field: "task",
    headerName: "Task",
    width: 230,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.task.title}</div>;
    },
  },
  {
    field: "taskstatus",
    headerName: "Task Status",
    width: 130,
    renderCell: (params) => {
      return (
        <div
          style={
            params.row.task.taskstatus === "pending"
              ? {
                  backgroundColor: "red",
                  color: "white",
                  fontWeight: "bold",
                  padding: "5px",
                }
              : params.row.task.taskstatus === "onprogress"
              ? {
                  backgroundColor: "yellow",
                  color: "white",
                  fontWeight: "bold",
                  padding: "5px",
                }
              : {
                  backgroundColor: "green",
                  color: "white",
                  fontWeight: "bold",
                  padding: "5px",
                }
          }
          className="cellWithImg"
        >
          {params.row.task.taskstatus}
        </div>
      );
    },
  },

  {
    field: "progress",
    headerName: "Task Progress(%)",
    width: 130,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.task.progress}</div>;
    },
  },
  {
    field: "supervisor",
    headerName: "Supervisor",
    width: 160,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.task.supervisor}</div>;
    },
  },
  {
    field: "induvidualOrUnit",
    headerName: "Induvidual Or Unit",
    width: 160,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.task.induvidualOrUnit.toUpperCase()}
        </div>
      );
    },
  },
  {
    field: "employeeOrUnit",
    headerName: "Employee/Unit",
    width: 160,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.task.induvidualOrUnit === "individual"
            ? params.row.employee.firstName + " " + params.row.employee.lastName
            : params.row.unit.code}
        </div>
      );
    },
  },
  {
    field: "startDate",
    headerName: "Stated Date ",
    width: 160,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.task.start_time}</div>;
    },
  },
  {
    field: "endDate",
    headerName: "End Date ",
    width: 160,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.task.finished_time}</div>;
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "TaskTharaka Dasunpriya",
    status: "active",
    email: "Tharaka Dasunpriya@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "TaskTharaka Dasunpriya2",
    email: "Tharaka Dasun2@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "TaskTharaka Dasunpriya3",
    email: "Tharaka Dasun3@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "TaskTharaka Dasunpriya4",
    email: "Tharaka Dasun4@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "TaskTharaka Dasun5",
    email: "Tharaka Dasun5@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "TaskTharaka Dasun6",
    email: "Tharaka Dasun6@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "TaskTharaka Dasun7",
    email: "Tharaka Dasun7@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "TaskTharaka Dasun8",
    email: "Tharaka Dasun8@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "TaskTharaka Dasun9",
    email: "Tharaka Dasun9@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "TaskTharaka Dasun99",
    email: "Tharaka Dasun99@gmail.com",
    status: "active",
    age: 65,
  },
];
