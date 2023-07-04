
document.getElementById('submit').onclick = () => {
    let temp;
    if(document.getElementById('ctemp-btn').checked){
        temp = Number(document.getElementById('temp').value)

        if (document.getElementById('f-to-temp-btn').checked){
        temp = ctof(temp);
        document.getElementById('temp-display').innerHTML = `${temp}&degF`;
        } 
        else if (document.getElementById('k-to-temp-btn').checked){
            temp = ctok(temp);
            document.getElementById('temp-display').innerHTML = `${temp}K`;
        }
        else if (document.getElementById('c-to-temp-btn').checked){
            document.getElementById('temp-display').innerHTML = `${temp}&degC`;
        } 
        else {
            document.getElementById('temp-display').innerHTML = `Select a unit`;
        }

    } 
    else if (document.getElementById('ftemp-btn').checked){
        temp = Number(document.getElementById('temp').value)
        if (document.getElementById('c-to-temp-btn').checked){
        temp = ftoc(temp);
        document.getElementById('temp-display').innerHTML = `${temp}&degC`;
        } 
        else if (document.getElementById('k-to-temp-btn').checked){
            temp = ftok(temp);
            document.getElementById('temp-display').innerHTML = `${temp}K`;
        }
        else if (document.getElementById('f-to-temp-btn').checked){
            document.getElementById('temp-display').innerHTML = `${temp}&degC`;
        } 
        else {
            document.getElementById('temp-display').innerHTML = `Select a unit`;
        }

    } 
    else if (document.getElementById('ktemp-btn').checked){
        temp = Number(document.getElementById('temp').value)
        if (document.getElementById('c-to-temp-btn').checked){
        temp = ktoc(temp);
        document.getElementById('temp-display').innerHTML = `${temp}&degC`;
        } 
        else if (document.getElementById('f-to-temp-btn').checked){
            temp = ktof(temp);
            document.getElementById('temp-display').innerHTML = `${temp}&degF`;
        }
        else if (document.getElementById('k-to-temp-btn').checked){
            document.getElementById('temp-display').innerHTML = `${temp}K`;
        } 
        else {
            document.getElementById('temp-display').innerHTML = `Select a unit`;
        }
    } 
    else {
        document.getElementById('temp-display').innerHTML = `Select a unit`;
    }

}


function ftoc(temp) {
    return (temp - 32) * (5/9);
}

function ctof(temp) {
    return temp * (9 / 5) + 32;
}

function ftok(temp) {
    return ftoc(temp) + 273;
}

function ktof(temp) {
    return ctof(temp - 273);
}

function ctok(temp) {
    return temp + 273;
}

function ktoc(temp) {
    return temp - 273;
}
