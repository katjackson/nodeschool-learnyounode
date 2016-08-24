add = (args) ->
    total = 0
    for argument in args
        total += Number argument
    total


console.log add process.argv.slice(2)
