

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')
const tabActive = $('.tab-item.active')
const line = $('.tabs .line')
console.log([tabActive])
line.style.left = tabActive.offsetLeft + 'px'
line.style.width = tabActive.offsetWidth + 'px'


tabs.forEach(
    (tab, index) => {
        const pane = panes[index]
        tab.onclick = function() {
            $('.tab-item.active').classList.remove('active')
            $('.tab-pane.active').classList.remove('active')
            line.style.left = tab.offsetLeft + 'px'
            line.style.width = tab.offsetWidth + 'px'
            this.classList.add('active')
            pane.classList.add('active')
        }
    }
)





























// function highlight([first, ...strings], ...values) {
//     return values.reduce(
//         (acc, curr) => [...acc, `<span>${curr}</span>`,strings.shift()], [first]
//     ).join('')
// }

// var brand = 'F8'
// var course = 'Javascript'

// const html = highlight`Học lập trình ${course} tại ${brand}!`

// console.log(html)










// var months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
// ]

// var nameProduct = "T-shirt"
// var discount = "10%"
// var month = months[new Date().getMonth()]

// function flashSale([intro, ...strings], ...values) {
//     return values.reduce(
//         (acc, curr) => [...acc, curr, strings.shift()], [intro]
//     ).join('')
// }

// console.log(flashSale`Sale of ${discount} all ${nameProduct} in ${month}`)

// sale of 10% all T-shirt in 












