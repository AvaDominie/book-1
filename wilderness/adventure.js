
const { trails, rivers, wildLife } = require("./data.js")





// Get the sum of all trail miles
const totalTrailMiles = (trails) => {
    let total = 0
    for (const trail of trails) {
        total += trail.length
    }

    return total
}

// let shortest = 0
// for (const trail of trailArray) {
//     if(trail.length < shortest) {
//         shortest = Math.min(trail)
//     }
// }

// return shortest

// create an array of all the length of the trails then use the min 

// const allTrails = (trails) => {
//     let total = []
//     for (const trail of trails) {
//         total += trail.length
//     }

//     return total

// }

// const allOfTrail = allTrails(trails)


// Get the shortest of all trails
const shortestTrail = (trailArray) => {
    // const short = Math.min(trailArray.length)

    let shortest = 50
    for (const trail of trailArray) {
        if (Math.min(trail.length) < shortest) {
            shortest = Math.min(trail.length)

        }

    }

    return shortest
    // return short
}

// Get the longest of all trails
const longTrail = (allTrails) => {
    let longest = 0
    for (const trail of allTrails) {
        if (Math.max(trail.length) > longest) {
            longest = Math.max(trail.length)
        }
    }

    return longest
}








// Get the sum of all river miles
const totalRiverMiles = (rivers) => {
    let total = 0
    for (const river of rivers) {
        total += river.length
    }

    return total
}


// Get the shortest of all trails
const shortestRiver = (riverArray) => {
    // const short = Math.min(trailArray.length)

    let shortest = 50
    for (const river of riverArray) {
        if (Math.min(river.length) < shortest) {
            shortest = Math.min(river.length)

        }
        
    }
    
    return shortest
    // return short
}


// Get the longest of all trails
const longestRiver = (allRivers) => {
    let longest = 0
    for (const river of allRivers) {
        if (Math.max(river.length) > longest) {
            longest = Math.max(river.length)
        }
    }
    
    return longest
}



// will need a console.log in the for of loop
// least expensive trail
// need trails put in as the argument when invoked
const leastExpensiveTrail = (leastMoney) => {
    console.log('The least expensive trails are')
    for (const least of leastMoney) {
        if (least.price === "$") {
            console.log( `\t ${least.trailName}` )
        }
    }
}

// most expensive trail
const mostExpensiveTrail = (mostMoney) => {
    console.log('The most expensive trails are')
    for (const most of mostMoney) {
        if (most.price >= "$$$$") {
            console.log(`\t ${most.trailName}`)
        }
    }
}





// least expensive river
const leastExpensiveRiver = (leastMoney) => {
    console.log('The least expensive river tours are')
    for (const least of leastMoney) {
        if (least.price === "$") {
            console.log( `\t ${least.river}` )
        }
    }
}

// most expensive river
const mostExpensiveRiver = (mostMoney) => {
    console.log('The most expensive river tours are')
    for (const most of mostMoney) {
        if (most.price >= "$$$$") {
            console.log(`\t ${most.river}`)
        }
    }
}

// iterate through trail details 
const trailDetails = (trailDeets) => {
    for (const deets of trailDeets) {
        console.log(`${deets.trailName} starts at [${deets.latitude} ${deets.longitude}] and is ${deets.length} kilometers long.
The highlighted plant for the trip is ${deets.plantHighlight}.\n`)
        
    }
}

// iterate through river details
const riverDetails = (riverDeets) => {
    for (const deets of riverDeets) {
        console.log(`${deets.river} starts at [${deets.latitude} ${deets.longitude}] and is ${deets.length} kilometers long.
The unique fish for the trip is ${deets.uniqueFish}. \n`)
    }
}


console.log(`
B J Ö R N ' S   W I L D N E R N E S S   A D V E N T U R E S
    ***********************************************************

                                                        ###
        ______                                         #o###
       /     /\     (              ______            #####o###
      /     /  \     )            /     /\          #o#\#|#/###
     /_____/----\_    (          /     /  \          ###\|/#o#
    '     '          ).         /_____/----\_         # }|{  #
   _ ___          O (:') o      '  '     '   '          }|{
  (@))_))        O ~/~~\~ o                             }|{
                  o     O                          ____/   \____
                     O
`)


console.log('***************************************************')
console.log('*****              T R A I L S                *****')
console.log('***************************************************')
const trailTotal = totalTrailMiles(trails)
console.log(`We service ${trailTotal} miles of wilderness trails across the US`)



const shortTrail = shortestTrail(trails)
console.log(`The shortest trail is ${shortTrail} kilometers`)

const longest = longTrail(trails)
console.log(`The longest trail is ${longest} kilometers`)



console.log('***************************************************')
console.log('*****               R I V E R S               *****')
console.log('***************************************************')



const riverTotal = totalRiverMiles(rivers)
console.log(`We offer expert guidance on ${riverTotal} kilometers of scenic rivers across the US`)

const shortRiver = shortestRiver(rivers)
console.log(`The shortest river tour is ${shortRiver} kilometers`)

const longRiver = longestRiver(rivers)
console.log(`The longest river tour is ${longRiver} kilometers`)



const leastTrail = leastExpensiveTrail(trails)
const mostTrail = mostExpensiveTrail(trails)

const leastRiver = leastExpensiveRiver(rivers)
const mostRiver = mostExpensiveRiver(rivers)


console.log(`TRAIL DETAILS:`)
console.log(`---------------------------------`)

const detailsForTrails = trailDetails(trails)

console.log(`RIVER DETAILS:`)
console.log(`---------------------------------`)
const detailsForRiver = riverDetails(rivers)



















