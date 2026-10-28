// 21-masala
// function oyoqlar(tovuq, qoy, sigir) {
//     return (tovuq * 2) + (qoy * 4) + (sigir * 4);
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(oyoqlar(2, 3, 5));   // 36  (2*2 + 3*4 + 5*4 = 4 + 12 + 20 = 36)
// console.log(oyoqlar(1, 2, 3));   // 22  (1*2 + 2*4 + 3*4 = 2 + 8 + 12 = 22)
// console.log(oyoqlar(5, 2, 8));   // 50  (5*2 + 2*4 + 8*4 = 10 + 8 + 32 = 50)
22-masala
// function and(a, b) {
//     return a && b;
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(and(true, false)); // false
// console.log(and(true, true));  // true
// console.log(and(false, true)); // false
// console.log(and(false, false));// false
// 23-masala
// function tengMi(x, y) {
//     return x === y;
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(tengMi(4, 8));     // false
// console.log(tengMi(2, 2));     // true
// console.log(tengMi(2, "2"));   // false (qiymat 2, lekin biri raqam, ikkinchisi string)
// 24-masala
// function tengMi(x, y) {
//     return x === y;
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(tengMi(4, 8));     // false
// console.log(tengMi(2, 2));     // true
// console.log(tengMi(2, "2"));   // false (qiymat 2, lekin biri raqam, ikkinchisi string)
// 25-masala
// function sekundlar(soat, minut) {
//     return (soat * 3600) + (minut * 60);
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(sekundlar(1, 3));  // 3780 (1 * 3600 + 3 * 60 = 3600 + 180 = 3780)
// console.log(sekundlar(2, 0));  // 7200 (2 * 3600 + 0 * 60 = 7200)
// console.log(sekundlar(0, 0));  // 0
// 26-masala
// function fun(son) {
//     return son === 7;
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(fun(4));  // false
// console.log(fun(9));  // false
// console.log(fun(7));  // true 
// 27-masala
// function checkEquality(x, y) {
//     return x === y;
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(checkEquality(1, true));     // false (raqam va boolean)
// console.log(checkEquality(0, "0"));      // false (raqam va string)
// console.log(checkEquality(1, 1));        // true  (qiymat ham, turi ham bir xil)
// 28-masala
// function booleanToString(bool) {
//     return String(bool);
//     // yoki: return bool.toString();
//     // yoki: return "" + bool;
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(booleanToString(true));  // "true"
// console.log(booleanToString(false)); // "false"
// 29-masala
// const arrowFunc = qiymat => qiymat;

// // Natijani konsolga chiqarib tekshirish:
// console.log(arrowFunc(3));      // 3
// console.log(arrowFunc("3"));    // "3"
// console.log(arrowFunc(true));   // true
// 30-masala
// function frameSoni(minut, frame) {
//     // 1 minutda 60 sekund bor, shuning uchun minutni 60 ga ko'paytiramiz
//     // va 1 sekunddagi framelar soniga ko'paytiramiz
//     return minut * 60 * frame;
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(frameSoni(1, 1));    // 60     (1 * 60 * 1 = 60)
// console.log(frameSoni(10, 1));   // 600    (10 * 60 * 1 = 600)
// console.log(frameSoni(10, 25));  // 15000  (10 * 60 * 25 = 15000)
// 31-masala
// function calc(str) {
//     // eval() funksiyasi matn ko'rinishidagi matematik ifodani hisoblab beradi
//     return eval(str);
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(calc("23+4"));       // 27
// console.log(calc("45-15"));      // 30
// console.log(calc("13+2-5*2"));   // 5
// console.log(calc("49/7*2-3"));   // 11
// 32-masala
// function teng10(son1, son2) {
//     return son1 === 10 || son2 === 10 || (son1 + son2) === 10;
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(teng10(9, 10));  // true (chunki ikkinchi son 10 ga teng)
// console.log(teng10(9, 9));   // false (10 ga teng emas va yig'indisi 18)
// console.log(teng10(1, 9));   // true (chunki yig'indisi 1 + 9 = 10)
// 33-masala
// function litrMasofa(km) {
//     let kerakliBenzen = km * 10;
//     // Agar hisoblangan benzin 100 litrdan kam bo'lsa, 100 qaytaramiz
//     return kerakliBenzen < 100 ? 100 : kerakliBenzen;
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(litrMasofa(15));    // 150  (15 * 10 = 150, 100 dan ko'p)
// console.log(litrMasofa(23.5));  // 235  (23.5 * 10 = 235)
// console.log(litrMasofa(3));     // 100  (3 * 10 = 30, lekin minimum 100 litr bo'lishi kerak)
// 34-masala
// function fun(a, b) {
//     return Math.max(a, b);
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(fun(3, 7));       // 7
// console.log(fun(-1, 0));      // 0
// console.log(fun(1000, 400));  // 1000
// 35-masala
// function arr(x, y) {
//     return [x, y];
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(arr(1, 2));            // [1, 2]
// console.log(arr(51, 21));          // [51, 21]
// console.log(arr(512124, 215));     // [512124, 215]
// 36-masala
// function tengStrings(str1, str2) {
//     return str1.length === str2.length;
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(tengStrings("AB", "CD"));       // true  (har ikkalasida 2 tadan belgi bor)
// console.log(tengStrings("ABC", "DE"));      // false (3 va 2 ta belgi)
// console.log(tengStrings("hello", "edabit")); // false (5 va 6 ta belgi)
// 37-masala
// function boshStr(str) {
//     return str === "";
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(boshStr(""));     // true  (chunki matn umuman bo'sh)
// console.log(boshStr(" "));    // false (chunki ichida bitta bo'sh joy - probel bor)
// console.log(boshStr("a"));    // false (chunki harf qatnashgan)
// 38-masala
// function bolinsin5(son) {
//     return son % 5 === 0;
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(bolinsin5(5));     // true  (5 / 5 = 1, qoldiq 0)
// console.log(bolinsin5(-55));   // true  (-55 / 5 = -11, qoldiq 0)
// console.log(bolinsin5(37));    // false (37 / 5 = 7, qoldiq 2 qoladi)
// 39-masala
// function bolinsin100(son) {
//     return son % 100 === 0;
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(bolinsin100(1));     // false (1 / 100 = 0.01, qoldiq qoladi)
// console.log(bolinsin100(1000));  // true  (1000 / 100 = 10, qoldiq 0)
// console.log(bolinsin100(100));   // true  (100 / 100 = 1, qoldiq 0)
// 40-masala
// function uzunlik(str) {
//     // Agar matn bo'sh bo'lsa (ya'ni hech qanday belgi qolmasa), 0 qaytarib to'xtaydi (rekursiyaning bazis sharti)
//     if (str === "") {
//         return 0;
//     }
//     // Har bir qadamda 1 ta belgini olib tashlab, qolgan qismini yana funksiyaga beramiz va ustiga 1 qo'shamiz
//     return 1 + uzunlik(str.slice(1));
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(uzunlik("apple"));     // 5
// console.log(uzunlik("make"));      // 4
// console.log(uzunlik("a"));         // 1
// console.log(uzunlik(""));          // 0
// console.log(uzunlik(" "));         // 1 (bitta probel - belgi hisoblanadi)