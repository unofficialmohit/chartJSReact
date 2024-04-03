import {Line} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";

const LineChart = (props:any) => {
  return (
    <div>
        <Line data={props.chartData} />
    </div>
  )
}

export default LineChart