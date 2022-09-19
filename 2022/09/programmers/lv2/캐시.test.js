/**
 * 미지의 것
 * - 실행 시간
 * 자료
 * - 캐시 히트이면 실행시간은 1이다.
 * - 캐시 미스이면 실행시간은 5이다.
 *
 * - shift를 사용하면 맨 앞에 요소를 제거할 수 있다.
 *
 * 조건
 * - 대소문자를 구별하지 않는다.
 * 계획
 * - cities를 전부 대문자로 통일한다.
 * - 캐시 배열을 만든다.
 * - cities를 탐색하며 캐시 배열에
 *    - 해당 도시가 있다면 answer += 1
 *    - 해당 도시가 없다면 answer += 5
 *      - 캐시.shift();
 *      - 캐시.push(해당 도시);
 * 반성
 * 문제를 풀 때, 주어진 자료를 잘 활용해야할 것 같습니다.
 * LRU기법을 활용해야하는데 LRU기법을 활용하지 못해서
 * 문제를 푸는데 오랜 시간이 걸린 것 같습니다..!
 */

const solution = (cacheSize, cities) => {
  if (cities.length === 0) return 0;
  if (cacheSize === 0) {
    return cities.length * 5;
  }
  const toUpperCities = cities.map((city) => city.toUpperCase());
  let answer = 0;
  const cache = [];

  toUpperCities.forEach((city) => {
    if (cache.length >= cacheSize) {
      if (cache.indexOf(city) >= 0) {
        answer += 1;
        cache.push(cache.splice(cache.indexOf(city), 1)[0]);
      } else {
        cache.shift();
        cache.push(city);
        answer += 5;
      }
    } else if (cache.length < cacheSize) {
      if (cache.indexOf(city) >= 0) {
        answer += 1;
        cache.push(cache.splice(cache.indexOf(city), 1)[0]);
      } else {
        answer += 5;
        cache.push(city);
      }
    }
  });

  return answer;
};

describe('캐시', () => {
  it('실행 시간이 출력됩니다.', () => {
    expect(
      solution(3, [
        'Jeju',
        'Pangyo',
        'Seoul',
        'NewYork',
        'LA',
        'Jeju',
        'Pangyo',
        'Seoul',
        'NewYork',
        'LA',
      ]),
    ).toBe(50);

    expect(
      solution(3, [
        'Jeju',
        'Pangyo',
        'Seoul',
        'Jeju',
        'Pangyo',
        'Seoul',
        'Jeju',
        'Pangyo',
        'Seoul',
      ]),
    ).toBe(21);

    expect(solution(3, ['A', 'B', 'A'])).toBe(11);

    expect(solution(4, ['1', '2', '3', '4', '2'])).toBe(21);

    expect(
      solution(30, [
        'Jeju',
        'Pangyo',
        'Seoul',
        'Jeju',
        'Pangyo',
        'Seoul',
        'Jeju',
        'Pangyo',
        'Seoul',
      ]),
    ).toBe(21);

    expect(
      solution(2, [
        'Jeju',
        'Pangyo',
        'Seoul',
        'NewYork',
        'LA',
        'SanFrancisco',
        'Seoul',
        'Rome',
        'Paris',
        'Jeju',
        'NewYork',
        'Rome',
      ]),
    ).toBe(60);

    expect(
      solution(3, [
        'Jeju',
        'Pangyo',
        'Seoul',
        'NewYork',
        'LA',
        'SanFrancisco',
        'Seoul',
        'Rome',
        'Paris',
        'Jeju',
        'NewYork',
        'Rome',
      ]),
    ).toBe(60);
  });
});
