# Basic Employee Management System
(CRUD Operations) using spring boot and react

## Prerequisites
- **Java JDK 21** (Make sure you have it installed)
- **MySQL** (For database)
- **Maven** (For backend)
- **Node.js & npm** (For frontend)


## 1. Setup Database in MySQL

1. Open MySQL and create the database:
   ```sql
   CREATE DATABASE employee_db;
   ```
2. Switch to the database:
   ```sql
   USE employee_db;
   ```
3. Create the `employees` table:
   ```sql
   CREATE TABLE employees (
       id BIGINT NOT NULL AUTO_INCREMENT,
       email_id VARCHAR(255),
       emp_id VARCHAR(255),
       first_name VARCHAR(255),
       last_name VARCHAR(255),
       PRIMARY KEY (id)
   );
   ```

---

## 2. Configure Backend (Spring Boot)

1. Open `EmployeeInformationSystem/src/main/resources/application.properties` and update line 7:
   ```properties
   spring.datasource.password={your_mysql_password}
   ```

2. Navigate to the backend directory:
   ```sh
   cd EmployeeInformationSystem
   ```

3. Start the backend server:
   ```sh
   mvn spring-boot:run
   ```
   The backend APIs will be available at: [http://localhost:9081/api/](http://localhost:9081/api/)

---

## 3. Setup Frontend (React)

1. Open a new terminal and navigate to the frontend directory:
   ```sh
   cd my-react-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the frontend server:
   ```sh
   npm run dev
   ```
   The frontend will be available at: [http://localhost:5173/](http://localhost:5173/)

---

## 4. Running the Project
- **Ensure MySQL is running**
- **Start the backend first**, then the frontend
- Access APIs at: [http://localhost:9081/api/](http://localhost:9081/api/)
- Open the UI at: [http://localhost:5173/](http://localhost:5173/)
