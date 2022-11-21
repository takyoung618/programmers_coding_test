// 짝수는 싫어요
// 문제 설명
// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 100

// 내가 푼 풀이
function solution(n) {
    let answer = [];
  	for(let i=1; i<=n; i++){
      answer.push(i)
    }
    return answer.filter(f => f%2 === 1)
}

// 프로그래머스 통과풀이
function solution(n) {
    let nums = [];
    for (let i = 0; i <= n; i++) {
      if (i % 2 === 1) nums = [...nums, i];
    }
    return nums;
}

