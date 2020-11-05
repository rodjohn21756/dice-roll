let rolldiceinput = document.querySelector("#roll-number");
let rollbutton = document.querySelector("#roll-dice-button");
let showallrolls = document.querySelector("#show-all-rolls");
let dieRolls = [];
let totaldice = document.querySelector("#total-dice");

rollbutton.addEventListener("click", function () {
  let maxrolls = Number(rolldiceinput.value);
  let count = 0;
  let total = 0;
  while (count < maxrolls) {
    let diceroll = Math.floor(Math.random() * 6) + 1;
    total = total + diceroll;
    dieRolls.push(diceroll);
    console.log(dieRolls);
    count = count + 1;
  }
  totaldice.innerHTML = total;

  //variables where we are storing the items we selected out of the html doc
  let showAllButton = document.querySelector("#show-all");
  let allRolls = document.querySelector("#all-rolls");
  //you have dieRolls and don't need to create a new array. Use dieRolls below instead of this, shouldn;t need this line
  let diceroll = [1, 4, 4, 7];
  //this is the event listener for the show al lbutton that loops through your dieRolls array and puts each roll in the list
  showAllButton.addEventListener("click", function (event) {
    let counter = 0;
    while (counter < dieRolls.length) {
      allRolls.innerHTML =
        allRolls.innerHTML + "<li>" + dieRolls[counter] + "</li>";
      counter++;
    }
  });
});
