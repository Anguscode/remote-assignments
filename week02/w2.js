// Assignment 4 

// Request 1: Click to Change Text.
// When the user clicks on the "Welcome Message" block, change text to "Have a Good Time!".

const message = document.querySelector('.message')
const messageChange = document.querySelector('.welcome')

message.addEventListener('click',()=>{
    messageChange.textContent = "Have a Good Time!"
});


// Request 2: Click to Show/Close Menu.
// When the user clicks the menu at the top-right corner, show the hidden mobile menu. After that, the user can click the close button to hide it.

const HamburgerMenu = document.querySelector('.hamburger-menu')
const HamburgerMenuList = document.querySelector('.hamburger-menu-container')

HamburgerMenu.addEventListener('click',()=>{
    HamburgerMenuList.style.top = '0';
    HamburgerMenuList.style.right = '0';
    HamburgerMenu.style.display = 'none';
});

const btnClose = document.querySelector('.x-button')

btnClose.addEventListener('click',()=>{
    HamburgerMenuList.style.top = '-10000px';
    HamburgerMenuList.style.right = '-10000px';
    HamburgerMenu.style.display = 'flex';
});


// Request 3: Click to Show More Content Boxes.
// There are some more content boxes waiting to show. When the user clicks the Call-to-Action button, show those hidden content boxes.

const btnToggle = document.querySelector('.cta-button')

btnToggle.addEventListener('click',() => {
    const boxContainer = document.querySelector('.container-hide')
    
    if(boxContainer.style.display === 'none'){
    boxContainer.style.width = '100%';
    boxContainer.style.height = '100%';
    boxContainer.style.display = 'flex';
    boxContainer.style.flexWrap = 'wrap';
    boxContainer.style.justifyContent = 'center'; 
    boxContainer.style.padding = '20px';
    }else{
        boxContainer.style.display = 'none';
    }
})