
const {readFile, writeFile} = require('fs')
console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }

    const first = result
    // console.log(result);
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result

        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'}, (err, result) => {
            if (err) {
                console.log(err);
                return
            }
            console.log('done with this start');
        } )
        
    })
})

console.log('starting next task');
// const second =  readFile('./content/second.txt', 'utf8') 

// writeFile('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, {flag: 'a'} )   