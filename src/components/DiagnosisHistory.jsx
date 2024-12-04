import layer1 from '../images/respiratory rate.png'
import layer2 from '../images/temperature.png'
import layer3 from '../images/HeartBPM.png'
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
export const DiagnosisHistory = ({diagnosisHistory}) => {
    const labels = diagnosisHistory.slice(0,4).map((entry) => `${entry.month} ${entry.year}`);
  const systolicData = diagnosisHistory.map((entry) => entry.blood_pressure.systolic.value);
  const diastolicData = diagnosisHistory.map((entry) => entry.blood_pressure.diastolic.value);

  const bloodPressureChart = {
    labels:labels,
    datasets: [
      {
        label: "systolic",
        data: systolicData,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
      },
      {
        label: "diastolic",
        data: diastolicData,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4,
      },
    ],
  };
    return (

        <div className="bg-white p-4 rounded shadow mb-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Diagnosis History</h2>
                
            </div>
            <div className='rounded-lg bg-gray-100'>
             <div className='flex flex-row justify-between py-2 px-2'> 
            <h3 className="text-lg font-semibold flex justify-start mb-2">Blood Pressure</h3>
            <div className="text-sm text-gray-500 flex justify-end">Last 6 months</div>
            </div>
            <div className="mb-6 pb-2 flex flex-row">
           <div className='w-[70%] '>
           <Line data={bloodPressureChart} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
           </div>
        <div className="w-[20%] pl-6">
                            <div className="flex items-center mb-2">
                                <span className="w-3 h-3 bg-pink-500 rounded-full mr-2"></span>
                                <span className="text-gray-500">Systolic</span>
                            </div>
                            <div className="text-4xl font-bold text-gray-800 mb-1">160</div>
                            <div className="text-gray-500 mb-4">Higher than Average</div>
                            <div className="flex items-center mb-2">
                                <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                                <span className="text-gray-500">Diastolic</span>
                            </div>
                            <div className="text-4xl font-bold text-gray-800 mb-1">78</div>
                            <div className="text-gray-500">Lower than Average</div>
                    </div>                 
              </div>
      </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3">
                    <div className="bg-blue-100 p-4 rounded-lg shadow">
                        <div className="flex flex-col mb-2">
                        <img src={layer1} alt="Blood Pressure Chart" className="w-[30%] rounded-full"/>
                        <div className="text-sm text-gray-500">Respiratory Rate</div>
                            <div>
                                <div className="text-xl font-semibold">20 bpm</div>
                                <div className="text-sm text-gray-500">Normal</div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="bg-red-100 p-4 rounded shadow">
                        <div className="flex flex-col mb-2">
                        <img src={layer2} alt="Blood Pressure Chart" className="w-[30%] rounded-full"/>
                        <div className="text-sm text-gray-500">Temperature</div>
                            <div>
                                <div className="text-xl font-semibold">98.6°F</div>
                                <div className="text-sm text-gray-500">Normal</div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="bg-pink-100 p-4 rounded shadow">
                    <div className="flex flex-col mb-2">
                    <img src={layer3} alt="Blood Pressure Chart" className="w-[30%] rounded-full"/>
                     <div className="text-sm text-gray-500">Heart Rate</div>
                            <div>
                                <div className="text-xl font-semibold">78 bpm</div>
                                <div className="text-sm text-gray-500">Lower than Average</div>
                            </div>
                        </div>
                       
                    </div>
                </div>
        </div>
    );
};