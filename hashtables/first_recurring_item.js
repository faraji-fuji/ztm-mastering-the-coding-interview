// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It Should return 2

// given an array = [2,3,4,5]
// it should return undefined


function first_recurring_item(array){ 
    const myHashTable = {}

    for (let i = 0; i < array.length; i++){
        if (!myHashTable[array[i]]){
            myHashTable[array[i]] = 1
        }
        else{
            return array[i]
        }
    }
}

// console.log(first_recurring_item([9,5,9,1,2,3,5,1,2,4]))
// console.log(first_recurring_item([2,3,4,5]))
console.log(first_recurring_item([2,1,1,2,3,5,1,2,4]))