import React, { useState, useEffect } from 'react';
import VendorForm from '../Components/VendorForm';
import VendorList from '../Components/VendorList';
import EmailForm from '../Components/EmailForm';
import axios from 'axios';
import EmailList from '../Components/EmailList';
import './Pages.css';

const Vendor = () => {
  const [vendors, setVendors] = useState([]);
  const [emails, setemails] = useState([]);
  const [Id, setId] = useState('');
  

  useEffect(() => {
    axios.get('http://localhost:8080/vendor/fetch')
      .then(response => {
        setVendors(response.data);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8080/vendor/getemails')
      .then(response => {
        setemails(response.data);
      });
  }, []);

  const addVendor = (vendor) => {
    axios.post('http://localhost:8080/vendor/create', vendor)
      .then(response => {
        setVendors([...vendors, response.data]);
      });
  };

  const sendEmail = (vendorEmails) => {
    axios.post(`http://localhost:8080/vendor/email?Id=${Id}`, vendorEmails)
      .then(response => {
        console.log('Emails sent:', response.data);
      });
  };



  return (
    <div className="page">
      <h1>Manage Vendors</h1>
      <VendorForm addVendor={addVendor} />
      <VendorList vendors={vendors} />
      <h1>Send Email to Vendors</h1>
            <div>
                <input 
                    type="text" 
                    placeholder="Enter ID" 
                    value={Id} 
                    onChange={(e) => setId(e.target.value)} 
                />
                <EmailForm sendEmail={sendEmail} />
            </div>
      <EmailList emails={emails}></EmailList>
    </div>
  );
};

export default Vendor;