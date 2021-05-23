document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('.select-reward');
    const bookmarkButton = document.querySelector('.bookmark-button');
    const modalButton = document.querySelector('.modal-button');
    const successModalButton = document.querySelector('#success-modal-button');
    const closeButton = document.querySelector('.close-modal');
    const option1Header = document.getElementById('option1');
    const option2Header = document.getElementById('option2');
    const option3Header = document.getElementById('option3');
    const enterPledge2 = document.querySelector('#enter-pledge-2');
    const enterPledge3 = document.querySelector('#enter-pledge-3');

    option1.addEventListener('click', () => {
        removeSelection();
        const aboutOption = option1Header.parentElement.parentElement;
        aboutOption.classList.add("selected");
        removeEnterPledge(enterPledge2);
        removeEnterPledge(enterPledge3);
    });

    option2.addEventListener('click', () => {
        removeSelection();
        const aboutOption = option2Header.parentElement.parentElement;
        aboutOption.classList.add("selected");
        toggleEnterPledge(enterPledge2);
        removeEnterPledge(enterPledge3);
    });

    option3.addEventListener('click', () => {
        removeSelection();
        const aboutOption = option3Header.parentElement.parentElement;
        aboutOption.classList.add("selected");
        toggleEnterPledge(enterPledge3);
        removeEnterPledge(enterPledge2);
    });

    closeButton.addEventListener('click', () => {
        closeModal();
    });

    modalButton.addEventListener('click', () => {
        closeModal();
        openSuccessModal();
    });

    successModalButton.addEventListener('click', () => {
        closeSuccessModal();
    });

    bookmarkButton.addEventListener('click', () => {
        changeBookmarkButton();
    });

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            openModal();
        });
    });

    function openModal() {
        document.getElementById("modal").style.display = "block";
    }
    
    function closeModal() {
        document.getElementById("modal").style.display = "none";
    }

    function removeSelection() {
        const options = document.querySelectorAll('.about-option');
        options.forEach(option => option.classList.remove("selected"));
    }

    function openSuccessModal() {
        document.getElementById("success-modal").style.display = "block";
    }

    function closeSuccessModal() {
        document.getElementById("success-modal").style.display = "none";
    }

    function changeBookmarkButton() {
        bookmarkButton.classList.toggle('bookmark');
        bookmarkButton.classList.toggle('bookmarked');
        if (bookmarkButton.innerText == 'Bookmarked') {
            // Bookmark
            bookmarkButton.innerHTML = "<img src=\'images/icon-bookmark.svg\'><span class=\'bookmark-span\'>Bookmark</span>";
        } else {
            // Bookmarked
            bookmarkButton.innerHTML = "<img src=\'images/icon-bookmark.svg\'><span class=\'bookmark-span\'>Bookmarked</span>";
        }
    }

    function toggleEnterPledge(pledge) {
        pledge.classList.toggle("none");
        pledge.classList.toggle("block");
    }

    function removeEnterPledge(pledge) {
        pledge.classList.add("none");
        pledge.classList.remove("block");
    }
})
