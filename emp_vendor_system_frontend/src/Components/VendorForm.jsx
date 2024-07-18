import React, { useState } from 'react';
import './forms.css'

const VendorForm = ({ addVendor }) => {
  const [vendor, setVendor] = useState({ name: '', email: '', upi_Id: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendor({ ...vendor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVendor(vendor);
    setVendor({ name: '', email: '', upi_Id: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="name" placeholder="Name" value={vendor.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={vendor.email} onChange={handleChange} required />
      <input type="text" name="upi_Id" placeholder="UPI" value={vendor.upi_Id} onChange={handleChange} required />
      <button type="submit">Add Vendor</button>
    </form>
  );
};

export default VendorForm;