/* eslint-disable no-unused-expressions */
const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (arr) => {
  const remain = [];

  arr.forEach((v) => {
    remain.push(v % 42);
  });

  const setRemain = new Set(remain);

  const answer = [...setRemain].length;

  return answer;
};

console.log(solution(input));
