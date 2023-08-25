/**
 * 미지의 것
 * - 길이가 같은 부분 문자열 중에서, 이 부분 문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나온 횟수
 * 자료
 * - 문자열을 p자릿수로 나누어야 한다.
 * 조건
 * - 1 <= p <= 18
 * 계획
 * - p의 자릿수를 구한다.
 * - t의 길이만큼 반복문을 돌며 p의 자릿수와 같아지면 p보다 큰지 비교하는 함수에 넣는다.
 * - true라면 answer에 1을 더한다.
 * 반성
 * - 문제의 조건을 잘못 이해해서 시간을 소비한 부분이 아쉬웠다.
 * - 함수 분리를 통해 문제를 풀려고해서 자바스크립트에서 기본적으로 제공하는 slice 메서드를 사용하는 것을 생각하지 못했다.
 *
 * 개선
 * - 앞으로는 자바스크립트에서 제공하는 메서드를 우선순위로 문제를 푼다.
 * - 메서드가 없다면 함수를 새로 만들어서 문제를 풀이한다.
 * - 메서드가 존재한다면 메서드로 문제를 푼 후 함수를 만들어서 푸는 방식을 사용한다.
 */

const isBigger = (tArray, p) => {
  const t = Number(tArray.join(''));
  const toNumberP = Number(p);

  if (toNumberP >= t) {
    return true;
  }

  return false;
};

// const solution = (t, p) => {
//   let answer = 0;

//   const array = [];

//   for (let i = 0; i < t.length; i += 1) {
//     if (array.length < p.length) {
//       array.push(t[i]);
//     }

//     if (array.length === p.length) {
//       if (isBigger(array, p)) {
//         answer += 1;
//       }
//       array.shift();
//     }
//   }

//   return answer;
// };

// const solution = (t, p) => {
//   let count = 0;
//   for (let i = 0; i <= t.length - p.length; i += 1) {
//     const value = t.slice(i, i + p.length);
//     if (+p >= +value) {
//       count += 1;
//     }
//   }

//   return count;
// };

const solution = (t, p, count = 0, i = 0, value = t.slice(i, i + p.length)) => {
  if (t.length - p.length < i) {
    return count;
  }

  if (+p >= +value) {
    return solution(t, p, count + 1, i + 1, t.slice(i + 1, i + 1 + p.length));
  }

  return solution(t, p, count, i + 1, t.slice(i + 1, i + 1 + p.length));
};

describe('크기가 작은 부분 문자열', () => {
  it('부분문자열 중에서, p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return한다.', () => {
    expect(solution('3141592', '271')).toBe(2);
  });
});

describe('isBigger', () => {
  it('배열을 join한 숫자가 p보다 크거나 같으면 false를 return한다.', () => {
    expect(isBigger(['3', '1', '4'], '215')).toBe(false);
  });

  it('배열을 join한 숫자가 p보다 작으면 true를 return한다.', () => {
    expect(isBigger(['2', '7', '1'], '314')).toBe(true);
  });
});
