let arr2 = [7, 9, 1, 'a', 'a', 'f', 9, 4, 2, 'd', 'd']

function duplicate(arr){
    let filtered = arr
    let notRepeat = []
    

    for(let i = 0; i < arr.length; i++){

        let isThere = filtered.some((element)=>arr[i]===element)

        if(isThere){
            filtered = filtered.filter((element)=>element !== arr[i])
            notRepeat.push(arr[i])
        }
        
    }
    return notRepeat
    
}
console.log(duplicate(arr2))
