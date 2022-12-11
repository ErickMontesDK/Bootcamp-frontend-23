let arr1= [3, 'c', 'c', 'a', 2, 3, 'c', 2, 4, 9, 9]

function frecuence (arr){
    let leastFr=0
    let element

    for(let i=0; i<arr.length; i++){
        let sameElements = arr.filter((element)=> element === arr[i])
        let frecuence = sameElements.length

        if(i === 0){
            leastFr=frecuence
            element = arr[i]
        }

        if(frecuence < leastFr){
            leastFr = frecuence
            element = arr[i]
        }else if(frecuence === leastFr){
            element = element + ', ' + arr[i]
        }

    }
    return element
}
console.log(frecuence(arr1))