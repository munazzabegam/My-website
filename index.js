// function nav() {
//     let navbar = document.getElementById('navbar');
//     if(navbar.style.width == "100%"){
//         navbar.style.width = "0";
//     }else{
//         navbar.style.width = "100%";
//     }
// }


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
});


// contact section

const form = document.querySelector('#contact-form');
        const nameInput = document.querySelector('#name');
        const emailInput = document.querySelector('#email');
        const messageInput = document.querySelector('#message');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
            // Send the form data to a server or display a success message
        });