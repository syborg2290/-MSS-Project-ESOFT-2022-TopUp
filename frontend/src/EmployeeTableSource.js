export const userColumns = [
  {
    field: "nic",
    headerName: "NIC",
    width: 200,
  },
  {
    field: "employee",
    headerName: "Employee Name",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.firstName + " " + params.row.lastName}
        </div>
      );
    },
  },
  {
    field: "nationality",
    headerName: "Nationality",
    width: 200,
  },
  {
    field: "dob",
    headerName: "Employee Age",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {new Date().getUTCFullYear() -
            new Date(params.row.dob).getUTCFullYear()}
        </div>
      );
    },
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 100,
  },
  {
    field: "contactNo",
    headerName: "Contact Number",
    width: 200,
  },
  {
    field: "department",
    headerName: "Department",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">{params.row.department.toUpperCase()}</div>
      );
    },
  },
  {
    field: "position",
    headerName: "Position",
    width: 150,
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "materials1",
    status: "active",
    email: "Tharaka Dasunpriya@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Tharaka Dasunpriya2",
    email: 56,
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "ProductTharaka Dasunpriya3",
    email: 34,
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "ProductTharaka Dasunpriya4",
    email: 33,
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Tharaka Dasun5",
    email: 55,
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Tharaka Dasun6",
    email: 33,
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Tharaka Dasun7",
    email: 33,
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Tharaka Dasun8",
    email: 33,
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Tharaka Dasun9",
    email: 33,
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Tharaka Dasun99",
    email: 54,
    status: "active",
    age: 65,
  },
];
