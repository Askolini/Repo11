myPetsArray = ["Dog", "Cat"];

function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
    myPetsArray = myNewPets;
    myNewPets.push("Bird", "Fish");
    myNewPets.shift();
    myNewPets.pop();
    myNewPets.unshift("Lion");
    var firstPet = myNewPets[0];
    var lastPet = myNewPets[3];
    return myNewPets;
}

console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;