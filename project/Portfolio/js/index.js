import { skillData, statsData, timelineData, projectData } from "./config.js";

const allSection = document.querySelector(".main-content");
const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");

const pageTransition = () => {
  sectBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  });

  allSection.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);

      element.classList.add("active");
    }
  });

  // Toggle theme

  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });
};

pageTransition();

const statsHTML = statsData
  .map((stats) => {
    return `<div class="about-item">
  <div class="abt-text">
  <p class="large-text">${stats.totalNo}</p>
  <p class="small-text">${stats.catagories}</p>
  </div>
  </div>`;
  })
  .join("");

const rightAbout = document.querySelector(".right-about");
rightAbout.innerHTML = statsHTML;

const skillHTML = skillData
  .map((skill) => {
    return `<div class="progress-bar">
    
    <p class="prog-title"><i class="fa-brands fa-${skill.icon}"></i> ${skill.language}</p>
  <div class="progress-container">
    <p class="prog-text">${skill.percentage}</p>
    <div class="progress">
      <span class="bar"></span>
    </div>
  </div>
</div>`;
  })
  .join("");

const progressBars = document.querySelector(".progress-bars");

progressBars.innerHTML = skillHTML;

const progressBar = document.querySelectorAll(".progress-bar");

document.querySelector(".control-2").addEventListener("click", () => {
  progressBar.forEach((bar) => {
    bar.querySelector(".bar").style.width =
      bar.querySelector(".prog-text").innerHTML;
    const incWidth = [
      { width: "0" },
      { width: `${bar.querySelector(".prog-text").innerHTML}` },
    ];
    const incWidthDuration = {
      duration: 1000,
      iterations: 1,
    };
    bar.querySelector(".bar").animate(incWidth, incWidthDuration);
  });
});

const timelineHTML = timelineData
  .map((myTimeline) => {
    return `<div class="timeline-item">
    <div class="tl-icon">
    <i class="fas fa-briefcase"></i>
    </div>
    <p class="tl-duration">${myTimeline.timePeriod}</p>
    <h5>
    ${myTimeline.position} <span> - ${myTimeline.company}</span>
    </h5>
    <p class="tl-para">
    ${myTimeline.about}
    </p>
    </div>`;
  })
  .join("");

const timeline = document.querySelector(".timeline");
timeline.innerHTML = timelineHTML;

const portfoliosHTML = projectData
  .map((project) => {
    return `<div class="portfolio-item">
    <abbr title="${project.name}">
    <div class="image">
      <img
        src="../images/${project.imageURL}"
        alt="${project.name}"
        loading="lazy"
        
      />
    </div>
    <div class="hover-items">
      <h3>Project Source</h3>
      <div class="icons">
        <a href=${project.website} target="_blank" class="icon">
          <i class="fa-solid fa-link"></i>
        </a>
        <a href=${project.github} target="_blank" class="icon">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
    </abbr>
  </div>`;
  })
  .join("");

const portfolios = document.querySelector(".portfolios");
portfolios.innerHTML = portfoliosHTML;
