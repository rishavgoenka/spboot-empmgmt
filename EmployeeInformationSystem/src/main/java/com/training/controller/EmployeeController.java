package com.training.controller;

import java.util.HashMap;
// import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.entity.Employee;
import com.training.service.EmployeeServices;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class EmployeeController {
    public static final Logger logger = Logger.getLogger(EmployeeController.class.getName());

    @Autowired
    private EmployeeServices employeeServices;

    @GetMapping("/viewAllEmp")
    public List<Employee> getAllEmpDetails() {
        List<Employee> listOfEmp = employeeServices.getAllEmployees();
        return listOfEmp;
    }

    // Create Employee Record
	@PostMapping("/storeemp")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeServices.storeEmployee(employee);
	}

    // Update employee rest api	
	@PutMapping("/update-employee/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails){
		Employee emp = employeeServices.updateEmployee(employeeDetails, id);
		return ResponseEntity.ok(emp);
	}

    //delete employee rest api  
		@DeleteMapping("/del-employee/{id}")
		public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable Long id){			
			employeeServices.deleteEmployee(id);			
			Map<String, Boolean> response = new HashMap<String, Boolean>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);			
		}
}