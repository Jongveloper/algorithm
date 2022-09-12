/**
 * 미지의 것
 * - 지워진 로또의 최고 순위와 최저 순위
 * 자료
 * - 알아볼 수 없는 번호를 0으로 표기한다.
 * - 순서와 상관없이, 로또에 당첨된 번호와 일치하는 번호가 있으면 맞힌걸로 인정
 * - includes를 사용하면 가려낼 수 있다.
 *
 * 조건
 * - lottos는 길이 6인 정수 배열이다.
 * - lottos의 모든 원소는 0 이상 45이하인 정수이다.
 *    - 0은 알아볼 수 없는 숫자를 의미한다.
 * - win_nums는 길이 6인 정수 배열이다.
 * - win_nums의 모든 원소는 1 이상 45 이하인 정수이다.
 *  - win_nums에는 중복되는 숫자가 없다.
 *
 * 계획
 * - lottos를 반복문을 돌면서 베스트 케이스와 워스트 케이스를 구분하여
 * 맞힌 번호를 계산한다.
 *
 * 반성
 * 문제를 보았을 때, 단순한 문제임에도
 * 처음에 너무 어렵게 생각했던 것 같다...!
 * 문제의 지문이 길더라도 천천히 읽으면 된다..
 * 왜 filter 아이디어를 내놓고 처음에 filter를 처음부터 사용하지 않았는지...
 * filter를 사용해서 풀어보자!
 */

// const solution = (lottos, winNums) => {
//   let bestCase = 0;
//   let worstCase = 0;
//   const answer = [];

//   lottos.forEach((v) => {
//     if (winNums.includes(v)) {
//       bestCase += 1;
//     }
//     if (v === 0) {
//       bestCase += 1;
//     }
//   });

//   lottos.forEach((v) => {
//     if (winNums.includes(v)) {
//       worstCase += 1;
//     }
//   });

//   if (bestCase === 6) {
//     answer.push(1);
//   } else if (bestCase === 5) {
//     answer.push(2);
//   } else if (bestCase === 4) {
//     answer.push(3);
//   } else if (bestCase === 3) {
//     answer.push(4);
//   } else if (bestCase === 2) {
//     answer.push(5);
//   } else {
//     answer.push(6);
//   }

//   if (worstCase === 6) {
//     answer.push(1);
//   } else if (worstCase === 5) {
//     answer.push(2);
//   } else if (worstCase === 4) {
//     answer.push(3);
//   } else if (worstCase === 3) {
//     answer.push(4);
//   } else if (worstCase === 2) {
//     answer.push(5);
//   } else {
//     answer.push(6);
//   }

//   return answer;
// };

const solution = (lottos, winNums) => {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  const worst = lottos.filter((v) => winNums.includes(v)).length;
  const zeroCount = lottos.filter((v) => v === 0).length;

  const best = worst + zeroCount;

  return [rank[best], rank[worst]];
};

describe('로또의 최고 순위와 최저 순위', () => {
  it('최고 순위와 최저 순위가 리턴됩니다.', () => {
    expect(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])).toEqual([
      3, 5,
    ]);
  });
});
