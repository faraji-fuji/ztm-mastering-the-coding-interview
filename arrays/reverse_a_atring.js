// // available string methods

// // convert string to array

// // pop each item and push to a new array

// function reverse(str){

//     myArray = str.split("")

    


//     reversed = []


//     length = myArray.length
//     for (let i = 0; i < length; i++){
//         item = myArray.pop()

//         reversed.push(item)
//     }

//     return reversed.join("");
// }

// let = rev = reverse("faraji")

// console.log(let)


function mergeSortedArrays(array1, array2){
    const mergedArray = array1.concat(array2)

    return mergedArray.sort()
}

console.log(mergeSortedArrays([0,3,4,31], [4,6,30]))