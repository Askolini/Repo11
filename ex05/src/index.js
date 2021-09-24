myNestedArray = [["Toblerone, 5"], ["Milka, 3"]];

function myNestFunction(arr) {
    var myNestedArray = [...arr];
    return myNestedArray;
}

console.log(myNestFunction(myNestedArray));
module.exports = myNestFunction;