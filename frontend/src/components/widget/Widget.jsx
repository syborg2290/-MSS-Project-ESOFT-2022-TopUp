import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "emp":
      data = {
        title: "Employee Retention",
        isMoney: false,
        link: "See all users",
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
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
      case "emp3":
        data = {
          title: "All Employees Task Progress",
          isMoney: false,
          link: "View all orders",
          icon: (
            <ShoppingCartOutlinedIcon
              className="icon"
              style={{
                backgroundColor: "rgba(218, 165, 32, 0.2)",
                color: "goldenrod",
              }}
            />
          ),
        };
        break;
      case "emp4":
      data = {
        title: "Unit target Coverage",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
      case "emp5":
        data = {
          title: "All Units Target Coverage",
          isMoney: true,
          link: "View net earnings",
          icon: (
            <MonetizationOnOutlinedIcon
              className="icon"
              style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
            />
          ),
        };
        break;
        case "emp6":
          data = {
            title: "Employee Reordered Material Cost",
            isMoney: true,
            link: "View net earnings",
            icon: (
              <MonetizationOnOutlinedIcon
                className="icon"
                style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
              />
            ),
          };
          break;
          case "emp7":
            data = {
              title: "All Employee Reordered Material Countage",
              isMoney: true,
              link: "View net earnings",
              icon: (
                <MonetizationOnOutlinedIcon
                  className="icon"
                  style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
                />
              ),
            };
            break;
          case "emp8":
            data = {
              title: "Unit Supplied Material Cost Countage",
              isMoney: true,
              link: "View net earnings",
              icon: (
                <MonetizationOnOutlinedIcon
                  className="icon"
                  style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
                />
              ),
            };
            break;
            case "emp9":
              data = {
                title: "All Units Supplied Materials Cost Coverage",
                isMoney: true,
                link: "View net earnings",
                icon: (
                  <MonetizationOnOutlinedIcon
                    className="icon"
                    style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
                  />
                ),
              };
              break;
              case "emp10":
                data = {
                  title: "Overall Income Reports",
                  isMoney: true,
                  link: "View net earnings",
                  icon: (
                    <MonetizationOnOutlinedIcon
                      className="icon"
                      style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
                    />
                  ),
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
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
