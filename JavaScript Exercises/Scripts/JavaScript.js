const printBox = document.getElementById("printBox");
var arraySet1 = [];
var arraySet2 = [];
var arraySet3 = [];
var arraySet4 = [];
var arraySet5 = [];
let btns = document.querySelectorAll('button');

for (i of btns) {
    i.addEventListener('click', function () {

        var input1 = document.getElementById("input1").value;
        var input2 = document.getElementById("input2").value;
        var input3 = document.getElementById("input3").value;
        var input4 = document.getElementById("input4").value;
        var input5 = document.getElementById("input5").value;
        arraySet1.splice(0,1,input1)
        arraySet2.splice(0, 1,input2)
        arraySet3.splice(0, 1,input3)
        arraySet4.splice(0, 1,input4)
        arraySet5.splice(0, 1,input5)
    })
}
document.getElementById("productBtn").addEventListener('click', function () {
    let productResult = math.multiply(arraySet1,arraySet2,arraySet3,arraySet4);
    printBox.innerHTML = productResult;

})

document.getElementById("minBtn").addEventListener('click', function () {
    let minResult = Math.min(arraySet1, arraySet2, arraySet3, arraySet4);
    printBox.innerHTML = minResult;
})

document.getElementById("maxBtn").addEventListener('click', function () {
    let maxResult = Math.max(arraySet1, arraySet2, arraySet3, arraySet4);
    printBox.innerHTML = maxResult;
})

document.getElementById("sumBtn").addEventListener('click', function () {
    let sumResult = math.add(arraySet1, arraySet2, arraySet3, arraySet4);
    printBox.innerHTML = sumResult;
})

document.getElementById("meanBtn").addEventListener('click', function () {
    let meanResult = math.mean(arraySet1, arraySet2, arraySet3, arraySet4);
    printBox.innerHTML = meanResult;
})

document.getElementById("factorBtn").addEventListener('click', function () {
    let factorResult = math.factorial(arraySet1);
    printBox.innerHTML = factorResult;
})

document.getElementById("fizzBtn").addEventListener('click', function () {
    var numberRange = [];
    for (let i = arraySet1; i <= arraySet2; i++) {
        numberRange.push(i);
    }
    printBox.innerHTML = numberRange;
})