/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/**
 * 미지의 것
 * - 가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇 번째 차례에 탈락하는지
 * 자료
 * - object를 통해 사람의 번호(key) 차례(value)를 저장할 수 있다.
 * - array를 통해 나왔던 단어를 저장할 수 있다.
 * 조건
 * - 정답은 [번호 , 차례] 형태로 return해야한다.
 * - 단어의 길이는 2이상 50이하이다.
 * - 모든 단어는 알파벳 소문자로 이루어져 있다.
 * - 주어진 단어들로 탈락자가 생기지 않는다면 [0,0]을 return한다.
 * - 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 한다.
 * 계획
 * - 1부터 n까지의 키를 가진 userObject를 생성한다.
 * - used 배열을 만든다.
 * - words를 탐색하며
 *    - 사용하지 않은 단어라면
 *      - used배열의 마지막 요소의 마지막 글자를 확인하고
 *        - 위의 요소의 단어로 시작하는 단어라면 해당 사용자의 value +=1을 한다.
 *        - 위요 의소의 단어로 시작하지 않는다면 해당 사용자의 [번호, 차례]를 return한다.
 *    - 사용한 단어라면
 *      - 해당 사용자의 [번호, 차례]를 return한다.
 *    - 만약 탈락자가 생기지 않는다면
 *      - [0, 0]을 return한다.
 * 반성
 * 알고리즘을 풀 때 너무 복잡하게 접근한 것 같습니다.
 * 복잡하게 접근을 하다보니 구현이 복잡해지고
 * 코드의 가독성도 떨어지는 것 같습니다.
 * 간단하게 생각하는 버릇을 들여야겠습니다.
 */

// const solution = (n, words) => {
//   const userObject = {};

//   const used = [words.shift()];

//   for (let i = 1; i <= n; i += 1) {
//     userObject[i] = 0;
//   }

//   userObject[1] = 1;

//   let count = 1;

//   for (const word of words) {
//     if (used.indexOf(word) === -1) {
//       const target = used[used.length - 1];
//       if (target[target.length - 1] === word[0]) {
//         used.push(word);
//         count += 1;
//         if (count > n) {
//           count = 1;
//           userObject[count] += 1;
//         } else {
//           userObject[count] += 1;
//         }
//       } else {
//         count + 1 > n ? (count = 1) : (count += 1);
//         userObject[count] += 1;

//         return [count, userObject[count]];
//       }
//     } else {
//       count += 1;
//       userObject[count] += 1;
//       return [count, userObject[count]];
//     }
//   }

//   return [0, 0];
// };

const solution = (n, words) => {
  const answer = [0, 0];

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    const user = (i % n) + 1;
    const turn = Math.ceil((i + 1) / n);

    if (i > 0) {
      // 이전 단어 마지막 글자
      const last = words[i - 1].split('').pop();

      // 중복이거나 틀린 경우
      if (i > words.indexOf(word) || words[i][0] !== last) {
        return [user, turn];
      }
    }
  }

  return answer;
};

describe('영어 끝말잇기', () => {
  it('탈락자의 번호와 차례를 리턴합니다.', () => {
    expect(
      solution(3, [
        'tank',
        'kick',
        'know',
        'wheel',
        'land',
        'dream',
        'mother',
        'robot',
        'tank',
      ]),
    ).toEqual([3, 3]);

    expect(
      solution(5, [
        'hello',
        'observe',
        'effect',
        'take',
        'either',
        'recognize',
        'encourage',
        'ensure',
        'establish',
        'hang',
        'gather',
        'refer',
        'reference',
        'estimate',
        'executive',
      ]),
    ).toEqual([0, 0]);

    expect(
      solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']),
    ).toEqual([1, 3]);
  });
});
