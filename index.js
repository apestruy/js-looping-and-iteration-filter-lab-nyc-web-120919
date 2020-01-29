function findMatching (list, name) {
  return list.filter(function (driverName) {	  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();	    return driverName.toLowerCase() === name.toLowerCase();

function fuzzyMatch(drivers, letter) {
  return drivers.filter(function (driver) { return
    driver.startsWith(letter);
  })
}