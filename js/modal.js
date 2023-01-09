

const coverBtn = document.querySelector('.cover__button')
const backdropModal = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')
const modalCloseButton = document.querySelector('.modalCloseButton')
const thankYou = document.querySelector('.thankYou')
const modalApplyButton = document.querySelector('.modalApplyButton')
const modalContent = document.querySelector('.modalContent')
const form = document.querySelector('form')
const message = document.querySelector('.inputMessage')
const number = document.querySelector('.inputNumber')

const bot = {
    TOKEN: '5816460510:AAHjBTCVmVp3FFbVJRG44NcVdML_Wy3ikl0',
    chatID: '-854907996'
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    if (message.value.trim() && number.value) {
        const data = `name:${message.value.trim()},phone:${number.value}`
        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${data}`)
            .then(response => {
                if (response.ok) {
                    modalContent.classList.add('hideContent')
                    thankYou.innerHTML = `
                <h2>СПАСИБО!</h2>
                <p>Я связусь с вами в ближайшее время</p>`
                    boxTimeout = setTimeout(handleModalRemove, 2000)
                }
            }, error => {
                modalContent.classList.add('hideContent')
                thankYou.innerHTML = `
        <h2>ERROR</h2>
        <p>SORRY</p>`
                boxTimeout = setTimeout(handleModalRemove, 2000)
            })
    } else {
        alert('Недостаточно символов')
    }
    message.value=''
    number.value=''
})

let boxTimeout;


const handleModalRemove = () => {
    clearTimeout(boxTimeout)
    backdropModal.classList.remove('backdropActive')
    modal.classList.remove('modalActive')
}


coverBtn.addEventListener('click', () => {
    backdropModal.classList.add('backdropActive')
    modal.classList.add('modalActive')
    modalContent.classList.remove('hideContent')
    thankYou.innerHTML = ''

})

modalCloseButton.addEventListener('click', handleModalRemove)

backdropModal.addEventListener('click', handleModalRemove)

modal.addEventListener('click', (e) => {
    e.stopPropagation()
})
