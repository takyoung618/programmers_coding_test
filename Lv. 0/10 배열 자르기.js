// 배열 자르기
// 문제 설명
// 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 < numbers의 길이 ≤ 100
// 0 ≤ numbers의 원소 ≤ 1,000
// 0 <num1 < num2 < numbers의 길이

// slice()** **메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.

// arr.slice([begin[, end]])

// 매개변수
// begin Optional
// 0을 시작으로 하는 추출 시작점에 대한 인덱스를 의미합니다. 음수 인덱스는 배열의 끝에서부터의 길이를 나타냅니다. slice(-2) 는 배열에서 마지막 두 개의 엘리먼트를 추출합니다. begin이 undefined인 경우에는, 0번 인덱스부터 slice 합니다. begin이 배열의 길이보다 큰 경우에는, 빈 배열을 반환합니다.

// end Optional
// 추출을 종료 할 0 기준 인덱스입니다. slice 는 end 인덱스를 제외하고 추출합니다. 예를 들어, slice(1,4)는 두번째 요소부터 네번째 요소까지 (1, 2 및 3을 인덱스로 하는 요소) 추출합니다. 음수 인덱스는 배열의 끝에서부터의 길이를 나타냅니다. 예를들어 slice(2,-1) 는 세번째부터 끝에서 두번째 요소까지 추출합니다. end가 생략되면 slice()는 배열의 끝까지(arr.length) 추출합니다.

// 만약 end 값이 배열의 길이보다 크다면, slice()는 배열의 끝까지(arr.length) 추출합니다.

function solution(arr, num1, num2){
    return arr.slice(num1, num2 + 1)
}
  

