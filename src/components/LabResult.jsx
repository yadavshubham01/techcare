export const LabResults = ({ lab_results }) => {
    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Lab Results</h2>
            <table className="w-full">
                <thead>
                    <tr className="text-left text-gray-500">
                        <th className="pb-2">Test</th>
                        <th className="pb-2">Download</th>
                    </tr>
                </thead>
                <tbody>
                {lab_results && lab_results.length > 0 ? (
                        lab_results.slice(0, 4).map((test, index) => (
                            <tr key={index} className="border-t border-gray-200">
                                <td className="py-2">{test}</td>
                                <td className="py-2 flex justify-end">
                                    <button className="text-teal-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                            <path id="download_FILL0_wght300_GRAD0_opsz24_1_" data-name="download_FILL0_wght300_GRAD0_opsz24 (1)" d="M190-765.45a1.282,1.282,0,0,1-.449-.077,1.106,1.106,0,0,1-.395-.264l-4.146-4.146a.94.94,0,0,1-.294-.7,1.025,1.025,0,0,1,.294-.709,1.019,1.019,0,0,1,.713-.321.944.944,0,0,1,.713.3L189-768.8V-779a.968.968,0,0,1,.287-.713A.968.968,0,0,1,190-780a.968.968,0,0,1,.713.287A.968.968,0,0,1,191-779v10.2l2.564-2.564a.952.952,0,0,1,.706-.294,1,1,0,0,1,.719.314,1.044,1.044,0,0,1,.3.7.932.932,0,0,1-.3.7l-4.146,4.146a1.1,1.1,0,0,1-.395.264A1.282,1.282,0,0,1,190-765.45ZM182.411-760a2.327,2.327,0,0,1-1.71-.7,2.327,2.327,0,0,1-.7-1.71v-2.615a.968.968,0,0,1,.287-.713.968.968,0,0,1,.713-.287.968.968,0,0,1,.713.287.968.968,0,0,1,.287.713v2.615a.392.392,0,0,0,.128.282.392.392,0,0,0,.282.128h15.179a.392.392,0,0,0,.282-.128.392.392,0,0,0,.128-.282v-2.615a.968.968,0,0,1,.287-.713.968.968,0,0,1,.713-.287.968.968,0,0,1,.713.287.968.968,0,0,1,.287.713v2.615a2.327,2.327,0,0,1-.7,1.71,2.327,2.327,0,0,1-1.71.7Z" transform="translate(-180.001 779.999)"/>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2" className="text-center py-4 text-gray-500">
                                No lab results available.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};