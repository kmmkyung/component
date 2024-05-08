// data 불러오기
import svgLogoData from "../data/logoSvgData.js";
import navData from "../data/navData.js";
import footerData from "../data/footerData.js";

// 시작 ---
window.addEventListener("DOMContentLoaded", function () {

  // [ 탑메뉴 - 서치아이콘 ]
  const searchInput = document.querySelector(".top-menu .search input");
  const searchIcon = document.querySelector(".top-menu .search i");
  searchInput.addEventListener("focus", function () {
    searchIcon.classList.add("-opacity");
    searchInput.setAttribute("placeholder", " 검색어를 입력해 주세요");
  });
  searchInput.addEventListener("blur", function () {
    searchIcon.classList.remove("-opacity");
    searchInput.setAttribute("placeholder", "");
    searchInput.value = "";
  });
  // enter시 내용 삭제
  searchInput.addEventListener("keypress", function (e) {
    if (e.keyCode == 13) {
      searchInput.value = "";
    }
  });
  
  // [ 메인메뉴 - Logo ]
  // 로고 넣기
  const logo = document.querySelector('.pc-header .logo')
  const logoSvg = document.querySelector('.pc-header .logo-svg')
  logoSvg.innerHTML = svgLogoData;
  // 로고 클릭시 메인페이지 이동
  logo.addEventListener('click',function(){
    location.href= 'index.html';
  })

  // [ 메인메뉴 - 메뉴리스트 적용 ]
  const nav = document.querySelector(".nav");
  let mainMenuCode = "";
  mainMenuCode += `<ul class="menu-list">`;
  // 메뉴 타이틀 title=COFFEE,MENU,STORE...
  for (let title in navData) {
    mainMenuCode += /*html*/`
      <li class="list-item">
        <a class="list-item__title" href="#">
          ${title}
        </a>
        <div class="subTitle-list__wrap -hidden">
        <ul class="subTitle-list">
        `;
    // 서브메뉴타이틀 subTitle=커피,커피이야기,스타벅스 리저브...
    for (let subTitle in navData[title]) {
      mainMenuCode += /*html*/`
          <li class="list-item">
            <h4 class="list-item__subTitle">${subTitle}</h4>
            <ol class="subMenu-list">
      `;
      // 하위메뉴
      for (let list of navData[title][subTitle]) {
        mainMenuCode += /*html*/`
              <li class="list-item">${list}</li>
              `;
      }
      mainMenuCode += /*html*/`
            </ol>
          </li>
            `;
    }
    mainMenuCode += /*html*/`
        </ul>
      </div>
    </li>
    `;
  }
  mainMenuCode += /*html*/ `</ul>`;
  nav.innerHTML = mainMenuCode;

// [ 메인메뉴 - 오버시 보이게 하기 ]
  const title = document.querySelectorAll(".nav > .menu-list > .list-item");
  title.forEach((ele, idx) => {
    const menuWrap = document.querySelectorAll(".subTitle-list__wrap");
    const menuUl = document.querySelectorAll(".subTitle-list");
    ele.addEventListener("mouseenter", function () {
      menuWrap[idx].classList.remove("-hidden");
      let vH = menuUl[idx].clientHeight;
      menuWrap[idx].style.height = vH + "px";
    });
    ele.addEventListener("mouseleave", function () {
      menuWrap[idx].classList.add("-hidden");
      menuWrap[idx].style.height = 0;
    });
  });

// [ 메인메뉴 - 미디어쿼리 ]
  // resize 초기화 및 셋팅
  let setTime ;
  window.addEventListener("resize", function(){
    clearTimeout(setTime) // 이전에 실행한 menuChange함수 초기화
    setTime = setTimeout(menuChange,200) // resize할 경우 2초마다 함수 실행
  });

  window.addEventListener("load", menuChange);
  function menuChange() {
    console.log('dsf');
    
    if (window.innerWidth <= 970) {
      document.querySelector(".pc-header").classList.add("-hidden");
      document.querySelector(".mobile-header").classList.remove("-hidden");
    }
    else {
      document.querySelector(".pc-header").classList.remove("-hidden");
      document.querySelector(".mobile-header").classList.add("-hidden");
    }
  }
  
// [ 모바일메뉴 - LOGO ]
  const mobileLogo = document.querySelector('.mobile-header .logo')
  const mobileLogoSvg = document.querySelector('.mobile-header .logo-svg')
  // 로고 넣기
  mobileLogoSvg.innerHTML = svgLogoData;
  // 로고 클릭시 메인페이지 이동
  mobileLogo.addEventListener('click',function(){
    location.href= 'index.html';
  })


// [ 메인메뉴 - 모바일 메뉴리스트 적용 ]
  const mobileNav = document.querySelector(".mobile-nav");
  let mobileMenuCode = "";
  mobileMenuCode += /*html*/ `<ul class="menu-list">`;
  for (let title in navData) {
    mobileMenuCode += /*html*/`
    <li class="list-item accordion">
      <a href="#">${title}
        <i class="fa-solid fa-chevron-down menu-icon__down"></i>
      </a>
      <div class="subTitle-wrap">
        <ul class="subTitle-list">
          <li class="list-item accordion">
            <a href="#">한눈에보기</a>
    `;
    for (let subTitle in navData[title]) {
      mobileMenuCode += /*html*/`
          </li>
          <li class="list-item accordion">
            <a href="#">${subTitle}
              <i class="fa-solid fa-chevron-down subTitle-icon menu-icon__down "></i>
            </a>
            <ol class="subMenu-list">
      `;
      for (let list of navData[title][subTitle]) {
        mobileMenuCode += /*html*/`
            <li class="list-item"><a href="#">${list}</a></li>
          `;
      }
      mobileMenuCode += /*html*/`
            </ol>
        `;
    }
    mobileMenuCode += /*html*/`
          </li>
        </ul>
      </div>
    </li>
`;
  }
  mobileMenuCode += /*html*/ `</ul>`;
  mobileNav.innerHTML = mobileMenuCode;
  
  // [ 모바일 메뉴 - 하위메뉴가 있으면 icon 있기 ]
  const menuItemContent = document.querySelectorAll('.mobile-nav .subMenu-list');  
  const subTitleIcon = document.querySelectorAll('.subTitle-icon');
  menuItemContent.forEach(function(ele,idx){
    if( ele.children.length !== 0 ){
      return
    }
    else{
      subTitleIcon[idx].style.display='none'
    }
  })

// [ 메인메뉴 - 모바일 bar 클릭시 메뉴보임]
  function mobileMenuShow(){
    const mobileBar = document.querySelector('.fa-bars');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileClose = document.querySelector('.fa-xmark');
    const mobileBg = document.querySelector('.mobile-menu__bg')
    mobileBar.addEventListener('click',()=>{
      mobileMenu.style.visibility='visible';
      mobileBg.style.visibility='visible';
      mobileBg.style.opacity='1';
      document.querySelector('.mobile-menu .inner').style.transform='translateX(0%)';
      document.documentElement.classList.add('-fixed')
    })
    mobileClose.addEventListener('click',()=>{
      mobileMenu.style.visibility='hidden';
      document.querySelector('.mobile-menu .inner').style.transform='translateX(120%)';
      mobileBg.style.visibility='hidden';
      mobileBg.style.opacity='0';
      document.documentElement.classList.remove('-fixed')
    })
  }
  mobileMenuShow()

// [ 메인메뉴 - 모바일 메뉴 아코디언 ]
  const acc = document.querySelectorAll('.accordion')
  for( let i = 0; i < acc.length; i++ ){
    acc[i].onclick = function(e){
      e.stopPropagation();
      let panel = this.lastElementChild;
      panel.classList.toggle('active')
      this.querySelector('.menu-icon__down').classList.toggle('fa-chevron-up')
      this.querySelector('.menu-icon__down').classList.toggle('fa-chevron-down')
    }
  }
});