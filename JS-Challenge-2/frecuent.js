let arr1= [3, 'c', 'c', 'a', 2, 3, 'c', 2, 4, 9, 9]

function frecuence (arr){
    let leastFr = 0
    let leastElem

    arr.forEach((element, index)=>{
        let sameElements = arr.filter((checked)=> checked === element)
        let frecuence = sameElements.length

        if(index === 0){
            leastFr = frecuence
            leastElem = element
        }
        
        if(frecuence < leastFr){
            leastFr = frecuence
            leastElem = element
        }else if(frecuence === leastFr){
            leastElem = leastElem + ', ' + element
        }
    })

    return leastElem
}
console.log(frecuence(arr1))