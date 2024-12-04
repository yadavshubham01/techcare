import React, { useEffect, useState } from "react";
import { fetchPatients } from "./hook/index";
import Sidebar from './components/Sidebar';
import './styles/style.css';

import { Navbar } from './components/Navbar';
import { PatientDetails } from './components/PatientDetails';
import { DiagnosisHistory } from './components/DiagnosisHistory';
import { DiagnosticList } from './components/DiagnosticList';
import { LabResults } from './components/LabResult';

function App() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
    
  useEffect(() => {
    const getPatients = async () => {
    
        const data = await fetchPatients();
        setPatients(data);
        setSelectedPatient(data[0]);
        
       
      
    };
    
    getPatients();
  }, []);


  return (
    <div className='bg-slate-100'>
      <Navbar />
    <div className="flex flex-col md:flex-row h-screen bg-slate-100 overflow-scroll"> 
     <Sidebar patients={patients}
     onSelectPatient={(patient) => setSelectedPatient(patient)}/>
    <div className="flex-1 p-4">
        <div className='flex flex-row justify-between'>
        <div className="flex flex-col w-[70%] justify-between mb-4">
            <div className="flex-1 lg:mr-4">
            {selectedPatient?.diagnosis_history ? (
                    <DiagnosisHistory diagnosisHistory={selectedPatient.diagnosis_history} />
                ) : (
                    <p>No diagnosis history available for this patient.</p>
                )}
            </div>
            <div className='w-[90%] pt-4'>
            {selectedPatient && selectedPatient.diagnostic_list ? (
                  <DiagnosticList diagnosticlist={selectedPatient.diagnostic_list} />
                ) : (
                  <p>No diagnostic list available for this patient.</p>
                )}
           </div>
        </div>
        <div className='flex flex-col w-[30%]'>
        {selectedPatient ? (
          <PatientDetails patient={selectedPatient} />
        ) : (
          <p>Select a patient to view their details.</p>
        )}
          {selectedPatient && selectedPatient.lab_results ? (
                  <LabResults  lab_results={selectedPatient.lab_results}/>
                ) : (
                  <p>No diagnostic list available for this patient.</p>
                )}
         </div>
       </div>  
       </div>
    </div>
</div>
  );
}

export default App;
