// Summer Chores
// Async/Await Version

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
function mowYard(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("mowed the yard.")
        }, choreTimer.mowYard)
    })
}

function weedEat(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < choreTimer.mowYard / 10000) {
                reject("fell asleep after mowing the yard!")
            } else {
                resolve("weed-eated the garden.")
            }
        }, choreTimer.weedEat)
    })
}

function trimHedges(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < choreTimer.weedEat / 10000) {
                reject("fell asleep after weed-eating!")
            } else {
                resolve("trimmed the hedges.")
            }
        }, choreTimer.trimHedges)
    })
}

function collectWood(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < choreTimer.trimHedges / 10000) {
                reject("fell asleep after trimming the hedges!")
            } else {
                resolve("collected wood.")
            }
        }, choreTimer.collectWood)
    })
}
    
function waterGarden(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < choreTimer.collectWood / 10000) {
                reject("fell asleep after collecting wood!")
            } else {
                resolve("watered the garden.")
            }
        }, choreTimer.waterGarden)
    })
}

// Chore sequencing function
async function doSummerChores(name) {
    try {
        let resolveMsg = await mowYard(name);
        console.log(`${name} ${resolveMsg}`);

        resolveMsg = await weedEat(name);
        console.log(`${name} ${resolveMsg}`);

        resolveMsg = await trimHedges(name);
        console.log(`${name} ${resolveMsg}`);

        resolveMsg = await collectWood(name);
        console.log(`${name} ${resolveMsg}`);

        resolveMsg = await waterGarden(name);
        console.log(`${name} ${resolveMsg}`);
        
        console.log(`${name} finished all their chores!`);
    } catch (error) {
        console.log(`${name} ${error}`);
    }
}

// Running the chore sequence
// You can pass a name with "node asyncAwaitVersion.js YourName"
doSummerChores(process.argv[2] || 'Alex');