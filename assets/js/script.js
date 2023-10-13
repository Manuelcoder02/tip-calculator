"use strict";
// storing elements in a variable
const billInputEL = document.querySelector(".input_bill");
const tipBtnEL = document.querySelectorAll(".btn");
// console.log(tipBtnEL);
const [
  btnFivePercentEL,
  btnTenPercentEL,
  btnFifteenPercentEL,
  btnTwentyfivePercentEL,
  btnFiftyPercentEL,
] = tipBtnEL; // destructuring the tip button element array.
// console.log(btnFifteenPercentEL);
const peopleEL = document.querySelector(".number-of-people");
const errorTextEL = document.querySelector(".error-text");

const tipPriceEL = document.querySelector(".tip_price");
const totalPriceEL = document.querySelector(".total_price");

const inputCustomEL = document.querySelector(".input_custom");
const btnReset = document.querySelector(".btn-reset");

let bill;
let tip;
let total;
let percent;
// let billValue = Number(billInputEL.value);

// Functions
const noPeopleValue = function () {
  errorTextEL.classList.remove("hidden");
  peopleEL.classList.add("error-border");
};

const peopleValue = function () {
  errorTextEL.classList.add("hidden");
  peopleEL.classList.remove("error-border");
  tip = bill * percent;
  total = bill + tip;
  tipPriceEL.textContent = `$${tip}`;
  totalPriceEL.textContent = `$${total}`;
};
// ## Five percent tip functionality.
// If the tip is 5%, then
// 1 - The tip will be 5/100 = 0.05
// 2 - The bill value will be multiply by 0.05, e.g $150 * 0.05
// 3 - The number of people value must be filled.
// 4 - The tip value amount will be display to the tip amount element
// 5 - The total will be the bill + tip
// 6 - The total will then be display to the total amount element
btnFivePercentEL.addEventListener("click", function () {
  bill = Number(billInputEL.value);
  percent = 5 / 100;
  // console.log(bill);
  if (!peopleEL.value) {
    noPeopleValue();
  } else {
    peopleValue();
  }
});

// ## Ten percent tip functionality.
// If the tip is 10%, then
// 1 - The tip will be 10/100 = 0.1
// 2 - The bill value will be multiply by 0.1, e.g $150 * 0.1
// 3 - The number of people value must be filled.
// 4 - The tip value amount will be display to the tip amount element
// 5 - The total will be the bill + tip
// 6 - The total will then be display to the total amount element
btnTenPercentEL.addEventListener("click", function () {
  bill = Number(billInputEL.value);
  percent = 10 / 100;
  // console.log(bill);
  if (!peopleEL.value) {
    noPeopleValue();
  } else {
    peopleValue();
  }
});

// ## Fifteen percent tip functionality.
// If the tip is 15%, then
// 1 - The tip will be 15/100 = 0.15
// 2 - The bill value will be multiply by 0.15, e.g $150 * 0.15
// 3 - The number of people value must be filled.
// 4 - The tip value amount will be display to the tip amount element
// 5 - The total will be the bill + tip
// 6 - The total will then be display to the total amount element
btnFifteenPercentEL.addEventListener("click", function () {
  bill = Number(billInputEL.value);
  percent = 15 / 100;
  // console.log(bill);
  if (!peopleEL.value) {
    noPeopleValue();
  } else {
    peopleValue();
  }
});

// ## Twenty-five percent tip functionality.
// If the tip is 25%, then
// 1 - The tip will be 25/100 = 0.25
// 2 - The bill value will be multiply by 0.25, e.g $150 * 0.25
// 3 - The number of people value must be filled.
// 4 - The tip value amount will be display to the tip amount element
// 5 - The total will be the bill + tip
// 6 - The total will then be display to the total amount element
btnTwentyfivePercentEL.addEventListener("click", function () {
  bill = Number(billInputEL.value);
  percent = 25 / 100;
  // console.log(bill);
  if (!peopleEL.value) {
    noPeopleValue();
  } else {
    peopleValue();
  }
});

// ## Fifty percent tip functionality.
// If the tip is 50%, then
// 1 - The tip will be 50/100 = 0.5
// 2 - The bill value will be multiply by 0.5, e.g $150 * 0.5
// 3 - The number of people value must be filled.
// 4 - The tip value amount will be display to the tip amount element
// 5 - The total will be the bill + tip
// 6 - The total will then be display to the total amount element
btnFiftyPercentEL.addEventListener("click", function () {
  bill = Number(billInputEL.value);
  percent = 50 / 100;
  // console.log(bill);
  if (!peopleEL.value) {
    noPeopleValue();
  } else {
    peopleValue();
  }
});

// ## Custom percent tip functionality.
// If a number is inputted in the custom tip
// 1 - The tip will be the custom/100, e.g 10/100 = 0.1
// 2 - The bill value will be multiply by the result of 2 above, e.g 0.1, e.g $150 * 0.1
// 3 - The number of people value must be filled.
// 4 - The tip value amount will be display to the tip amount element
// 5 - The total will be the bill + tip
// 6 - The total will then be display to the total amount element
inputCustomEL.addEventListener("mouseout", function () {
  bill = Number(billInputEL.value);
  percent = Number(inputCustomEL.value) / 100;
  // console.log(bill);
  if (!peopleEL.value) {
    noPeopleValue();
  } else {
    peopleValue();
  }
});

// RESET FUNCTIONALITY
// 1 - The tip amount should be set to $0.00
// 2 - The total amount should be set to $0.00
// 3 - The bill should be set to null
// 4 - The number of people should be null
// 5 - The custom should be null
btnReset.addEventListener("click", function () {
  tipPriceEL.textContent = "$0.00";
  totalPriceEL.textContent = "$0.00";
  billInputEL.value = "";
  peopleEL.value = "";
  inputCustomEL.value = "";
});

billInputEL.addEventListener("click", function () {
  bill = Number(billInputEL.value);
  percent = Number(inputCustomEL.value) / 100;
  // console.log(bill);
  if (!peopleEL.value) {
    noPeopleValue();
  } else {
    peopleValue();
  }
});
