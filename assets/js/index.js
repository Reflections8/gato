document.addEventListener('DOMContentLoaded', () => {
  /* HEADER COIN LOGIC */
  const headerLogo = document.querySelector('.header__logo')
  const introCoin = document.querySelector('.intro__imgSection-coin--1')
  const burgerMenu = document.querySelector('.headerSection__burgerMenu')

  function checkWindowScroll() {

      if (window.scrollY > 0) {
        if (window.innerWidth > 1400) {
          headerLogo.classList.add('header__logo--Scrolled')
        }
        introCoin.style.zIndex = '10'
      } else {
        if (!burgerMenu.classList.contains('headerSection__burgerMenu--Hidden')) {
          introCoin.style.zIndex = '10'
          return
        }
        if (window.innerWidth > 1400) {
          headerLogo.classList.remove('header__logo--Scrolled')
        }
        introCoin.style.zIndex = '101'
      }

  }

  checkWindowScroll()
  window.addEventListener('scroll', checkWindowScroll)
})
