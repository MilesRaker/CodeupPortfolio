"use strict"

/* this file was created much later in the program to make the navigation buttons functional */


// get button elements

let nextStepButton = document.getElementById("next-step");
let backButton = document.getElementById("back");
let nextButton = document.getElementById("next");
let checkoutButton = document.getElementById("checkout");

// get nav items
let sizeAndCrustNav = document.getElementById("size-and-crust-tab");
let cheeseAndSauceNav = document.getElementById("cheese-and-sauce-tab");
let toppingsNav = document.getElementById("toppings-tab");

// get tab display elements
let sizeAndCrustTab = document.getElementById("size-and-crust");
let cheeseAndSauceTab = document.getElementById("cheese-and-sauce");
let toppingsTab = document.getElementById("toppings");

// add event listeners
nextStepButton.addEventListener("click", nextStepCB);
backButton.addEventListener("click", backCB);
nextButton.addEventListener("click", nextCB);
checkoutButton.addEventListener("click", checkoutCB);

// define event listeners
function nextStepCB(){
    sizeAndCrustTab.classList.remove("active", "show");
    sizeAndCrustNav.classList.remove("active");
    cheeseAndSauceTab.classList.add("active", "show");
    cheeseAndSauceNav.classList.add("active");
    toppingsTab.classList.remove("active", "show");
    toppingsNav.classList.remove("active");
}

function backCB(){
    sizeAndCrustTab.classList.add("active", "show");
    sizeAndCrustNav.classList.add("active");
    cheeseAndSauceTab.classList.remove("active", "show");
    cheeseAndSauceNav.classList.remove("active");
    toppingsTab.classList.remove("active", "show");
    toppingsNav.classList.remove("active");
}

function nextCB(){
    sizeAndCrustTab.classList.remove("active", "show");
    sizeAndCrustNav.classList.remove("active");
    cheeseAndSauceTab.classList.remove("active", "show");
    cheeseAndSauceNav.classList.remove("active");
    toppingsTab.classList.add("active", "show");
    toppingsNav.classList.add("active");
}

function checkoutCB(){
    sizeAndCrustTab.classList.remove("active", "show");
    sizeAndCrustNav.classList.remove("active");
    cheeseAndSauceTab.classList.remove("active", "show");
    cheeseAndSauceNav.classList.remove("active");
    toppingsTab.classList.remove("active", "show");
    toppingsNav.classList.remove("active");
    alert("Enjoy your pizza!");
}