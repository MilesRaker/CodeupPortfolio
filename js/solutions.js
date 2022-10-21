"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(input){
    return input === true;
}

function isFalse(input){
    return input === false;
}

function not(input){
    return !input;
}

function addOne(input){
    return ++input;
}

function isEven(input){
    if(typeof input === "boolean"){
        return false;
    }
    return (input % 2 === 0);
}

function isIdentical(a, b){
    return (a === b);
}

function isEqual(a, b){
    return ( a == b);
}

function or(a, b){
    return (a || b);
}

function and(a, b){
    return (a && b);
}

function concat(a, b){
    return String(a) + String(b);
}