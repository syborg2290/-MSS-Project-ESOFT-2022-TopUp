import "./inventoryRequestView.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const InventoryRwqueestView = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Inventory Information</h1>
            <div className="item">
              <div className="details">
                <h1 className="itemTitle">Inventory </h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">Locks</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">99</span>
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

export default InventoryRwqueestView;
