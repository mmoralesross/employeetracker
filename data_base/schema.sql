DROP DATABASE IF EXISTS employeetracker;

CREATE DATABASE employeetracker;

USE employeetracker;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  INDEX dep_ind (department_id),
  FOREIGN KEY (department_id)
	REFERENCES department(id)
    ON DELETE CASCADE
  );
 
 
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NOT NULL,
  INDEX role_ind (role_id),
  FOREIGN KEY (role_id)
	REFERENCES role(id)
    ON DELETE CASCADE,
  INDEX man_ind (manager_id),
  FOREIGN KEY (manager_id)
	REFERENCES employee(id)   
);