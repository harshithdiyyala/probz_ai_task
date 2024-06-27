# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Vite React Charting Application

This project is a React application built using Vite for fast and efficient development. It visualizes time series data using Recharts and provides functionality to filter data by daily, weekly, and monthly intervals, displaying it in both line and area charts.

## Overview

The application features:

- **Line and Area Charts:** Visualize time series data.
- **Data Filtering:** Filter data by daily, weekly, and monthly intervals.
- **Consistent Formatting:** Ensures consistent date formatting for X-axis labels and tooltips.
- **Customizable Components:** Custom tooltips and brush components for enhanced user experience.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (>=14.x)
- npm (>=6.x)

## Installation

To install and set up the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd my-vite-app
   ```

my-vite-app/
├── public/
│ ├── data.json
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── LineChartComponent.tsx
│ │ ├── AreaChartComponent.tsx
│ │ ├── CustomTooltip.tsx
│ ├── utils/
│ │ ├── dataFilter.ts
│ ├── styles/
│ │ ├── ChartStyles.css
│ ├── App.tsx
│ ├── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
