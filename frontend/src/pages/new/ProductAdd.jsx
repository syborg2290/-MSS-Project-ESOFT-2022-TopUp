import "./productAdd.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import { useState } from "react";

const New = ({ inputs, title }) => {
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
                <label>ProductName</label>
                <input type="text" placeholder="Mac book">
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

export default New;
