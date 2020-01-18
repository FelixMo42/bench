const microtime = require('microtime')

delay = (time) => new Promise(resolve => {
    setTimeout(() => {
        resolve('resolved')
    }, time)
})

module.exports = class {
    constructor() {
        this.funcs = []
        this.minTime = 100 / 1000
    }

    add(name, func) {
        this.funcs.push({
            name: name,
            func: () => new Promise((resolve, reject) => {
                func( async (payload) => {
                    let count = 0
                    let start = microtime.nowDouble()
                    let end;
                    do {
                        count++
                        await payload()
                        end = microtime.nowDouble()
                    } while (end - start < this.minTime)
                    
                    let time = (end - start) / count
                    
                    resolve( time )
                })
            })
        })

        return this
    }

    async run() {
        for (let {name, func} of this.funcs) {
            let total = 0
            let count = 0

            for (let i = 0; i < 100; i++) {
                total += await func()
                count += 1
            }

            let avgMS = total / count

            let avgS = avgMS / 1000

            console.log(name, 1 / avgMS)
        }
    }
}