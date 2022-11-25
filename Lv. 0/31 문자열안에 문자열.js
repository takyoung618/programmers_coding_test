// 문자열안에 문자열
// 문제 설명
// 문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ str1의 길이 ≤ 100
// 1 ≤ str2의 길이 ≤ 100

// 조건문으로 푼 풀이
function solution(str1, str2) {
    let answer = str1;
  	if(str1.includes(str2)){
      return 1
    } else {
      return 2
    }
}

// includes 함수를 사용하여 포함 여부를 확인하고 삼항 연산자로 값을 반환함
const solution = (str1, str2) => str1.includes(str2) ? 1 : 2