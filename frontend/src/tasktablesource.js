
export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "TaskUser",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "TaskEmail",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "TaskAge",
      width: 100,
    },
    {
      field: "status",
      headerName: "TaskStatus",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
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
  
 