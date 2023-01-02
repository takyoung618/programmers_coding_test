// 12 부족한 금액 계산하기

// 내가 푼 풀이
// 테스트 4 만 미통과.. 왜??
function solution(price, money, count) {
    let arr = []
    for(let i =1; i<=count; i++){
      arr.push(i*price)
    }
    return arr.reduce((a,b)=>a+b)-money
}

// 남이 푼 풀이
function solution(price, money, count) {
    let totalPrice = 0;
    
    for(let i=1;i<=count;i++){
        totalPrice += price * i;
    }
    
    return money > totalPrice ? 0 : totalPrice-money
}