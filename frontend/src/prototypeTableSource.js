
export const userColumns = [
    {
      field: "name",
      headerName: "Prototype Name",
      width: 330,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "avg_duration",
      headerName: "Estimation Duration",
      width: 230,
    },
  
    {
      field: "time_unit",
      headerName: "Duration Unit",
      width: 150,
    },
    {
      field: "avg_cost",
      headerName: "Estimation Cost(AD)",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.avg_cost}`}>
            {params.row.avg_cost}
          </div>
        );
      },
    },
  ];
  
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Prototype1",
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
      email:34,
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "ProductTharaka Dasunpriya4",
      email:33,
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Tharaka Dasun5",
      email:55,
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
      email:33,
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Tharaka Dasun8",
      email:33,
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Tharaka Dasun9",
      email:33,
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
  
  