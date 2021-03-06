/*
Write a function: that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:
*/

let A = [-1, -3];
let B = [1, 3, 5, 4, 1, 2, 6, 7, 9];
let C = [1,2, -1];
let D = [100000, -1000000];

function solution(A) {
    if (A.length < 0) return 1;
    A.sort((a, b) => a - b);
    A = [...new Set(A)];
    let min = Math.min(...A), max = Math.max(...A);
    if (min > 1 || max < 1) return 1;
    if (min < 1 && max > 1) return 1;
    let temp = A.map((x) => !A.includes(x + 1)).indexOf(false);
    return temp + 2;
}

function solutionA(arr){
    let item = 0;
    while(arr.indexOf(item + 1) != -1){
        item++
    }
    return item + 1;
}

function solutionB(arr){
    let item = new Set(arr), start = 1;
    while(item.has(start)){
        start++
    }
    return start + 1;
}

//console.log(solutionA(A));
//console.log(solutionA(B));
//console.log(solutionA(C));
console.log(solutionA(D));

//console.log(solution(A));
//console.log(solution(B));
//console.log(solution(C));
//console.log(solution(D));