// data 불러오기
import svgLogoData from "../data/logoSvgData.js";
import navData from "../data/navData.js";
import footerData from "../data/footerData.js";

// 시작 ---
window.addEventListener("DOMContentLoaded", function () {
  
  // [ 메인메뉴 - Logo ]
  // 로고 넣기
  const logo = document.querySelector('.logo')
  const logoSvg = document.querySelector('.logo-svg')
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
  window.addEventListener("resize", menuChg);
  function menuChg() {
    if (window.innerWidth <= 970) {
      document.querySelector(".pc-header").classList.add("-hidden");
      document.querySelector(".mobile-header").classList.remove("-hidden");
    }
    else {
      document.querySelector(".mobile-header").classList.remove("-hidden");
      document.querySelector(".pc-header").classList.add("-hidden");
    }
  }
  
//   // [ 메인메뉴 - 모바일 메뉴리스트 적용 ]
//   const mobileNav = document.querySelector(".M-nav");
//   let mobileMenuCode = "";
//   mobileMenuCode += /*html*/ `<ul class="M-nav-menu">`;
//   for (let Title in navData) {
//     mobileMenuCode += /*html*/`
//     <li class="M-nav-menu-item accordion">
//       <a href="#">${Title}
//         <i class="fa-solid fa-chevron-down title-icon"></i>
//       </a>
//       <div class="M-nav-menu-item-wrap">
//         <ul class="M-nav-menu__content">
//           <li class="M-nav-menu-item__content accordion">
//             <a href="#">한눈에보기</a>
//     `;
//     for (let sTitle in navData[Title]) {
//       mobileMenuCode += /*html*/`
//           </li>
//           <li class="M-nav-menu-item__content accordion">
//             <a href="#">${sTitle}
//               <i class="fa-solid fa-chevron-down sTitle-icon title-icon"></i>
//             </a>
//             <ul>
//       `;
//       for (let list of navData[Title][sTitle]) {
//         mobileMenuCode += /*html*/`
//             <li><a href="#">${list}</a></li>
//           `;
//       }
//       mobileMenuCode += /*html*/`
//             </ul>
//         `;
//     }
//     mobileMenuCode += /*html*/`
//           </li>
//         </ul>
//       </div>
//     </li>
// `;
//   }
//   mobileMenuCode += /*html*/ `</ul>`;
//   mobileNav.innerHTML = mobileMenuCode;
  
//   const menuItemContent = document.querySelectorAll('.M-nav-menu-item__content ul');
//   const sTitleIcon = document.querySelectorAll('.sTitle-icon');
//   menuItemContent.forEach(function(v,i){
//     // console.log(v.children.length);
//     // console.log(sTitleIcon[i]);
//     if( v.children.length !== 0 ){
//       return
//     }
//     else{
//       sTitleIcon[i].style.display='none'
//     }
//   })


//   // [ 메인메뉴 - 모바일 bar 클릭시 메뉴보임]
//   function mobileMenuShow(){
//     const bar = document.querySelector('.fa-bars');
//     const mobileMenu = document.querySelector('.M-menu');
//     const close = document.querySelector('.fa-xmark');
//     bar.addEventListener('click',()=>{
//       mobileMenu.style.visibility='visible';
//       document.querySelector('.M-menu-bg').style.visibility='visible';
//       document.querySelector('.M-menu-bg').style.opacity='1';
//       document.querySelector('.M-menu-wrap').style.transform='translateX(0%)';
//       document.documentElement.classList.add('-fixed')
//     })
//     close.addEventListener('click',()=>{
//       mobileMenu.style.visibility='hidden';
//       document.querySelector('.M-menu-wrap').style.transform='translateX(120%)';
//       document.querySelector('.M-menu-bg').style.visibility='hidden';
//       document.querySelector('.M-menu-bg').style.opacity='0';
//       document.documentElement.classList.remove('-fixed')
//     })
//   }
//   mobileMenuShow()

//     // [ 메인메뉴 - 모바일 메뉴 아코디언 ]
//     const acc = document.querySelectorAll('.accordion')
//     // console.log(acc);
    
//     for( i=0; i < acc.length; i++ ){
//       acc[i].onclick = function(e){
//         e.stopPropagation();
//         panel = this.lastElementChild;
//         panel.classList.toggle('on')
//         this.querySelector('.title-icon').classList.toggle('fa-chevron-up')
//         this.querySelector('.title-icon').classList.toggle('fa-chevron-down')
//       }
//     }

//   // [ 서브메뉴 - 서치아이콘 ]
//   const searchInput = document.querySelector(".search input");
//   const searchIcon = document.querySelector(".search i");
//   searchInput.addEventListener("focus", function () {
//     searchIcon.classList.add("-opacity");
//     searchInput.setAttribute("placeholder", " 검색어를 입력해 주세요");
//   });
//   searchInput.addEventListener("blur", function () {
//     searchIcon.classList.remove("-opacity");
//     searchInput.setAttribute("placeholder", "");
//     searchInput.value = "";
//   });
//   // enter시 내용 삭제
//   searchInput.addEventListener("keypress", function (e) {
//     if (e.keyCode == 13) {
//       searchInput.value = "";
//     }
//   });

//   // [푸터 메뉴리스트 적용]
//   const footerNav = document.querySelector(".footer-menu");
//   let footerMenuCode = "";
//   footerMenuCode += `<ul class="menu">`;
//   for (let title in footerData) {
//     footerMenuCode += `
//     <li class="menu-item">
//     <h4>${title}</h4>
//       <ol> 
//     `;
//     for (let list of footerData[title]) {
//       footerMenuCode += `
//         <li><a href="#">${list}</a></li>
//       `;
//     }
//     footerMenuCode += `
//       </ol>
//     </li>
//     `;
//   }
//   footerMenuCode += `</ul>`;
//   footerNav.innerHTML = footerMenuCode;
  
  
//   // [푸터 메뉴리스트 적용 - 아코디언]
//   function footerNavShow(){
//     const footerNav = document.querySelectorAll('.footer-menu .menu-item')
//     console.log(footerNav);
    
//     footerNav.forEach(function(v){
//       v.addEventListener('click',()=>{
//         v.classList.toggle('on')
//       })
//     })
//   }
//   footerNavShow()
});