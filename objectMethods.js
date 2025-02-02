const objectMethods = {
    sumNumberFields(obj) {
        return Object.values(obj)
            .filter(el => Number(el))
            .reduce((a, b) => { return a + b })
    },
    sortNumberFields(obj) {
        return Object.entries(obj)
            .filter(element => element[1] == Number(element[1]))
            .sort((a, b) => b[1] - a[1])
            .reduce((a, b) => a.concat(b))
            .filter(element => typeof element === 'string')
    }
}


const obj = { name: 'Vasya', friends: 5, likes: 19, projects: 7 }
console.log(objectMethods.sumNumberFields(obj))
console.log(objectMethods.sortNumberFields(obj))
