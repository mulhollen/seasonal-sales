// productData = [];
// categories = [];



function dataComplete(event) {
        // going down in this event (think what you'd see in console.log) looking at our event - then the target the specific thing - viewing the responseText
        productData = JSON.parse(this.responseText);
        
        showItems(productData);
        console.log("this product data", productData);
        console.log("keys", Object.keys(productData));
}

function dataFailed(event) {
    console.log("something went wrong");
}

let showItems = (data) => {
    let productDisplay = document.getElementById("container");
    let keys = Object.keys(data)
    
        for (var i = 0; i < productData.products.length; i++){
            
            let productBlock = buildInventory(i);
            productDisplay.innerHTML += productBlock;

        }
    };

let buildInventory = (num) => {
    //building a string to create the visual display 
        let block = "",
            wrapper = `<section class="block-wrapper" style="border: 2px solid #000000;">`,
            title = `<h3>Name: ${productData.products[num].name}</h3>`,
            department = `<h3>Department: ${productData.products[num].name}</h3>`,
            price = `<div class="block-years">Price ${productData.products[num].price}</div>`;

            block += `${wrapper + title + department + price}</section>`;
        return block;
        
};




// XMLHttp requests, gets and sends

let productDataRequest = new XMLHttpRequest(); // https://www.w3schools.com/xml/xml_http.asp

productDataRequest.addEventListener("load", dataComplete);
productDataRequest.addEventListener("error", dataFailed);

productDataRequest.open("GET", "products.json"); //this just opens it up you're not going to get it until you send (line below)
productDataRequest.send();

let categoriesDataRequest = new XMLHttpRequest(); // https://www.w3schools.com/xml/xml_http.asp

categoriesDataRequest.addEventListener("load", dataComplete);
categoriesDataRequest.addEventListener("error", dataFailed);

categoriesDataRequest.open("GET", "categories.json"); //this just opens it up you're not going to get it until you send (line below)
categoriesDataRequest.send();

