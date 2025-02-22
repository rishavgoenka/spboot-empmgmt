import axios from 'axios';

const API_BASE = 'http://localhost:9081/api';

export const getEmployeeApi = async () => {
  try {
    const response = await axios.get(`${API_BASE}/viewAllEmp`);
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};

export const createEmployeeApi = async (employeeData) => {
  try {
    const response = await axios.post(`${API_BASE}/storeemp`, employeeData);
    return response.data;
  } catch (error) {
    console.error('Error creating employee:', error);
    throw error;
  }
};

export const updateEmployeeApi = async (id, employeeData) => {
  try {
    const response = await axios.put(`${API_BASE}/update-employee/${id}`, employeeData);
    return response.data;
  } catch (error) {
    console.error('Error updating employee:', error);
    throw error;
  }
};

export const deleteEmployeeApi = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE}/del-employee/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting employee:', error);
    throw error;
  }
};