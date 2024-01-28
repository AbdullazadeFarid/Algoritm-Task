//1) Bir array’iniz  var ve bir funksiya yaradirsiz eğer arayın ici doludursa sonuncu elementi
// qaytaracaq eğer arrayin ici bosdusa ekrana -1 qaytaracaq

// var array = [1,2,3,4,5,6,7]

// // console.log(array[1]);

// if(typeof array[0]==="number"){
//     console.log(-1);
// }

// else if(typeof(array[0])==="undefined"){
//     console.log(1);
// }

// 2) Bir mix array’iniz var 30’dan boyuk ededleri artan sıra ile ekranda göstermek

// let  array = [50,250,140,10,2]

// let newarray= []
// for(i=0 ; i<array.length ; i++){

//     // console.log(array[i]>30);
//     if(array[i]>30==true){
//         // console.log(array[i] );
//         newarray .push(array[i])
//     }
// }

// for(i=0 ; i<newarray.length ; i++){

//     // console.log(array[i]>[i]
//     if(array[i]>30==true){
//         console.log(newarray[i] );

//     }
// }

//3) isdifadeci reqem daxil edir 4reqemli  ve reqemlerinin icinde 2 ve 3’cu reqemler eger cutduse  ekrana her ikisi cutdur cixacaq eğer biri
//tek biri cutdurse ekrana biri tek biri cutdur cixacaq eks halda her ikisi tekdise ekrana her ikisi tekdir cixacaq


// let num = prompt("4 reqemli eded daxil et");

// if (true) {
//     let firstDigit = parseInt(num[0]);

//     let secondDigit = parseInt(num[1]);
//     let thirdDigit = parseInt(num[2]);
//     let fourthDigit = parseInt(num[3]);

//     let isSecondEven = secondDigit % 2 === 0;
//     let isThirdEven = thirdDigit % 2 === 0;

//     if (isSecondEven && isThirdEven) {
//         console.log("Her ikisi cutdur.");
//     } else if (isSecondEven || isThirdEven) {
//         console.log("Biri tek, biri cutdur.");
//     } else {
//         console.log("Her ikisi tekdir.");
//     }
// } else {
//     console.log("Invalid input. Please enter a four-digit number.");
// }





//4)  Daxil olan ededden sonraki ilk n sade ededi tap


// function sade_eded(eded) {
//     if (eded < 2) {
//         return false;
//     }
//     for (let i = 2; i * i <= eded; i++) {
//         if (eded % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// let daxil_olan_eded = parseInt(prompt("Daxil olan ədədi daxil edin:"));

// let sonraki_eded = daxil_olan_eded + 1;

// // Sonraki ədədin sadə olub-olmadığını yoxlamaq
// if (sade_eded(sonraki_eded)) {
//     console.log(`Daxil olan ədəddən sonraki ədəd (${sonraki_eded}) sadədir.`);
// } else {
//     console.log(`Daxil olan ədəddən sonraki ədəd (${sonraki_eded}) mürəkkəbdir.`);
// }




// 5)  n=7


// let a = 7
// for(i = 1 ; i<=a ; i++){
//     console.log(i);

// }


// let height = 7;

// function drawTriangle(height) {
//     for (let i = 1; i <= height; i++) {
//         let row = '';
//         for (let a= 1; a <= i; a++) {
//             row += a + ' ';
//         }
//         console.log(row);
//     }
// }

// drawTriangle(height);










// 7)  mix array verilib icinde stringleri ekrana cixardın


// let array=[1,"Ferid " , 3 , "Samir"]


// for (i=0 ; i<array.length ; i++){
//     if(typeof array[i] ==="string"){
//         console.log(array[i]);
//     }
// }



// 8)  mix(yəni string,null,{} və.s) array verilib  icinde ededleri ekrana cixardın


// let array = [1,7,"Ferid " ,9, "Samir" ,null]

// for (i=0 ; i<array.length ; i++){
//     if(typeof array[i] ==="number"){
//         console.log(array[i]);
//     }
// }



// 9)  bir array və içində bir neçə elementlər var içerisinde sonu 9’olan neçə element var


// var array=  [12349,1,109,8,10,19,77,29,59]


// for (i=0 ; i<array.length ; i++){
//     qaliq =array[i]%10
//     if(qaliq===9){
//         console.log(array[i]);
//     }
// }






// 10)  input ile daxil olunan ededin sade yoksa mürekkep oldugunu tapin



// var a = prompt()







// 12)  input ile daxil olunan ededin reqemlerinnen en boyuyunu tapin


// var a = +prompt()

// var maks = 0

// while(a>0){
//     var qaliq = a%10
//     // console.log(qaliq);
//     if(qaliq>maks){
//         maks=qaliq
//         console.log(maks);

//     }

// }





