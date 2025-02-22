import React, { useEffect, useState } from 'react';
import { getEmployeeApi, deleteEmployeeApi, updateEmployeeApi } from '../services/employeeService';

const GetEmp = () => {
    const [empData, setEmpData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editEmp, setEditEmp] = useState(null);
    const [editForm, setEditForm] = useState({
        empId: '',
        firstName: '',
        lastName: '',
        emailId: ''
    });

    const getData = async () => {
        try {
            setLoading(true);
            const response = await getEmployeeApi();
            setEmpData(response);
            setError(null);
        } catch (error) {
            console.error('Failed to fetch employees:', error);
            setError('Failed to fetch employee data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this employee?')) {
            try {
                await deleteEmployeeApi(id);
                getData();
                alert('Employee deleted successfully');
            } catch (error) {
                alert('Error deleting employee');
            }
        }
    };

    const handleUpdate = async (id) => {
        try {
            await updateEmployeeApi(id, editForm);
            setEditEmp(null);
            getData();
            alert('Employee updated successfully');
        } catch (error) {
            alert('Error updating employee');
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="employee-container">
            <h2>Employee Directory</h2>
            
            {loading ? (
                <div className="loading-message">Loading employees...</div>
            ) : error ? (
                <div className="error-message">
                    {error}
                    <button onClick={getData} className="retry-button">
                        Retry
                    </button>
                </div>
            ) : (
                <table className="employee-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Employee ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empData.map((data) => (
                            editEmp === data.id ? (
                                <tr key={data.id} className="edit-row">
                                    <td>{data.id}</td>
                                    <td>
                                        <input type="text" 
                                            value={editForm.empId}
                                            onChange={(e) => setEditForm({...editForm, empId: e.target.value})}
                                        />
                                    </td>
                                    <td>
                                        <input type="text" 
                                            value={editForm.firstName}
                                            onChange={(e) => setEditForm({...editForm, firstName: e.target.value})}
                                        />
                                    </td>
                                    <td>
                                        <input type="text" 
                                            value={editForm.lastName}
                                            onChange={(e) => setEditForm({...editForm, lastName: e.target.value})}
                                        />
                                    </td>
                                    <td>
                                        <input type="email" 
                                            value={editForm.emailId}
                                            onChange={(e) => setEditForm({...editForm, emailId: e.target.value})}
                                        />
                                    </td>
                                    <td>
                                        <button onClick={() => handleUpdate(data.id)}>Save</button>
                                        <button onClick={() => setEditEmp(null)}>Cancel</button>
                                    </td>
                                </tr>
                            ) : (
                                <tr key={data.id} className="employee-row">
                                    <td>{data.id}</td>
                                    <td>{data.empId || 'N/A'}</td>
                                    <td>{data.firstName}</td>
                                    <td>{data.lastName}</td>
                                    <td>{data.emailId}</td>
                                    <td>
                                        <button onClick={() => {
                                            setEditEmp(data.id);
                                            setEditForm({
                                                empId: data.empId,
                                                firstName: data.firstName,
                                                lastName: data.lastName,
                                                emailId: data.emailId
                                            });
                                        }}>Edit</button>
                                        <button onClick={() => handleDelete(data.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        ))}
                    </tbody>
                </table>
            )}
            
            {!loading && (
                <button onClick={getData} className="refresh-button">
                    Refresh Data
                </button>
            )}
        </div>
    );
};

export default GetEmp;