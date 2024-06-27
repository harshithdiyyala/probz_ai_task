// src/components/LineChartComponent.tsx

import React from "react"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Brush } from "recharts"
import { DataPoint } from "../App"
import { formatXAxis } from "../utils/dataFilter"
import CustomTooltip from "./CustomTooltip"

interface LineChartComponentProps {
  data: DataPoint[]
}

const LineChartComponent: React.FC<LineChartComponentProps> = ({ data }) => {
  return (
    <ResponsiveContainer
      width="100%"
      height={400}>
      <LineChart data={data}>
        <XAxis
          dataKey="timestamp"
          tickFormatter={formatXAxis}
          axisLine={{ stroke: "white" }}
          tickLine={{ stroke: "white" }}
          tick={{ fill: "white" }}
          angle={-25}
          textAnchor="end"
          height={70}
        />
        <YAxis
          axisLine={{ stroke: "white" }}
          tickLine={{ stroke: "white" }}
          tick={{ fill: "white" }}
        />

        <Tooltip content={<CustomTooltip formatter={formatXAxis} />} />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#ff7300"
          yAxisId={0}
        />
        <Brush
          dataKey="timestamp"
          height={30}
          stroke="#47ab50"
          fill="#232627"
          travellerWidth={10}
          startIndex={0}
          endIndex={data.length - 1}
          tickFormatter={formatXAxis}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default LineChartComponent
