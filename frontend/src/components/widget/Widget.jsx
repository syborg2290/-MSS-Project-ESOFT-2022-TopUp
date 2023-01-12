import "./widget.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type, amount = 0, dataObj }) => {
  let data;

  //temporary

  switch (type) {
    case "emp":
      data = {
        title: "Employee Retention Count",
        isMoney: false,
        amount: 0,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "emp2":
      data = {
        title: "Employee Task Progress",
        isMoney: false,
        amount: 10,
      };
      break;
    case "emp3":
      data = {
        title: "All Employees Task Progress",
        isMoney: false,
        amount: 20,
      };
      break;
    case "emp4":
      data = {
        title: "Unit target Coverage",
        isMoney: false,
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
        amount: 5,
      };
      break;
    case "emp5":
      data = {
        title: "All Units Target Coverage",
        isMoney: false,
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
        amount: 5.5,
      };
      break;
    case "emp6":
      data = {
        title: "Employee Reordered Material Cost",
        isMoney: true,
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
        amount: 1,
      };
      break;
    case "emp7":
      data = {
        title: "All Employee Reordered Material Countage",
        isMoney: false,

        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
        amount: 0,
      };
      break;
    case "emp8":
      data = {
        title: "Unit Supplied Material Cost Countage",
        isMoney: true,
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
        amount: 0,
      };
      break;
    case "emp9":
      data = {
        title: "All Units Supplied Materials Cost Coverage",
        isMoney: true,
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
        amount: 0,
      };
      break;
    case "emp10":
      data = {
        title: "Overall Income Reports",
        isMoney: true,
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
        amount: 0,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {type === "emp"
            ? dataObj.count + "%"
            : type == "emp2"
            ? data.amount
            : type == "emp3"
            ? data.amount + "%"
            : type == "emp4"
            ? data.amount + "%"
            : type == "emp5"
            ? data.amount + "%"
            : type == "emp7"
            ? data.amount
            : data.isMoney && "$" + amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive"></div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
