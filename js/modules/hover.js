export default function hover () {

    if (window.matchMedia('(max-width: 767px)').matches) {

        const sectionLink = document.querySelector('.section-link__link');

        if (sectionLink.classList.contains('section-link__link-hover')) {

            sectionLink.classList.remove('section-link__link-hover');
        }
    }
}