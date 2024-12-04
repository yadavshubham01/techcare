export const DiagnosticList = ({diagnosticlist}) => {
    return (
        <div className="bg-white p-4  shadow mb-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Diagnostic List</h2>
            <table className="w-full pt-6">
                <thead className="rounded-xl bg-gray-200">
                    <tr className="text-justify  text-black ">
                        <th className="pb-2 ">Problem/Diagnosis</th>
                        <th className="pb-2">Description</th>
                        <th className="pb-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                {diagnosticlist && diagnosticlist.length > 0 ? (
                        diagnosticlist.map((item, index) => (
                        <tr key={index} className="border-t border-gray-200 text-gray-500 text-justify">
                            <td className="pb-2 max-w-xs truncate">{item.name || item.name[0]}</td>
                            <td className="pb-2 max-w-xs truncate">{item.description || item.description[0]}</td>
                            <td className="pb-2 max-w-xs truncate">{item.status || item.status[0]}</td>
                        </tr>
                    ))
                ):(
                    <tr>
                            <td colSpan="3" className="text-center py-4 text-gray-500">
                                No diagnostics available.
                            </td>
                        </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};