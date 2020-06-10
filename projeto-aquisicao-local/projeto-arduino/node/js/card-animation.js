let cards = document.querySelectorAll(".box-graph-top");
let arealeft = document.querySelector(".area-left");
let arealefttop = document.querySelector(".top-graph");

let bottom_graph = document.querySelector(".bottom-graph");
let area_right = document.querySelector(".area-right");

function expandCard(e) {
    if (e.target.classList.contains("box-graph-top")) {
        let id = e.target.getAttribute("id");


        cards.forEach(card => {
            let cardId = card.getAttribute("id");

            if (cardId != id) {
                card.classList.toggle('disabledCard');  
                arealeft.classList.toggle('area-left-disabled');
                arealefttop.classList.toggle('info-disabled');
                bottom_graph.classList.toggle('none');
                area_right.classList.toggle('none');
            }
            else {
                setTimeout(function () {
                    card.classList.toggle('expandedCard');
                }, 10);
            }
        });
    }
}

cards.forEach(card => {
    card.addEventListener('click', expandCard);
});