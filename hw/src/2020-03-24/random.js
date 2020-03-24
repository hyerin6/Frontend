// 10 이상 20 이하의 정수를 임의로 30개 출력하는 코드를 구현하시오.
// (Math.random() * 11)의 범위가 0 ~ 10 이기 때문에 10을 더해준다.

for(let i = 0; i < 30; i++)
    console.log(Math.floor(Math.random() * 11) + 10);
