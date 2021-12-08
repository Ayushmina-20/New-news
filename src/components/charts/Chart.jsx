import React from "react";
import "./Chart.css";
import {
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  YAxis,
  Bar,
} from "recharts";
import { BarChart } from "recharts";

export default function Chart({
  title,
  data,
  dataKey,
  grid,
  positive,
  negative,
}) {
  console.log(positive);
  console.log(negative);
  const data1 = [{ pos: positive, neg: negative }];
  //const data2 = [{ neg: negative }];
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>

      <ResponsiveContainer width="100%" aspect={4 / 1}>
        {/* <BarChart width={730} height={250} data={data}> */}
        <BarChart width={730} height={250} data={data1}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pos" name="Positive" fill="#38a662" />
          <Bar dataKey="neg" name="Negative" fill="#e85b51" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
