const mysql = require ('mysql')
const inquirer = require ('inquirer')
require ('console.table')
const login = require ('./login.js')
const connection = mysql.createConnection({
    host: login.host,
    user: login.user,
    password: login.password,
    database: 'employeetracker'
  });

connection.connect ();
start();

function start (){
   inquirer.prompt ([
     {
         type: 'list', 
         name: 'Question1',
         message: 'What do you want to do?',
         choices:['View all employees',
                   'View all employees by roles',
                   'View all employees by department',
                   'Update Employee',
                   'Add Employee',
                   'Add Role',
                   'Add Department',
        ]
     }  
   ]).then(function(response){
       console.log (response)

        if (response.Question1 === 'View all employees') {
           viewAllEmployees ();
        }
        if (response.Question1 === 'View all employees by roles') {
            viewAllEmployeesByRole ();
        }
        if (response.Question1 === 'View all employees by department') {
                viewAllEmployeesByDepartment ();     

       } 

        
   })

}

function viewAllEmployees (){
    connection.query ('SELECT * FROM employee', function(error, result){
        if (error) throw error;
        console.table (result)
    })
}

function viewAllEmployeesByRole (){
    connection.query ('SELECT role.title FROM role', function(error, result){
        if (error) throw error;
        let roles= []

        result.forEach(role => {
            roles.push (role.title)
            console.log (roles)
        });

        inquirer.prompt ([
           {
            type: 'list', 
            name: 'QuestionRole',
            message: 'Choose a role',
            choices: roles
           
           } 
        
        ]) .then(function(result){
            console.log (result.QuestionRole)
            connection.query (`SELECT employee.first_name, employee.last_name 
            FROM employee LEFT JOIN role ON role.id = employee.role_id 
            WHERE role.title = '${result.QuestionRole}'`, function (error, response){
                if (error) throw error;   
             console.table (response)       
            })
        })
    })
}