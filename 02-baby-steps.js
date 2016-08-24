function add(arguments) {
    var total = 0
    for (i = 2; i < arguments.length; i++) {
        total += Number(arguments[i])
    }
    return total
}

console.log(add(process.argv));
