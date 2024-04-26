document.addEventListener('DOMContentLoaded', () => {
    const popupLinks = document.querySelectorAll('.popup-link');

    popupLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const imageUrl = link.getAttribute('data-image');
            openPopup(imageUrl);
        });
    });

    function openPopup(imageUrl) {
        const popupWindow = window.open('', '_blank', 'width=400,height=300');
        popupWindow.document.write(`
            <html>
            <head>
                <title>Popup Image</title>
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        background-color: rgba(0, 0, 0, 0.5);
                    }
                    .popup-content {
                        width: 80%;
                        height: 80%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    img {
                        max-width: 100%;
                        max-height: 100%;
                        border-radius: 8px;
                    }
                </style>
            </head>
            <body>
                <div class="popup-content">
                    <img src="${imageUrl}" alt="Popup Image" class="popup-image">
                </div>
            </body>
            </html>
        `);
    }

    // Animação do título
    const titleElement = document.getElementById('animated-title');
    const titleText = titleElement.innerText;
    const titleLength = titleText.length;
    let currentIndex = 0;

    function animateTitle() {
        titleElement.innerText = titleText.substring(0, currentIndex);
        if (currentIndex < titleLength) {
            currentIndex++;
            setTimeout(animateTitle, 100); // Velocidade da animação (100ms)
        }
    }

    animateTitle(); // Inicia a animação do título
});
