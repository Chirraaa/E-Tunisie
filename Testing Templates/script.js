let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
var light = document.querySelector(':root');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
var clickControl = true;

function mode_on() {
    if (clickControl) {
        light.style.setProperty('--bg-color', '#222327')
        light.style.setProperty('--text-color', '#fff')
        light.style.setProperty('--main-color', '#e2c78c')
        light.style.setProperty('--star-color', 'white')
        light.style.setProperty('--section-back', '#242733')
        light.style.setProperty('--bg-shadowbox', '#cfcece')
        light.style.setProperty('--buttons', '#e2c78c')
        clickControl = !clickControl;
    }

    else {
        light.style.setProperty('--bg-color', '#fff');
        light.style.setProperty('--text-color', 'black');
        light.style.setProperty('--main-color', '#e2c78c');
        light.style.setProperty('--star-color', 'black')
        light.style.setProperty('--section-back', '#f3f3f3')
        light.style.setProperty('--bg-shadowbox', '#cfcece')
        light.style.setProperty('--buttons', 'black')
        clickControl = !clickControl;
    }
}


/* ----------------------------------------------  Products List  ---------------------------------------------- */


let products = {
    data: [
        {
            productName: "Apple",
            category: "Fruits",
            description: "Best Apple in Tunisia!!!",
            price: "1.99 TND",
            image: "images/Products/Apple.png"
        },
        {
            productName: "Banana",
            category: "Fruits",
            description: "Best Banana in Tunisia!!!",
            price: "1.99 TND",
            image: "images/Products/banana.png"
        },
        {
            productName: "Ananas",
            category: "Fruits",
            description: "Best Ananas in Tunisia!!!",
            price: "1.99 TND",
            image: "images/Products/ananas.png"
        },
        {
            productName: "Pêche",
            category: "Fruits",
            description: "Best Pêche in Tunisia!!!",
            price: "1.99 TND",
            image: "images/Products/pêche.png"
        },
        {
            productName: "Poire",
            category: "Fruits",
            description: "Best Poire in Tunisia!!!",
            price: "1.99 TND",
            image: "images/Products/poire.png"
        },
        {
            productName: "Télécommande",
            category: "Electronique",
            description: "Best Télécommande in Tunisia!!!",
            price: "10.99 TND",
            image: "images/Products/télécommande.png"
        },
        {
            productName: "Télévision",
            category: "Electronique",
            description: "Best TV in Tunisia!!!",
            price: "1999.99 TND",
            image: "images/Products/tv.png"
        },
        {
            productName: "Tablette Wacom",
            category: "Electronique",
            description: "Best Wacom in Tunisia!!!",
            price: "600 TND",
            image: "images/Products/wacom.png"
        }
    ]
};

/* ----------------------------------------------  Product Creation  ---------------------------------------------- */

for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("product", i.category, "hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image");


    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);


    let container = document.createElement("div");

    let name = document.createElement("h3");
    name.classList.add("namePrice");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("span");
    price.innerText = i.price;
    container.appendChild(price);
    let description = document.createElement("p");
    description.classList.add("p");
    description.innerText = i.description;
    card.appendChild(description);

    let view = document.createElement("div");
    view.classList.add("view");
    card.appendChild(view);

    let viewB = document.createElement("button");
    viewB.classList.add("popup-btn");
    viewB.innerText = "View";
    view.appendChild(viewB);


    card.appendChild(container);
    document.getElementById("products").appendChild(card);

}

/* ----------------------------------------------  Product Popup-view Creation  ---------------------------------------------- */

for (let i of products.data) {

    let popupview = document.createElement("div");
    popupview.classList.add("popup-view");

    let popupcard = document.createElement("div");
    popupcard.classList.add("popup-card");
    popupview.appendChild(popupcard);

    let a = document.createElement("a");
    let ai = document.createElement("i");
    ai.classList.add("bx", "bx-x", "close-btn");
    a.appendChild(ai);
    popupcard.appendChild(a);

    let imgPview = document.createElement("div");
    imgPview.classList.add("product-img");
    let imageP = document.createElement("img");
    imageP.setAttribute("src", i.image);
    imgPview.appendChild(imageP)
    popupcard.appendChild(imgPview);

    let info = document.createElement("div");
    info.classList.add("info");
    
    let nameP = document.createElement("h2");
    nameP.innerText = i.productName;
    info.appendChild(nameP);
    let descriptionP = document.createElement("p");
    descriptionP.innerText = i.description;
    info.appendChild(descriptionP);
    let priceP = document.createElement("span");
    priceP.innerText = i.price;
    priceP.classList.add("price");
    info.appendChild(priceP);



    let a2 = document.createElement("a");
    a2.innerText = "Add to Cart";
    a2.classList.add("add-cart-btn");
    let a3 = document.createElement("a");
    a3.innerText = "Add to Wishlist";
    a3.classList.add("add-wish");
    info.appendChild(a2);
    info.appendChild(a3);

    popupcard.appendChild(info);

    document.getElementById("products").appendChild(popupview);
}

/* ----------------------------------------------  Search Filter  ---------------------------------------------- */

function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("activeB");
        }
        else {
            button.classList.remove("activeB");
        }
    });

    let elements = document.querySelectorAll(".product");
    elements.forEach(element => {
        if (value == "all") {
            element.classList.remove("hide");
        }
        else {
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            }
            else {
                element.classList.add("hide");
            }
        }

    });
}

/* ----------------------------------------------  Search Bar  ---------------------------------------------- */

document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".namePrice");
    let cards = document.querySelectorAll(".product");

    elements.forEach((element, index) => {
        if (element.innerText.includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hide");
        }
        else {
            cards[index].classList.add("hide");
        }
    });
});


window.onload = () => {
    filterProduct("all");
}

/* ----------------------------------------------  Popup-view Mecanism  ---------------------------------------------- */

let popupViews = document.querySelectorAll('.popup-view');
let popupBtns = document.querySelectorAll('.popup-btn');
let closeBtns = document.querySelectorAll('.close-btn');

var popup = function (popupClick) {
    popupViews[popupClick].classList.add('active');
}

popupBtns.forEach((popupBtn, i) => {
    popupBtn.addEventListener("click", () => {
        popup(i);
    });
});
closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
        popupViews.forEach((popupView) => {
            popupView.classList.remove('active');
        });
    });
});
