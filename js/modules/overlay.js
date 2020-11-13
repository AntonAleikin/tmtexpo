export default function overlay () {

    const registerSection = document.querySelector('.register-section');

    const modal = document.createElement('div');
    modal.classList.add('overlay');
    modal.innerHTML = `

        <div class="overlay-content">

            <div class="overlay-header">Thank you for your interest!</div>

            <div class="overlay-text">
                Our manager will contact you within 24 hours. 
                Please check your email, including the spam box.
            </div>

            <button class="overlay-button">OK</button>
        </div>
    `;
    document.documentElement.style.overflow = 'hidden';
    registerSection.append(modal);

    const closeButton = document.querySelector('.overlay-button');
    closeButton.addEventListener("click", (e) => {
        e.preventDefault();

        document.documentElement.style.overflow = 'auto';
        modal.remove();
    });
}