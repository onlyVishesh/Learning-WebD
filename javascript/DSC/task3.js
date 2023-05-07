arr = [
    {   country: "India",
        capital: "Delhi",
        population: 1418348343,
        flag: 1,
        size: 3287263,
        per_capita_income: 7130 
    },
    {   country: "China",
        capital: "Beijing",
        population: 145022808 ,
        flag: 2,
        size: 3700000,
        per_capita_income: 19160
    },
    {   country: "United States",
        capital: "Washington, D.C.",
        population: 336486170 ,
        flag: 3,
        size: 3796742,
        per_capita_income: 70480
    },
    {   country: "India",
        capital: "Delhi",
        population: 1418348343,
        flag: 1,
        size: 3287263,
        per_capita_income: 7130 
    },
    {   country: "China",
        capital: "Beijing",
        population: 145022808 ,
        flag: 2,
        size: 3700000,
        per_capita_income: 19160
    },
    {   country: "United States",
        capital: "Washington, D.C.",
        population: 336486170 ,
        flag: 3,
        size: 3796742,
        per_capita_income: 70480
    },
    {   country: "China",
        capital: "Beijing",
        population: 145022808 ,
        flag: 2,
        size: 3700000,
        per_capita_income: 19160
    },
    {   country: "United States",
        capital: "Washington, D.C.",
        population: 336486170 ,
        flag: 3,
        size: 3796742,
        per_capita_income: 70480
    },
];
arr.map((data)=>{
    const block = document.createElement("div");
    block.innerHTML = `<div class="block"><h1 id="country">${data.country} </h1> <br> ${data.flag} <br> Capital - ${data.capital} <br> Population - ${data.population} <br> Size - ${data.size} sq meter <br> Per capita income - $${data.per_capita_income} </div>`;
    document.getElementById("asd").appendChild(block);

})
    

