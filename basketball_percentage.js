announceStartOfGame();

takeShot(50);
fadeAway(80);

// andOne(95);
// passSpeed(40);
// regPass(45);
// noLookPass(50);

function announceStartOfGame() {
  console.log("Let's play some ball!\n");
}

function logResultOfShot(madeIt) {
  if (madeIt) {
    console.log('Swoosh!\n');
  } else {
    console.log('Air Ball!\n');
  }
}

function takeShot(percentageOfRegularShot){
  var result = null;

  console.log("Jump-shot!");

  if (percentageOfRegularShot > 60) {
    result = true;
  } else {
    result = false;
  }

  logResultOfShot(result);
  return result;
}

function fadeAway(percentageOfRegularShot){
  var result = null;
  var percentageOfFadeShot = null;

  console.log("Fading and...");

  percentageOfFadeShot = percentageOfRegularShot - 10;

  if (percentageOfFadeShot >= 70) {
    result = true;
  } else {
    result = false;
  }

  logResultOfShot(result);
  return result;
}

function andOne(percentageOfRegularShot){
  console.log("Hit on the way up...");
  var percentageOfAndOneShot = null;
  percentageOfAndOneShot = percentageOfRegularShot - 15;

  if (percentageOfAndOneShot >= 75) {
    return true;
  } else {
    return false;
  }
}

function passSpeed(passPercentageOfReg){
  if ((passPercentageOfReg <= 60) && (passPercentageOfReg >= 20)) {
    return true;
  } else {
    return false;
  }
}

function regPass(passPercentageOfReg){
  var speedOfPass =  null;
  speedOfPass = passPercentageOfReg - 5;

  if ((passPercentageOfReg <= 55) && (passPercentageOfReg >= 25)) {
    return true;
  } else {
    return false;
  }
}

function noLookPass(passPercentageOfReg) {
  var noLookPass = null;
  noLookPass = passPercentageOfReg - 10;

  if ((passPercentageOfReg <= 45) && (passPercentageOfReg >= 30)) {
    return true;
  } else {
    return false;
  }
}
