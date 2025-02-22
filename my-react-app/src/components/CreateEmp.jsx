import React, { useState } from 'react';
import { createEmployeeApi } from '../services/employeeService';

const CreateEmp = () => {
  const [formData, setFormData] = useState({
    empId: '',
    firstName: '',
    lastName: '',
    emailId: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEmployeeApi(formData);
      alert('Employee created successfully!');
      setFormData({ empId: '', firstName: '', lastName: '', emailId: '' });
    } catch (error) {
      alert('Error creating employee');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <h2 style={{ textAlign: 'center' }}>Create Employee</h2>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td><label htmlFor="empId">Employee ID:</label></td>
                <td>
                  <input type="text" id="empId" name="empId" 
                         value={formData.empId} onChange={(e) => setFormData({...formData, empId: e.target.value})} />
                </td>
              </tr>
              <tr>
                <td><label htmlFor="firstName">First Name:</label></td>
                <td>
                  <input type="text" id="firstName" name="firstName"
                         value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
                </td>
              </tr>
              <tr>
                <td><label htmlFor="lastName">Last Name:</label></td>
                <td>
                  <input type="text" id="lastName" name="lastName"
                         value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
                </td>
              </tr>
              <tr>
                <td><label htmlFor="emailId">Email:</label></td>
                <td>
                  <input type="email" id="emailId" name="emailId"
                         value={formData.emailId} onChange={(e) => setFormData({...formData, emailId: e.target.value})} />
                </td>
              </tr>
              <tr>
                <td colSpan="2" style={{ textAlign: 'center' }}>
                  <button type="submit">Create</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default CreateEmp;