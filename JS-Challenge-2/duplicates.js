let arr2 = [7, 9, 1, 'a', 'a', 'f', 9, 4, 2, 'd', 'd']

function duplicate(arr){
    let result = []

    for (var i = 0; i < arr.length; i++){
        const check = arr.filter((element)=>element===arr[i])
        // if(check){result.push(arr[i])}
        if(check.length>1){
            result.push(check[0])
        }
    }
    return result
    
}
console.log(duplicate(arr2))
