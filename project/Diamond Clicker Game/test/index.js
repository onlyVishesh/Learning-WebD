let game = {
    diamond:document.querySelector(".diamond-count"),

    incrementDiamond: function(x){
        this.diamond.innerHTML = parseFloat(this.diamond.innerHTML) + x
        CPScount.innerHTML = cps 
    }

}


// let diamond = document.querySelector(".diamond-count")
let CPScount = document.querySelector(".cps-span")

let x =1
let n = 0
let n2 = 0
let cps = 0

let upgrade = {
    name: [
        "Pickaxe",
        "Miner",
        "Grinder",
        "Driller",
        "Mines"

],
    image:["fist/"],
    cost:[10,100,1000,10000,10000],
    level:[0,0,0,0,0],
    description:[] ,

    buyUpgrade: function(index){
        if (parseFloat(game.diamond.innerHTML) >= parseFloat(pickaxeCost.innerHTML)) {
            game.diamond.innerHTML = parseFloat(game.diamond.innerHTML) - parseFloat(pickaxeCost.innerHTML)
            pickaxeLevel.innerHTML = parseFloat(pickaxeLevel.innerHTML) +1;
            x = x+Math.pow(2,n);
            n++;
            clickIncrease.innerHTML = Math.pow(2,n+1)
            pickaxeCost.innerHTML = parseFloat(pickaxeCost.innerHTML) + Math.floor(Math.pow(2.35,n))*10
            changeMinerScr();
    
        }
    }

}



// To increase no of diamonds

// function incrementDiamond(x){
//     game.diamond.innerHTML = parseFloat(game.diamond.innerHTML) + x
//     CPScount.innerHTML = cps 
// }

document.getElementById("diamond").onclick = () => {
    incrementDiamond(x);
}

// For pickaxe Upgrade

let pickaxeCost = document.querySelector(".pickaxe-cost")
let pickaxeLevel = document.querySelector(".pickaxe-level")
let clickIncrease = document.querySelector(".click-increase")

let buyPickaxe = () => {
    if (parseFloat(game.diamond.innerHTML) >= parseFloat(pickaxeCost.innerHTML)) {
        game.diamond.innerHTML = parseFloat(game.diamond.innerHTML) - parseFloat(pickaxeCost.innerHTML)
        pickaxeLevel.innerHTML = parseFloat(pickaxeLevel.innerHTML) +1;
        x = x+Math.pow(2,n);
        n++;
        clickIncrease.innerHTML = Math.pow(2,n+1)
        pickaxeCost.innerHTML = parseFloat(pickaxeCost.innerHTML) + Math.floor(Math.pow(2.35,n))*10
        changeMinerScr();

    }
}




function changeMinerScr() {
    switch (true) {
        case parseFloat(pickaxeLevel.innerHTML)<5:
            document.querySelector(".pickaxe-icon").src ="../assets/pickaxes/fist.png"
          break;
        case parseFloat(pickaxeLevel.innerHTML)<10:
            document.querySelector(".pickaxe-icon").src ="../assets/pickaxes/Bronze_Pickaxe_m.png"
          break;
        case parseFloat(pickaxeLevel.innerHTML)<15:
            document.querySelector(".pickaxe-icon").src = "../assets/pickaxes/Iron_Pickaxe_m.png"
            break;
        case parseFloat(pickaxeLevel.innerHTML)<20:
            document.querySelector(".pickaxe-icon").src = "../assets/pickaxes/Steel_Pickaxe_m.png"
            break;
        case parseFloat(pickaxeLevel.innerHTML)<25:
            document.querySelector(".pickaxe-icon").src = "../assets/pickaxes/Crimsteel_Pickaxe_m.png"
            break;
        case parseFloat(pickaxeLevel.innerHTML)<30:
            document.querySelector(".pickaxe-icon").src = "../assets/pickaxes/Mythan_Pickaxe_m.png"
            break;
        case parseFloat(pickaxeLevel.innerHTML)<35:
            document.querySelector(".pickaxe-icon").src = "../assets/pickaxes/Cobalt_Pickaxe_m.png"
            break;
        case parseFloat(pickaxeLevel.innerHTML)<40:
            document.querySelector(".pickaxe-icon").src = "../assets/pickaxes/Varaxite_Pickaxe_m.png"
            break;
        case parseFloat(pickaxeLevel.innerHTML)<45:
            document.querySelector(".pickaxe-icon").src = "../assets/pickaxes/Magic_Pickaxe_m.png"
            break;
        case parseFloat(pickaxeLevel.innerHTML)<50:
            document.querySelector(".pickaxe-icon").src = "../assets/pickaxes/Umbral_Pickaxe_m.png"
            break;
        case parseFloat(pickaxeLevel.innerHTML)<55:
            document.querySelector(".pickaxe-icon").src = "../assets/pickaxes/Ancient_Pickaxe_m.png"
            break;
    }
      }

document.querySelector(".pickaxe-upgrade").onclick = () => {
    buyPickaxe() }


