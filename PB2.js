/*
Problem 2 
You are asked to write an algorithm that fulfill the following: 

Name: Dot product
Description:
Write a procedure, called dot_product which calculates in the variable ps, the dot(scalar) product of v1 and v2 (v1 and v2 are vectors of IR)
Write an algorithm which determines, for n pairs of given vectors, whether two vectors of given IR are orthogonal, by calling the procedure defined in the previous question. The dot product of two orthogonal vectors is zero.
Modify the previous algorithm if you use a dot_product function instead of a procedure.
*/

function dotProduct(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
      ps += v1[i] * v2[i];
    }
    return ps;
  }
  
  function areOrthogonal(v1, v2) {
    return dotProduct(v1, v2) === 0;
  }
