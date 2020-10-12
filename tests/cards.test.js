const {
    addCard,
    addTxtCard,
    showTxtInput,
    hideTxtInput,
} = require('../scripts/cards.js')

describe('add card', () => {
    beforeEach(function () {
        document.body.innerHTML = `
            <button id="addCardBtn" onclick="addCard()">add a card</button>
            <button id="fileInputToggle" onclick="showTxtInput()">add a card from txt file</button>
            <input
                type="file"
                id="file-input"
                class="txt-input"
                onchange="addTxtCard(this)"
                style="visibility:hidden"
            />
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
    })

    test('add card without text parameter', () => {
        addCard()
        expect(document.getElementById('patch').childElementCount).toEqual(2)
    })

    test('add card with text parameter', () => {
        const textToLoad = 'here is some non default text'

        addCard(textToLoad)

        expect(
            document.getElementById('patch').lastElementChild.innerHTML
        ).toEqual('here is some non default text')
    })

    test('add card with button', () => {
        const addCardBtn = document.getElementById('addCardBtn')
        addCardBtn.onclick = addCard
        addCardBtn.click()
        addCardBtn.click()
        addCardBtn.click()

        expect(document.getElementById('patch').childElementCount).toEqual(4)
    })

    test('show file input button works', () => {
        const fileInputToggle = document.getElementById('fileInputToggle')
        fileInputToggle.onclick = showTxtInput
        fileInputToggle.click()

        expect(document.getElementById('file-input').style.visibility).toEqual(
            'visible'
        )
    })

    test('cancel file input button works', () => {
        const fileInputToggle = document.getElementById('fileInputToggle')
        fileInputToggle.onclick = showTxtInput
        fileInputToggle.click()

        expect(document.getElementById('fileInputToggle').onclick).toEqual(
            hideTxtInput
        )

        fileInputToggle.click()
        expect(document.getElementById('file-input').style.visibility).toEqual(
            'hidden'
        )
    })
})
