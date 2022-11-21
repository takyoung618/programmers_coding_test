// 자릿수 더하기
// 문제 설명
// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

// 제한사항
// 0 ≤ n ≤ 1,000,000

// 내풀이
function solution(n) {
    let arr = (n + '').split('')
    let number = arr.map((i) => Number(i));
    return number.reduce((a,b) => (a+b));
}

// 다른 사람이 푼 풀이
function solution(n) {
    return [...('' + n)].map(num => +num).reduce((a, c) => a + c, 0);
}
  