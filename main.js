document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('.green-button');
    const closeButton = document.querySelector('.close-modal');
    const option1Header = document.getElementById('option1');
    const option2Header = document.getElementById('option2');
    const option3Header = document.getElementById('option3');

    option1.addEventListener('click', () => {
        removeSelection();
        const aboutOption = option1Header.parentElement.parentElement;
        aboutOption.classList.add("selected");
    })

    option2.addEventListener('click', () => {
        removeSelection();
        const aboutOption = option2Header.parentElement.parentElement;
        aboutOption.classList.add("selected");
    })

    option3.addEventListener('click', () => {
        removeSelection();
        const aboutOption = option3Header.parentElement.parentElement;
        aboutOption.classList.add("selected");
    })

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

    function removeSelection() {
        const options = document.querySelectorAll('.about-option');
        options.forEach(option => option.classList.remove("selected"));
    }
})
