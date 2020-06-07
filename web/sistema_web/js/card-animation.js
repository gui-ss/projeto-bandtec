let cards = document.querySelectorAll(".box-graph-top");

function expandCard(e) {
    if (e.target.classList.contains("box-graph-top")) {
        let id = e.target.getAttribute("id");

        cards.forEach(card => {
            let cardId = card.getAttribute("id");

            if (cardId != id) {
                card.classList.toggle('disabledCard');
            }
            else {
                card.classList.toggle('expandedCard');
            }
        });
    }
}

cards.forEach(card => {
    card.addEventListener('click', expandCard);
});