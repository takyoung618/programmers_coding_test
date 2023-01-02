// 11 자연수 뒤집어 배열로 만들기

// 내가 푼 풀이
function solution(n) {
    let a = n.toString();
    let b = [...a].reverse();
    let c = b.map(n => Number(n))
    return c
}

// 다른 사람이 푼 풀이
function solution(n) {
    return String(n).split("").reverse().map((data) => Number(data))
}