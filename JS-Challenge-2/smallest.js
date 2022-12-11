let arr1 = [12, 6, 10, 2, 45, 100]

function smallest(array) {
    let smallest 
    array.forEach((element, index) => {
        if(index === 0){
            smallest = element
        }else if(element < smallest){
            smallest = element
        } 

    })
    return smallest
}

console.log(smallest(arr1))
