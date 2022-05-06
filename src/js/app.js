const $ = (selector) => document.querySelector(selector)

function Main() {
  const toggleMenu = () => {
    $('.nav__list').classList.toggle('sidebar-active')
    $('.layer').classList.toggle('layer--active')
  }

  $('.nav__menu').onclick = toggleMenu
  $('.layer').onclick = toggleMenu

  $('.nav__link').onclick = () => {
    $('.dropdown').classList.toggle('dropdown--expanded')

    if ($('.dropdown').classList.contains('dropdown--expanded')) {
      $('.nav__icon').classList.toggle('nav__icon--active')
      return
    }

    $('.nav__icon').classList.remove('nav__icon--active')
  }

  $('.nav__link--company').onclick = () => {
    $('.dropdown--company').classList.toggle('dropdown--expanded')

    if ($('.dropdown--company').classList.contains('dropdown--expanded')) {
      $('.nav__icon--company').classList.toggle('nav__icon--active')
      return
    }

    $('.nav__icon--company').classList.remove('nav__icon--active')
  }
}

document.addEventListener('DOMContentLoaded', Main)
