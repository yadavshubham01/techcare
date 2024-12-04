import React from "react";

function Sidebar({ patients,onSelectPatient }) {
  
  return (
    <div className="bg-white w-full md:w-1/4 lg:w-1/5 p-4 border-r border-gray-200 rounded-md mt-4">
      <div className="flex items-center mb-6">
        <span className="text-xl font-bold">Patients</span>
      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="overflow-y-auto h-full">
        {patients.map((patient, index) => (
          <div
            key={index}
            className="flex items-center p-2 mb-2 rounded hover:bg-teal-200 transition"
            onClick={() => onSelectPatient(patient)}
          >
            <img
              src={patient.profile_picture}
              alt={patient.name}
              className="mr-2 rounded-full w-10 h-10"
            />
            <div>
              <div className="font-medium">{patient.name}</div>
              <div className="text-sm text-gray-500">
                {patient.gender}, {patient.age}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
