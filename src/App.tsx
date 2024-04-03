import React from 'react'
import PieChart from './components/PieChart'
import {UserData} from "./Data.ts"
import { Chart, registerables } from 'chart.js'
import LineChart from './components/LineChart.tsx'
import BarChart from './components/BarChart.tsx'
import { Bubble, Doughnut, PolarArea, Radar, Scatter } from 'react-chartjs-2'

Chart.register(...registerables)
// import {Chart, ArcElement, Tooltip} from 'chart.js'
// Chart.register(ArcElement,Tooltip);
const App = () => {
  const [userData, setUserData] = React.useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
      {
        label: "Users Lost",
        data: UserData.map((data) => data.userLost),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // Pink with opacity
          "#ffcd56", // Yellow
          "#36a2eb", // Blue
          "#ff6384", // Red
          "#4bc0c0", // Turquoise
        ],
        
        borderColor: "black",
        borderWidth: 2,
      }
    ],
  });
  console.log(userData);
  return (
    <div>
      <div style={{
  display: 'flex',
  justifyContent: 'center',
  height: '250vh' 
}}>
  <div style={{ width: '300px' }}>
    <div style={{border:"1px solid black",padding:"10px",margin:"5px"}}><div style={{textAlign:"center",fontSize:"40px"}}>Pie Chart</div><PieChart chartData={userData} /></div>
    <div style={{border:"1px solid black",padding:"10px",margin:"5px"}}><div style={{textAlign:"center",fontSize:"40px"}}>Line Chart</div><LineChart chartData={userData} /></div>
    <div style={{border:"1px solid black",padding:"10px",margin:"5px"}}><div style={{textAlign:"center",fontSize:"40px"}}>Bar Chart</div><BarChart chartData={userData} /></div>
    <div style={{border:"1px solid black",padding:"10px",margin:"5px"}}><div style={{textAlign:"center",fontSize:"40px"}}>Doughnut Chart</div><Doughnut data={userData} /></div>
    <div style={{border:"1px solid black",padding:"10px",margin:"5px"}}><div style={{textAlign:"center",fontSize:"40px"}}>PolarArea Chart</div><PolarArea data={userData} /></div>
    <div style={{border:"1px solid black",padding:"10px",margin:"5px"}}><div style={{textAlign:"center",fontSize:"40px"}}>Radar Chart</div><Radar data={userData} /></div>
    <div style={{border:"1px solid black",padding:"10px",margin:"5px"}}><div style={{textAlign:"center",fontSize:"40px"}}>Scatter Chart</div><Scatter data={userData} /></div>
    <div style={{border:"1px solid black",padding:"10px",margin:"5px"}}><div style={{textAlign:"center",fontSize:"40px"}}>Bubble Chart</div><Bubble data={userData} /></div>
  </div>
</div>

    </div>
  )
}
export default App

//Radar and PolarArea doesnt work well with multiple datasets
//so it is good practice to use them when there is only one dataset