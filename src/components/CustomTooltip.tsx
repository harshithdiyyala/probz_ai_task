import React from "react"

interface CustomTooltipProps {
  active?: boolean
  payload?: any[]
  label?: string
  formatter: (label: string) => string
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label, formatter }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{ backgroundColor: "#232627", padding: "0.25rem", borderRadius: "8px", color: "#fefefe", border: "0.5px solid #fefefe1a", width: "120px", margin: "0.5rem" }}>
        <p className="label">{`${formatter(label!)}`}</p>
        <p
          className="intro"
          style={{ color: "#ff7300" }}>{`Stock Price: ${payload[0].value}`}</p>
      </div>
    )
  }

  return null
}

export default CustomTooltip
