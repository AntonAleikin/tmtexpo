// Импортируем сервис
import fetchservice from '../services/fetch-service';

export default function sendForm() {

    const form = document.querySelector('.form');

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        }); 

        fetchservice('php/send-mail.php', formDataObject)
        .then(response => console.log(response));
    });
}