//1.
let d = 7
console.log(d);
console.log(d**2);
console.log(d**3);

//2.
let num = +prompt("Enter the number");
if(num > 0){
    console.log(num * 2)
}
else{
    console.log("Error")
}

//3.
let num2 = +prompt("Enter the number");
if(num2 > 0){
    console.log("Положительное")
}
else if(num2 < 0){
console.log("Отрицательное")
}
else{
    console.log("Null")
}

//4.
let num3_1 = +prompt("Enter the num1")
let num3_2 = +prompt("Enter the num2")
if(num3_1 > num3_2){
    console.log(num3_1 + num3_2)
}
else if (num3_2 > num3_1){
    console.log(num3_2 * num3_1)
}
else{
    console.log("Числа одинаковые")
}

//5.
let num4 = +prompt("Enter the number");
if(num4 < 0){
    console.log(num4 ** 2);
}
else{
    console.log("ERROR")
}

//6.
let num5_1 = +prompt("Enter the number of students");
let num5_2 = +prompt("Enter the number of chair");
if(num5_2 > num5_1){
    console.log("Стульев хватает")
}
else{
    console.log("Стульев не хватает")
}

//7.
console.log("Start")
for(let num6 = 0; num6 < 10; num6++){
    console.log(num6)
}
console.log("Finish")

//8.
for(let num7 = 10; num7 < 100; num7+=5){
    if (num7 % 5 == 0);{
        console.log(num7);
}
}

//9.
let num8_1 = Number(prompt('Enter the number'));
let num8_2 = num + 14;
let num8_3 = 0;
for(i = num8_1; i < num8_2; i++){
    if(i % 2 != 0){
        num8_2 = i;
        console.log(num8_2);
    }
}

//10.
let arr1 = [2, 18, 23, 19, 27, 14, 8];
for(let num9 = 0; num9 < arr1.length; num9++){
    if(arr1[num] >= 15){
        console.log(arr1[num9]);
    }
}

//11.
let arr2 = [5, 12, 13, 18, 21, 24, 35, 36, 38, 39, 41, 46];
for(let num10 = 0; num10 < arr2.length; num10++){
    if(arr2[num10] % 2 != 0){
        console.log(arr2[num10]);
    }
}

// 12.
let arr3 = [3, 6, 7, 15, 17, 29, 32, 35, 42, 45, 47, 50];
for(let num11 = 3; num11 < arr3.length; num11++){
    if(arr3.indexOf(arr3[num11]) % 3 == 0){
        console.log(arr3.indexOf(arr3[num11]));
    }
}

// // 13.
let arr4 = [1, 10, 3, 12, 45, 23, 17, 88];
let sum_1 = 0;
for(let num12 = 0; num12 < arr4.length; num12++){
    sum_1 += arr4[num];
}
console.log(sum_1);

// // 14.
let arr5 = [1, 10, 3, 12, 45, 23, 17, 88];
let sum_2 = 0;
for(let num13 = 0; num13 < arr5.length; num13++){
    if(arr5[num13] % 2 != 0){
        sum_2 += arr5[num13];
    }
}
console.log(sum_2);

// // 15.
let arr6 = [102, 2, 7, 38, 53, 1, 15, 0, 4, 12, 45, 23, 18, 99, 86];
let sum_even = 0;
let sum_odd = 0;
for(let num14 = 0; num14 < arr6.length; num14++){
    if(arr6[num14] % 2 == 0){
        sum_even += arr6[num14];
    }
}
for(let num15 = 0; num15 < arr6.length; num15++){
    if(arr6[num15] % 2 != 0){
        sum_odd += arr6[num15];
    }
}
if(sum_even == sum_odd){
    console.log(0);
}
else if(sum_even > sum_odd){
    console.log(sum_even - sum_odd);
}
else{
    console.log(sum_odd - sum_even);
}
