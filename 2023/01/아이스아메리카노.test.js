/**
 * 미지의 것
 * - 최대 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열
 * 자료
 * - 아메리카노는 5,500원이다.
 * 조건
 * - 0 < money <= 1,000,000
 * 계획
 * - money가 5,500원 보다 작아질 때까지 반복문을 돌린다.
 * - money - 5,500원을 한다.
 * - count를 += 1한다.
 * - money가 5,500원 보다 작아지면 잔액과 count를 배열에 담아 리턴한다.
 * 반성
 */

// const solution = (money) => {
//   let change = money;
//   let count = 0;
//   while (change >= 5500) {
//     change -= 5500;
//     count += 1;
//   }

//   return [count, change];
// };

// const solution = (money) => {
//   return [Math.floor(money / 5500), money % 5500];
// };

const solution = (money, count = 0) => {
  if (money >= 5500) {
    return solution(money - 5500, count + 1);
  }
  return [count, money];
};

describe('아이스 아메리카노', () => {
  it('최대 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 리턴합니다.', () => {
    expect(solution(5500)).toEqual([1, 0]);
  });
});
