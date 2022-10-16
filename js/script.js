let xhr = new XMLHttpRequest();
xhr.open('GET', 'assets/cardModel.json');
xhr.send();

xhr.onload = function() {
    if (xhr.readyState !== 4 & xhr.status !== 200) {
        console.log (Error);
    } else {
        const cardModelArry = JSON.parse(xhr.responseText);
        createCard (cardModelArry);
    }
}

function createCard (cardModelArry) {
    cardModelArry.forEach (function(item) {
        // Create Card
        let row = document.querySelector('.row');
        let card = document.createElement ("div");
        card.className = "col col-6 col-md-4";
        row.append(card);
        //Create Card Name
        let cardName = document.createElement ('div');
        cardName.innerText = item.cardName.toUpperCase();
        cardName.className = 'cardTitle'
        card.append(cardName);
        // Create delete Icon
        let cardDelIcon= document.createElement ('i');
        cardDelIcon.className = "btn bi bi-x-square-fill";
        cardDelIcon.addEventListener("click", deleteCard);
        cardName.append(cardDelIcon);
        //Create Card IMG
        let cardImg = document.createElement ('img');
        cardImg.className = "img-thumbnail";
        cardImg.src = item.cardImgUrl;
        card.append(cardImg);
        // Create Card Description
        let cardDescription = document.createElement ('div');
        cardDescription.innerText = item.cardDescription;
        card.append(cardDescription);
        });    
    };

function deleteCard () {
        this.parentNode.parentNode.remove();
    }