import React, { useState } from 'react';
import './forms.css'
const EmailForm = ({ sendEmail }) => {
    const [vendors, setVendors] = useState([{ name: "", email: "", upi_Id: "" }]);

    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const newVendors = [...vendors];
        newVendors[index][name] = value;
        setVendors(newVendors);
    };

    const addVendor = () => {
        setVendors([...vendors, { name: "", email: "", upi_Id: "" }]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail(vendors);
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            {vendors.map((vendor, index) => (
                <div key={index}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={vendor.name}
                        onChange={(e) => handleChange(index, e)}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={vendor.email}
                        onChange={(e) => handleChange(index, e)}
                        required
                    />
                    <input
                        type="text"
                        name="upi_Id"
                        placeholder="UPI ID"
                        value={vendor.upi_Id}
                        onChange={(e) => handleChange(index, e)}
                    />
                </div>
            ))}
            <button type="button" onClick={addVendor}>Add Vendor</button><br></br>
            <div/>
            <button type="submit">Send Email</button>
        </form>
    );
};

export default EmailForm;