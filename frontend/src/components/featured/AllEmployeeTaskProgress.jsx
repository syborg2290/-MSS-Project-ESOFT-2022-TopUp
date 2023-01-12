import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const AllEmployeeTaskProgress = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">AllEmployeeTaskProgress</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={20} text={"20%"} strokeWidth={5} />
        </div>
      </div>
    </div>
  );
};

export default AllEmployeeTaskProgress;
