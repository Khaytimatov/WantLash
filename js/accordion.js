
const accordionData = [
    {
        title: 'Безопасно',
        text: `Я подбираю нужную толщину и длину ресниц, исходя из природных данных Ваших ресниц, соблюдаю должный отступ искусственной ресницы от века,
                 проверяю каждую работу на наличие склеек, использую оптимальное количество клея`
    },
    {
        title: 'Надолго',
        text: `Средний срок носки нарощенных ресниц составляет 4-5 недель, но иногда достигает 8 недель`,
    },
    {
        title: 'Красиво',
        text: `100% заполняемость
                Плавный переход длин
                Направление`
    },
    {
        title: 'Комфортно',
        text: `В Want Lash рождается красота, пока ты спишь на удобной кушетке, укутанная уютным пледом`
    },
    {
        title: 'Качественно',
        text: `Современные материалы, используемые мной, для наращивания ресниц гипоаллергенны, не вызывают раздражений и дискомфорта`
    },
    {
        title: 'Целесообразно',
        text: `Правильно подобранный эффект наращивания должен подчеркивать достоинства и способен скорректировать форму глаз`
    }

]

const accordionRender = (api) => {
    const accordionNew = document.querySelector('.accordion')
    api.forEach(el => {
        const wrapper = document.createElement('div')
        const accorName = document.createElement('div')
        const accorTitle = document.createElement('p')
        const image = document.createElement('img')
        const accorContent = document.createElement('div')
        const textCont = document.createElement('p')


        wrapper.className = 'accordion__wrap'
        accorName.className = 'accordion__name'
        image.className = 'plus'
        image.src = ('./images/plus.png')
        accorContent.className = 'accordion__content'

        accorTitle.textContent = el.title
        textCont.textContent = el.text

        accorContent.append(textCont)
        accorName.append(accorTitle,image)
        wrapper.append(accorName, accorContent)
        accordionNew.append(wrapper)
    })
}
accordionRender(accordionData)

const accordion = () => {
    const accordion = document.querySelectorAll('.accordion__wrap')
    accordion.forEach((el,index) => {
        el.addEventListener('click', () => {
            accordion.forEach((item,i) =>{
                if(index===i){
                    item.classList.toggle('accordion__active')
                }else{
                    item.classList.remove('accordion__active')
                }
            })
        })
    })
}
accordion()

