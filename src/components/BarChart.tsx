import {Bar} from "react-chartjs-2";
// import {Chart as ChartJS} from "chart.js/auto";

const BarChart = (props:any) => {
  return (
    <div>
        <Bar data={props.chartData} />
    </div>
  )
}

export default BarChart