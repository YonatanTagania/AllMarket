let cartProducts = []


cartArray()

for (i = 0; i < products.length; i++) {
    if (products[i].category == "smartPhones") {

        productsTable.innerHTML += `<article class="smartPhonesArticle"><p id="itemName">product name: <b>${products[i].name}</b></p>
        <p id="itemPrice">price: <b>${products[i].price}</b></p>
        <div></button><img class="productImg"; id="imgOfItem${i}"; src="${products[i].pictures[0]}" height="300px" width="300px"><br>
        <button type="button"; id="changeImg${i}">next image</button>
       </div>
        <p id="itemDescription">description: <b>${products[i].description}</b></p>
        <span><button type="button"; class="addToTheCart"; id="phonesAddToCart${i}">add to cart</button><span></article>`
    }
}

function nextImg3() {
    let counter = 1;
    changeImg36.onclick = () => {
        imgOfItem36.src = products[36].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg37.onclick = () => {
        imgOfItem37.src = products[37].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg38.onclick = () => {
        imgOfItem38.src = products[38].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg39.onclick = () => {
        imgOfItem39.src = products[39].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg40.onclick = () => {
        imgOfItem40.src = products[40].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg41.onclick = () => {
        imgOfItem41.src = products[41].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg42.onclick = () => {
        imgOfItem42.src = products[42].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg43.onclick = () => {
        imgOfItem43.src = products[43].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg44.onclick = () => {
        imgOfItem44.src = products[44].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg45.onclick = () => {
        imgOfItem45.src = products[45].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg46.onclick = () => {
        imgOfItem46.src = products[46].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg47.onclick = () => {
        imgOfItem47.src = products[47].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg48.onclick = () => {
        imgOfItem48.src = products[48].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg49.onclick = () => {
        imgOfItem49.src = products[49].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }

}

nextImg3()

phonesAddToCart36.onclick = () => {
    cartProducts.push(products[36])
    addCartNum()
    numberOfItemsInCart()

}
phonesAddToCart37.onclick = () => {
    cartProducts.push(products[37])
    addCartNum()
    numberOfItemsInCart()

}
phonesAddToCart38.onclick = () => {
    cartProducts.push(products[38])
    addCartNum()
    numberOfItemsInCart()

}
phonesAddToCart39.onclick = () => {
    cartProducts.push(products[39])
    addCartNum()
    numberOfItemsInCart()

}
phonesAddToCart40.onclick = () => {
    cartProducts.push(products[40])
    addCartNum()
    numberOfItemsInCart()

}
phonesAddToCart41.onclick = () => {
    cartProducts.push(products[41])
    addCartNum()
    numberOfItemsInCart()

}
phonesAddToCart42.onclick = () => {
    cartProducts.push(products[42])
    addCartNum()
    numberOfItemsInCart()

}
phonesAddToCart43.onclick = () => {
    cartProducts.push(products[43])
    addCartNum()
    numberOfItemsInCart()

}
phonesAddToCart44.onclick = () => {
    cartProducts.push(products[44])
    addCartNum()
    numberOfItemsInCart()

}
phonesAddToCart45.onclick = () => {
    cartProducts.push(products[45])
    addCartNum()
    numberOfItemsInCart()

}
phonesAddToCart46.onclick = () => {
    cartProducts.push(products[46])
    addCartNum()
    numberOfItemsInCart()

}
phonesAddToCart47.onclick = () => {
    cartProducts.push(products[47])
    addCartNum()
    numberOfItemsInCart()

}
phonesAddToCart48.onclick = () => {
    cartProducts.push(products[48])
    addCartNum()
    numberOfItemsInCart()

}
phonesAddToCart49.onclick = () => {
    cartProducts.push(products[49])
    addCartNum()
    numberOfItemsInCart()

}
