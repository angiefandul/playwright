// Loops
//for i loop

for (let i=0; i<5; i++) {
    console.log('Hello world!' + i)


};

var cars = ["Volvo", "Toyota", "Tesla"]
// for of loop
for (let car of cars) {   //car holding the value of the car
    console.log(car)
    if(car == "Toyota") {
        break
    }
};

// ES6 syntax for each loop

cars.forEach( car => {
    console.log(car)
})


const modems = ["Casa", "Hilton", "Metaswich"]
modems.forEach(modem=>{
    console.log(modem)
});


const veggies = ["Cabbage", "Cucumber", "Tomatoes", "Potato"]
veggies.forEach(veggie=>{
    console.log(veggie)
});

