(() => {
    let carouselButtons = document.getElementsByClassName('carouselButton');//GET LIST OF CAROUSEL CONTROLS
    let carouselItems = document.getElementsByClassName('carouselItem');//GET LIST OF CAROUSEL ITEMS
    let carouselContainer = document.getElementById('carouselContainer');//GET CAROUSEL ITEMS CONTAINER
    //LOOP THROUGH THE CAROUSEL CONTROLS
    //CAROUSEL CONTROLS COUNT == CAROUSEL ITEMS COUNT
    for (let i = 0; i < carouselButtons.length; i++) {
        //ATTACH AN EVENT LISTEN FOR onCLICK FOR EVERY CAROUSEL CONTROL BUTTON
        carouselButtons[i].addEventListener('click', e => {
            //WHEN CLICKED SCROLL TO THE BUTTON'S CORRESPONDING ITEM
            carouselContainer.scrollTo(0, carouselItems[0].scrollHeight * i);
            //LOOP AROUND THE CONTROLS AND REMOVE THE EFFECT APPLIED WHEN A CONTROL IS CLICKED(ACTIVE)
            Array.from(carouselButtons).forEach(carouselButton => {
                const selected = carouselButton.getAttribute('aria-selected');
                if (selected)
                    carouselButton.setAttribute('aria-selected', false);
            });
            //ATTACH A VISUAL EFFECT FOR THE CLICKED CONTROL TO INDICATE THAT IT'S THE CLICKED(ACTIVE) ONE
            carouselButtons[i].setAttribute('aria-selected', true);
        });
    }
})();