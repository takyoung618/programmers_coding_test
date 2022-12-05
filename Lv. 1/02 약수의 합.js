// 약수의 합
// 문제 설명
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.

function solution(n) {
	let mesu = [];
  for(let i =0; i<=n; i++){
    if(n%i === 0){
      mesu.push(i)
    }
  }
    return mesu.reduce((a,b) => a+b, 0);
}