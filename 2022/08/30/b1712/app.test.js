/**
 * A=1,000, B=70이라고 하자.
 * 이 경우 노트북을 한 대 생산하는 데는 총 1,070만원이 들며,
 * 열 대 생산하는 데는 총 1,700만원이 든다.
 * 노트북 가격이 C만원으로 책정되었다고 한다.
 *
 * 주어지는 것 : A : 고정 비, B : 원가, C : 판매 가격
 * 구해야하는 것 : 몇 대를 팔아야 손익 분기점으로 전환이 되는가
 *
 * 0. 만약 C가 B보다 작으면 -1을 리턴한다.
 * 1. total 변수에 A + B를 담는다.
 * 2. count 변수를 만든다.
 * 3. 반복문을 돌면서 노트북이 한 대 팔릴 때마다 total + B - C를 하고 count++한다.
 * 4. 만약 total이 0이 되면 count를 리턴한다.
 */

const solution = (product) => {
  const fixedCost = product[0];
  const cost = product[1];
  const price = product[2];

  const margin = price - cost;

  const count = Math.floor(fixedCost / margin) + 1;

  return count;
};

describe('손익분기점', () => {
  it('최초로 이익이 발생하는 판매량을 출력한다', () => {
    expect(solution([2100000000, 9, 10])).toBe(2100000001);
  });
});
