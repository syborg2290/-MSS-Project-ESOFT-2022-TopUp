import "./unitsMemeberAdd.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import { useState } from "react";

const UnitsMemberAdd= ({ inputs, title }) => {
  // const [file, setFile] = useState("");

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
             
              {/* {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))} */}
              <div className="formInput">
                <label>Units Member Name</label>
                <input type="text" placeholder="Task 1">
                </input>
              </div>
              <div className="formInput">
                <label>UnitName</label>
                <input type="text" placeholder="john doe">
                </input>
              </div>
              <div className="formInput">
                <label>UnitName</label>
                <input type="text" placeholder="john doe">
                </input>
              </div>
              <div className="formInput">
                <label>UserName</label>
                <input type="text" placeholder="john doe">
                </input>
              </div>
              <div className="formInput">
                <label>UserName</label>
                <input type="text" placeholder="john doe">
                </input>
              </div>
              <div className="formInput">
                <label>UserName</label>
                <input type="text" placeholder="john doe">
                </input>
              </div>
              <div className="formInput">
                <label>UserName</label>
                <input type="text" placeholder="john doe">
                </input>
              </div>
              <div className="formInput">
                <label>UserName</label>
                <input type="text" placeholder="john doe">
                </input>
              </div>
              <div className="formInput">
                <label>UserName</label>
                <input type="text" placeholder="john doe">
                </input>
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitsMemberAdd;
