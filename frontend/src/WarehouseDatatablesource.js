export const userColumns = [
  {
    field: "item",
    headerName: "Item",
    width: 230,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.material.name}</div>;
    },
  },
  {
    field: "qty",
    headerName: "Qty",
    width: 230,
  },

  {
    field: "measurement_unit",
    headerName: "Measurement Unit",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.material.measurement_unit}
        </div>
      );
    },
  },
  {
    field: "cost_pre_unit",
    headerName: "Cost Per Unit(AD)",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">{params.row.material.cost_pre_unit}</div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Warehouse1",
    status: "active",
    email: "Tharaka Dasunpriya@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Warehouse2",
    email: "Tharaka Dasun2@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Warehouse3",
    email: "Tharaka Dasun3@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Warehouse4",
    email: "Tharaka Dasun4@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Warehouse5",
    email: "Tharaka Dasun5@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Warehouse6",
    email: "Tharaka Dasun6@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Warehouse7",
    email: "Tharaka Dasun7@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Warehouse8",
    email: "Tharaka Dasun8@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Warehouse9",
    email: "Tharaka Dasun9@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Warehouse99",
    email: "Tharaka Dasun99@gmail.com",
    status: "active",
    age: 65,
  },
];
