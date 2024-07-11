function scuberGreetingForFeet(distance) {
  // Write your code here!
  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance > 400 && distance <= 2000) {
    return "That will be twenty bucks.";
  } else if (distance >= 2000 && distance <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (distance > 2500) {
    return "No can do.";
  }
}

function ternaryCheckCity(NYC) {
  // Write your code here!
  if (NYC == "NYC") {
    return "Ok, sounds good.";
  } else {
    return "No go.";
  }
}

function switchOnCharmFromTip(generous) {
  // Write your code here!
  if (generous == "generous") {
    return "Thank you so much.";
  } else if (generous == "not as generous") {
    return "Thank you.";
  } else {
    return "Bye.";
  }
}
