// 짝수 홀수 개수
// 문제 설명
// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ num_list의 길이 ≤ 100
// 0 ≤ num_list의 원소 ≤ 1,000

// 조건문을 사용한 풀이
function solution(num_list) {
    let a = 0
    let b = 0
    let answer = [a.length, b.length]
      for(let i=0; i<num_list.length; i++){
        if(num_list[i]%2 ===0){
          a++;
        } else {
          b++;
        } 
      }
    return [a, b]
}

// 필터를 사용한 풀이
function solution(num_list){
  let answer = num_list.filter(n => n%2 === 0).length;
  return [answer, num_list.length-answer]
}