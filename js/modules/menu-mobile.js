import clickOut from './click-outside.js';

function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]')
  
  if(menuButton){
    function openMenu() {
      menuList.classList.toggle('active')
      menuButton.classList.toggle('active')
      
      clickOut(menuList, ['click', 'touchstart'], () => {
        menuList.classList.remove('active')
        menuButton.classList.remove('active')
      })
    }
      menuButton.addEventListener('click', openMenu)
  }
}

export default initMenuMobile();

