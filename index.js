// Returns "is taxable" only if state is "IA" and taxExempt is false
function taxable(state, taxExempt) {
  if (state === "IA" && taxExempt === false) {
    return "is taxable";
  }
}

// Returns "is vehicle" if at least one of the parameters is true
function isVehicle(hasWheels, canFly, canSwim) {
  if (hasWheels || canFly || canSwim) {
    return "is vehicle";
  }
}


