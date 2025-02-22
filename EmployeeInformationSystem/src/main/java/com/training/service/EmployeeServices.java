package com.training.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.training.entity.Employee;
import com.training.repository.EmployeeRepository;

@Service
public class EmployeeServices {
	
    @Autowired
    private EmployeeRepository employeeRepository;  // Added private modifier
    
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee storeEmployee(Employee emp) {
		return employeeRepository.save(emp);
	}

    public Employee updateEmployee(Employee emp, Long id) {
		Employee employee = employeeRepository.findById(id).get();
		System.out.println(" Employee "+ employee);
		
		employee.setFirstName(emp.getFirstName());
		employee.setLastName(emp.getLastName());
		employee.setEmailId(emp.getEmailId());
		
		Employee updatedEmployee = employeeRepository.save(employee);	
		System.out.println("End of the method updateEmployee()");
		
		return updatedEmployee;
	}

    public void deleteEmployee(Long id) {
		
		// boolean flag = false;
		
		Employee employee = employeeRepository.findById(id).get();
		
		employeeRepository.delete(employee);
		
	}

}
