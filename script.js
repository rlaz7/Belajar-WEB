document.addEventListener('DOMContentLoaded', () => { //portofolio
    const filterButtons = document.querySelectorAll('[data-category]');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedCategory = button.getAttribute('data-category');

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            projectItems.forEach(item => {
                const itemCategory = item.getAttribute('data-item');
                if (selectedCategory === 'all' || itemCategory === selectedCategory) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
        });
    });

    //form pengisian
    const contactForm = document.getElementById('contactForm');
    const inputMessage = document.getElementById('inputMessage');
    const errorMessage = document.getElementById('error-message');

    if (contactForm && inputMessage && errorMessage) {
        contactForm.addEventListener('submit', (event) => {
            const trimmedValue = inputMessage.value.trim();

            if (trimmedValue === '') {
                event.preventDefault();
                errorMessage.textContent = 'Pesan kolaborasi tidak boleh kosong!';
                errorMessage.style.display = 'block';
            }
        });

        inputMessage.addEventListener('input', () => {
            errorMessage.style.display = 'none';
        });
    }
});
