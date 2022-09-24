// 1번 문제
var nums = [100, 200, 300, 400, 500];
nums.pop();
nums.pop();
console.log(nums);
// 이유 : pop은 배열의 마지막 요소를 제거

// 2번 문제
var arr = [200, 100, 300];
arr.splice(2, 0, 10000); 
console.log(arr);
// splice(시작 인덱스 번호, 제거 할 인덱스 개수, 넣을 데이터)를 이용

// 3번
var arr = [100, 200, 300];
console.log(typeof(arr));
// 답 4번 객체

// 4번
// 2번 소수점도 number로 찍힘, 불리언은 true, false값

// 5번
var a = 10;
var b = 2;

for(var i=1; i<5; i+=2){
    a += i;
}

console.log(a+b);
// 답 16, i가 1이고, i가 5보다 작을때까지 반복 
// => 첫번째, i = 1 + 2 = 3이고 a = 11(반복하기 이전에 i값을 더하기 때문에) / 두번째, i = 3 + 2 =5 (x) => 한번만 반복
// 따라서 a = 11 + i = 14
// a+b = 14+2 = 16