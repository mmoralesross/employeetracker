INSERT INTO department (name)
VALUES ('Engineering'),
('Sales'),
('Legal Team'),
('Finance');

INSERT INTO role (title, salary, department_id)
VALUES ('Engineer', 85000, 1),
('Salesman', 45000, 2),
('Legal Team', 75000, 3),
('Accountant', 45000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Kelly', 'Gonzales', 1, NULL ),
('Josh', 'Hernandez', 2, 1),
('Leanne', 'Morales', 3, 1),
('Timmy','Turner', 4, 1);