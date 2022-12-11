let data = [
["The", "little", "horse"],
["Planet", "over", "the", "ocean"] ,
["Chocolate" , "Ice", "cream", "is", "awesome"],
["this", "is","a", "long", "sentence"]
]

const completePhrase = (array) =>{
    let all=[]

    array.forEach(element => {
        let sentence = element.reduce((total, word)=>{
            return total + " " + word
        })
        all.push(sentence)
    })
    
    return all
}

console.log(completePhrase(data))