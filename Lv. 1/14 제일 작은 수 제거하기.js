// 14 제일 작은 수 제거하기
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    arr.length <= 1 ? answer = [-1] : answer = arr
    
    return answer
}