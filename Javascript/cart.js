let cartProducts = [products[0], products[1], products[2]]

function cartOrder() {
    trOne.innerHTML = `<td>${cartProducts[0].id}</td><td>${cartProducts[0].name}</td><td>${cartProducts[0].price}</td>
    <td><div><img class="productImg"; src="${cartProducts[0].pictures[0]}" height="300px" width="300px"></div></td>
    <td id="cartTwo">${cartProducts[0].description}</td><td class="tableButton"><button id="removeOne"; type="button"; class="removeProduct">remove from cart</button></td>`
    trTwo.innerHTML = `<td>${cartProducts[1].id}</td><td>${cartProducts[1].name}</td><td>${cartProducts[1].price}</td>
    <td><div><img class="productImg"; src="${cartProducts[1].pictures[0]}" height="300px" width="300px"></div></td>
    <td id="cartTwo">${cartProducts[1].description}</td><td class="tableButton"><button id="removeTwo"; type="button"; class="removeProduct">remove from cart</button></td>`
    trThree.innerHTML = `<td>${cartProducts[2].id}</td><td>${cartProducts[2].name}</td><td>${cartProducts[2].price}</td>
    <td><div><img class="productImg"; src="${cartProducts[2].pictures[0]}" height="300px" width="300px"></div></td>
    <td id="cartTwo">${cartProducts[2].description}</td><td class="tableButton"><button id="removeThree"; type="button"; class="removeProduct">remove from cart</button></td>`
    imageChange2()
}

cartOrder()



numberOfItemsInCart()

function removeFromCart() {
    removeOne.onclick = () => {
        trOne.innerHTML = ``
        cartProducts.splice(0, 1)
        numberOfItemsInCart()
        imageChange2()
    }
}

removeTwo.onclick = () => {
    trTwo.innerHTML = ``
    cartProducts.splice(1, 1)
    numberOfItemsInCart()
    imageChange2()
}

removeThree.onclick = () => {
    trThree.innerHTML = ``
    cartProducts.pop()
    numberOfItemsInCart()
    imageChange2()
}

removeFromCart()

clickToPay.onclick = () => {
    alert(`thank you for your parchuse!`)
    paySum = ` `
    payP.innerText = `thank you for buying at AllMarket!`
    payP.style.transform = `scale(1.5)`;
    payForCart.style.height = "50px"
    payP.style.marginBottom = "50px"
    clickToPay.style.display = "none"
}

