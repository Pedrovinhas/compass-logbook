const subtractButton = document.getElementById('minus')
const addButton = document.getElementById('plus')
let itemNumber = document.getElementById('item-quantity')
let itemPrice = document.getElementById('item-price')

let counter = 1
let price = 2000

itemNumber.innerHTML = `${counter}`

itemPrice.innerHTML = `${price}`

addButton.addEventListener('click', () => {
    itemNumber.innerHTML = counter +=1
    itemPrice.innerHTML = price +=2000
})

subtractButton.addEventListener('click', () => {
    itemNumber.innerHTML = counter -=1
    itemPrice.innerHTML = price -=2000
})