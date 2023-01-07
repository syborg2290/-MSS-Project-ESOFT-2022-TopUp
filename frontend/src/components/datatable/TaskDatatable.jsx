import "./taskDatatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { userColumns } from "../../tasktablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllTasksQuery } from "../../graphql/queries/getTasksGraphql";
import { apiCaller } from "../../utils/axios-request-caller";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { v4 as uuidv4 } from "uuid";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { getAllMaterialsQuery } from "../../graphql/queries/getMaterialsGraphql";
import { createExtraMaterialQuery } from "../../graphql/mutations/createExtraMaterialGraphql";
import { updateTaskSatusQuery } from "../../graphql/mutations/updateStatusGraphql";
import { updateTaskProgressQuery } from "../../graphql/mutations/updateProgressGraphql";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TaskDatatable = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [taskId, setTaskId] = React.useState("");
  const [status, setStatus] = React.useState("pending");
  const handleOpen = (task) => {
    setTaskId(task);
    setOpen(true);
  };

  const handleOpen2 = (task) => {
    setTaskId(task);
    setOpen2(true);
  };

  const handleOpen3 = (task) => {
    setTaskId(task);
    setOpen3(true);
  };
  const handleClose = () => setOpen(false);
  const handleClose2 = () => setOpen2(false);
  const handleClose3 = () => setOpen3(false);
  const [materialData, setMaterialData] = useState([]);
  const [qty, setQty] = useState(0);
  const [progress, setProgress] = useState(0);
  const [material, setMaterial] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    getAllTasks();
    getAllMaterials();
  }, [data]);

  const getAllMaterials = async () => {
    const graphqlQuery = {
      operationName: "getAllMaterials",
      query: getAllMaterialsQuery,
      variables: {
        test: "",
      },
    };
    const res = await apiCaller(graphqlQuery, "");
    setMaterialData(res.data.data.getAllMaterials);
    setMaterial(res.data.data.getAllMaterials[0].id);
  };

  const getAllTasks = async () => {
    const graphqlQuery = {
      operationName: "getAllTasks",
      query: getAllTasksQuery,
      variables: {
        test: "",
      },
    };
    const res = await apiCaller(graphqlQuery, "");
    setData(res.data.data.getAllTasks);
  };

  const submit3 = async (e) => {
    e.preventDefault();
    try {
      const graphqlQuery = {
        operationName: "updateTaskProgress",
        query: updateTaskProgressQuery,
        variables: {
          id: taskId,
          progresss: progress,
        },
      };
      const res = await apiCaller(graphqlQuery, "");
      if (res.data.data !== null) {
        setOpen(false);
        setIsLoading(false);
      } else {
        setOpen(false);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submit2 = async (e) => {
    e.preventDefault();
    try {
      const graphqlQuery = {
        operationName: "updateTaskStatus",
        query: updateTaskSatusQuery,
        variables: {
          id: taskId,
          newStatus: status,
        },
      };
      const res = await apiCaller(graphqlQuery, "");
      if (res.data.data !== null) {
        setOpen(false);
        setIsLoading(false);
      } else {
        setOpen(false);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (qty !== 0 && date !== 0 && taskId !== 0) {
        console.log(taskId);
        setIsLoading(true);
        const graphqlQuery = {
          operationName: "createExtraMaterial",
          query: createExtraMaterialQuery,
          variables: {
            id: uuidv4(),
            task: taskId,
            material: material,
            qty: qty,
            date: date,
          },
        };
        const res = await apiCaller(graphqlQuery, "");
        if (res.data.data !== null) {
          setOpen(false);
          setIsLoading(false);
        } else {
          if (
            res.data.errors[0].message !==
            'Expected Iterable, but did not find one for field "Mutation.createEmployee".'
          ) {
            alert(res.data.errors[0].message);
          } else {
            setOpen(false);
            setIsLoading(false);
          }
        }
      } else {
        alert("Please fill out required fields!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 700,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/tasks/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>

            <div className="viewButton">
              <Button
                onClick={() => {
                  handleOpen(params.row.task.id);
                }}
              >
                Request Materials
              </Button>
            </div>
            <div className="viewButton">
              <Button
                onClick={() => {
                  handleOpen2(params.row.task.id);
                }}
              >
                Status Update
              </Button>
            </div>

            <div className="viewButton">
              <Button
                onClick={() => {
                  handleOpen3(params.row.task.id);
                }}
              >
                Progress Update
              </Button>
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Tasks
        <Link to="/tasks/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        components={{ Toolbar: GridToolbar }}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Request extra materials
          </Typography>
          <div className="bottom">
            <div className="right">
              <form>
                <div className="formInput">
                  <label>Qty</label>
                  <input
                    type="number"
                    placeholder="QTY"
                    style={{
                      width: "80%",
                      margin: "5px",
                    }}
                    onChange={(e) => {
                      setQty(parseInt(e.target.value));
                    }}
                  ></input>
                </div>
                <div className="formInput">
                  <label>Material</label>
                  <select
                    defaultValue={material}
                    onChange={(e) => {
                      setMaterial(e.target.value);
                    }}
                    style={{
                      width: "80%",
                      margin: "5px",
                    }}
                  >
                    {materialData.map((item, index) => {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="formInput">
                  <label>Date</label>
                  <input
                    type="date"
                    placeholder="Date"
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                    style={{
                      width: "80%",
                      margin: "5px",
                    }}
                  ></input>
                </div>
                <button disabled={isLoading} onClick={submit}>
                  Send
                </button>
              </form>
            </div>
          </div>
        </Box>
      </Modal>

      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update Status
          </Typography>
          <div className="bottom">
            <div className="right">
              <form>
                <div className="formInput">
                  <label>Status</label>
                  <select
                    defaultValue={status}
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                    style={{
                      width: "80%",
                      margin: "5px",
                    }}
                  >
                    <option value="pending">Pending</option>
                    <option value="onprogress">On Progress</option>
                    <option value="finished">Finished</option>
                  </select>
                </div>

                <button onClick={submit2}>Send</button>
              </form>
            </div>
          </div>
        </Box>
      </Modal>

      <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update Progress
          </Typography>
          <div className="bottom">
            <div className="right">
              <form>
                <div className="formInput">
                  <label>Progress</label>
                  <input
                    type="number"
                    placeholder="Progress"
                    onChange={(e) => {
                      setProgress(parseInt(e.target.value));
                    }}
                    style={{
                      width: "80%",
                      margin: "5px",
                    }}
                  ></input>
                </div>

                <button onClick={submit3}>Send</button>
              </form>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default TaskDatatable;
