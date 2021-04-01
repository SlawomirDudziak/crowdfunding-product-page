document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('.green-button');
    const closeButton = document.querySelector('.close-modal');

    closeButton.addEventListener('click', () => {
        closeForm();
    });

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            openForm();
        });
    });

    function openForm() {
        document.getElementById("modal").style.display = "block";
    }
    
    function closeForm() {
        document.getElementById("modal").style.display = "none";
    }
})
