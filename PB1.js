/*
Problem 1
 Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
Example:
Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
Output: 13 (distinct elements 4, 7, 2 )
Give a solutions to this problem, using arrays
*/

function sumOfDistinctElements(set1, set2) {
    let distinctElements = new Set();
  
    for (let element of set1) {
      distinctElements.add(element);
    }
  
    for (let element of set2) {
      distinctElements.add(element);
    }
  
    let sum = 0;
  
    for (let element of distinctElements) {
      sum += element;
    }
  
    return sum;
  }