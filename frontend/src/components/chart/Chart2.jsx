import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";

const data = [
  { name: "January", Total: 2.9 },
  { name: "February", Total: 30 },
  { name: "March", Total: 5 },
  { name: "April", Total: 9 },
  { name: "May", Total: 0 },
  { name: "June", Total: 12.5 },
];

const Chart2 = ({ aspect, title }) => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   setData(chart1);
  // }, [chart1]);

  return (
    <div className="chart">
      <div className="title">{title}</div>
      
        <ResponsiveContainer width="100%" aspect={aspect}>
          <AreaChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="gray" />
            <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Total"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#total)"
            />
          </AreaChart>
        </ResponsiveContainer>
      
    </div>
  );
};

export default Chart2;

