const burger = document.querySelector('.mobile-btn')
const nav = document.querySelector('.nav')
const navItems = document.querySelectorAll('.nav__el')
const backdrop = document.querySelector('.backdrop-burger')


const handleRemove = () =>{
    nav.classList.remove('show-nav')
    burger.classList.remove('show-mobile-btn')
    backdrop.classList.remove('show-backdrop')
}


const handleToggle = () =>{
    burger.classList.toggle('show-mobile-btn')
    nav.classList.toggle('show-nav')
    backdrop.classList.toggle('show-backdrop')
}


navItems.forEach(el=>{
    el.addEventListener('click',()=>{
        handleRemove()
    })
})

burger.addEventListener('click',()=>{
    handleToggle()
})

backdrop.addEventListener('click',()=>{
    handleRemove()
})