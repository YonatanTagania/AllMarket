
let cartProducts = []

cartArray()

for (i = 0; i < products.length; i++) {
    if (products[i].category == "food") {
        productsTable.innerHTML += `<article class="foodArticle"><p id="itemName">product name: <b>${products[i].name}</b></p>
        <p id="itemPrice">price: <b>${products[i].price}</b></p>
        <div></button><img class="productImg"; id="imgOfItem${i}"; src="${products[i].pictures[0]}" height="300px" width="300px"><br>
        <button type="button"; id="changeImg${i}">next image</button>
       </div>
        <p id="itemDescription">description: <b>${products[i].description}</b></p>
        <span><button type="button"; class="addToTheCart"; id="foodAddToCart${i}">add to cart</button><span></article>`
    }
}


function nextImg0() {
    let counter = 1;
    changeImg0.onclick = () => {
        imgOfItem0.src = products[0].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg1.onclick = () => {
        imgOfItem1.src = products[1].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg2.onclick = () => {
        imgOfItem2.src = products[2].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg3.onclick = () => {
        imgOfItem3.src = products[3].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg4.onclick = () => {
        imgOfItem4.src = products[4].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg5.onclick = () => {
        imgOfItem5.src = products[5].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg6.onclick = () => {
        imgOfItem6.src = products[6].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg7.onclick = () => {
        imgOfItem7.src = products[7].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg8.onclick = () => {
        imgOfItem8.src = products[8].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg9.onclick = () => {
        imgOfItem9.src = products[9].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg10.onclick = () => {
        imgOfItem10.src = products[10].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
    changeImg11.onclick = () => {
        imgOfItem11.src = products[11].pictures[counter++]
        if (counter >= 2) {
            counter = 0
        }
    }
}
nextImg0()
foodAddToCart0.onclick = () => {
    cartProducts.push(products[0])
    addCartNum()
}

foodAddToCart1.onclick = () => {
    cartProducts.push(products[1])
    addCartNum()
}

foodAddToCart2.onclick = () => {
    cartProducts.push(products[2])
    addCartNum()
}

foodAddToCart3.onclick = () => {
    cartProducts.push(products[3])
    addCartNum()
}

foodAddToCart4.onclick = () => {
    cartProducts.push(products[4])
    addCartNum()
}

foodAddToCart5.onclick = () => {
    cartProducts.push(products[5])
    addCartNum()
}

foodAddToCart6.onclick = () => {
    cartProducts.push(products[6])
    addCartNum()
}

foodAddToCart7.onclick = () => {
    cartProducts.push(products[7])
    addCartNum()
}

foodAddToCart8.onclick = () => {
    cartProducts.push(products[8])
    addCartNum()
}

foodAddToCart9.onclick = () => {
    cartProducts.push(products[9])
    addCartNum()
}

foodAddToCart10.onclick = () => {
    cartProducts.push(products[10])
    addCartNum()
}

foodAddToCart11.onclick = () => {
    cartProducts.push(products[11])
    addCartNum()
}

let addButton = document.getElementsByClassName("addToTheCart");
for (i = 0; i < addButton.length; i++) {
    addButton[i].style.background = "black";
    addButton[i].style.margin = "15px"

}

function addCartNum() {
    let addedProduct = cartItems.innerText
    addedProduct++
    cartItems.innerText = addedProduct
}


    // לחזור לזה בסוף הפרוייקט אם יהיה זמן 


    // let cartSize = setInterval(() => {
    //     cartLocaction.style.transform = `scale(${1.1})`;
    // }, 200)