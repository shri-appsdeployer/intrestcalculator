import React from "react";
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement, Title,Tooltip,Legend} from "chart.js";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { getSI,getCI, getType,getRangeCI,getRangeSI } from "../../features/Simple-Compound/InterestSlice";



ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend);
// const labels = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const options = {responsive: true,plugins: {  legend: { position: "top",},title: {display: true,text: "Interest Chart for SI and CI", },},};

const Chart = () => {

  const type = useSelector(getType);
  const dataPointSI = useSelector(getSI);
  const rangeSI = useSelector(getRangeSI);
  const urangeSI = [...new Set(rangeSI)];
  const labelsForSI = urangeSI.map((item)=>{return item});

  const dataPointCI = useSelector(getCI);
  const rangeCI = useSelector(getRangeCI)
  const urangeCI = [...new Set(rangeCI)]
  const labelsForCI = urangeCI.map((item)=>{return item});

  const dataForSI = {
    labels:labelsForSI,
    datasets: [
      {
        label: "Data Chart For SI",
        data: dataPointSI,
        borderColor: "rgb(177, 163, 166)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const dataForCI = {
    labels:labelsForCI,
    datasets: [
      {
        label: "Data Chart For CI",
        data: dataPointCI,
        borderColor: "rgb(177, 163, 166)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div>
      {
        type ==='SI'? <Line options={options} data={dataForSI} />: <Line options={options} data={dataForCI}/>
      }
    </div>
  );
};

export default Chart;
