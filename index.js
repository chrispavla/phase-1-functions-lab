// function distanceFromHqInBlocks(someValue) {
// return Math.abs((someValue - 42));
// }

// function distanceFromHqInFeet(someValue) {
// return distanceFromHqInBlocks(someValue) * 264;
// }

// function distanceTravelledInFeet(start, destination) {
//     return Math.abs((start - destination) * 264);
// }

// function calculatesFarePrice(start, destination) {

//     if (distanceTravelledInFeet(start, destination) <= 400)  {

//         return 0;
//     } else if(distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {

//         return ((distanceTravelledInFeet(start, destination) - 400)*2) / 100;
//     } else if(distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {

//         return 25;
//     } else if(distanceTravelledInFeet(start, destination) > 2500) {

//         return 'cannot travel that far';
//     }
// }
function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - 42);
}

function distanceFromHqInFeet(pickupLocation) {
  const distance = distanceFromHqInBlocks(pickupLocation);
  return distance * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);
  if (distanceInFeet < 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet < 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
    return 25;
  } else if (distanceInFeet > 2500) {
    return "cannot travel that far";
  }
}
