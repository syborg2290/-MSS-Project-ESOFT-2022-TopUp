import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import "./employeeAdd.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import { apiCaller } from "../../utils/axios-request-caller";
import { createEmployeeQuery } from "../../graphql/mutations/createEmployeeGraphql";

const EmployeeAdd = ({ inputs, title }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [nationality, setNationality] = useState("Nordic");
  const [nic, setNic] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [dob, setDOB] = useState("");
  const [dateOfJoinning, setDateOfJoinning] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [emContactNo, setEmContactNo] = useState("");
  const [address, setAddress] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState(0);
  const [leaves, setLeaves] = useState(0);
  const [department, setDepartment] = useState("salesMarketing");

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      if (
        nic.length !== 0 &&
        fname.length !== 0 &&
        mname.length !== 0 &&
        lname.length !== 0 &&
        email.length !== 0 &&
        dob.length !== 0 &&
        dateOfJoinning.length !== 0 &&
        contactNo.length !== 0 &&
        department.length !== 0 &&
        position.length !== 0 &&
        emContactNo.length !== 0 &&
        address.length !== 0
      ) {
        setIsLoading(true);
        const graphqlQuery = {
          operationName: "createEmployee",
          query: createEmployeeQuery,
          variables: {
            id: uuidv4(),
            nic: nic,
            firstName: fname,
            middleName: mname,
            lastName: lname,
            nationality: nationality,
            email: email,
            gender: gender,
            dob: dob,
            dateOfJoining: dateOfJoinning,
            terminatedDate: "",
            deleted: false,
            contactNo: contactNo,
            leaves: leaves,
            getLeaves: 0,
            department: department,
            position: position,
            salary: salary,
            emergencyContactNo: emContactNo,
            address: address,
          },
        };
        const res = await apiCaller(graphqlQuery, "");
        if (res.data.data !== null) {
          navigate("/employee/");
          setIsLoading(false);
        } else {
          if (
            res.data.errors[0].message !==
            'Expected Iterable, but did not find one for field "Mutation.createEmployee".'
          ) {
            alert(res.data.errors[0].message);
          } else {
            navigate("/employee/");
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

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput">
                <label>Firstname</label>
                <input
                  type="text"
                  placeholder="FirstName"
                  required={true}
                  onChange={(e) => {
                    setFname(e.target.value);
                  }}
                ></input>
              </div>
              <div className="formInput">
                <label>MiddleName</label>
                <input
                  type="text"
                  placeholder="MiddleName"
                  onChange={(e) => {
                    setMname(e.target.value);
                  }}
                ></input>
              </div>
              <div className="formInput">
                <label>Lastname</label>
                <input
                  type="text"
                  placeholder="Lastname"
                  required={true}
                  onChange={(e) => {
                    setLname(e.target.value);
                  }}
                ></input>
              </div>
              <div className="formInput">
                <label>Nationality</label>
                <select
                  defaultValue={nationality}
                  onChange={(e) => {
                    setNationality(e.target.value);
                  }}
                >
                  <option value="Nordic">Nordic</option>
                  <option value="Australian">Australian</option>
                </select>
              </div>
              <div className="formInput">
                <label>NIC Of Employee</label>
                <input
                  type="text"
                  placeholder="NIC"
                  required={true}
                  onChange={(e) => {
                    setNic(e.target.value);
                  }}
                ></input>
              </div>
              <div className="formInput">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  required={true}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>
              </div>
              <div className="formInput">
                <label>Gender</label>
                <select
                  defaultValue={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="formInput">
                <label>Date Of Birth</label>
                <input
                  type="date"
                  placeholder="DOB"
                  required={true}
                  onChange={(e) => {
                    setDOB(e.target.value);
                  }}
                ></input>
              </div>
              <div className="formInput">
                <label>Date Of Joining</label>
                <input
                  type="date"
                  placeholder="Date Of Joining"
                  required={true}
                  onChange={(e) => {
                    setDateOfJoinning(e.target.value);
                  }}
                ></input>
              </div>
              <div className="formInput">
                <label>Contact No</label>
                <input
                  type="text"
                  placeholder="Contact No"
                  required={true}
                  onChange={(e) => {
                    setContactNo(e.target.value);
                  }}
                ></input>
              </div>
              <div className="formInput">
                <label>Emergency Contact No</label>
                <input
                  type="text"
                  placeholder="Emergency Contact No"
                  required={true}
                  onChange={(e) => {
                    setEmContactNo(e.target.value);
                  }}
                ></input>
              </div>
              <div className="formInput">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  required={true}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                ></input>
              </div>
              <div className="formInput">
                <label>Department</label>
                <select
                  defaultValue={department}
                  onChange={(e) => {
                    setDepartment(e.target.value);
                  }}
                >
                  <option value="salesMarketing">Sales & Marketing</option>
                  <option value="purchasing">Purchasing</option>
                  <option value="finance">Finance</option>
                  <option value="it">IT</option>
                  <option value="hr">HR</option>
                  <option value="rd">R&D</option>
                  <option value="engineering">Engineering</option>
                </select>
              </div>
              <div className="formInput">
                <label>Leaves Count</label>
                <input
                  type="number"
                  placeholder="Leaves Count"
                  required={true}
                  onChange={(e) => {
                    setLeaves(parseInt(e.target.value));
                  }}
                ></input>
              </div>
              <div className="formInput">
                <label>Position</label>
                <input
                  type="text"
                  placeholder="Position"
                  required={true}
                  onChange={(e) => {
                    setPosition(e.target.value);
                  }}
                ></input>
              </div>
              <div className="formInput">
                <label>Salary(USD)</label>
                <input
                  type="number"
                  placeholder="Salary(USD)"
                  required={true}
                  onChange={(e) => {
                    setSalary(parseInt(e.target.value));
                  }}
                ></input>
              </div>
              <button disabled={isLoading} onClick={submit}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAdd;
