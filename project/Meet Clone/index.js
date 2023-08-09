const characters = "abcdefghijklmnopqrstuvwxyz";

function generateString(length) {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }

    return result;
}

let code =
    generateString(3) + "-" + generateString(4) + "-" + generateString(3);
document.title = "Meet - " + code;

document.querySelector(".code").innerText = code;

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
}

document.querySelector(".time").innerText = formatAMPM(new Date());

setInterval(() => {
    document.querySelector(".time").innerText = formatAMPM(new Date());
}, 30000);
