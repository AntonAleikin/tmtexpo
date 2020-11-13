export default function hamburger () 
{
    if (window.matchMedia('(max-width: 767px)').matches) {

        const 
        hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        links = document.querySelectorAll('.menu__link');

        // Открываем/закрываем меню, при клике на гамбургер
        hamburger.addEventListener("click", (e) => {

            if (!hamburger.classList.contains('hamburger_active') && !menu.classList.contains('menu_active')) {

                hamburger.classList.add('hamburger_active');
                menu.classList.add('menu_active');
            } else {
    
                hamburger.classList.remove('hamburger_active');
                menu.classList.remove('menu_active');
            }
        });


        // После перехода по ссылке - сначала закрываем меню, а потом переходим по ссылке
        links.forEach((link) => {

            link.addEventListener("click", (e) => {
                e.preventDefault();

                hamburger.classList.remove('hamburger_active');
                menu.classList.remove('menu_active');

                // Ждем время анимации и переходим по ссылке
                setTimeout(() => {
                    document.location = e.target.href;
                }, 300);
            });
        }); 
    } 
}