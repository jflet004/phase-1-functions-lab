// Code your solution in this file!
const endLocation = 42;
function distanceFromHqInBlocks(pickupLocation){
    let distanceInBlocks;
    // if (pickupLocation < 42) {
    //     distanceInBlocks = endLocation - pickupLocation;
    // } else {
    //     distanceInBlocks = pickupLocation - endLocation;
    // }
    distanceInBlocks = Math.abs(endLocation - pickupLocation);
    return distanceInBlocks;
}

function distanceFromHqInFeet (totalFeet) {
    let distanceInFeet = distanceFromHqInBlocks(totalFeet) * 264;
    return distanceInFeet;
}

function distanceTravelledInFeet (start, destination) {
    return Math.abs((start - destination) * 264);
}

function calculatesFarePrice (start, destination) {
    let distanceTravelled = distanceTravelledInFeet(start, destination);

    if (distanceTravelled <= 400) {
        return 0;
    } else if (distanceTravelled > 2500) {
        return `cannot travel that far`;
    } else if (distanceTravelled > 2000) {
        return 25; 
    } else {
       return (distanceTravelled - 400) * .02;
    }
}

//console.log(calculatesFarePrice(50, 75));