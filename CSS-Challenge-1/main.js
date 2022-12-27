let getCard = fetch('https://db.ygoprodeck.com/api/v7/randomcard.php')

const cards = document.getElementsByClassName('bodyCard');

async function fillCards(){
    for(let i = 0; i < cards.length; i++){
        let rawInfo = await fetch('https://db.ygoprodeck.com/api/v7/randomcard.php')
        let data = await rawInfo.json()
        console.log(data)

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

        if(data.atk !== undefined){
            stats.innerText = `ATK/${data.atk} DEF/${data.def}`
            stats.setAttribute('class', 'stats')
             
            boxInfo.appendChild(stats)
        }


        NameCard.innerHTML = `${data.name}`
            
        cards[i].appendChild(head);
        cards[i].appendChild(rate);
        cards[i].appendChild(imageCardBox);
        cards[i].appendChild(boxInfo)
        cards[i].setAttribute('class',`bodyCard ${data.type}`)

    }
}


fillCards()
