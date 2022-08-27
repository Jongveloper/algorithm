/* eslint-disable no-unused-expressions */
const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (array) => {
  const answer = [];

  for (let i = 1; i < array.length; i += 1) {
    const score = input[i].split(' ').map((item) => +item);

    const students = score.shift();
    const average = Math.floor(
      score.reduce((acc, cur) => acc + cur, 0) / students,
    );

    const difference = [];
    for (let j = 0; j < students; j += 1) {
      if (score[j] > average) difference.push(score[j]);
    }
    answer.push(`${((difference.length / students) * 100).toFixed(3)}%`);
  }

  return answer.join('\n');
};

console.log(solution(input));
