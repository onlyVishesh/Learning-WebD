// local reviews data
const reviews = [
    {
        id: 1,
        name: "Vishesh",
        job: "web developer",
        img: "download (7).jpeg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "Sumit",
        job: "web designer",
        img: "https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "Tommy",
        job: "Gardener",
        img: "https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
    {
        id: 4,
        name: "bill Gates",
        job: "intern",
        img: "https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
];
let index = 0;

function updateContent(index) {
    document.querySelector("#person-img").src = reviews[index].img;
    document.querySelector("#author").innerText = reviews[index].name;
    document.querySelector("#job").innerText = reviews[index].job;
    document.querySelector("#info").innerText = reviews[index].text;
}

window.addEventListener("DOMContentLoaded", () => {
    updateContent(index);
});

document.querySelector(".next-btn").addEventListener("click", () => {
    index = index < reviews.length - 1 ? index + 1 : 0;
    updateContent(index);
});

document.querySelector(".prev-btn").addEventListener("click", () => {
    index = index > 0 ? index - 1 : reviews.length - 1;
    updateContent(index);
});

document.querySelector(".random-btn").addEventListener("click", () => {
    let randomNo = Math.floor(Math.random() * reviews.length);
    updateContent(randomNo);
});
