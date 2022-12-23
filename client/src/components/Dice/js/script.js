let images = ["../static/img/colors/dice1.png",
    "../static/img/colors/dice2.png",
    "../static/img/colors/dice3.png",
    "../static/img/colors/dice4.png",
    "../static/img/colors/dice5.png",
    "../static/img/colors/dice6.png"
];
let dice = document.querySelectorAll("img");
let index, smallerDice, rollsLeft, dieOneValue, dieTwoValue = 0;

function game() {   
    //initialize
    document.querySelector("#result").innerHTML = ""
    document.getElementById("rollStart").style.display = 'block';
    document.getElementById("reset").style.display = 'none';
    console.log("new roll");
    dieOneValue = Math.floor(Math.random() * 6);
    dieTwoValue = Math.floor(Math.random() * 6);

    //show dice
    document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
    document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);

    document.getElementById("instr").style.display = 'none'; 

    if (dieOneValue == dieTwoValue) {
        document.querySelector("#result").innerHTML = "Win!"
        document.getElementById("rollStart").style.display = 'none';
        document.getElementById("reroll").style.display = 'none';
        document.getElementById("reset").style.display = 'block';
        return;
    } else if (dieOneValue < dieTwoValue) {
        smallerDice = 1;
        rollsLeft = dieOneValue + 1;
    } else {
        smallerDice = 2;
        rollsLeft = dieTwoValue + 1;
    }
    document.getElementById("reroll").style.display = 'block';
    document.getElementById("rollStart").style.display = 'none';

    console.log("off to reroll!");
    index = 1;
}


function reroll() {
    //document.querySelector("#tries").innerHTML = "Tries Left: " + rollsLeft;
    console.log("Index " + index);
    console.log("rollsLeft " + rollsLeft);
    if (index == rollsLeft) {
        console.log("ggs");
        document.querySelector("#result").innerHTML = "Loser!"
        document.getElementById("reroll").style.display = 'none';
        console.log("RE ROLL BUTTON HIDDEN");
        document.getElementById("reset").style.display = 'block';


    } else {
        let newRoll = Math.floor(Math.random() * 6);
        if (smallerDice == 1)
            document.querySelector("#die-1").setAttribute("src", images[newRoll]);
        else
            document.querySelector("#die-2").setAttribute("src", images[newRoll]);

        index++;
        let isWinner = checkWin(newRoll);
        if (isWinner) {
            document.querySelector("#result").innerHTML = "winner!"
            document.getElementById("reroll").style.display = 'none';
            reset();
        }
    }
}


function checkWin(newRoll) {
    if (smallerDice == 1)
        return dieTwoValue == newRoll;
    else
        return dieOneValue == newRoll;
}

function reset() {
  index, smallerDice, rollsLeft, dieOneValue, dieTwoValue = 0;
  game()

}

document.getElementById("reroll").style.display = 'none';
document.getElementById("reset").style.display = 'none';
