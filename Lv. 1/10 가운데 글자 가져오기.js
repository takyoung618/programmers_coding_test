// 10 가운데 글자 가져오기

// 내가 푼 풀이
function solution(s) {
    let a = [...s]
    let b = (a.length)/2
    if(a.length%2 === 1){
      return (a.splice(b,1)).join('')
    } else {
      return (a.splice(b-1,2)).join('')
    }
}

// 남이 푼 풀이
function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}