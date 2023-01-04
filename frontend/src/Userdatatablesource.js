
export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
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
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
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
    username: "Tharaka Dasunpriya",
    status: "active",
    email: "Tharaka Dasunpriya@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Tharaka Dasunpriya2",
    email: "Tharaka Dasun2@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Tharaka Dasunpriya3",
    email: "Tharaka Dasun3@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Tharaka Dasunpriya4",
    email: "Tharaka Dasun4@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Tharaka Dasun5",
    email: "Tharaka Dasun5@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Tharaka Dasun6",
    email: "Tharaka Dasun6@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Tharaka Dasun7",
    email: "Tharaka Dasun7@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Tharaka Dasun8",
    email: "Tharaka Dasun8@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Tharaka Dasun9",
    email: "Tharaka Dasun9@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Tharaka Dasun99",
    email: "Tharaka Dasun99@gmail.com",
    status: "active",
    age: 65,
  },
];
