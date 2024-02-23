// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

// first function
function findMatching(drivers, name) {
  const lowercaseQuery = name.toLowerCase();

  return drivers.filter(function (driver) {
    return driver.toLowerCase() === lowercaseQuery;
  });
}
console.log(findMatching(drivers, "bobby"));

// second function

function fuzzyMatch(drivers, letters) {
  const leTTers = letters.toLowerCase();
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase().startsWith(leTTers);
  });
}
console.log(fuzzyMatch(drivers, "sar"));
console.log(fuzzyMatch(drivers, "mm"));

// Third function

const drivers02 = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

function matchName(array, name) {
  return array.filter(function (obj) {
    return obj.name === name;
  });
}

console.log(matchName(drivers02, "Bobby"));
