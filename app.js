// create a function to get input from page

let inputData = []

function getInput() {

    let inputOne = document.querySelector("#input1").value
    let inputTwo = document.querySelector("#input2").value
    let inputThree = document.querySelector("#input3").value
    let inputFour = document.querySelector("#input4").value

    inputData[0] = inputOne;

   


}

document.getElementById("submitBttn").addEventListener('click', getInput);


