import "./warehouseView.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const WarehouseView = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              {/* <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              /> */}
              <div className="details">
                <h1 className="itemTitle">Warehouse</h1>
                <div className="detailItem">
                  <span className="itemKey">WarehouseEmail:</span>
                  <span className="itemValue">Macbook@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">WarehousePhone:</span>
                  <span className="itemValue">+94 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Age:</span>
                  <span className="itemValue">
                   24
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Working Factory:</span>
                  <span className="itemValue">Lock Create</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Working Unit:</span>
                  <span className="itemValue">Warehouse</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default WarehouseView;
