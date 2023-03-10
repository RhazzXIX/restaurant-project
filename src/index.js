import "./css/style.css";
import GitHub from "./images/GitHub-Mark-Light-64px.png";
import HeroImage from "./images/bread-coffee.jpg";
import menuContent from "./scripts/menu";
import contactContent from "./scripts/contact";
import creditsContent from "./scripts/credits";

const baseDOM = (function () {
  const body = document.querySelector("body");

  // Main Header //
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const navUl = document.createElement("ul");
  const btnList = [];
  for (let i = 0; i <= 3; i += 1) {
    const navLi = document.createElement("li");
    const navBtn = document.createElement("button");

    switch (i) {
      case 0:
        navBtn.textContent = "Home";
        navBtn.setAttribute("id", "home");
        navLi.appendChild(navBtn);
        break;
      case 1:
        navBtn.textContent = "Menu";
        navBtn.setAttribute("id", "menu");
        navLi.appendChild(navBtn);
        break;
      case 2:
        navBtn.textContent = "Contact";
        navBtn.setAttribute("id", "about");
        navLi.appendChild(navBtn);
        break;
      default:
        navBtn.textContent = "Credits";
        navBtn.setAttribute("id", "credit");
        navLi.appendChild(navBtn);
        break;
    }
    btnList.push(navLi);
    navUl.appendChild(navLi);
  }

  // h1.textContent = 'Bread & Butter Cafe'
  nav.appendChild(navUl);
  // header.appendChild(h1);
  header.appendChild(nav);
  body.appendChild(header);

  // Main Content //

  const main = document.createElement("main");
  main.setAttribute("id", "content");

  body.appendChild(main);

  // Main Footer //
  const footer = document.createElement("footer");
  const gitLink = document.createElement("a");
  gitLink.setAttribute("href", "https://github.com/RhazzXIX");
  const github = new Image();
  github.src = GitHub;

  gitLink.appendChild(github);
  footer.appendChild(gitLink);

  body.appendChild(footer);

  return { main, btnList };
})();

const homeContent = (function () {
  const homeSection = document.createElement("section");
  homeSection.setAttribute("id", "home");

  const heroText = document.createElement("h2");
  heroText.innerHTML = "Bread & Butter Cafe";

  const heroImage = new Image();
  heroImage.src = HeroImage;
  heroImage.classList.add("hero-image");
  heroImage.setAttribute("alt", "Toast Bread and Coffee");

  const subHero = document.createElement("p");
  subHero.innerHTML = `Established in 1920's, <em>Bread & Butter Cafe</em> has been the home 
    for people, who is looking for <em>delightful</em> foods made from <strong>high quality</strong> ingredients. Supports domestic
    farmers, through sourcing local produce directly from them.`;

  homeSection.appendChild(heroText);
  homeSection.appendChild(heroImage);
  homeSection.appendChild(subHero);
  baseDOM.main.appendChild(homeSection);
  return { homeSection };
})();


const bindEvents = (function () {
  baseDOM.btnList[0].addEventListener("click", (e) => {
    e.stopPropagation();
    const element = baseDOM.main.querySelector("section");
    if (Boolean(element)) {
      if (element !== homeContent.homeSection) {
        baseDOM.main.removeChild(element);
        baseDOM.main.appendChild(homeContent.homeSection);
      }
    }
  });
  baseDOM.btnList[1].addEventListener("click", (e) => {
    e.stopPropagation();
    const element = baseDOM.main.querySelector("section");
    if (Boolean(element)) {
      if (element !== menuContent.menuSection) {
        baseDOM.main.removeChild(element);
        baseDOM.main.appendChild(menuContent.menuSection);
      }
    }
  });
  baseDOM.btnList[2].addEventListener("click", (e) => {
    e.stopPropagation();
    const element = baseDOM.main.querySelector("section");
    if (Boolean(element)) {
      if (element !== contactContent.contactSection) {
        baseDOM.main.removeChild(element);
        baseDOM.main.appendChild(contactContent.contactSection);
      }
    }
  });
  baseDOM.btnList[3].addEventListener("click", (e) => {
    e.stopPropagation();
    const element = baseDOM.main.querySelector("section");
    if (Boolean(element)) {
      if (element !== creditsContent.creditsSection) {
        baseDOM.main.removeChild(element);
        baseDOM.main.appendChild(creditsContent.creditsSection);
      }
    }
  });
})();
