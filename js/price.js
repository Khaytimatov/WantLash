const categories = () => {

    const data = [

        {
            name: 'Классическое наращивание',
            img: 'https://sculptor-lash.com/storage/app/uploads/public/5e8/dbe/194/5e8dbe1944c3d597834848.jpg',
            price: 1200,
            category: 'extension'
        },
        {
            name: 'Двойной объем',
            img: 'https://liksnail.ru/upload/iblock/7cd/7cdb7c545d9abcd94003ed94dc1e4f6d.JPG',
            price: 1500,
            category: 'extension'
        },
        {
            name: 'Тройной объем',
            img: 'https://st22.stblizko.ru/images/product/545/563/653_big.jpeg',
            price: 2000,
            category: 'extension'
        },
        {
            name: 'Голливуд (4D)',
            img: 'https://iradel.ru/wp-content/uploads/2012/01/16.jpg',
            price: 2300,
            category: 'extension'
        },
        {
            name: 'Коррекция нарощенных ресниц',
            img: 'https://mymanikuroff.ru/upload/iblock/8f2/8f267ca647110a5c0b3a667107e16628.jpg',
            price: 1000,
            category: 'correction'
        },
        {
            name: 'Снятие ресниц другого мастера',
            img: 'https://bonne-beauty.ru/wp-content/uploads/2020/04/VfeHOyLV24I.jpg',
            price: 500,
            category: 'removal'
        },
        {
            name: 'Снятие моей работы',
            img: 'https://domresnic.ru/wp-content/uploads/statya-7-protivopokazaniya.jpg',
            price: 0,
            category: 'removal'
        },
        {
            name: 'Ламинирование ресниц',
            img: 'https://res.cloudinary.com/dj8dakvrt/images/f_auto,q_auto:low/v1586708132/blog-laminirovanie-dsc_0523/blog-laminirovanie-dsc_0523.jpg?_i=AA',
            price: 2000,
            category: 'lamination'
        },
        {
            name: 'Завивка ресниц',
            img: 'https://olympiaperm.ru/images/zavivka-resnits.jpg',
            price: 2100,
            category: 'lamination'
        },
    ]

    const cards = (data) => {
        const output = document.querySelector('.output')
        output.innerHTML=''
        data.forEach(el=>{
            const col = document.createElement('div')
            const box = document.createElement('div')
            const cardImage = document.createElement('div')
            const img = document.createElement('img')
            const name = document.createElement('div')
            const price = document.createElement('div')


            col.className = 'col-4'
            box.className = 'categories__box'
            cardImage.className = 'card-image'

            img.src = el.img
            name.textContent = el.name
            price.textContent = el.price


            cardImage.append(img)
            box.append(cardImage,name,price)
            col.append(box)
            output.append(col)
        })
    }
    cards(data)

    const categoryItems = ['all', 'extension', 'correction', 'removal', 'lamination',]

const buttonsClickRender = () => {
    const allBtn = document.querySelector('.categories__choise')
    categoryItems.forEach(el => {
        const button = document.createElement('button')
        button.className = 'btn'
        button.textContent = el
        button.addEventListener('click', () => {
            const result = data.filter(element => {
                return element.category === el
            })
            if (el === 'all') {
                cards(data)
            } else {
                cards(result)
            }
        })
        allBtn.append(button)
    })
}
buttonsClickRender()

const buttonsActive = () => {
    const buttons = document.querySelectorAll('.btn')
    buttons[0].classList.add('active')
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            buttons.forEach((el, index) => {
                if (i === index) {
                    el.classList.add('active')
                } else {
                    el.classList.remove('active')
                }
            })
        })
    }
}
buttonsActive()

const input = document.querySelector('.searchText')
const search = document.querySelector('.searchButton')

search.addEventListener('click', () => {
    const filteredItems = data.filter(el => {
        return el.name.includes(input.value)
    })
    if (filteredItems.length > 0) {
        cards(filteredItems)
    } else {
        document.querySelector('.output').textContent = 'Ничего не найдено...'
    }
    input.value = ''

})
}
categories()

