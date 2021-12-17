// create a function to get input from page

function getInput() {

    let inputOne = document.querySelector("#input1").value
    let inputTwo = document.querySelector("#input2").value
    let inputThree = document.querySelector("#input3").value
    let inputFour = document.querySelector("#input4").value

    console.log(inputOne);


}

document.getElementById("submitBttn").addEventListener('click', getInput);