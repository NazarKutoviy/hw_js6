// 1
// let i = 1;
// while(i <= 10){
//   console.log(i);
//   i +=1;
// }
// 2
// for (let i = 2; i <= 20; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// }
// 3
// for (let i = 2; i <= 10; i += 1) {
//   console.log(`7 x ${i} = ${7 * i}`);
// }
// 4
// let i = 1;
// while (i <= 7) {
//   console.log(i);
//   i += 1;
// }
// 5
// for(let i =1 ; i <=10;i +=1){
//   if(i === 7){
//     break;
//   }
//   console.log(i)
// }
// 6
// let n = 9;
// for(let i =1; i+=1;){
//   if(i >= n){
//     break;
//   }
//   console.log(i)
// }
// 7
let i = 1;
while (i <= 20) {
  if (i % 3 === 0) {
    i += 1;
    continue;
  }
  console.log(i);
  i += 1;
}
