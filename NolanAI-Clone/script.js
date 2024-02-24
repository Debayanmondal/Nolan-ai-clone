const navbar = document.querySelector('#navbar')
window.addEventListener('scroll', (e) => {
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#222429'
    }
    else {
        navbar.style.backgroundColor = 'transparent'

    }
})

const navbarVisible = document.querySelector("#navbar-visible")

function toggleMenu(){
    navbarVisible.classList.toggle('hidden')
}