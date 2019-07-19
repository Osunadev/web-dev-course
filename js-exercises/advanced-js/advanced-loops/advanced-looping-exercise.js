const basket = ["apples", "oranges", "grapes"];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
};

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
});

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1, 0, 3, 100, 99, 2, 99]; // should return 100
const array2 = ["a", 3, 4, 2]; // should return 4
const array3 = []; // should return 0

// A more detailed version
function biggestNumberInArray(arr) {
  var max;
  var flag = false;

  if (arr.length > 0) {
    arr.forEach(num => {
      // To assign the first number we find as the max number
      if (!flag) {
        if (typeof num === "number") {
          max = num;
          flag = true;
        }
      }

      if (num > max) max = num;
    });
  } else {
    return 0;
  }

  return max;
}

function biggestNumberInArray2(arr) {
  var max = 0;

  for (num of arr) {
    if (num > max) max = num;
  }

  return max;
}

function biggestNumberInArray3(arr) {
  var max = 0;
  var i = 0;

  while (i != arr.length) {
    if (arr[i] > max) max = arr[i];

    i++;
  }

  return max;
}

// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
};

// Solution with loop for of
function checkBasket(basket, lookingFor) {
  for (item in basket) {
    if (item === lookingFor) return true;
  }

  return false;
}

// Better solution
function checkBasket2(basket, lookingFor) {
  return Object.keys(basket).includes(lookingFor);
}
