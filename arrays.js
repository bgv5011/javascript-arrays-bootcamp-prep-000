var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var addElementToBeginningOfArray = function(array,element) {
  array.unshift(element);
  return array;
}
var destructivelyAddElementToBeginningOfArray = function(array,element) {
  array.unshift(element);
  return array;
}
var addElementToEndOfArray = function(array, element) {
  array.push(element);
  return array;
}
var destructivelyAddElementToEndOfArray = function(array, element) {
  array.push(element);
  return array;
}
var accessElementInArray = function(array, index) {
  return array[index];
}
var removeElementFromBeginningOfArray = function(array) {
  newArray = array.slice(1);
  return newArray;
}
var removeElementFromEndOfArray = function(array) {
  newArray = array.slice(0, array.length - 1);
  return newArray;
}
