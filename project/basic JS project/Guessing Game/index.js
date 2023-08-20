
let answer1 =  Math.floor(Math.random()*10+1);
let answer2 =  Math.floor(Math.random()*1000+1);
let guesses = 0;


document.getElementById("submit").onclick = () => {
    // taking input value from user and storing
    let guessNo = document.getElementById("guess-no").value;


    if (guessNo === ''){
        guessNo = 0;
    }
    guesses++;

    if (guessNo < 11 && guessNo > 0){

        if (guessNo == answer1) {
            // if guess is correct change p2 html
            document.getElementById("p2").innerHTML = `You guess it right in ${guesses} guesses`;
            guesses = 0;

        } else if (guessNo < answer1) {
            // if guess is small change p2 html
            document.getElementById("p2").innerHTML = `${guessNo} Too Small`;
        } else if (guessNo > answer1) {
            // if guess is large change p2 html
            document.getElementById("p2").innerHTML = `${guessNo} Too large`;
        }
        document.getElementById("p3").innerHTML = `Total Guesses are ${guesses}`;
    } else {
        
        document.getElementById("p0").innerHTML = `Trying To Be over smart ?`
        document.getElementById("p1").innerHTML = `Now Pick a number between 1 - 1000`


        if (guessNo == answer2) {
            document.getElementById("p2").innerHTML = `You guess it right in ${guesses} guesses`;
            guesses = 0;

        } else if (guessNo < answer2) {
            document.getElementById("p2").innerHTML = `${guessNo} Too Small`;

        } else if (guessNo > answer2) {
            document.getElementById("p2").innerHTML = `${guessNo} Too large`;

        }

        document.getElementById("p3").innerHTML = `Total Guesses are ${guesses}`;
    }
    
}

document.getElementById("restart").onclick = () => {
    answer1 = Math.floor(Math.random()*10+1);
    answer2 = Math.floor(Math.random()*1000+1);
    guesses = 0;
    document.getElementById("p0").innerHTML = ``;
    document.getElementById("p1").innerHTML = `Pick a number between 1 - 10`
    document.getElementById("p3").innerHTML = ``;
    document.getElementById("p2").innerHTML = ``;

}