// For miner Upgrade

let minerCost = document.querySelector(".miner-cost")
let minerLevel = document.querySelector(".miner-level")
let cpsIncrease = document.querySelector(".cps-increase")

let buyMiner = () => {
    if (parseFloat(game.diamond.innerHTML) >= parseFloat(minerCost.innerHTML)) {
        game.diamond.innerHTML = parseFloat(game.diamond.innerHTML) - parseFloat(minerCost.innerHTML)
        minerLevel.innerHTML = parseFloat(minerLevel.innerHTML) + 1;
        cps = cps+Math.floor(Math.pow(1.7,n2));
        n2++;
        cpsIncrease.innerHTML = Math.floor(Math.pow(1.7,n2+1))
        minerCost.innerHTML = parseFloat(minerCost.innerHTML) + Math.floor(Math.pow(1.9,n2+2))*10
        changeMinerScr();

    }
}

document.querySelector(".miner-upgrade").onclick = () => {
    buyMiner() }

setInterval(() => {incrementDiamond(cps)},1000)



    // trying to create a click per second counter
// function countclick(cps) {
//     var x1 = 0
//     let sum = 0

//     document.getElementById("diamond").onclick = () => {
//         return x1++
//     }
//     console.log(x1)

// }
// setInterval(() => {countclick(cps)},5000)


// Saving and loading data (local storage)

function saveGame() {
    let gameSave = {
        diamondValue: parseFloat(game.diamond.innerHTML),
        CPScountValue: parseFloat(CPScount.innerHTML),
        xValue: x,
        nValue:n,
        cpsValue:cps,


        // saving pickaxe upgrade data

        pickaxeCostValue:parseFloat(pickaxeCost.innerHTML),
        pickaxeLevelValue:parseFloat(pickaxeLevel.innerHTML),
        clickIncreaseValue:parseFloat(clickIncrease.innerHTML),
        pickaxeImageSrc : document.querySelector(".pickaxe-icon").src,

        // saving miner upgrade data

        n2Value:n2,
        minerCostValue:parseFloat(minerCost.innerHTML),
        minerLevelValue:parseFloat(minerLevel.innerHTML),
        cpsIncreaseValue:parseFloat(cpsIncrease.innerHTML),
        minerImageSrc : document.querySelector(".pickaxe-icon").src,




    }
    localStorage.setItem("gameSave",JSON.stringify(gameSave))
}

setInterval(() => {
    saveGame();
},10000)

function loadGame(){
    let savedGame = JSON.parse(localStorage.getItem("gameSave"))

    if (typeof savedGame.diamondValue !== "undefined") {
        diamond.innerHTML = savedGame.diamondValue;
    }
    if (typeof savedGame.CPScountValue !== "undefined") {
        CPScount.innerHTML = savedGame.CPScountValue;
    }
    if (typeof savedGame.cpsValue !== "undefined") {
        cps = savedGame.cpsValue;
    }
    if (typeof savedGame.xValue !== "undefined") {
        x = savedGame.xValue;
    }
    if (typeof savedGame.nValue !== "undefined") {
        n = savedGame.nValue;
    }
    


    // loading pickaxe upgrade data

    if (typeof savedGame.pickaxeCostValue !== "undefined") {
        pickaxeCost.innerHTML = savedGame.pickaxeCostValue;
    }
    if (typeof savedGame.pickaxeLevelValue !== "undefined") {
        pickaxeLevel.innerHTML = savedGame.pickaxeLevelValue;
    }
    if (typeof savedGame.clickIncreaseValue !== "undefined") {
        clickIncrease.innerHTML = savedGame.clickIncreaseValue;
    }
    if (typeof savedGame.pickaxeImageSrc !== "undefined") {
        document.querySelector(".pickaxe-icon").src = savedGame.pickaxeImageSrc;
    }


    // loading miner upgrade data


    if (typeof savedGame.n2Value !== "undefined") {
        n2 = savedGame.n2Value;
    }
    if (typeof savedGame.minerCostValue !== "undefined") {
        minerCost.innerHTML = savedGame.minerCostValue;
    }
    if (typeof savedGame.minerLevelValue !== "undefined") {
        minerLevel.innerHTML = savedGame.minerLevelValue;
    }
    if (typeof savedGame.cpsIncreaseValue !== "undefined") {
        cpsIncrease.innerHTML = savedGame.cpsIncreaseValue;
    }
    if (typeof savedGame.minerImageSrc !== "undefined") {
        document.querySelector(".miner-icon").src = savedGame.minerImageSrc;
    }
}

// loading data of refresh
window.onload = () => {
    loadGame()
}

// save data on ctrl + s
document.addEventListener("keydown",function(event){
    if(event.ctrlKey && event.which==83){
        event.preventDefault()
        saveGame()
    }
},false)

function resetGame() {
    if(confirm("Do you want to reset the game ?")){
        let gameSave = {};
        localStorage.setItem("gameSave", JSON.stringify(gameSave));
        location.reload(); 
    }

}
