(() => {
    const tabsItem = document.querySelectorAll('.tabs__links--item');
    const tabsContent = document.querySelectorAll('.tabs__content--item');
    tabsItem.forEach((tab, index) => {
        tab.addEventListener('click', (event) => {
            tabsContent.forEach((content) => {
                content.classList.remove('active')
            })
            tabsItem.forEach((item) => {
                item.classList.remove('active')
            })
            tabsItem[index].classList.add('active');
            tabsContent[index].classList.add('active');
        })
    });
})(); // Додайте виклик для цієї IIFE

(() => {
   const openMenu = document.querySelector('.header__box--burger');
   const closeMenu = document.querySelector('.header__nav--close');
   const headerNavigation = document.querySelector('.header__nav');
   openMenu.addEventListener('click', () => {
    headerNavigation.classList.add('active');
   })
   closeMenu.addEventListener('click', () => {
    headerNavigation.classList.remove('active')
   })
})(); // Додайте виклик для цієї IIFE
