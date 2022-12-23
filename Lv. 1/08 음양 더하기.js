// 08 음양 더하기

// 내가 푼 풀이
function solution(absolutes, signs) {
    let answer = [];
    for(let i =0; i<=signs.length; i++){
      if(signs[i] === true){
        answer.push(absolutes[i])
      }
      else if(signs[i] === false){
        answer.push(-absolutes[i])
      }
    }
    return answer.reduce((a,b) => (a+b));
}

// 다른 사람이 푼 풀이
function solution(absolutes, signs) {
    var answer = 0;
  
    for (let i = 0; i < absolutes.length; i++) {
      signs[i] ? answer += absolutes[i] : answer -= absolutes[i];
    }
    return answer;
}
  