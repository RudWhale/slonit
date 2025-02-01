const computer =random(1,100)
console.log("Загадано число "+computer)

search(1,100)

function search(a,b){
    console.log("--------------")

    console.log("Диапазон "+a+"-"+b)
    const variant = random(a,b)
    console.log("Пробуем "+variant)

    if (variant > computer) {
        console.log("Число меньше")
        return search(a,variant-1)
    } else if (variant < computer) {
        console.log("Число больше")
        return search(variant+1,b)
    } else {console.log("Угадал!")}
}

function random(a,b){
    return Math.floor(Math.random()*(b-a+1)+a)
}