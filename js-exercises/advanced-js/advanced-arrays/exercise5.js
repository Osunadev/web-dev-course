// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let arrayForEach = [];
array.forEach(user => {
  let { username } = user;
  arrayForEach.push(username+'!');
})
console.log('forEach', arrayForEach);

//Create an array using map that has all the usernames with a "? to each of the usernames
let arrayMap = array.map(user => user.username+'?');
console.log('map', arrayMap);

//Filter the array to only include users who are on team: red
let arrayFilter = array.filter(user => user.team == 'red');
console.log('filter', arrayFilter);

//Find out the total score of all users using reduce
let reducedArray = array.reduce((acc, user) => acc+user.score, 0);
console.log('reduce', reducedArray);

// (1), what is the value of i? 5
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
/*const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})
*/
const newArray = arrayNum.map(num => num * 2);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
let newListUsers = array.map(user => {
  user.items = user.items.map(item => item+'!');
  return user;
})
console.log(newListUsers);