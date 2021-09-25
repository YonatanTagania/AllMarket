let cartProducts = []


cartArray()

for (i = 0; i < products.length; i++) {
    if (products[i].category == "tv's and consoles") {

        productsTable.innerHTML += `<article class="TechArticle"><p id="itemName">product name: <b>${products[i].name}</b></p>
        <p id="itemPrice">price: <b>${products[i].price}</b></p>
        <div></button><img class="productImg"; id="imgOfItem${i}"; src="${products[i].pictures[0]}" height="300px" width="300px"><br>
        <button type="button"; id="changeImg${i}">next image</button>
       </div>
        <p id="itemDescription">description: <b>${products[i].description}</b></p>
        <span><button type="button"; class="addToTheCart"; id="TechAddToCart${i}">add to cart</button><span></article>`
    }
}

function nextImg() {
    let counter = 1;
    changeImg12.onclick = () => {
        imgOfItem12.src = products[12].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }


    changeImg13.onclick = () => {
        imgOfItem13.src = products[13].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }


    changeImg14.onclick = () => {
        imgOfItem14.src = products[14].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }


    changeImg15.onclick = () => {
        imgOfItem15.src = products[15].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }


    changeImg16.onclick = () => {
        imgOfItem16.src = products[16].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }


    changeImg17.onclick = () => {
        imgOfItem17.src = products[17].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }


    changeImg18.onclick = () => {
        imgOfItem18.src = products[18].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }


    changeImg19.onclick = () => {
        imgOfItem19.src = products[19].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }


    changeImg20.onclick = () => {
        imgOfItem20.src = products[20].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }


    changeImg21.onclick = () => {
        imgOfItem21.src = products[21].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }


    changeImg22.onclick = () => {
        imgOfItem22.src = products[22].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }

    }


    changeImg23.onclick = () => {
        imgOfItem23.src = products[23].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
}

nextImg()

TechAddToCart12.onclick = () => {
    cartProducts.push(products[12])
    addCartNum()
}

TechAddToCart13.onclick = () => {
    cartProducts.push(products[13])
    addCartNum()
}
TechAddToCart14.onclick = () => {
    cartProducts.push(products[14])
    addCartNum()
}
TechAddToCart15.onclick = () => {
    cartProducts.push(products[15])
    addCartNum()
}

TechAddToCart16.onclick = () => {
    cartProducts.push(products[16])
    addCartNum()
}

TechAddToCart17.onclick = () => {
    cartProducts.push(products[17])
    addCartNum()
}

TechAddToCart18.onclick = () => {
    cartProducts.push(products[18])
    addCartNum()
}

TechAddToCart19.onclick = () => {
    cartProducts.push(products[19])
    addCartNum()
}

TechAddToCart20.onclick = () => {
    cartProducts.push(products[20])
    addCartNum()
}

TechAddToCart21.onclick = () => {
    cartProducts.push(products[21])
    addCartNum()
}

TechAddToCart22.onclick = () => {
    cartProducts.push(products[22])
    addCartNum()
}

TechAddToCart23.onclick = () => {
    cartProducts.push(products[23])
    addCartNum()
}


