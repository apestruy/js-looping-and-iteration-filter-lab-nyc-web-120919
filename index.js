function findMatching(drivers, name) {
  return drivers.filter(function (driver) { 
    return name.toLowerCase() === driver.toLowerCase();
  })
}

function fuzzyMatch(drivers, letter) {
  return drivers.filter(function (driver) { return
    driver.startsWith(letter);
  })
}