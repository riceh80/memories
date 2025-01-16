document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.querySelector('.valentine-button-yes');
    const noButton = document.querySelector('.valentine-button-no');
    const centerContainer = document.querySelector('.center-container');
    
    const handleYesButtonClick = () => {
        centerContainer.style.animation = 'fadeout 800ms ease-in-out';
        setTimeout(() => {
            centerContainer.innerHTML = `
                <div class="new-section">
                    <h2>Thank you for picking yes 😘!(Even if you picked no you really didn't have a choice hehe) Please proceed with the next part of this website.</h2>
                    <button class="next-button">Next</button>
                </div>`;
        }, 800);
    };

    yesButton.addEventListener('click', handleYesButtonClick);
    noButton.addEventListener('click', () => {
        noButton.textContent = 'Yes';
        noButton.classList.remove('valentine-button-no');
        noButton.classList.add('valentine-button-yes');
        noButton.addEventListener('click', handleYesButtonClick);
    });
});


