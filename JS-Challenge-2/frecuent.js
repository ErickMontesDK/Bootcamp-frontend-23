let arr1= [3, 'c', 'c', 'a', 2, 3, 'c', 2, 4, 9, 9]

function frecuence (arr){
    let biggestFr=0
    let element=0
    for(let i=0; i<arr.length; i){
        let frecuencia = 0
        for(let j=i; j<arr1.length; j++){
            if(arr1[i]===arr1[j]){
                frecuencia++
            }
        }

        if(frecuencia>biggestFr){
            biggestFr = frecuencia
            element = i
        }
    }
    return arr1[i]
}

console.log(frecuence(arr1))