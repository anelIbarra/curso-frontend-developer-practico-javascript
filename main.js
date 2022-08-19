const menuEmail = document.querySelector('.navbar-email');
const desktopMenu =  document.querySelector('.desktop-menu');
const mobileMenu =  document.querySelector('.mobile-menu');
const burgerMenu =  document.querySelector('.menu');
const cartIcon =  document.querySelector('.navbar-shopping-cart ');
const shoppingCart =  document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu );

    function toggleDesktopMenu(){
        const isShoppingCartclosed = shoppingCart.classList.contains('inactive');
        if(!isShoppingCartclosed){
            shoppingCart.classList.add('inactive');
            
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
        
        if(!isMobilemenuclosed){
            mobileMenu.classList.add('inactive');
        }
        if(!isDesktopmenuclosed){
            desktopMenu.classList.add('inactive');
        }
        shoppingCart.classList.toggle('inactive');
    }

