let cartProducts = []

cartArray()

for (i = 0; i < products.length; i++) {
    if (products[i].category == "work tools") {

        productsTable.innerHTML += `<article class="workToolsArticle"><p id="itemName">product name: <b>${products[i].name}</b></p>
        <p id="itemPrice">price: <b>${products[i].price}</b></p>
        <div></button><img class="productImg"; id="imgOfItem${i}"; src="${products[i].pictures[0]}" height="300px" width="300px"><br>
        <button type="button"; id="changeImg${i}">next image</button>
       </div>
        <p id="itemDescription">description: <b>${products[i].description}</b></p>
        <span><button type="button"; class="addToTheCart"; id="ToolsAddToCart${i}">add to cart</button><span></article>`
    }
}

function nextImg2() {
    let counter = 1;
    changeImg24.onclick = () => {
        imgOfItem24.src = products[24].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg25.onclick = () => {
        imgOfItem25.src = products[25].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
        changeImg24.onclick = () => {
            imgOfItem24.src = products[24].pictures[counter++]
            if (counter >= 2) {
                counter = 0
            }
        }
    }
    changeImg26.onclick = () => {
        imgOfItem26.src = products[26].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg27.onclick = () => {
        imgOfItem27.src = products[27].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg28.onclick = () => {
        imgOfItem28.src = products[28].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg29.onclick = () => {
        imgOfItem29.src = products[29].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg30.onclick = () => {
        imgOfItem30.src = products[30].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg31.onclick = () => {
        imgOfItem31.src = products[31].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg32.onclick = () => {
        imgOfItem32.src = products[32].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg33.onclick = () => {
        imgOfItem33.src = products[33].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg34.onclick = () => {
        imgOfItem34.src = products[34].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg35.onclick = () => {
        imgOfItem35.src = products[35].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
}
nextImg2()


ToolsAddToCart24.onclick = () => {
    cartProducts.push(products[24])
    addCartNum()

}
ToolsAddToCart25.onclick = () => {
    cartProducts.push(products[25])
    addCartNum()

}
ToolsAddToCart26.onclick = () => {
    cartProducts.push(products[26])
    addCartNum()

}
ToolsAddToCart27.onclick = () => {
    cartProducts.push(products[27])
    addCartNum()

}
ToolsAddToCart28.onclick = () => {
    cartProducts.push(products[28])
    addCartNum()

}
ToolsAddToCart29.onclick = () => {
    cartProducts.push(products[29])
    addCartNum()

}
ToolsAddToCart30.onclick = () => {
    cartProducts.push(products[30])
    addCartNum()

}
ToolsAddToCart31.onclick = () => {
    cartProducts.push(products[31])
    addCartNum()

}
ToolsAddToCart32.onclick = () => {
    cartProducts.push(products[32])
    addCartNum()

}
ToolsAddToCart33.onclick = () => {
    cartProducts.push(products[33])
    addCartNum()

}
ToolsAddToCart34.onclick = () => {
    cartProducts.push(products[34])
    addCartNum()

}
ToolsAddToCart35.onclick = () => {
    cartProducts.push(products[35])
    addCartNum()

}