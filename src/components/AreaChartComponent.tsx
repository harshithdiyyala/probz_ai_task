// src/components/AreaChartComponent.tsx

import React from "react"
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Brush } from "recharts"
import { DataPoint } from "../App"
import { formatXAxis } from "../utils/dataFilter"
import CustomTooltip from "./CustomTooltip"

interface AreaChartComponentProps {
  data: DataPoint[]
}

const AreaChartComponent: React.FC<AreaChartComponentProps> = ({ data }) => {
  return (
    <ResponsiveContainer
      width="100%"
      height={400}>
      <AreaChart data={data}>
        <defs>
          <linearGradient
            id="colorUv"
            x1="0"
            y1="0"
            x2="0"
            y2="1">
            <stop
              offset="5%"
              stopColor="#8884d8"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="#8884d8"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>

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
        <Area
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          fillOpacity={1}
          fill="url(#colorUv)"
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
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default AreaChartComponent
