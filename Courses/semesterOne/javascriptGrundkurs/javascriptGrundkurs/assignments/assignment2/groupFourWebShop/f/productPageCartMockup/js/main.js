
//targets elements with the class add-cart, could use jQuery and do let carts = $('.add-cart') when we do the actual project.
let  carts = document.querySelectorAll('.add-cart'); 

//change these objects to better match grade criteria. These are just so I can test functionality. Like everythings else in this document.
//for testing purposes we are going to use an array of objects called products. Like this:
let products = [ 
    {
        name: "Bergamot",
        tag: "bergamot",
        price: 750,
        inCart: 0
    },
    {
        name: "Iris",
        tag: "iris",
        price: 850,
        inCart: 0
    },
    {
        name: "Saffron",
        tag: "saffron",
        price: 950,
        inCart: 0
    },
    {
        name: "Sandalwood",
        tag: "sandalwood",
        price: 1050,
        inCart: 0
    }
];



//for loop for the cart buttons from 0 to carts.length... so as many buttons as there are. in this case 4. 
// its gonna start at [0] and finish at [3]. 
//add an eventlistener that checks for clicks on the button and execute the function that does something.
// what do we want to connect the buttons to?
//
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {

        //console.log('X item(s) has been added to cart') type functionality is what we want.
        //console.log(Total cost is : x SEK) type functionality is what we want.
        cartNumbers(products[i]); //this function will pass the parameter of the products[i] on the button we click. we grab it and call it product
        totalCost(products[i])//this function will pass the parameter of the products[i] on the button we click. we grab it and call it product
    })
}




//function to check if there is any items in the cart from a previous session

function onLoadCartNumbers() {
    //checks localstorage to see if there are any items in the cart.
    let productNumbers = localStorage.getItem('cartNumbers');

    if( productNumbers ) {
        //if there are, change the targeted selectors textContent to be the number 
        document.querySelector('.cart span').textContent = productNumbers;
    }
}


//this function is gonna check how many items we have in our cart.
//here we use localStorage key and values to remember how many items we have
//localStorage can only hold strings.
function cartNumbers(product) { // grabs the product from the for loop when we click the button, is also passing it to the setItems function below
    //Variable that Checks localStorage if there are any items in the cart.
    let productNumbers = localStorage.getItem('cartNumbers'); 
    //these console logs are to show what we get from localStorage, remove them.
    console.log(typeof productNumbers);
    //parses the string from localStorage and converts it into  a number.
    productNumbers = parseInt(productNumbers); 
    console.log(typeof productNumbers); //what the parseInt() did.
    if( productNumbers ) { //if productNumbers exists in localStorage do this:
        // make the localStorage key cartNumbers, give it a value of productNumbers and then + 1
        localStorage.setItem('cartNumbers', productNumbers + 1); // 
        //target the span element within element with .cart class, in this case the span with  a number we change
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else { //otherwise do this:

        //create localStorage Key and give it the value of 1.
        localStorage.setItem('cartNumbers', 1);
        // target the span element within element with .cart class, in this case the span with  a number we change using .textContent
        document.querySelector('.cart span').textContent = 1;
    }
    
    setItems(product); //grabs the product parameter from the cartNumbers function.
}


function setItems(product) { // the products[i] that gets passed around like a hot potato.
    console.log('This is inside the setItems function');
    console.log('This is the product I clicked', product)   
    let cartItems = localStorage.getItem('productsInCart'); //cartItems is the value of the key productsInCart in localStorage.
    
    if(cartItems != null ){ //this if checks if there are items in the localStorage already, the != operator means "is different than", so if cartItems is different than null do this:

        if(cartItems[product.tag] == undefined ) { //this if checks if you click another object or not. 
            //If you do, this will spread the old objects properties and the new objects properties into one object with the combined properties
            cartItems = {
                //spread operator... array/object literals? ES2015 feature.
                //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                //takes a property from an existing object or multiple existing objects and combine them into one object.
                /* 
                let obj = {
                    A:1,
                    B:'2'
                }
                let objExpanded = {
                    ...obj,
                    A:'3'
                    B: '4'
                }

                let objExpandedAgain = {
                    ...objExpanded,
                    e: '5'
                }
                console.log(objExpanded); = {a: 1, b: 2, c: 3, e: }
                console.log(objExpandedAgain)
                */
                ...cartItems,
                
                [product.tag]: product  
            }
        }
        //cartItems['theTagOfTheProductClicked'] += increase the value by 1
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1; // make product.inCart 1
        cartItems = {
            [product.tag]: product
        }
    }

    
    
    localStorage.setItem('productsInCart', JSON.stringify(cartItems)); //creates a key with the name productsInCart, productsInCart will have the value cartItems thats been converted to a string using JSON.stringify(sinceLocalStorageOnlyHoldsStrings)
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price );
    } else {
        localStorage.setItem('totalCost', product.price);
    }

    
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.products');
    let cartCost = localStorage.getItem('totalCost');
    
    if(cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map( (item, index) => {
            productContainer.innerHTML += `
            <div class="product"><ion-icon name="close-circle"></ion-icon><img src="../images/${item.tag}.jpg" /> 
                <span class="sm-hide">${item.name}</span>
            </div>
            <div class="price sm-hide">${item.price} SEK</div>
            <div class="quantity">
                <ion-icon class="decrease" name="remove-circle-outline"></ion-icon>
                    <span>${item.inCart}</span>
                <ion-icon class="increase" name="add-circle-outline"></ion-icon>   
            </div>
            <div class="total">${item.inCart * item.price},00 SEK</div> 
            `;
        });
            
        productContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
                Basket Total
            </h4>
            <h4 class="basketTotal">
                ${cartCost} SEK
            </h4>
        </div>
        `;   
            
            
            
            
            
                
    }    
    
}

onLoadCartNumbers();
displayCart(); 