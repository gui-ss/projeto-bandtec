function expandCard(id, event) {
    let cardClicado = document.querySelector(`#${id}`);
    let deleteButton = cardClicado.querySelector(".deleteBtn");

    if (event.target != deleteButton) {
        let cards = document.querySelectorAll(".card");
        let addAreaButton = document.querySelector("#add-card");s

        cards.forEach(card => {
            let cardId = card.getAttribute("id");

            if (cardId != id) {
                if (card.classList.contains('disabledCard')) {
                    setTimeout(() => {
                        card.classList.remove('disabledCard');
                    }, 400)
                }
                else {
                    card.classList.add('disabledCard');
                }

            }
            else {
                cardClicado.classList.toggle('expandedCard');
            }
        });

        if (addAreaButton.classList.contains('disabledCard')) {
            setTimeout(() => {
                addAreaButton.classList.remove("disabledCard");
            }, 400);
        }
        else {
            addAreaButton.classList.add("disabledCard");
        }
    }
}

let modal = document.querySelector("#modal-area");

function modalAmbiente() {
    modal.classList.toggle('disabled');
}