// src/utils/dataFilter.ts

import { DataPoint } from "../App"

export const filterDataByTimeframe = (data: DataPoint[], timeframe: string): DataPoint[] => {
  if (timeframe === "weekly") {
    return groupDataByWeek(data)
  } else if (timeframe === "monthly") {
    return groupDataByMonth(data)
  }
  return data // Default to daily data
}

const groupDataByWeek = (data: DataPoint[]): DataPoint[] => {
  const groupedData: { [key: string]: DataPoint[] } = {}

  data.forEach((point) => {
    const date = new Date(point.timestamp)
    const weekStart = getStartOfWeek(date)
    const weekEnd = getEndOfWeek(date)
    const key = `${formatDateShort(weekStart)} - ${formatDateShort(weekEnd)}`

    if (!groupedData[key]) {
      groupedData[key] = []
    }
    groupedData[key].push(point)
  })

  const weeklyData = Object.keys(groupedData).map((key) => {
    const group = groupedData[key]
    const averageValue = group.reduce((sum, point) => sum + point.value, 0) / group.length
    return {
      timestamp: key, // Use the formatted week range as the timestamp
      value: parseFloat(averageValue.toFixed(2)),
    }
  })

  return weeklyData
}

const groupDataByMonth = (data: DataPoint[]): DataPoint[] => {
  const groupedData: { [key: string]: DataPoint[] } = {}

  data.forEach((point) => {
    const date = new Date(point.timestamp)
    const month = date.toLocaleString("default", { month: "short" })
    const year = date.getFullYear()
    const key = `${month} ${year}`

    if (!groupedData[key]) {
      groupedData[key] = []
    }
    groupedData[key].push(point)
  })

  const monthlyData = Object.keys(groupedData).map((key) => {
    const group = groupedData[key]
    const averageValue = group.reduce((sum, point) => sum + point.value, 0) / group.length
    return {
      timestamp: key, // Use the formatted month and year as the timestamp
      value: parseFloat(averageValue.toFixed(2)),
    }
  })

  return monthlyData
}

const getStartOfWeek = (date: Date): Date => {
  const start = new Date(date)
  const day = start.getDay()
  const diff = start.getDate() - day + (day === 0 ? -6 : 1) // Adjust when day is Sunday
  start.setDate(diff)
  return start
}

const getEndOfWeek = (date: Date): Date => {
  const end = new Date(date)
  const day = end.getDay()
  const diff = end.getDate() + (7 - day)
  end.setDate(diff)
  return end
}

const formatDateShort = (date: Date): string => {
  return date.toLocaleDateString("default", { month: "short", day: "numeric" })
}

export const formatXAxis = (tickItem: string): string => {
  if (tickItem.includes(" - ")) {
    return tickItem // Weekly data
  }
  const date = new Date(tickItem)
  return date.toLocaleDateString("default", { month: "short", day: "numeric" })
}
