import ChartDataLabels from 'chartjs-plugin-datalabels';
import Arrow from './Arrow';
import { useState } from 'react';
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
    { minDegree: 87.4, maxDegree: 97.1, value: 26 },
    { minDegree: 97.2, maxDegree: 106.8, value: 3 },
    { minDegree: 106.9, maxDegree: 116.5, value: 35 },
    { minDegree: 116.6, maxDegree: 126.2, value: 12 },
    { minDegree: 126.3, maxDegree: 135.9, value: 28 },
    { minDegree: 136, maxDegree: 145.7, value: 7 },
    { minDegree: 145.8, maxDegree: 155.4, value: 29 },
    { minDegree: 155.5, maxDegree: 165.1, value: 18},
    { minDegree: 165.2, maxDegree: 174.8, value: 22 },
    { minDegree: 174.9, maxDegree: 184.5, value: 9 },
    { minDegree: 184.6, maxDegree: 194.3, value: 31 },
    { minDegree: 194.4, maxDegree: 204, value: 14 },
    { minDegree: 204.2, maxDegree: 213.7, value: 20 },
    { minDegree: 213.8, maxDegree: 223.4, value: 1 },
    { minDegree: 223.5, maxDegree: 233.1, value: 33 },
    { minDegree: 233.2, maxDegree: 242.9, value: 16 },
    { minDegree: 243, maxDegree: 252.6, value: 24 },
    { minDegree: 252.7, maxDegree: 262.3, value: 5 },
    { minDegree: 262.4, maxDegree: 272, value: 10 },
    { minDegree: 271.16, maxDegree: 281.7, value: 32 },
    { minDegree: 281.8, maxDegree: 291, value: 8 },
    { minDegree: 291.6, maxDegree: 301.2, value: 30 },
    { minDegree: 301.3, maxDegree: 311.04, value: 11},
    { minDegree: 311.1, maxDegree: 320.6, value: 36 },
    { minDegree: 320.7, maxDegree: 330.4, value: 13 },
    { minDegree: 330.5, maxDegree: 340.2, value: 27 },
    { minDegree: 339.6, maxDegree: 349.8, value: 6},
    { minDegree: 349.9, maxDegree: 360, value:34}
];

    const pieColors = ["green","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black"];
    const nums = [16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16];
    const data ={
        plugins:[ChartDataLabels],
        labels:[0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,32,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26],
        datasets:[{
            backgroundColor: pieColors,
            data:nums,
            }
        ]
    };
    const [options,setOptions] =useState ({
        responsive: true,
        animation: { duration: 1 },
        rotation:0,
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
    });
    const valueGenerator = (angleValue) =>{
        for (let i of rotatitonValues){
            if (angleValue>=i.minDegree && angleValue<=i.maxDegree){
                console.log('<p>Number is: ' + i.value + '</p>');
                setText("Number is " + i.value+"!!!!!");
                break;
            }
        }
    };

    let count =1;
    let resultValue= 101;
    const [text,setText] = useState("Click on the button SPIN to start");
    const [disabled, setDisabled] = useState(false);

    const handleClick = () => {
        let randomDegree = Math.floor(Math.random() * (360));
        setText("GOOD LUCK!!");
        let rotationInterval = window.setInterval(() => {
            setOptions(prevState => {
                console.log("prevState.rotation : "+ prevState.rotation )
                const newRotation = prevState.rotation + resultValue;
                setDisabled(true);
                console.log("random degree: "+ randomDegree);
                console.log("Rotation: "+newRotation);
                console.log("count:"+ count);
                console.log("result value: " + resultValue);
                if (newRotation >= 360 && count >0) {
                    count += 1;
                    resultValue -= 1;
                    return {
                        rotation: 0
                    };
                } else if (count > 15 && newRotation===randomDegree) {
                    
                    valueGenerator(newRotation);
                    clearInterval(rotationInterval);
                    setDisabled(false);
                    count = 0;
                    resultValue = 101;
                    console.log("NIGGGERS");
                    return {rotation:newRotation};
                }
                if (resultValue===0){
                    resultValue=101;
                }
                if (count ===0 && resultValue===101){
                        clearInterval(rotationInterval);
                        valueGenerator(newRotation)
                        setDisabled(false);
                        return {
                        rotation: newRotation}
                        }

                if (count >120){
                    randomDegree = newRotation
                }
                return {
                    rotation: newRotation
                };
                
            });
        }, 10);
    };

    return (
        <div className="roulette">
            <div className="pomeren">
                <div className="wrapper">
                    <div className="conteiner">
                        <Pie id="wheel"
                            data = {data}
                            options={options}></Pie>
                        <button id="spin-btn" onClick={handleClick} disabled={disabled}>SPIN</button>
                        <p className='arrow'><Arrow/></p>
                    </div>
                    <div id="final-value">
                        <p>{text}</p>
                    </div>
                </div>
            </div>
            <div id="vrednost"></div>
        </div>
     );
}
 
export default Roulette;