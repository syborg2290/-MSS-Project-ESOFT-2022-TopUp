import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const EmployeeRetention = ({ percentage }) => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title"> Employee Retention</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={percentage}
            text={percentage + "%"}
            strokeWidth={5}
          />
        </div>
        <p className="title">Employee Retention Trend In Next Year</p>
      </div>
    </div>
  );
};

export default EmployeeRetention;
