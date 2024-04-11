document.addEventListener('DOMContentLoaded', () => {
  /* HEADER COIN LOGIC */
  const headerLogo = document.querySelector('.header__logo')
  const introCoin = document.querySelector('.intro__imgSection-coin--1')

  function checkWindowScroll() {
    if (window.scrollY > 0) {
      headerLogo.classList.add('header__logo--Scrolled')
      introCoin.style.zIndex = '1'
    } else {
      headerLogo.classList.remove('header__logo--Scrolled')
      introCoin.style.zIndex = '10'
    }
  }

  checkWindowScroll()
  window.addEventListener('scroll', checkWindowScroll)
})
