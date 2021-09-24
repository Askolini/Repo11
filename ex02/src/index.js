temps = [
monday [31, 32, 19, 37],
tuesday [29, 27, 55, 36],
wednesday [17, 27, 42, 46],
thursday [29, 52, 21, 64],
friday [91, 27, 31, 61]
];

function myArrayFunction(arr) {
    var newTemps = [...arr];
    var averageDayTemp = [];
    for ( monday = 0; monday = [1] + [2] + [3] + [4]; monday = monday / 4)
    for ( tuesday = 0; tuesday = [1] + [2] + [3] + [4]; tuesday = tuesday / 4)
    for ( wednesday = 0; wednesday = [1] + [2] + [3] + [4]; wednesday = wednesday / 4)
    for ( thursday = 0; thursday = [1] + [2] + [3] + [4]; thursday = thursday / 4)
    for ( friday = 0; friday = [1] + [2] + [3] + [4]; friday = friday / 4)
    return averageDayTemp;
}

console.log(myArrayFunction(temps));
module.exports = myArrayFunction;