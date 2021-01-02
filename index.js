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
         choices:['View all employees','']
     }  
   ]).then(function(response){
       console.log (response)

       if (response.Question1 === 'View all employees') {
           viewAllEmployees ();
       } 

        
   })

}

function viewAllEmployees (){
    connection.query ('SELECT * FROM employee', function(error, result){
        if (error) throw error;
        console.table (result)
    })
}
