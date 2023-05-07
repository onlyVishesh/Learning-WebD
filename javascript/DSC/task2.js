arr = [
    {   collage: "kiet",
        name: "Vishesh",
        fatherName: "Chandra Shekhar",
        year: 2022,
        course: "Btech",
        marks: [34,35,56],
        id: "2226cse1119"
    },
    {   collage: "kiet",
        name: "Vishesh",
        fatherName: "Chandra Shekhar",
        year: 2022,
        course: "Btech",
        marks: [34,35,56],
        id: "2226cse1119"
    },
    {   collage: "kiet",
        name: "Vishesh",
        fatherName: "Chandra Shekhar",
        year: 2022,
        course: "Btech",
        marks: [34,35,56],
        id: "2226cse1119"
    }
];
arr.map((data)=>{
    const block = document.createElement("div");
    let sum = 0;
    const value = Object.values(data.marks);
    for (let i = 0; i<value.length; i++){
        sum += value[i];
    };
    block.innerHTML = `<h1 style="font-size: 2rem;">${data.collage} </h1><br> ${data.name} <br> S/O ${data.fatherName} <br> ${data.course}- ${data.year} <br> ${sum} <br> ${data.id}`;
    document.getElementById("asd").appendChild(block);

})
    

