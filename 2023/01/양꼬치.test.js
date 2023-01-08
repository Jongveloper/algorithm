/**
 * 미지의 것
 * - 지불해야하는 가격
 * 자료
 * - 양꼬치는 1인분에 12,000원이다.
 * - 음료수는 2,000원이다.
 * - 양꼬치 10인분을 먹으면 음료수 하나가 서비스이다.
 * 조건
 * - 서비스로 받은 음료수는 모두 마신다.
 * 계획
 * - n을 10으로 나눈 몫을 구한다.
 * - k - 위에서 구한 값을 한다.
 * - n * 12000 + (k - 위에서 구한 값) * 2000을 한 값을 리턴한다.
 */

const drinksToPayFor = (number = 0, drink = 0) => {
  return drink - Math.floor(number / 10);
};

// const comma = (money = 0) => {
//   return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// };

const calc = ({
  foodCount = 0,
  foodPrice = 0,
  drinkCount = 0,
  drinkPrice = 0,
}) => {
  return foodCount * foodPrice + drinkCount * drinkPrice;
};

const solution = (n = 0, k = 0) => {
  return calc({
    foodCount: n,
    foodPrice: 12000,
    drinkCount: drinksToPayFor(n, k),
    drinkPrice: 2000,
  });
};

describe('양꼬치', () => {
  it('지불해야하는 가격을 리턴한다.', () => {
    expect(solution(64, 6)).toBe(768000);
    expect(solution(10, 3)).toBe(124000);
  });
});
