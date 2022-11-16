// 

// 반복문으로 푼 풀이
function solution(strlist) {
    let a = [];
  	let b = [];
    for(let i=0; i<strlist.length; i++){
      a.push(strlist[i])
    } 
  	for(let i=0; i<a.length; i++){
      b.push(a[i].length)
    }
  	return b
}

// map으로 푼 풀이
function solution(strlist) {
    return strlist.map(s => s.length);
}