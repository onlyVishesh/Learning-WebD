let gem = document.querySelector(".gem-count")
let x =1
let n = 0

function incrementGem(){
    gem.innerHTML = parseFloat(gem.innerHTML) + x

}

document.getElementById("gem").onclick = () => {
    incrementGem();
}

let pickaxeCost = document.querySelector(".pickaxe-cost")
let pickaxeLevel = document.querySelector(".pickaxe-level")

let buyPickaxe = () => {
    if (parseFloat(gem.innerHTML) >= parseFloat(pickaxeCost.innerHTML)) {
        gem.innerHTML = parseFloat(gem.innerHTML) - parseFloat(pickaxeCost.innerHTML)
        pickaxeLevel.innerHTML = parseFloat(pickaxeLevel.innerHTML) +1;
        x = x+Math.pow(2,n);
        n++;
        document.querySelector(".click-increase").innerHTML = Math.pow(2,n+1)
        pickaxeCost.innerHTML = parseFloat(pickaxeCost.innerHTML) + Math.floor(Math.pow(2.3,n))*10
        changeMinerScr();

    }
}


function changeMinerScr() {
    switch (true) {
        case parseFloat(pickaxeLevel.innerHTML)<5:
            document.querySelector(".pickaxe-icon").src ="./assets/pickaxes/fist.png"
          break;
        case parseFloat(pickaxeLevel.innerHTML)<10:
            document.querySelector(".pickaxe-icon").src ="./assets/pickaxes/Bronze_Pickaxe_m.png"
          break;
        case parseFloat(pickaxeLevel.innerHTML)<15:
            document.querySelector(".pickaxe-icon").src = "assets/pickaxes/Iron_Pickaxe_m.png"
            break;
        case parseFloat(pickaxeLevel.innerHTML)<20:
            document.querySelector(".pickaxe-icon").src = "assets/pickaxes/Steel_Pickaxe_m.png"
            break;
        case parseFloat(pickaxeLevel.innerHTML)<25:
            document.querySelector(".pickaxe-icon").src = "assets/pickaxes/Crimsteel_Pickaxe_m.png"
            break;
        case parseFloat(pickaxeLevel.innerHTML)<30:
            document.querySelector(".pickaxe-icon").src = "assets/pickaxes/Mythan_Pickaxe_m.png"
            break;
        case parseFloat(pickaxeLevel.innerHTML)<35:
            document.querySelector(".pickaxe-icon").src = "assets/pickaxes/Cobalt_Pickaxe_m.png"
            break;
        case parseFloat(pickaxeLevel.innerHTML)<40:
            document.querySelector(".pickaxe-icon").src = "assets/pickaxes/Varaxite_Pickaxe_m.png"
            break;
        case parseFloat(pickaxeLevel.innerHTML)<45:
            document.querySelector(".pickaxe-icon").src = "assets/pickaxes/Magic_Pickaxe_m.png"
            break;
        case parseFloat(pickaxeLevel.innerHTML)<50:
            document.querySelector(".pickaxe-icon").src = "assets/pickaxes/Umbral_Pickaxe_m.png"
            break;
        case parseFloat(pickaxeLevel.innerHTML)<55:
            document.querySelector(".pickaxe-icon").src = "assets/pickaxes/Ancient_Pickaxe_m.png"
            break;
    }
      }

document.querySelector(".pickaxe-upgrade").onclick = () => {
    buyPickaxe() }

