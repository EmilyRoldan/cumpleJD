document.addEventListener('DOMContentLoaded', function () {
    const noBtn = document.querySelector('.noBtn');
    const yesBtn = document.querySelector('.yesBtn');
    const header = document.querySelector('.Title');
    const buttonContainer = document.querySelector('.button-container');
    const gifContainer = document.querySelector('.gif-container')
    const nextContainer = document.querySelector('.nextbtn')
    

    yesBtn.addEventListener('click', function () {
        setInterval(createHeart, 100);
        buttonContainer.style.display = 'none';
        header.style.display = 'none';
        gifContainer.style.display = 'flex';  // Mostrar el GIF
        nextContainer.style.display = 'flex'; // Mostrar el boton de next


        // Iniciar el texto animado
        new Typed('.card__parrafo', {
            strings: ['Es broma jiji pero yo se que quieres muajajjaja...Hunde la flecha!!'],
            typeSpeed:100,
            backSpeed:60,
            backDelay:1000,
            showCursor:false,
            loop: false
        });
    });

    noBtn.addEventListener('mouseenter', function () {
        swapButtons();
    });


    function swapButtons() {
        const noBtnRect = noBtn.getBoundingClientRect();
        const yesBtnRect = yesBtn.getBoundingClientRect();

        const noBtnLeft = noBtnRect.left;
        const noBtnTop = noBtnRect.top;

        noBtn.style.position = 'absolute';
        yesBtn.style.position = 'absolute';

        noBtn.style.left = `${yesBtnRect.left}px`;
        noBtn.style.top = `${yesBtnRect.top}px`;

        yesBtn.style.left = `${noBtnLeft}px`;
        yesBtn.style.top = `${noBtnTop}px`;
    }

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 * 3 + "s";
        heart.innerText = "❤️";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
});
