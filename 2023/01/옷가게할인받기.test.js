/**
 * 미지의 것
 * - 지불해야 할 금액
 * 자료
 * - 10만원 이상 사면 5% 30만원 이상 사면 10% 50만원 이상 사면 20% 할인
 * - 소수점 이하는 버린다.
 * 조건
 * - 10 <= price <= 1,000,000
 * 계획
 * - 조건문을 사용해서 각 조건에 맞는 금액을 리턴한다.
 * 반성
 */

const solution = (price) => {
  if (price >= 500000) {
    return Math.floor(price * 0.8);
  }

  if (price >= 300000) {
    return Math.floor(price * 0.9);
  }

  if (price >= 100000) {
    return Math.floor(price * 0.95);
  }

  return price;
};

describe('옷가게 할인 받기', () => {
  it('지불해야 할 금액이 리턴됩니다.', () => {
    expect(solution(150000)).toBe(142500);
    expect(solution(580000)).toBe(464000);
  });
});
