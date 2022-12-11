let data = [
["The", "little", "horse"],
["Planet", "over", "the", "ocean"] ,
["Chocolate" , "Ice", "cream", "is", "awesome"],
["this", "is","a", "long", "sentence"]
]

const completePhrase = (array) =>{
    let all=[]
    
    for(let i=0; i<array.length; i++){

        let sentence = array[i].reduce((element, next)=>{
            return element+" "+next
        })
        all.push(sentence)
    }
    return all
}

console.log(completePhrase(data))