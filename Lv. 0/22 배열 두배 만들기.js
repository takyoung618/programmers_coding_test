// 배열 두배 만들기
// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// -10,000 ≤ numbers의 원소 ≤ 10,000
// 1 ≤ numbers의 길이 ≤ 1,000

// 반복문을 사용한 풀이
function solution(numbers) {
    let arr = []
    let answer = arr
      for(let i=0; i<numbers.length; i++){
        arr.push(numbers[i]*2)
    } 
    return answer
}

// map을 사용한 풀이 
function solution(numbers) {
    return numbers.map(n => n * 2);
}
  

