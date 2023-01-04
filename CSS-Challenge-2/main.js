let getCard = fetch('https://db.ygoprodeck.com/api/v7/randomcard.php')

const monster = document.getElementsByClassName('monster');
const spell = document.getElementsByClassName('spell');
const graveyard = document.getElementsByClassName('graveyard');
const deck = document.getElementsByClassName('deckzone');

async function fillBoardWithCards(){
    const numberOfMonsters = Math.floor(Math.random() * monster.length+1)
    console.log(numberOfMonsters)
    const numberOfSpells = Math.floor(Math.random() * spell.length + 1)
    const numberOfGraveyards = Math.floor(Math.random() * graveyard.length+1)
    const numberOfDecks = Math.floor(Math.random() * deck.length+1)

    for(let i = 0; i < numberOfMonsters; i++){
        const isMagicCard = false
        const cardGotted = await getCardForASpecificType(isMagicCard)
        monster[i].removeChild(monster[i].firstChild)
        monster[i].replaceChild(cardGotted, monster[i].firstChild)
    }
    for(let i = 0; i < numberOfGraveyards; i++){
        const isMagicCard = false
        const cardGotted = await getCardForASpecificType(isMagicCard)
        graveyard[i].removeChild(graveyard[i].firstChild)
        graveyard[i].replaceChild(cardGotted, graveyard[i].firstChild)
    }
    for(let i = 0; i < numberOfSpells; i++){
        const isMagicCard = true
        const cardGotted = await getCardForASpecificType(isMagicCard)
        spell[i].removeChild(spell[i].firstChild)
        spell[i].replaceChild(cardGotted, spell[i].firstChild)
    }
    for(let i = 0; i < numberOfDecks; i++){
        const isMagicCard = false
        const cardGotted = await getCardForASpecificType(isMagicCard)
        deck[i].removeChild(deck[i].firstChild)
        deck[i].replaceChild(cardGotted, deck[i].firstChild)
    }
}

async function getCardForASpecificType(status){
    let rawInfo = await fetch('https://db.ygoprodeck.com/api/v7/randomcard.php')
    let data = await rawInfo.json()
    const type = `${data.type}`
    console.log(type)
    if(status === true && (type === 'Spell Card' || type === 'Trap Card')){
        return createTheCard(data)
    } else if(status === false && type !== 'Spell Card' && type !== 'Trap Card' ){
        return createTheCard(data)
    } else {
        return getCardForASpecificType(status)
    }
}

function createTheCard(data){
    const head = document.createElement('div');
    head.setAttribute('class', 'head')
    const NameCard = document.createElement('span')
    NameCard.setAttribute('class', 'NameCard')
    const imageIcon = document.createElement('img')
    imageIcon.setAttribute('class','ico')
    imageIcon.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/09ad7d44-3ed5-4da5-ac56-9d235fd09aaa/dbjlv6n-2b1ea6de-c0a9-48ca-8580-55c08e5f02bf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA5YWQ3ZDQ0LTNlZDUtNGRhNS1hYzU2LTlkMjM1ZmQwOWFhYVwvZGJqbHY2bi0yYjFlYTZkZS1jMGE5LTQ4Y2EtODU4MC01NWMwOGU1ZjAyYmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.csjyiY6VIzGdSeCyeSN5ujf1CE74h8rLqPGDYQv03fc"
    head.appendChild(NameCard)
    head.appendChild(imageIcon)

    const rate = document.createElement('div')
    rate.setAttribute('class', 'rate')

    let star = ''

    for(let j=0; j<data.level; j++){
        star = star + '<img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Starball_Red.svg">'
    }
    rate.innerHTML = star

    const imageCardBox = document.createElement('div');
    imageCardBox.setAttribute('class', 'imageContainer')
    const imageCard = document.createElement('img')
    imageCard.src=`${data.card_images[0].image_url}`
    imageCardBox.appendChild(imageCard)

    const boxInfo = document.createElement('div')
    const type = document.createElement('span')
    const textInfo = document.createElement('p')
    const stats = document.createElement('span')

    type.innerText = `${data.race}`
    type.setAttribute('class', 'type')
    textInfo.innerText =`${data.desc}`
    textInfo.setAttribute('class', 'textInfo')
    boxInfo.setAttribute('class', 'boxInfo')

    boxInfo.appendChild(type)
    boxInfo.appendChild(textInfo)

    if(data.atk !== undefined && data.atk !== null){
        stats.innerText = `ATK/${data.atk} DEF/${data.def}`
        stats.setAttribute('class', 'stats')
         
        boxInfo.appendChild(stats)
    }
    NameCard.innerHTML = `${data.name}`

    const card = document.createElement('div')
    card.appendChild(head)
    if(data.type !== 'Spell Card' && data.type !== 'Trap Card'){
        card.appendChild(rate)
    }
    card.appendChild(imageCardBox)
    card.appendChild(boxInfo)
    card.setAttribute('class',`usedCard ${data.type}`)

    return card
}

fillBoardWithCards()