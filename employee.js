var express = require('express');
var app = express();
app.use(express.json());

var Employee= [
    {
        Name: 'Ali',
        Age: 45,
        Salary : 100000,
        Post:'Manager'
    }, 
    {
        Name: 'Azam',
        Age: 35,
        Salary : 80000,
        Post:'Employee'
    },
    {
        Name: 'Akram',
        Age: 25,
        Salary : 25000,
        Post:'Security'
    },
    {
        Name: 'Hira',
        Age: 40,
        Salary : 1000000,
        Post:'Manager'
    }

];

var Department= [
{
 Name: 'Accounts',
 Manager: 'Ali',
 NumberOfEmployees: 10
},
{
    Name: 'Production',
    Manager: 'Ali',
    NumberOfEmployees: 20
   },
   {
    Name: 'HR',
    Manager: 'Hira',
    NumberOfEmployees: 10
   }
];

app.get('/api/listemp',(req,res)=>{
 
     if(!Employee) res.status(404).send('No data of employee availaible');
     res.send(Employee);
 
});

app.get('/api/depdetail/:name',(req,res)=>{
 
    let empFind = Department.find(e => e.Name == req.params.name);
    if(!empFind) res.status(404).send('No Department with given name found');
     res.send(empFind);

});
app.get('/api/listmanagers',(req,res)=>{

   
    var ManDep = [];
    for(var i =0 ; i< Department.length;i++){
        ManDep[i]=[
         { Name: Department[i].Manager,
          Department: Department[i].Name
         } ]
    }
    res.send(ManDep);
   });

app.post('/api/a',(req,res)=>{
var employee =[
   {
    Name: req.body.Name,
    Age: req.body.Age,
    Salary:req.body.Salary,
    Post:req.body.Post

   } ];
Employee.push(employee);
res.send(Employee);

});
app.post('/api/newdepartment',(req,res)=>{
   let  EmpFind = Employee.find(e => e.Salary > 15000 && e.post== 'Employee');

   if(!EmpFind) res.status(404).send('Department cant be created');
   
    var department =[
       {
        Name: req.body.Name,
       Manager: req.body.Manager,
       NumberOfEmployees: req.body.NumberOfEmployees
    
       } ];
    Department.push(department);
    res.send(Department);
    
    });




app.listen(9090,()=>console.log('Listening at 9090'));