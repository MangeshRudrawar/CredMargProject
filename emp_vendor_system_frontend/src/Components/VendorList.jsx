import React from 'react';
import './List.css';
const VendorList = ({ vendors }) => {
  return (
    <div className="list">
      <h2>Vendors List</h2>
      <ul>
        {vendors.map((vendor) => (
          <li key={vendor.email}>
            {vendor.name}, {vendor.email}, {vendor.upi_Id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VendorList;