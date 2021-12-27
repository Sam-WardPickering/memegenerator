const capture = document.getElementById('capture')

document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
       
        case 39:
           nextMeme();
            break;
        case 37:
            prevMeme();
            break;


    }
  });

// create a function to get input from page

document.getElementById("submitBttn").addEventListener('click', getInput);
document.getElementById("nextBttn").addEventListener('click', nextMeme);
document.getElementById("prevBttn").addEventListener('click', prevMeme);
document.getElementById("resetBttn").addEventListener('click', resetMeme);


memeText1 = document.getElementById('memeText1')

const imageName = document.querySelector('.meme-image');
const templates = ['/images/meme.jpeg', '/images/lisa.png', '/images/clown.png', '/images/buttons.jpeg', '/images/everywhere.jpeg', '/images/wonka.jpeg']

let inputData = []
let output0 = 'memeText1'
let output1 = 'memeText2'
let output2 = 'memeText3'
let output3 = 'memeText4'
let output4 = 'memeText10'

let memeNumber = 0

function getInput() {

    let inputOne = document.querySelector("#input1").value;
    let inputTwo = document.querySelector("#input2").value;
    let inputThree = document.querySelector("#input3").value;
    let inputFour = document.querySelector("#input4").value;
    let inputFive = document.querySelector("#input5").value;

    inputData[0] = inputOne;
    inputData[1] = inputTwo;
    inputData[2] = inputThree;
    inputData[3] = inputFour;
    inputData[4] = inputFive;

    document.getElementById(output0).innerText = inputData[0];
    document.getElementById(output1).innerText = inputData[1];
    document.getElementById(output2).innerText = inputData[2];
    document.getElementById(output3).innerText = inputData[3];
    document.getElementById(output4).innerText = inputData[4];

    console.log(inputData)

}

function nextMeme(){
    resetMeme()
    if(memeNumber === 5){
        memeNumber = 5 
    } else {
        memeNumber ++
        document.querySelector("#input1").value = '';
        document.querySelector("#input2").value = '';
        document.querySelector("#input3").value = '';
        document.querySelector("#input4").value = '';
    }
    imageName.src = templates[memeNumber]
    
    pageLoad()
}

function prevMeme(){
    resetMeme()
    if(memeNumber === 0){
        memeNumber = 0
    }else {
        memeNumber --
        document.querySelector("#input1").value = '';
        document.querySelector("#input2").value = '';
        document.querySelector("#input3").value = '';
        document.querySelector("#input4").value = '';
        document.querySelector("#input5").value = '';
    }

    imageName.src = templates[memeNumber]
    pageLoad()

}

//      NEW CHANGES     //
//      Create reset button for whole page      //

function resetMeme() {

    document.getElementById('memeText1').innerText = "";
    document.getElementById('memeText2').innerText = "";
    document.getElementById('memeText3').innerText = "";
    document.getElementById('memeText4').innerText = "";
    document.getElementById('memeText5').innerText = "";
    document.getElementById('memeText6').innerText = "";
    document.getElementById('memeText7').innerText = "";
    document.getElementById('memeText8').innerText = "";
    document.getElementById('memeText9').innerText = "";
    document.getElementById('memeText10').innerText = "";
    document.getElementById('memeText11').innerText = "";
    document.getElementById('memeText12').innerText = "";
    document.getElementById('memeText13').innerText = "";
    document.getElementById('memeText14').innerText = "";
    document.getElementById('memeText15').innerText = "";
    document.getElementById('memeText16').innerText = "";
    document.getElementById('imageGenerated').innerHTML = "";

}


//pageload function

window.addEventListener('load', pageLoad)

function pageLoad(){
    if(memeNumber === 0){
        output0 = 'memeText1'
        output1 = 'memeText2'
        output2 = 'memeText3'
        output3 = 'memeText4'
        document.getElementById('inputCont1').style.visibility = "visible";
        document.getElementById('inputCont2').style.visibility = "visible";
        document.getElementById('inputCont3').style.visibility = "visible";
        document.getElementById('inputCont4').style.visibility = "visible";
        document.getElementById('inputCont5').style.visibility = "hidden";
       // document.getElementById('buttonCont').style.marginTop = "-10px";


    }
    
    if(memeNumber === 1){
    output0 = 'memeText5';
    document.getElementById('inputCont1').style.visibility = "visible";
    document.getElementById('inputCont2').style.visibility = "hidden";
    document.getElementById('inputCont3').style.visibility = "hidden";
    document.getElementById('inputCont4').style.visibility = "hidden";
    document.getElementById('inputCont5').style.visibility = "hidden";
    //document.getElementById('buttonCont').style.marginTop = "-70px";
    } 
    
    if(memeNumber === 2){
        output0 = 'memeText6'
        output1 = 'memeText7'
        output2 = 'memeText8'
        output3 = 'memeText9'
        output4 = 'memeText10'
        document.getElementById('inputCont1').style.visibility = "visible";
        document.getElementById('inputCont2').style.visibility = "visible";
        document.getElementById('inputCont3').style.visibility = "visible";
        document.getElementById('inputCont4').style.visibility = "visible";
        document.getElementById('inputCont5').style.visibility = "visible";
        //document.getElementById('buttonCont').style.marginTop = "10px";

        } 
        
    if(memeNumber === 3){
        output0 = 'memeText11'
        output1 = 'memeText12'
            // memeText1.innerText = '3'
            document.getElementById('inputCont1').style.visibility = "visible";
            document.getElementById('inputCont2').style.visibility = "visible";
            document.getElementById('inputCont3').style.visibility = "hidden";
            document.getElementById('inputCont4').style.visibility = "hidden";
            document.getElementById('inputCont5').style.visibility = "hidden";
            //document.getElementById('buttonCont').style.marginTop = "-50px";

            } 
            
    if(memeNumber === 4){
        output0 = 'memeText13'
        output1 = 'memeText14'
        document.getElementById('inputCont1').style.visibility = "visible";
        document.getElementById('inputCont2').style.visibility = "visible";
        document.getElementById('inputCont3').style.visibility = "hidden";
        document.getElementById('inputCont4').style.visibility = "hidden";
        document.getElementById('inputCont5').style.visibility = "hidden";
                } 
                
    if(memeNumber === 5){
        output0 = 'memeText15'
        output1 = 'memeText16'
        document.getElementById('inputCont1').style.visibility = "visible";
        document.getElementById('inputCont2').style.visibility = "visible";
        document.getElementById('inputCont3').style.visibility = "hidden";
        document.getElementById('inputCont4').style.visibility = "hidden";
        document.getElementById('inputCont5').style.visibility = "hidden";
                    } 

}


function save() {

    html2canvas(capture).then(canvas => {
        document.getElementById('imageGenerated').appendChild(canvas)
    });
    
}