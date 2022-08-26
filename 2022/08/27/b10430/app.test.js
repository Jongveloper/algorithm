// // const fs = require('fs');

// // const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// // const input = fs
// //   .readFileSync(filePath)
// //   .toString()
// //   .split(' ')
// //   .map((item) => +item);

// // const solution = (arr) => {
// //   const answer = [];

// //   const a = arr[0];
// //   const b = arr[1];
// //   const c = arr[2];

// //   answer.push((a + b) % c);
// //   answer.push((a % c) + (b % c));
// //   answer.push((a * b) % c);
// //   answer.push(((a % c) * (b % c)) % c);

// //   const parseIntAnswer = answer.map((item) => +item);

// //   return parseIntAnswer.join('\n');
// // };

// const a = Number(input[0]);
// const b = Number(input[1]);
// const c = Number(input[2]);

// console.log((a + b) % c);
// console.log((a % c) + (b % c));
// console.log((a * b) % c);
// console.log(((a % c) * (b % c)) % c);

describe('나머지', () => {
  it('값을 출력합니다.', () => {
    // expect(solution([5, 8, 4])).toBe('1\n1\n0\n0');
  });
});
