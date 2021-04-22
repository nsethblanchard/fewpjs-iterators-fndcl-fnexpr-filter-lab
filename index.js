// Code your solution here

function findMatching(drivers, string) { 
    let list = drivers.filter(driver => {
        let lower = string.toLowerCase();
        // added lower to catch the case-insensitive ones
        return driver === string || driver === lower;
    })
    return list
}




function fuzzyMatch(drivers, letters) {
    let list = drivers.filter(driver => {
        return driver[0] === letters[0] && driver[1] === letters[1]
    })
    return list
}

function matchName(drivers, string) {
    console.log(drivers)
    console.log(string)

    let list = drivers.filter(driver => {
        return driver.name === string
    })
    return list;
}
