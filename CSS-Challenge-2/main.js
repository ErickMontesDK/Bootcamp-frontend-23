let getCard = fetch('https://db.ygoprodeck.com/api/v7/randomcard.php')

const monster = document.getElementsByClassName('monster');
const spell = document.getElementsByClassName('spell');
const graveyard = document.getElementsByClassName('graveyard');
const deck = document.getElementsByClassName('deckzone');

async function fillBoardWithCards(){
    const numberOfMonsters = Math.floor(Math.random() * monster.length+1)
    const numberOfSpells = Math.floor(Math.random() * spell.length + 1)
    const numberOfGraveyards = Math.floor(Math.random() * graveyard.length+1)
    const numberOfDecks = Math.floor(Math.random() * deck.length+1)

    console.log(numberOfMonsters, numberOfSpells, numberOfGraveyards, numberOfDecks)

    await getPlaceForCard(numberOfMonsters,false,monster)
    await getPlaceForCard(numberOfSpells,true,spell)
    await getPlaceForCard(numberOfGraveyards,undefined,graveyard)
    await getPlaceForCard(numberOfDecks,undefined,deck)
}

async function getPlaceForCard(numberOfCards,isMagicCard,element){
    let CardOccupiedIndex = []
    for(let i = 0; i < numberOfCards; i++){
        const cardGotted = await getCardForASpecificType(isMagicCard)
        let isOccupiedThePLace = true;
        let place 

        while(isOccupiedThePLace){
            place = Math.floor(Math.random()*(element.length))
            isOccupiedThePLace = CardOccupiedIndex.includes(place)
            CardOccupiedIndex.push(place)
        }

        element[place].removeChild(element[place].firstChild)
        element[place].replaceChild(cardGotted, element[place].firstChild)
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
    } else if(status === undefined){
        return createTheCard(data)
    } else{
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
    stats.setAttribute('class', 'stats')

    boxInfo.appendChild(type)
    boxInfo.appendChild(textInfo)

    if((data.atk !== undefined && data.atk !== null) && (data.def !== undefined && data.def !== null)){
        stats.innerText = `ATK/${data.atk} DEF/${data.def}`
        boxInfo.appendChild(stats)

    } else if((data.atk !== undefined && data.atk !== null)){
        stats.innerText = `ATK/${data.atk}`
        boxInfo.appendChild(stats)
    }
    
    
    NameCard.innerHTML = `${data.name}`

    const card = document.createElement('div')
    card.appendChild(head)

    if(data.type !== 'Spell Card' && data.type !== 'Trap Card'){
        const rate = document.createElement('div')
        rate.setAttribute('class', 'rate')
        let star = ''

        for(let j=0; j<data.level; j++){
            star = star + '<img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Starball_Red.svg">'
        }
        rate.innerHTML = star
        card.appendChild(rate)
    }

    card.appendChild(imageCardBox)
    card.appendChild(boxInfo)
    card.setAttribute('class',`usedCard ${data.type}`)

    return card
}

fillBoardWithCards()