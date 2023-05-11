// class : methods and properties

// methods
// contructor
// get
// set
// insert
// delete
// shift
// unshift

// properties
// length
// data

class MyArray{
    // initialize 
    constructor(){
        this.length = 0
        this.data = {}
    }

    // add an item at the end of an array
    push(item){
        this.data[this.length] = item
        this.length++
        return true
    }

    // get the last item in the array
    pop(){
        let item = this.data[this.length - 1]
        delete this.data[this.length - 1]

        if (this.length > 0){
            this.length--
        }
        return item
    }

    // get an item at a particular index
    get(index){
        return this.data[index]
    }

    // set the value of a particular index
    set(index, value){
        this.data[index] = value
    }

    // insert value at specified index
    insert(index, value){
        this.length++
        
        for (let i = this.length - 1; i >= index; i--){
            this.data[i] = this.data[i - 1]
        }

        this.data[index] = value
        return true
    }

    // delete item at specified index 
    delete(index){

        for (let i = index; i < this.length; i++){
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--

        return true
    }

    
    shift(){
        //
    }
    unshift(){
        //
    }
}


myArray = new MyArray()

// Get the length of the array
// console.log(myArray.length)

// pushing an item
myArray.push("a")
myArray.push("b")
myArray.push("d")
myArray.push("e")


console.log(myArray.data)
console.log(myArray.length)


// poping