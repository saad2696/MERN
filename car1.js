var express = require('express');
var app = express();

app.use(express.json());

var Car =  [
{
    Name:'Mehran' , 
    Color: 'red', 
    Price: 1000000,
     Make: 2017,
    Location:'Lahore'
},
{
    Name:'Cultus' , 
    Color: 'Blue', 
    Price: 1500000,
     Make: 2019,
    Location:'Lahore'
},
{
    Name:'Corolla' , 
    Color: 'Black', 
    Price: 2000000,
     Make: 2016,
    Location:'Karachi'
},
{
    Name:'Kia', 
    Color: 'red', 
    Price: 123456,
     Make: 2005,
    Location:'Karachi'
}
];

app.get('/api/listall',(req,res)=>
{
    res.send(Car);
});

app.get('/api/listbycolor',(req,res)=>
{
    
   var color = [];
    for(var i=0 ;i<Car.length;i++){

         
         color[i] = [{
             Name: Car[i].Name,
             Color: Car[i].Color
         }]
       
    }
    res.send(color);



    

});

app.get('/api/:make/:p1/:p2',(req,res)=>
{
    
    let carRange = Car.filter(car => car.Make > parseInt(req.params.make) && car.Price >= parseInt(req.params.p1) && car.Price<=parseInt(req.params.p2));
if(!carRange) res.status(404).send('No car in this range found');
    res.send(carRange);
});
app.post('/api/addcar',(req,res) => {

    var car= {
        Name:req.body.Name , 
        Color: req.body.Color, 
        Price: req.body.Price,
        Make: req.body.Make,
        Location:req.body.Location
    };

    Car.push(car);
    res.send(Car);
});
app.post('/api/constrain/addcar',(req,res) => {

    var car= {
        Name:req.body.Name , 
        Color: req.body.Color, 
        Price: req.body.Price,
        Make: req.body.Make,
        Location:req.body.Location
    };
    if (req.body.Color == 'red' && req.body.Price > 2000000 && req.body.Make > 2018){
        Car.push(car);
        res.send(Car);
    }else{
        res.status(404).send('Criteria Not Met')

    }

    
});

app.put('/api/update',(req,res)=>
{

    for(var i = 0; i < Car.length; i++){
        if(Car[i].Color == 'red')  Car[i].Price = Car[i].Price*1.1 ; 
    }
   
 
      res.send(Car);
});

app.put('/api/updateloc',(req,res)=>{
    for (var i=0 ; i<Car.length; i++){
        if(Car[i].Location=='Karachi') Car[i].Location='Islamabad';
    }
    res.send(Car);

});
app.delete('/api/delete/:year', (req, res) => {
    var car = Car.find(c => c.Make <= (parseInt(req.params.year)-10));
    if (!car) res.status(404).send('No car found');
    var carIndex = Car.indexOf(car);
    Car.splice(carIndex, 1);
    res.send(Car);
    });

    app.delete('/api/deletebyname/:name',(req,res)=>{
    let carByName = Car.find(c=> c.Name == req.params.name);
    let carLoc =  carByName.Location;
    if(carLoc =='Lahore'){
        res.status(404).send('Car with Location Lahore cannot be deleted')
    } else{
        let carIndex = Car.indexOf(carByName);
        Car.splice(carIndex,1);
        res.send(Car);
    }

    });

    app.get('/api/countcars',(req,res)=>{
        
        if ( Car.length == null){
            res.status(404).send('No cars in DataBase');
        }else{
            res.send('' +Car.length );
        }


    });

    app.get('/api/getitbyname/:a',(req,res)=>{
       let CarF = Car.find(c=> c.Name == req.params.a); 
        if(!CarF) res.status(404).send('Car of such name not found');
        res.send(CarF);

    });

    app.get('/api/searchbyconatrains/:loc/:p1/:p2',(req,res)=>{
        let CarFilter = Car.filter(c=> c.Location == req.params.loc && c.Price > req.params.p1 && c.Price < req.params.p2) ;
       if (CarFilter.length == 0) {
           res.status(404).send('No car in this constraints');}
           else{
            res.send(CarFilter);
           }
      
     });

     app.post('/api/enterywithconditions',(req,res)=>{
        var car= {
            Name:req.body.Name , 
            Color: req.body.Color, 
            Price: req.body.Price,
            Make: req.body.Make,
            Location:req.body.Location
        };
        if(req.body.Color=='red' && req.body.Price > 2000000 && req.body.Make > 2015 && req.body.Make < 2019 ){
            Car.push(car);
            res.send(Car);
        }else{
            res.status(404).send("Entery Criteria Not met");
        }
     });



app.listen(9999,()=>{console.log('Listening at 9999')});
