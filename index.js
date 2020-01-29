function findMatching(drivers, name) {
  return drivers.filter(function (driver) { return 
    name.toLowerCase() === driver.toLowerCase();
  })
}