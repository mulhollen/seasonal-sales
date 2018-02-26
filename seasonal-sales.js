"use strict";

let domDisplay = document.getElementById("container");
let select = document.getElementById("select");
let summer = document.getElementById("summer");
let fall = document.getElementById("fall");
let winter = document.getElementById("winter");
let spring = document.getElementById("spring");
let wrapper = `<section class="block-wrapper" style="border: 2px solid #000000;">`;
let title;
let price;
let category;

let productDisplay = (json) => {
    return new Promise(function (resolve, reject) {
        let getItems = new XMLHttpRequest();
        getItems.open('GET', json);
        getItems.send();
        getItems.addEventListener("load", (event) => {
            let inventory = JSON.parse(event.target.responseText);
            resolve(inventory);
        });
    });
};

let getKeys = (results) => {
    let keys = Object.keys(results);
    let data = results[keys];
    return data;
};

function display(){
    productDisplay('products.json')
        .then((results) => {
            return getKeys(results);
        }).then((data) => {
            data.forEach((item) => {
                title = `<h3>Name: ${item.name}</h3>`;
                price = `<p>Price: ${item.price}</p>`;
                domDisplay.innerHTML += `${wrapper + title + price}`

            });
        });

        
    productDisplay('categories.json')
        .then((results) => {
            return getKeys(results);
        }).then((data) => {
            data.forEach((item) => {
                category = `<p>Category: ${item.name}</p>`

                domDisplay.innerHTML += `${category}</section>`

            });
        });
}

function winterDiscounts() {
    domDisplay.innerHTML = "";
    if ()

}

display();

winter.addEventListener("click", winterDiscounts);

