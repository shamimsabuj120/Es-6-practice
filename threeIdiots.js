const ages= [12,30,45,60];
const ages2 = [70,50,30];
const ages3 = [40,60,60]
const allAges = ages.concat(ages2).concat(ages3).concat([7]);
const allAges2 = [...ages, ...ages2, ...ages3, 6]
console.log(allAges);
console.log(allAges2);

const business = 560;
const minister = 890;
const friend = 450;
const maximum = Math.max(business,minister,friend);
const takaPoisha= [ 590, 709, 340, 560,230];
// const result = Math.max(takaPoisha);
const Result = Math.max(...takaPoisha);
console.log(maximum);
console.log(Result);