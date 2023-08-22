/**
 * 미지의 것
 * - 모음을 뺀 자음으로 구성된 문자열
 * 자료
 * - 정규 표현식을 사용할 수 있다.
 * 조건
 * - 모음은 a, e, i, o, u
 * 계획
 * - 정규 표현식을 사용한다.
 *
 * - split
 * 1. myString을 split('') 한다.
 * 2. 모음 배열을 만든다.
 * 3. arr을 filter를 사용하여 모음이 아닌 것만 남긴다.
 * 4. arr을 join('') 한다.
 *
 * - 반복문
 * 1. 모음이면 false를 return 하는 isConsonant 함수를 만든다.
 * 2. isConsonant 함수를 만든다.
 * 3. 해당 함수를 통해 true 인 경우 answer += char 한다.
 * 4. answer를 return 한다.
 * 반성
 */

// const solution = (myString) => {
//   return myString.replace(/[aeiou]/gi, '');
// };

// const solution = (myString) => {
//   const myStringArr = myString.split('');

//   const gathers = ['a', 'e', 'i', 'o', 'u'];

//   const answer = myStringArr
//     .filter((char) => {
//       return !gathers.includes(char);
//     })
//     .join('');

//   return answer;
// };

const isConsonant = (char) => {
  const gathers = ['a', 'e', 'i', 'o', 'u'];

  if (gathers.includes(char)) {
    return false;
  }

  return true;
};

// const solution = (myString) => {
//   let answer = '';
//   for (let i = 0; i < myString.length; i += 1) {
//     if (isConsonant(myString[i])) {
//       answer += myString[i];
//     }
//   }

//   return answer;
// };

// const solution = (myString, answer = '', index = 0) => {
//   if (index === myString.length) {
//     return answer;
//   }

//   if (isConsonant(myString[index])) {
//     return solution(myString, answer + myString[index], index + 1);
//   }

//   return solution(myString, answer, index + 1);
// };

const solution = (myString) => {
  return myString.split('').reduce((answer, char) => {
    if (isConsonant(char)) {
      return answer + char;
    }

    return answer;
  }, '');
};

describe('모음 제거', () => {
  it('모음을 제거한 문자열을 리턴합니다.', () => {
    expect(solution('bus')).toBe('bs');
  });
});

describe('isConsonant', () => {
  describe('문자가 자음이라면', () => {
    it('true를 리턴합니다.', () => {
      expect(isConsonant('j')).toBe(true);
    });
  });

  describe('문자가 모음이라면', () => {
    it('false를 리턴합니다.', () => {
      const gathers = ['a', 'e', 'i', 'o', 'u'];

      gathers.forEach((gather) => {
        expect(isConsonant(gather)).toBe(false);
      });
    });
  });
});
