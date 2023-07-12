let count = 0;

function cc(card) {
  // Only change code below this line
  switch(card) {
  // I got really stuck on this lesson initially, and held it off for a week. I am now coming back to it, hopefully I can get it this time.
  // case 2, 3, 4, 5, 6: This may have been my point of failure, I will try without it. I guess optimization doesn't work this way
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count++;
    break;
  // case 7, 8, 9, "J", "Q", "K", "A":
  // case 7:
  // case 8:
  // case 9:
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
    count--;
    break;
  }
  var holdBet = "Hold"
  // if (holdBet > 0) {
  if (count > 0) {
    holdBet = "Bet";
  }
  return count + " " + holdBet;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');