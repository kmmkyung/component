// data 불러오기
import navData from "../data/navData.js"
window.addEventListener('DOMContentLoaded',function(){
  const navPc = document.querySelector('.nav-pcMenu')
  let mainMenuCode = "";
  mainMenuCode += `<ul class="pcMenu-list">`
  for ( let title in navData){
    mainMenuCode += /*html*/`
    <li class="list-item">
      <a href="#">${title}</a>
        <div class="subMenu-list__wrap">
          <ol class="subMenu-list">
    `
    for( let subTitle of navData[title] ){
      mainMenuCode += /*html*/`
      <li class="list-item">
        <a href="#">${subTitle}</a>
      </li>
      `
    }
    mainMenuCode += /*html*/`
            </ol>
          </div>
        </li>
    `;
  }
  mainMenuCode +=  /*html*/`</ul>`
  navPc.innerHTML = mainMenuCode

// scroll이 내려가면 GND 고정
const nav = document.querySelector(".nav");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 40) {
    nav.classList.add("navActive");
  } else {
    nav.classList.remove("navActive");
  }
});

// PC - GNB 서브메뉴 보이기
const pcMenuItem = document.querySelectorAll(
  ".pcMenu-list>.list-item"
);
const pcSubMenuListWrap = document.querySelectorAll(
  ".pcMenu-list .subMenu-list__wrap"
);
const pcSubMenuList = document.querySelectorAll(".pcMenu-list .subMenu-list");
pcMenuItem.forEach(function (menu, idx) {
  let vh = pcSubMenuList[idx].clientHeight;

  menu.addEventListener("mouseenter", function () {
    pcSubMenuListWrap[idx].style.height = vh + "px";
  });
  menu.addEventListener("mouseleave", function () {
    pcSubMenuListWrap[idx].style.height = 0;
  });
});


// mobile - GNB 메뉴 적용하기
const mobileNav = document.querySelector('.mobileMenu')
let mobileMenuCode = "";
mobileMenuCode += `<ul class="mobileMenu-list">`
for(let title in navData){
  mobileMenuCode += `
  <li class="list-item">
    <a href="#">${title}</a>
    <div class="subMenu-list__wrap">
      <ol class="subMenu-list">
  `;
  for( let list of navData[title]){
    mobileMenuCode += `
      <li class="list-item"><a href="#">${list}</a></li>
    `
  }
  mobileMenuCode += `
      </ol>
    </div>
  </li>
  `;
}
mobileMenuCode+= `</ul>`
mobileNav.innerHTML = mobileMenuCode




// mobile - GNB 서브메뉴 보이기
const mobileBtn = document.querySelector(".mobileMenu-icon");
const mobileMenu = document.querySelector(".mobileMenu");
const mobileMenuItem = document.querySelectorAll(
  ".mobileMenu-list>.list-item"
);
const mobileSubMenuListWrap = document.querySelectorAll(
  ".mobileMenu-list .subMenu-list__wrap"
);
const mobileSubMenuList = document.querySelectorAll(
  ".mobileMenu-list .subMenu-list"
);
mobileBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
  mobileMenu.style.height = 375 + "px";
  mobileBtn.classList.toggle("active");

  if (mobileMenu.classList.contains("active")) {
    mobileMenuItem.forEach(function (menu, idx) {
      let vh = mobileSubMenuList[idx].clientHeight;
      menu.addEventListener("mouseenter", function () {
        mobileMenu.style.height = "auto";
        mobileSubMenuListWrap[idx].style.height = vh + "px";
      });
      menu.addEventListener("mouseleave", function () {
        mobileMenu.style.height = 375 + "px";
        mobileSubMenuListWrap[idx].style.height = 0 + "px";
      });
    });
  } else {
    mobileMenu.style.height = 0;
  }
});



}) //// 로딩구역 ////