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
});
