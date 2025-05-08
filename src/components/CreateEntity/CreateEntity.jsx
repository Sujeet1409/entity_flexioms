import { useState } from "react";
import Select from "react-select";
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function CreateEntityForm() {
  const [formState, setFormState] = useState({
    type: "",
    entitycode: "",
    entityname: "",
    gstin: "",
    phonenum: "",
    personcontact: "",
    mobilenum: "",
    cin: "",
    email: "",
    payment_term: "",
    nodeType: "",
    transporter_rate: "",
    websiteURL: "",
    selectedClient: null,
    selectedVendor: null,
    sameaddress: "N",
    selectedCountry: null,
    selectedState: null,
    selectedCity: null,
    pincode: "",
    warehouse: [{ warehousearea: "", rownum: "", shelfnum: "" }],
    selectedTab: 0,
    showAdminBoard: false,
  });
  const [selectedTab, setSelectedTab] = useState(0);
  const [clientOptions, setClientOptions] = useState([]);
  const [vendorOptions, setVendorOptions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (field, selectedOption) => {
    setFormState((prev) => ({ ...prev, [field]: selectedOption }));
  };

  const togglePickupFlag = () => {
    setFormState((prev) => ({
      ...prev,
      pickUpFlag: !prev.pickUpFlag,
    }));
  };


  const toggleSameAddress = () => {
    setFormState((prev) => ({
      ...prev,
      sameaddress: prev.sameaddress === "Y" ? "N" : "Y",
    }));
  };

  const handleShelfLocation = (e, i) => {
    const { name, value } = e.target;
    const updatedWarehouse = [...formState.warehouse];
    updatedWarehouse[i][name] = value;
    setFormState((prev) => ({
      ...prev,
      warehouse: updatedWarehouse,
    }));
  };


  const style = {
    control: (base) => ({
      ...base,
      padding: "6px",
      borderColor: "#ddd",
    }),
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
    <div className="max-w-7xl mx-auto bg-white shadow-md rounded-xl p-8 space-y-10">
      <form onSubmit={() => {}}>
        <div className="flex items-center mb-4">
          <NavLink
            to={formState.showAdminBoard ? "/entitymaster" : "/profile"}
            className="text-xl"
          >
            <IoMdArrowRoundBack className="mr-2" />
          </NavLink>
          <h3 className="text-2xl font-semibold text-gray-800">Create Entity</h3>
        </div>

        <Tabs selectedIndex={selectedTab} onSelect={(index) => setSelectedTab(index)}>
          <TabList className="flex space-x-4 border-b mb-4">
            <Tab className="cursor-pointer py-2 px-4 border-b-2">Details</Tab>
            {formState.type === "node" && (
              <Tab className="cursor-pointer py-2 px-4 border-b-2">Node Mapping</Tab>
            )}
          </TabList>

          <TabPanel>
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-gray-700 mb-4">Basic</h3>
              {/* Entity Information Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Add fields for entitytype, name, contact */}
                <div>
                  <label className="block mb-1 font-medium">Entity Type</label>
                  <select
                    name="type"
                    value={formState.type}
                    onChange={handleChange}
                    className="w-full border rounded px-2 py-1"
                  >
                    <option value="">Select</option>
                    <option value="client">Client</option>
                    <option value="destination">Destination</option>
                    <option value="vendor">Vendor</option>
                    <option value="node">Node</option>
                    <option value="logistics_partner">Logistics Partner</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 font-medium">Entity Name</label>
                  <input
                    type="text"
                    name="entityname"
                    value={formState.entityname}
                    onChange={handleChange}
                    className="w-full border rounded px-2 py-1"
                  />
                </div>
                <div>
                  {formState.type === "destination" ? (
                    <>
                      <label className="block mb-1 font-medium">
                        Client Name <span className="text-red-500">*</span>
                      </label>
                      <Select
                        className="w-full"
                        value={formState.selectedClient}
                        onChange={(selected) => handleSelectChange("selectedClient", selected)}
                        options={clientOptions}
                        isSearchable
                        placeholder="Select"
                      />
                    </>
                  ) : (
                    <>
                      <label className="block mb-1 font-medium">
                        GST Registration No.
                        {formState.type === "client" && (
                          <span className="text-red-500"> *</span>
                        )}
                      </label>
                      <input
                        type="tel"
                        name="gstin"
                        placeholder="Eg. 22AAAAA0000A2Z1"
                        pattern="[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9]{1}[Z]{1}[0-9]{1}"
                        value={formState.gstin}
                        onChange={handleChange}
                        required={formState.type === "client"}
                        className="w-full border rounded px-2 py-1"
                      />
                    </>
                  )}
                </div>
                <div>
                  <label className="block mb-1 font-medium">Landline</label>
                  <input
                    type="text"
                    name="phonenum"
                    value={formState.phonenum}
                    onChange={handleChange}
                    className="w-full border rounded px-2 py-1"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium">
                    Contact Person <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="personcontact"
                    value={formState.personcontact}
                    onChange={handleChange}
                    required
                    className="w-full border rounded px-2 py-1"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobilenum"
                    pattern="[6-9][0-9]{9}"
                    maxLength="10"
                    minLength="10"
                    value={formState.mobilenum}
                    onChange={handleChange}
                    className="w-full border rounded px-2 py-1"
                  />
                </div>
                {formState.type !== "destination" && (
                  <>
                    <div>
                      <label className="block mb-1 font-medium">C.I.N.</label>
                      <input
                        type="tel"
                        name="cin"
                        placeholder="Eg. U00000DL2015PTC000000"
                        pattern="[a-zA-Z0-9]{21}"
                        value={formState.cin}
                        onChange={handleChange}
                        className="w-full border rounded px-2 py-1"
                      />
                    </div>

                    <div>
                      <label className="block mb-1 font-medium">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full border rounded px-2 py-1"
                      />
                    </div>
                  </>
                )}

                {formState.type === "client" && (
                  <div>
                    <label className="block mb-1 font-medium">Payment Term</label>
                    <input
                      type="text"
                      name="payment_term"
                      value={formState.payment_term}
                      onChange={handleChange}
                      className="w-full border rounded px-2 py-1"
                    />
                  </div>
                )}

                {formState.type === "node" && (
                  <div>
                    <label className="block mb-1 font-medium">
                      Node Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="nodeType"
                      value={formState.nodeType}
                      onChange={handleChange}
                      required
                      className="w-full border rounded px-2 py-1"
                    >
                      <option value="" hidden>Select</option>
                      <option value="warehouse">Warehouse</option>
                      <option value="manufacnode">Manufacturing Node</option>
                      <option value="store">Retail Store</option>
                      <option value="darkstores">Dark Stores</option>
                      <option value="dropship">Drop Ship</option>
                      <option value="assemblynode">Vendor Assembly Node</option>
                    </select>
                  </div>
                )}

                {formState.nodeType === "dropship" ||
                formState.nodeType === "assemblynode" ? (
                  <div>
                    <label className="block mb-1 font-medium">
                      Vendor <span className="text-red-500">*</span>
                    </label>
                    <Select
                      className="w-full"
                      value={formState.selectedVendor}
                      onChange={(selected) => handleSelectChange("selectedVendor", selected)}
                      options={vendorOptions}
                      isSearchable
                      required
                    />
                  </div>
                ) : null}

                {formState.type === "logistics_partner" && (
                  <>
                    <div>
                      <label className="block mb-1 font-medium">Transporter Rate</label>
                      <input
                        type="text"
                        name="transporter_rate"
                        value={formState.transporter_rate}
                        onChange={handleChange}
                        className="w-full border rounded px-2 py-1"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Website URL</label>
                      <input
                        type="text"
                        name="websiteURL"
                        value={formState.websiteURL}
                        onChange={handleChange}
                        className="w-full border rounded px-2 py-1"
                      />
                    </div>
                  </>
                )}
                 {formState.type === "node" &&
                  ["warehouse", "store", "darkstores", "manufacnode", "dropship", "assemblynode"].includes(formState.nodeType) && (
                    <div className="col-span-3">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="pickUpFlag"
                          checked={formState.pickUpFlag}
                          onChange={togglePickupFlag}
                          className="mr-2"
                        />
                        <span>Select this as a Pickup Node</span>
                      </label>
                    </div>
                  )}
              </div>
            </div>
          </TabPanel>
        </Tabs>


    {selectedTab !== 1 && (
          <>
        {/* Same Address Checkbox for Node Type */}
        {formState.selectedVendor && (formState.nodeType === "dropship" || formState.nodeType === "assemblynode") && (
          <label className="flex items-center space-x-2 mt-4">
            <input
              type="checkbox"
              checked={formState.sameaddress === "Y"}
              onChange={toggleSameAddress}
              className="mr-2"
            />
            <span>Select address same as Vendor's</span>
          </label>
        )}

        {/* Conditional Address Form */}
        {formState.sameaddress !== "Y" && (
          <div className="mt-6">
            <h3 className="text-2xl font-medium text-gray-700 mb-4">Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block mb-1 font-medium">
                  Address Line 1 <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full border rounded px-2 py-1"
                  type="text"
                  name="addressline1"
                  value={formState.addressline1}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Address Line 2</label>
                <input
                  className="w-full border rounded px-2 py-1"
                  type="text"
                  name="addressline2"
                  value={formState.addressline2}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">
                  Country <span className="text-red-500">*</span>
                </label>
                <Select
                  className="w-full"
                  value={formState.selectedCountry}
                  onChange={(selected) => setFormState((prev) => ({ ...prev, selectedCountry: selected }))}
                  options={formState.countryData}
                  isSearchable
                  styles={style}
                  menuPlacement="top"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block mb-1 font-medium">
                  State <span className="text-red-500">*</span>
                </label>
                <Select
                  className="w-full"
                  value={formState.selectedState}
                  onChange={(selected) => setFormState((prev) => ({ ...prev, selectedState: selected }))}
                  options={formState.stateData}
                  isSearchable
                  styles={style}
                  menuPlacement="top"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">
                  City <span className="text-red-500">*</span>
                </label>
                <Select
                  className="w-full"
                  value={formState.selectedCity}
                  onChange={(selected) => setFormState((prev) => ({ ...prev, selectedCity: selected }))}
                  options={formState.cityData}
                  isSearchable
                  styles={style}
                  menuPlacement="top"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">
                  Pincode <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full border rounded px-2 py-1"
                  type="tel"
                  name="pincode"
                  maxLength="6"
                  minLength="6"
                  pattern="[1-9][0-9]{5}"
                  value={formState.pincode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        )}

        {/* Shelf Location for Node Types */}
        {formState.nodeType !== "shelf" && (
          <div className="mt-6">
            <h3 className="text-2xl font-medium text-gray-700 mb-4">Shelf Location</h3>
            <div className="mt-4">
              {formState.warehouse.map((wh, index) => (
                <div key={index}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block mb-1 font-medium">Warehouse Area</label>
                      <input
                        type="text"
                        name="warehousearea"
                        value={wh.warehousearea}
                        onChange={(e) => handleShelfLocation(e, index)}
                        className="w-full border rounded px-2 py-1"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Row Number</label>
                      <input
                        type="text"
                        name="rownum"
                        value={wh.rownum}
                        onChange={(e) => handleShelfLocation(e, index)}
                        className="w-full border rounded px-2 py-1"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Shelf Number</label>
                      <input
                        type="text"
                        name="shelfnum"
                        value={wh.shelfnum}
                        onChange={(e) => handleShelfLocation(e, index)}
                        className="w-full border rounded px-2 py-1"
                      />
                    </div>
                  </div>
                </div>
              ))}
              
            </div>
          </div>
        )}
        </>
    )}
        <div className="mt-5 flex justify-end space-x-4">
                    <button className="px-6 py-2 rounded-md border border-gray-400 text-gray-700">Cancel</button>
                    <button className="px-6 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700">Create Entity</button>
        </div>
        
      </form>
      </div>
    </div>
  );
}
