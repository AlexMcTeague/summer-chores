// Summer Chores
// Callback Version

// Configurable variables
// Time in milliseconds for each chore
const choreTimer = {
    mowYard: 2000,
    weedEat: 1500,
    trimHedges: 1000,
    collectWood: 2500,
    waterGarden: 500
}

// Chore functions
// Divide the chore timer by 10000 to get the probability of falling asleep during that chore
// Longer chores therefore have a higher sleep chance
function mowYard(name, callback) {
    setTimeout(() => {
        console.log(`${name} mowed the yard.`)
        if (Math.random() < choreTimer.mowYard / 10000) {
            console.log(`${name} fell asleep after mowing the yard!`)
        } else {
            callback()
        }
    }, choreTimer.mowYard)
}

function weedEat(name, callback) {
    setTimeout(() => {
        console.log(`${name} weed-eated the garden.`)
        if (Math.random() < choreTimer.weedEat / 10000) {
            console.log(`${name} fell asleep after weed-eating!`)
        } else {
            callback()
        }
    }, choreTimer.weedEat)
}

function trimHedges(name, callback) {
    setTimeout(() => {
        console.log(`${name} trimmed the hedges.`)
        if (Math.random() < choreTimer.trimHedges / 10000) {
            console.log(`${name} fell asleep after trimming the hedges!`)
        } else {
            callback()
        }
    }, choreTimer.trimHedges)
}

function collectWood(name, callback) {
    setTimeout(() => {
        console.log(`${name} collected wood.`)
        if (Math.random() < choreTimer.collectWood / 10000) {
            console.log(`${name} fell asleep after collecting wood!`)
        } else {
            callback()
        }
    }, choreTimer.collectWood)
}

function waterGarden(name, callback) {
    setTimeout(() => {
        console.log(`${name} watered the garden.`)
        callback();
    }, choreTimer.waterGarden)
}

// Chore sequencing function
function doSummerChores(name) {
    // Intentional callback hell :'(
    mowYard(name, () => {
        weedEat(name, () => {
            trimHedges(name, () => {
                collectWood(name, () => {
                    waterGarden(name, () => {
                        console.log(`${name} finished all their chores!`)
                    })
                })
            })
        })
    })
}

// Running the chore sequence
// You can pass a name with "node callbackVersion.js YourName"
doSummerChores(process.argv[2] || 'Alex');