// create a function to get input from page

let inputData = []

function getInput() {

    let inputOne = document.querySelector("#input1").value;
    let inputTwo = document.querySelector("#input2").value;
    let inputThree = document.querySelector("#input3").value;
    let inputFour = document.querySelector("#input4").value;

    inputData[0] = inputOne;
    inputData[1] = inputTwo;
    inputData[2] = inputThree;
    inputData[3] = inputFour;

    document.getElementById('memeText1').innerText = inputData[0];
    document.getElementById('memeText2').innerText = inputData[1];
    document.getElementById('memeText3').innerText = inputData[2];
    document.getElementById('memeText4').innerText = inputData[3];

    console.log(inputData)

   


}

document.getElementById("submitBttn").addEventListener('click', getInput);


