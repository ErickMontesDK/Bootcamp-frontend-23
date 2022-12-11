let arr2 = [7, 9, 1, 'a', 'a', 'f', 9, 4, 2, 'd', 'd']

function duplicate(arr){
    let filtered = arr
    let notRepeat = []

    arr.forEach((element)=>{
        let isThere = filtered.some((checked) => checked === element)

        if(isThere){
            filtered = filtered.filter((checked)=>checked !== element)
            notRepeat.push(element)
        }
    })
    
    return notRepeat
    
}
console.log(duplicate(arr2))
