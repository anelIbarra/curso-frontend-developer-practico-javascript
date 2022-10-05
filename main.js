const menuEmail = document.querySelector('.navbar-email');
const desktopMenu =  document.querySelector('.desktop-menu');
const mobileMenu =  document.querySelector('.mobile-menu');
const burgerMenu =  document.querySelector('.menu');
const cartIcon =  document.querySelector('.navbar-shopping-cart ');
const shoppingCart =  document.querySelector('#shoppingCartContainer');
const cardsContainer =  document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetailContainer')
const productDetailContainerClose = document.querySelector('.product-detail-close')


menuEmail.addEventListener('click', toggleDesktopMenu );

    function toggleDesktopMenu(){
        const isShoppingCartclosed = shoppingCart.classList.contains('inactive');
        
        const isProductDetailContainerClose = productDetailContainer.classList.contains('inactive');
        
            if(!isShoppingCartclosed){
            shoppingCart.classList.add('inactive');
            } 
            if(!isProductDetailContainerClose){
            productDetailContainer.classList.add('inactive');
            }
        mobileMenu.classList.toggle('inactive');
    
    desktopMenu.classList.toggle('inactive');
    }

burgerMenu.addEventListener('click', toggleMobileMenu );

    function toggleMobileMenu(){
        const isShoppingCartclosed = shoppingCart.classList.contains('inactive');
        if(!isShoppingCartclosed){
            shoppingCart.classList.add('inactive');
        } 
        mobileMenu.classList.toggle('inactive');
    }
cartIcon.addEventListener('click', toggleShoppingCart );

    function toggleShoppingCart(){
        const isMobilemenuclosed = mobileMenu.classList.contains('inactive'); 
        
        const isDesktopmenuclosed = desktopMenu.classList.contains('inactive'); 
        
        const isProductDetailContainerClose = productDetailContainer.classList.contains('inactive');

            if(!isMobilemenuclosed){
            mobileMenu.classList.add('inactive');
            }
            if(!isDesktopmenuclosed){
            desktopMenu.classList.add('inactive');
            }
            if(!isProductDetailContainerClose){
                productDetailContainer.classList.add('inactive');
            }
        shoppingCart.classList.toggle('inactive');
    }
 cardsContainer.addEventListener('click',openProductDetailcontainer)
    function openProductDetailcontainer(){
        productDetailContainer.classList.remove('inactive');
    }
productDetailContainerClose.addEventListener('click', closeProductDetailcontainer)
    function closeProductDetailcontainer(){
        productDetailContainer.classList.add('inactive');
    }
let productList = [];
    productList.push({
    name:'Bike',
    price:1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });
    productList.push({
    name:'Joystick',
    price:100,
    image: 'https://images.pexels.com/photos/1371985/pexels-photo-1371985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    });
    productList.push({
    name:'Headphones',
    price:120,
    image: 'https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    });
    productList.push({
    name:'Smartwatch',
    price:150,
    image: 'https://images.pexels.com/photos/4379288/pexels-photo-4379288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    });
    productList.push({
    name:'Laptop',
    price:1500,
    image: 'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    });

function productRender(){
    for(product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailcontainer)

        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        
        const productPrice =  document.createElement('p');
        productPrice.innerText = "$" + product.price;
        
        const productName =  document.createElement('p');
        productName.innerText = product.name;
       
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

        productInfoFigure.appendChild(productImgCart);

        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productPrice);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);
    }
}

function productDetailRender(){

}

productRender();