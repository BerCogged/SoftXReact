import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useRef } from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    ChartDataLabels
);
const Roulette = () => {
const pieRef = useRef({Pie});
const spinBtn = document.getElementById("spin-btn");
const finalValue= document.getElementById("final-value");
const rotatitonValues = [
    { minDegree: 0, maxDegree: 9.7, value: 17 },
    { minDegree: 9.71, maxDegree: 19.4, value: 25 },
    { minDegree: 19.5, maxDegree: 29.1, value: 2 },
    { minDegree: 29.2, maxDegree: 38.8, value: 21 },
    { minDegree: 38.9, maxDegree: 48.5, value: 4 },
    { minDegree: 48.6, maxDegree: 58.2, value: 19 },
    { minDegree: 58.3, maxDegree: 67.9, value: 15 },
    { minDegree: 68, maxDegree: 77.6, value: 32 },
    { minDegree: 77.8, maxDegree: 87.3, value: 0 },
    { minDegree: 87.4, maxDegree: 97, value: 26 },
    { minDegree: 97.1, maxDegree: 106.7, value: 3 },
    { minDegree: 106.8, maxDegree: 116.4, value: 35 },
    { minDegree: 116.5, maxDegree: 126.1, value: 12 },
    { minDegree: 126.2, maxDegree: 135.8, value: 28 },
    { minDegree: 135.9, maxDegree: 145.5, value: 7 },
    { minDegree: 145.6, maxDegree: 155.2, value: 29 },
    { minDegree: 155.3, maxDegree: 169.4, value: 18},
    { minDegree: 169.5, maxDegree: 174.6, value: 22 },
    { minDegree: 174.7, maxDegree: 184.3, value: 9 },
    { minDegree: 184.5, maxDegree: 194, value: 31 },
    { minDegree: 194.1, maxDegree: 203.7, value: 14 },
    { minDegree: 203.8, maxDegree: 213.4, value: 20 },
    { minDegree: 213.5, maxDegree: 223.1, value: 1 },
    { minDegree: 223.2, maxDegree: 232.8, value: 33 },
    { minDegree: 232.9, maxDegree: 242.5, value: 16 },
    { minDegree: 242.6, maxDegree: 252.2, value: 24 },
    { minDegree: 252.3, maxDegree: 261.9, value: 5 },
    { minDegree: 262, maxDegree: 271.6, value: 10 },
    { minDegree: 271.7, maxDegree: 281.3, value: 32 },
    { minDegree: 281.4, maxDegree: 291, value: 8 },
    { minDegree: 291.1, maxDegree: 300.7, value: 30 },
    { minDegree: 300.8, maxDegree: 310.4, value: 11},
    { minDegree: 310.5, maxDegree: 320.1, value: 36 },
    { minDegree: 320.2, maxDegree: 329.8, value: 13 },
    { minDegree: 329.9, maxDegree: 339.5, value: 27 },
    { minDegree: 339.6, maxDegree: 349.2, value: 6},
    { minDegree: 349.3, maxDegree: 360, value:34}
];

    const pieColors = ["green","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black"];
    const nums = [16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16];
    const data = {
        plugins:[ChartDataLabels],
        labels:[0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,32,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26],
        datasets:[{
            backgroundColor: pieColors,
            data:nums,
            }
        ]
    }
    const options = {
        responsive: true,
        animation: { duration: 1 },
        plugins: {
            tooltip: false,
            legend: {
                display: false,
            },
            datalabels: {
                color: "#ffffff",
                font: { size: 15 },
                formatter: (value, context) => {
                    return context.chart.data.labels[context.dataIndex];
                }
            },
        },
    };

    return (
        <div className="roulette">
            <div className="pomeren">
                <div className="wrapper">
                    <div className="conteiner">
                        <Pie id="wheel"
                            data = {data}
                            options={options}></Pie>
                        <button id="spin-btn">SPIN</button> 
                    </div>
                    <div id="final-value">
                        <p>Click on the SPIN button to START</p>
                    </div>
                </div>
            </div>
            <div id="vrednost"></div>
        </div>
     );
}
 
export default Roulette;