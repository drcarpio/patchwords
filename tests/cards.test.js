const addCard = require('../scripts/cards.js');

describe('add card', () => {
    test('add card function works', () => {
        document.body.innerHTML = `
            <button id="addCardBtn" onclick="addCard()">add a card</button>
            <div id="patch" class="card-columns" >
                <div contenteditable="true" class="card draggable">
                    <div class="card-body">
                        <h5 class="card-title">
                            This is the first card in the grid
                        </h5>
                        <p class="card-text">
                            you can click on the card to edit the text
                        </p>
                    </div>
                </div>
            </div>`
        addCard()
      
        expect(document.getElementById('patch').childElementCount).toEqual(2);
    });
    
    test('add card button works', () => {
        document.body.innerHTML = `
            <button id="addCardBtn" onclick="addCard()">add a card</button>
            <div id="patch" class="card-columns" >
                <div contenteditable="true" class="card draggable">
                    <div class="card-body">
                        <h5 class="card-title">
                            This is the first card in the grid
                        </h5>
                        <p class="card-text">
                            you can click on the card to edit the text
                        </p>
                    </div>
                </div>
            </div>`
    
        const addCardBtn = document.getElementById('addCardBtn') 
        addCardBtn.onclick = addCard
        addCardBtn.click()
        addCardBtn.click()
        addCardBtn.click()
    
        expect(document.getElementById('patch').childElementCount).toEqual(4);
    });
})

