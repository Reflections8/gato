document.addEventListener('DOMContentLoaded', () => {
  const dropdownOpenBtn = document.querySelector('.header__dropdown-actionBox')
  const dropdown = document.querySelector('.header__dropdown-options')
  const arrow = document.querySelector('.header__dropdown-actionBox-arrow')

  const selectedFlagCode = document.querySelector('.header__dropdown-actionBox-current')
  const selectedFlag = document.querySelector('.header__dropdown-flagBox-img')

  function openDropdown() {
    dropdown.classList.remove('header__dropdown-options--Hidden')
    arrow.classList.add('header__dropdown-actionBox-arrow--Rotated')
  }

  function closeDropdown() {
    dropdown.classList.add('header__dropdown-options--Hidden')
    arrow.classList.remove('header__dropdown-actionBox-arrow--Rotated')
  }

  dropdownOpenBtn.addEventListener('click', openDropdown)

  document.addEventListener('click', e => {
    if (!e.target.closest('.header__dropdown-options') && !e.target.closest('.header__dropdown-actionBox')) {
      closeDropdown()
    }
  })

  // Слева - код флага, справа - путь до картинки с флагом
  const flagsSrc = {
    EN: 'components/header/img/flag-uk.svg',
    CH: 'components/header/img/china.svg'
  }

  dropdown.addEventListener('click', e => {
    if (e.target.closest('.header__dropdown-options-item')) {
      const clickedFlag = e.target.closest('.header__dropdown-options-item').querySelector('img')
      const clickedFlagCode = clickedFlag.getAttribute('data-flag')

      selectedFlag.src = flagsSrc[clickedFlagCode]
      selectedFlagCode.innerText = clickedFlagCode
      closeDropdown()
    }
  })

  /* BURGER ICON */
  const burgerIcon = document.querySelector('.header__burgerIcon')
  const burgerCloseIcon = document.querySelector('.headerSection__burgerMenu-closeIcon')
  const burgerMenu = document.querySelector('.headerSection__burgerMenu')
  const introCoin = document.querySelector('.intro__imgSection-coin--1')

  burgerIcon.addEventListener('click', () => {
    burgerMenu.classList.remove('headerSection__burgerMenu--Hidden')
    introCoin.style.zIndex = 10
  })

  burgerCloseIcon.addEventListener('click', () => {
    burgerMenu.classList.add('headerSection__burgerMenu--Hidden')
  })
})
