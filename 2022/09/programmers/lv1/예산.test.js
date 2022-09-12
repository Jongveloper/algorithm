/**
 * 미지의 것
 * 총 부서 물품 구매 수량
 *
 * 자료
 *
 * 최대 몇 개의 물품을 지원할 수 있는지를 구하는 것이다.
 * 오름차순을 하고 전부 탐색을 해서 해당 값을 구할 수 있다.
 * 최대 몇 개의 물품이기 때문에 낮은 수부터 더해 예산보다 커지면
 * 그 전 값 까지 카운트를 해서 리턴하면되고
 * 예산과 누적 값이 같아지면 카운트를 리턴하면 된다.
 *
 * 조건
 * 부서별 신청 금액은 1 이상 100,000이하의 자연수이다.
 *
 * 계획
 * 1. 배열을 오름차순 한다.
 * 2. 오름차순한 배열을 탐색하며 accumulate를 선언 후 accumulate에 부서별 신청 금액을 더하고 count +=1을 한다..
 * 3. accumulate > budget 이라면 count를 리턴한다.
 * 4. accumulate === budget 이라면 count를 리턴한다.
 * 반성
 * 조급한 마음에...
 * 계획을 짜고 계획대로 정렬을 하지 않고
 * 문제를 풀어서 테스트는 통과했지만 채점에서 실패했었다.
 * 계획을 항상 확인하며 계획대로 구현하자
 */

const solution = (d, budget) => {
  let accumulate = 0;
  let count = 0;

  const sortedD = d.sort((a, b) => a - b);

  for (let i = 0; i < sortedD.length; i += 1) {
    if (accumulate + sortedD[i] > budget) {
      break;
    }

    accumulate += sortedD[i];
    count += 1;
  }
  return count;
};

describe('예산', () => {
  it('최대한 많은 부서의 물품을 구매할 때 구매할 수 있는 양', () => {
    expect(solution([1, 3, 2, 5, 4], 9)).toBe(3);
  });
});
