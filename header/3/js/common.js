// data 불러오기
import logoData from "../data/logoData.js"
import navData1 from "../data/navData1.js"
import navData2 from "../data/navData2.js"

window.addEventListener('DOMContentLoaded',function(){
  // svg 로고 넣기
  const logoSvg = document.querySelector('.logo-svg')
  logoSvg.innerHTML = logoData;

  // PC nav 데이터 넣기
  const pcMenu1 = document.querySelector('.pcMenu-1')
  const pcMenu2 = document.querySelector('.pcMenu-2')
  let pcMenu1Data = '';
  let pcMenu2Data = '';

  pcMenu1Data += `<ul class="menu-list">`
  for( let title of navData1 ){
    
  }





}) //// 로딩구역 ////