/* eslint-disable no-param-reassign */
// const BFS = (graph, startNode) => {
//   const visited = [];
//   let needVisit = [startNode];

//   while (needVisit.length !== 0) {
//     const node = needVisit.shift();
//     if (!visited.includes(node)) {
//       visited.push(node);
//       needVisit = [...needVisit, ...graph[node]];
//     }
//   }

//   return visited;
// };

const BFS = (graph, startNode, visited = [], needVisit = [startNode]) => {
  if (needVisit.length === 0) {
    return visited;
  }

  const node = needVisit.shift();
  if (!visited.includes(node)) {
    visited.push(node);
    needVisit = [...needVisit, ...graph[node]];
  }

  return BFS(graph, startNode, visited, needVisit);
};

// // while
// const DFS = (graph, startNode) => {
//   const visited = [];
//   let need = [startNode];

//   while (need.length !== 0) {
//     const node = need.shift();
//     if (!visited.includes(node)) {
//       visited.push(node);
//       need = [...graph[node], ...need];
//     }
//   }

//   return visited;
// };

// 재귀
const DFS = (graph, startNode, visited = [], need = [startNode]) => {
  if (need.length === 0) return visited;

  const node = need.shift();

  if (!visited.includes(node)) {
    visited.push(node);
    need = [...graph[node], ...need];
  }

  return DFS(graph, startNode, visited, need);
};

describe('BFS', () => {
  it('BFS로 탐색한 순서가 나옵니다.', () => {
    expect(
      BFS(
        {
          A: ['B', 'C'],
          B: ['A', 'D'],
          C: ['A', 'G', 'H', 'I'],
          D: ['B', 'E', 'F'],
          E: ['D'],
          F: ['D'],
          G: ['C'],
          H: ['C'],
          I: ['C', 'J'],
          J: ['I'],
        },
        'A',
      ),
    ).toEqual(['A', 'B', 'C', 'D', 'G', 'H', 'I', 'E', 'F', 'J']);
  });

  expect(
    DFS(
      {
        A: ['B', 'C'],
        B: ['A', 'D'],
        C: ['A', 'G', 'H', 'I'],
        D: ['B', 'E', 'F'],
        E: ['D'],
        F: ['D'],
        G: ['C'],
        H: ['C'],
        I: ['C', 'J'],
        J: ['I'],
      },
      'A',
    ),
  ).toEqual(['A', 'B', 'D', 'E', 'F', 'C', 'G', 'H', 'I', 'J']);
});
