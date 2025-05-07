import React, { useState } from "react";

const CreateEntity = () => {
    const [entityType, setEntityType] = useState(""); 
    const [activeTab, setActiveTab] = useState("Details");

    const isNode = entityType === "Node";
     const showTabs = isNode;

    const handleEntityTypeChange = (e) => {
        const value = e.target.value;
        setEntityType(value);
        setActiveTab("Details");
    };
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto bg-white shadow-md rounded-xl p-8 space-y-10">
                <h2 className="text-3xl font-semibold text-gray-800">Create Entity</h2>
                <div className="border-b border-gray-200 mb-6">
                    <nav className="flex space-x-6">
                        <button
                            onClick={() => setActiveTab("Details")}
                            className={`pb-2 text-sm font-medium ${activeTab === "Details"
                                    ? "text-cyan-600 border-b-2 border-cyan-600"
                                    : "text-gray-500"
                                }`}
                        >
                            Details
                        </button>
                        {isNode && (
                            <button
                                onClick={() => setActiveTab("Node Mapping")}
                                className={`pb-2 text-sm font-medium ${activeTab === "Node Mapping"
                                        ? "text-cyan-600 border-b-2 border-cyan-600"
                                        : "text-gray-500"
                                    }`}
                            >
                                Node Mapping
                            </button>
                        )}
                    </nav>
                </div>

                {activeTab === "Details" && (
                    <>
                        {/* Basic Section */}
                        <section>
                            <h3 className="text-2xl font-medium text-gray-700 mb-4">Basic</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block mb-1 mt-2 font-medium text-sm text-gray-700">Entity Type <span className="text-red-500">*</span></label>
                                    <select
                                        className="mt-1 w-full h-2/3 border-gray-300 rounded-md shadow-sm"
                                        value={entityType}
                                        onChange={(e) => setEntityType(e.target.value)}
                                    >
                                        <option value="" hidden>Select</option>
                                        <option >Client</option>
                                        <option>Destination</option>
                                        <option>Vendor</option>
                                        <option>Node</option>
                                        <option>Logistics Partner</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-1 mt-2 font-medium text-sm text-gray-700">Entity ID <span className="text-red-500">*</span></label>
                                    <input type="text" className="mt-1 w-full h-2/3 border-gray-300 rounded-md shadow-sm" />
                                </div>
                                <div>
                                    <label className="block mb-1 mt-2 font-medium text-sm text-gray-700">Entity Name <span className="text-red-500">*</span></label>
                                    <input type="text" className="mt-1 w-full h-2/3 border-gray-300 rounded-md shadow-sm" />
                                </div>
                                <div>
                                    <label className="block mb-1 mt-2 font-medium text-sm text-gray-700">GST Registration No.</label>
                                    <input type="text" placeholder="Eg. 22AAAAA0000A2Z1" className="mt-1 w-full h-2/3 border-gray-300 rounded-md shadow-sm" />
                                </div>
                                <div>
                                    <label className="block mb-1 mt-2 font-medium text-sm text-gray-700">Landline</label>
                                    <input type="text" className="mt-1 w-full h-2/3 border-gray-300 rounded-md shadow-sm" />
                                </div>
                                <div>
                                    <label className="block mb-1 mt-2 font-medium text-sm text-gray-700">Contact Person <span className="text-red-500">*</span></label>
                                    <input type="text" className="mt-1 w-full h-2/3 border-gray-300 rounded-md shadow-sm" />
                                </div>
                                <div>
                                    <label className="block mb-1 mt-2 font-medium text-sm text-gray-700">Mobile Number</label>
                                    <input type="text" className="mt-1 w-full h-2/3 border-gray-300 rounded-md shadow-sm" />
                                </div>
                                <div>
                                    <label className="block mb-1 mt-2 font-medium text-sm text-gray-700">C.I.N.</label>
                                    <input type="text" placeholder="Eg. U00000DL2015PTC000000" className="mt-1 w-full h-2/3 border-gray-300 rounded-md shadow-sm" />
                                </div>
                                <div>
                                    <label className="block mb-1 mt-2 font-medium text-sm text-gray-700">Email <span className="text-red-500">*</span></label>
                                    <input type="email" className="mt-1 w-full h-2/3 border-gray-300 rounded-md shadow-sm" />
                                </div>
                            </div>
                        </section>

                        {/* Address Section */}
                        <section>
                            <h3 className="text-2xl font-medium text-gray-700 mb-4">Address</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block mb-1 mt-2 font-medium text-sm text-gray-700">Address Line 1 <span className="text-red-500">*</span></label>
                                    <input type="text" className="mt-1 w-full h-2/3 border-gray-300 rounded-md shadow-sm" />
                                </div>
                                <div>
                                    <label className="block mb-1 mt-2 font-medium text-sm text-gray-700">Address Line 2</label>
                                    <input type="text" className="mt-1 w-full h-2/3 border-gray-300 rounded-md shadow-sm" />
                                </div>
                                <div>
                                    <label className="block mb-1 mt-2 font-medium text-sm text-gray-700">Country <span className="text-red-500">*</span></label>
                                    <input type="text" defaultValue="India" className="mt-1 w-full h-2/3 border-gray-300 rounded-md shadow-sm" disabled />
                                </div>
                                <div>
                                    <label className="block mb-1 mt-2 font-medium text-sm text-gray-700">State <span className="text-red-500">*</span></label>
                                    <select className="mt-1 w-full h-2/3 border-gray-300 rounded-md shadow-sm">
                                        <option>Select...</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-1 mt-2 font-medium text-sm text-gray-700">City <span className="text-red-500">*</span></label>
                                    <select className="mt-1 w-full h-2/3 border-gray-300 rounded-md shadow-sm ">
                                        <option>Select...</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-1 mt-2 font-medium text-sm text-gray-700">Pincode <span className="text-red-500">*</span></label>
                                    <input type="text" className="mt-1 w-full h-2/3 border-gray-300 rounded-md shadow-sm" />
                                </div>
                            </div>
                        </section>

                        {/* Bank Section */}
                        <section>
                            <h3 className="text-2xl font-medium text-gray-700 mb-4">Bank</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block mb-1 mt-2 font-medium text-sm text-gray-700">Account Number</label>
                                    <input type="text" className="mt-1 w-full h-2/3 border-gray-300 rounded-md shadow-sm" />
                                </div>
                                <div>
                                    <label className="block mb-1 mt-2 font-medium text-sm text-gray-700">Account Holder's Name</label>
                                    <input type="text" className="mt-1 w-full h-2/3 border-gray-300 rounded-md shadow-sm" />
                                </div>
                                <div>
                                    <label className="block mb-1 mt-2 font-medium text-sm text-gray-700">IFSC Code</label>
                                    <input type="text" placeholder="Eg. AAAA0111111" className="mt-1 w-full h-2/3 border-gray-300 rounded-md shadow-sm" />
                                </div>
                                <div>
                                    <label className="block mb-1 mt-2 font-medium text-sm text-gray-700">Bank Name</label>
                                    <input type="text" className="mt-1 w-full h-2/3 border-gray-300 rounded-md shadow-sm" />
                                </div>
                                <div>
                                    <label className="block mb-1 mt-2 font-medium text-sm text-gray-700">Branch</label>
                                    <input type="text" className="mt-1 w-full h-2/3 border-gray-300 rounded-md shadow-sm" />
                                </div>
                                <div>
                                    <label className="block mb-1 mt-2 font-medium text-sm text-gray-700">Contact Number</label>
                                    <input type="text" className="mt-1 w-full h-2/3 border-gray-300 rounded-md shadow-sm" />
                                </div>
                            </div>
                        </section>
                    </>
                )}
                {isNode && activeTab === "Node Mapping" && (
                    <div>
                        <h3 className="text-2xl font-medium text-gray-700 mb-4">Node Mapping</h3>
                        <p className="text-gray-600">Node mapping content goes here.</p>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex justify-end space-x-4">
                    <button className="px-6 py-2 rounded-md border border-gray-400 text-gray-700">Cancel</button>
                    <button className="px-6 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700">Create Entity</button>
                </div>
            </div>
        </div>
    );
};

export default CreateEntity;
