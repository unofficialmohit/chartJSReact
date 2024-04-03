import {Pie} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";
const PieChart = (props:any) => {
  return (
    <div>
        <Pie data={props.chartData}/>
    </div>
  )
}

export default PieChart