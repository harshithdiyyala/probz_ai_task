// src/App.tsx

import React, { useEffect, useState } from "react"
import LineChartComponent from "./components/LineChartComponent"
import AreaChartComponent from "./components/AreaChartComponent"
import { filterDataByTimeframe } from "./utils/dataFilter"
import "./styles/chartStyles.css"

export interface DataPoint {
  timestamp: string
  value: number
}

const App: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>([])
  const [filteredData, setFilteredData] = useState<DataPoint[]>([])
  const [timeframe, setTimeframe] = useState("daily")

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json")
      const fetchedData = await response.json()
      setData(fetchedData)
      setFilteredData(filterDataByTimeframe(fetchedData, "daily"))
    }
    fetchData()
  }, [])

  useEffect(() => {
    setFilteredData(filterDataByTimeframe(data, timeframe))
  }, [timeframe, data])

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100vw" }}>
      <nav className="nav-bar">
        <h1 className="nav-header">Chart App - Dummy data of resembling stock price of XYZ company</h1>
        <div className="button-container">
          <button onClick={() => setTimeframe("daily")}>Daily</button>
          <button onClick={() => setTimeframe("weekly")}>Weekly</button>
          <button onClick={() => setTimeframe("monthly")}>Monthly</button>
        </div>
      </nav>
      <div className="flex-container">
        <div>
          <h1>Line Chart</h1>
          <div className="chart-container">
            <LineChartComponent data={filteredData} />
          </div>
        </div>
        <div>
          <h1>Area Chart</h1>
          <div className="chart-container">
            <AreaChartComponent data={filteredData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
