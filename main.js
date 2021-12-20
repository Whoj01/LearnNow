/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

changeHeaderWhenScroll()

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000,
  reset: true
})

scrollReveal.reveal(
  `#home .text,
  #about .text, #about .cards,
  #about .card,
  #services .text, #services .service, 
  #contact .text,
  footer .brand
  `,
  { interval: 200 }
)

/* css Animate in form */
const animateBounceIn = 'animate__bounceOutRight'
const animateBonceLeft = 'animate__bounceInLeft'
const animateForm = document.querySelector('.form')
const button = document.querySelector('.enviar')

button.addEventListener('click', event => {
  event.preventDefault()
  animateForm.classList.add(animateBounceIn)
})

animateForm.addEventListener('animationend', () => {
  animateForm.classList.remove(animateBounceIn)
  animateForm.classList.add(animateBonceLeft)
})
