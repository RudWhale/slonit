const arrayMethods = {
    myIndexOf (array, element) {
        return array.findIndex(a => a == element)
    },
    mySlice (array, start, end){
        return array.filter((element, index) => index >= start && index < end)
    },
    myIncludes (array, element){
        return array.find(a => a == element) ? true : false
    }
}

const array = [1,2,3,4,5,6,7,8,9]
console.log(arrayMethods.myIndexOf(array, 5))
console.log(arrayMethods.mySlice(array, 1,5))
console.log(arrayMethods.myIncludes(array, 1))