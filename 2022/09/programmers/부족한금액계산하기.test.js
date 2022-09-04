/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/**
 * 미지의 것
 * - 부족한 금액
 *
 * 자료
 * 원래 이용료는 price
 * 하지만 n번 째 이용한다면 원래 이용료의 n배를 받음
 * 처음 이용료가 100이었다면 두번째에는 200 세번째에는 300을 받음
 *
 *
 * n이 4 price 100 이면
 * totalPrice = [100, 200, 300 ,400].reduce((acc, cur) => acc+cur ,0);
 * 혹은 totalPrice = 100 + 200 + 300 + 400
 *
 * 금액이 부족하면
 * totalPrice -= money
 *
 * 금액이 부족하지 않으면 0을 리턴
 *
 * 조건
 * 놀이기구의 이용료는 1 <= price <= 2,500
 *
 * 계획
 * totalPrice 변수를 만든다.
 * count만큼 반복문을 돌며 totalPrice += price를 해준다.
 * totalPrice -= money를 한다.
 *
 *  금액이 부족하면
 * totalPrice -= money
 *
 * 금액이 부족하지 않으면 0을 리턴
 *
 *
 * 반성
 * 문제를 풀 때, 무조건 배열로 풀려고 하는 버릇을 고쳐야겠다.
 * reduce를 사용하여 합산하는 것은 좋지만
 * 배열로 굳이 넣지 않아도 되는 부분을 자꾸 배열로 계획을 세우게 된다.
 * 항상 생각하고 계획을 세워야겠다.
 */

// 문자열
// const solution = (price, money, count) => {
//   let totalPrice = 0;
//   let accumulate = 0;

//   for (let i = 0; i < count; i += 1) {
//     if (accumulate === 0) {
//       totalPrice += price;
//       accumulate += price;
//     } else {
//       accumulate += price;
//       totalPrice += accumulate;
//     }
//   }

//   return totalPrice - money < 0 ? 0 : totalPrice - money;
// };

// 재귀 배열
const solution = (price, money, count, totalPrice = [], accumulate = 0) => {
  if (count === 0) {
    const insufficientAmount =
      totalPrice.reduce((acc, cur) => acc + cur, 0) - money;
    return insufficientAmount < 0 ? 0 : insufficientAmount;
  }

  return solution(
    price,
    money,
    count - 1,
    (totalPrice = [...totalPrice, accumulate + price]),
    accumulate + price,
  );
};

describe('부족한 금액 계산하기', () => {
  it('부족한 금액을 리턴합니다.', () => {
    expect(solution(3, 20, 4)).toBe(10);
  });
});
