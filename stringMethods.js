const stringMethods = {
    firstCapitalLetter(str) {
        return str.trim()
            .split('')
            .map((el, index) => index == 0 ? el.toUpperCase() : el)
            .join('')
    },
    stringAbbreviation(str, max) {
        if (str.length > max) {
            for (let i = max; i >= 0; i--) {
                if (str[i] && /[,.!?:;]/.test(str[i]) || str[i] == ' ')
                    return str.slice(0, i + 1) + '...'
            }
        } else return str
    },
    searchSubString(str, sub) {
        return str.indexOf(sub) >= 0 ? true : false
    }
}

console.log(stringMethods.firstCapitalLetter('   hello world   '))
console.log(stringMethods.stringAbbreviation('Hellow World and Hello?  Js', 22))
console.log(stringMethods.searchSubString('Hello World', 'orl'))