// for-1

// let a = 1;
// let b = 10;

// for (let i = a; i <= b; i++) {
//     console.log(i);
// }

// console.log("Barcha sonlar soni: " + ((b - a + 1) * (a + b) / 2));




// for-2

// let a = 1;
// let b = 10;

// for (let i = b - 1; i > a; i--) {
//     console.log(i);
// }

// console.log("Barcha sonlar soni: " + ((b - a - 1) * (a + b) / 2));



// for-3

// let konfetNarxi = 15000; 

// let narx1Kg = konfetNarxi;
// console.log("1 kg konfet narxi: " + narx1Kg + " so'm");

// let narx2Kg = narx1Kg * 2;
// console.log("2 kg konfet narxi: " + narx2Kg + " so'm");

// let narx10Kg = narx1Kg * 10;
// console.log("10 kg konfet narxi: " + narx10Kg + " so'm");




// for-5

// let a = 3;
// let b = 8;

// let yigindi = 0;

// for (let i = a; i <= b; i++) {
//     yigindi += i;
// }

// console.log("a dan b gacha bo'lgan barcha butun sonlar yig'indisi: " + yigindi);




// for-6

// let a = 3;
// let b = 8;

// let kopaytma = 1;

// for (let i = a; i <= b; i++) {
//     kopaytma *= i;
    
// }

// console.log("a dan b gacha bo'lgan barcha butun sonlar kopaytmasi: " + kopaytma);




// for-7

// let a = 2;
// let b = 5;

// let yigindi = 0;

// for (let i = a; i <= b; i++) {
//     yigindi += i * i;
// }

// console.log("a dan b gacha bo'lgan barcha butun sonlarining kvadratlarining yig'indisi: " + yigindi);




// for-8

// let n = 5; 

// let yigindi = 0;

// for (let i = 1; i <= n; i++) {
//     yigindi += 1 / i;
// }

// console.log("Yig'indisi (S=1+1/2+1/3+...+1/n): " + yigindi);





// for-9

// let n = 5; 

// let kopaytma = 1;

// for (let i = 1.1; i <= n; i += 0.1) {
//     kopaytma *= i;
// }

// console.log("Ko'paytma (S=1.1*1.2*1.3*...*n): " + kopaytma);




// for-10

// let n = 4; 

// let kvadrat = 0;

// for (let i = 1; i <= 2 * n - 1; i += 2) {
//     kvadrat += i;
// }

// console.log("Kvadrat (n^2=1+3+5+...+(2*n-1)): " + kvadrat);





// for-11

// let n = 3; 
// let a = 2; 

// let daraja = 1;

// for (let i = 1; i <= n; i++) {
//     daraja *= a;
// }

// console.log(a + "**" + n + " = " + daraja);




// for-12

// let n = 4; 
// let a = 3; 

// for (let i = 1; i <= n; i++) {
//     let daraja = 1;

//     for (let j = 1; j <= i; j++) {
//         daraja *= a;
//     }

//     console.log(a + "**" + i + " = " + daraja);
// }





// for-13

// let n = 3;
// let a = 2; 

// let yigindi = 1;

// for (let i = 1; i <= n; i++) {
//     let daraja = 1;

//     for (let j = 1; j <= i; j++) {
//         daraja *= a;
//     }

//     yigindi += daraja;
//     console.log(a + "**" + i + " = " + daraja);
// }

// console.log("Yig'indi (S = 1 + a^1 + a^2 + ... + a^n): " + yigindi);





// for-14

// let n = 5; 

// let yigindi = 0;
// let faktorial = 1;

// for (let i = 1; i <= n; i++) {
//     faktorial *= i;
//     yigindi += faktorial;
//     console.log(i + "! = " + faktorial);
// }

// console.log("Yig'indi (S = 1! + 2! + 3! + ... + n!): " + yigindi);




// for-15

// let N = 4; 
// let K = 3; 

// let yigindi = 0;

// for (let i = 1; i <= N; i++) {
//     yigindi += Math.pow(i, K);
//     console.log(i + "**" + K + " = " + Math.pow(i, K));
// }

// console.log("Yig'indi (S = 1^K + 2^K + ... + N^K): " + yigindi);





// for-16

// let N = 3; 

// let yigindi = 0;

// for (let i = 1; i <= N; i++) {
//     yigindi += Math.pow(i, i);
//     console.log(i + "**" + i + " = " + Math.pow(i, i));
// }

// console.log("Yig'indi (S = 1^1 + 2^2 + … + N^N): " + yigindi);






// for-17

// let A = 3; 
// let B = 7; 

// for (let i = A; i <= B; i++) {
//     for (let j = 1; j <= i - A + 1; j++) {
//         console.log(i);
//     }
// }





// for-18

// let son = 12; 

// let boluvchilar = [];
// let yigindi = 0;

// for (let i = 1; i <= son; i++) {
//     if (son % i === 0) {
//         boluvchilar.push(i);
//         yigindi += i;
//     }
// }

// console.log("Sonning bo'luvchilari: " + boluvchilar.join(', '));
// console.log("Bo'luvchilarning yig'indisi: " + yigindi);





// for-19

// let n = 13; 

// let tubSon = true;

// if (n > 1) {
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             tubSon = false;
//             break;
//         }
//     }
// } else {
//     tubSon = false;
// }

// if (tubSon) {
//     console.log(n + " tub son");
// } else {
//     console.log(n + " tub emas son");
// }




// for-20

// let N = 5; 

// for (let i = 1; i <= N; i++) {
//     let satr = "";
//     for (let j = 1; j <= i; j++) {
//         satr += j + " ";
//     }
//     console.log(satr);
// }




// while-1

// let A = 10; 
// let B = 3;  

// let boShQisim = "";

// while (A > B) {
//     boShQisim += " ";
//     A--;
// }

// console.log("A kesmaning bo'sh qismi: '" + boShQisim + "'");




// while-2

// let A = 15; 
// let B = 3;  

// let joylashtirishMumkinligi = 0;

// while (A >= B) {
//     A -= B;
//     joylashtirishMumkinligi++;
// }

// console.log("A kesmada B kesmadan " + joylashtirishMumkinligi + " marta joylashtirish mumkin");





// while-3


// let n = 27; 

// while (n >= 3) {
//     n /= 3;
// }

// if (n === 1) {
//     console.log("3 - ning darajasi");
// } else {
//     console.log("3 - ning darajasi emas");
// }




// while-4

// let n = 25; 
// let m = 4;  

// let butunBolinish = Math.floor(n / m);
// let qoldiq = n % m;

// console.log(n + " ni " + m + " ga bo'lib butun qismi: " + butunBolinish);
// console.log(n + " ni " + m + " ga bo'lib qoldiq qismi: " + qoldiq);




// for-5

// let n = 54321; 

// while (n > 0) {
//     let qoldiq = n % 10;

//     console.log(qoldiq);

//     n = Math.floor(n / 10);
// }




// while-6

// let n = 72345; 

// let borYokligi = false;

// while (n > 0) {
//     let qoldiq = n % 10;
    
//     if (qoldiq === 2) {
//         borYokligi = true;
//         break;
//     }
    
//     n = Math.floor(n / 10);
// }

// if (borYokligi) {
//     console.log("Berilgan son ichida 2 raqami bor");
// } else {
//     console.log("Berilgan son ichida 2 raqami yo'q");
// }




// while-7

// let n = 72345; 

// let borYokligi = false;

// while (n > 0) {
//     let qoldiq = n % 10;
    
//     if (qoldiq === 2) {
//         borYokligi = true;
//         break; 
//     }
    
//     n = Math.floor(n / 10);
// }

// if (borYokligi) {
//     console.log("Berilgan son ichida 2 raqami bor");
// } else {
//     console.log("Berilgan son ichida 2 raqami yo'q");
// }






// while-8

// let n = 72345; n

// let borYokligi = false;

// while (n > 0) {
//     let qoldiq = n % 10;
    
//     if (qoldiq % 2 !== 0) {
//         borYokligi = true;
//         break; 
//     }
    
//     n = Math.floor(n / 10);
// }

// if (borYokligi) {
//     console.log("Berilgan son ichida toq raqam bor");
// } else {
//     console.log("Berilgan son ichida toq raqam yo'q");
// }






// while-9

// function isPalindromicNumber(n) {
//     let originalNumber = n;
//     let reversedNumber = 0;

//     while (n > 0) {
//         var lastDigit = n % 10;
//         reversedNumber = reversedNumber * 10 + lastDigit;
//         n = Math.floor(n / 10);
//     }

//     return originalNumber === reversedNumber;
// }

// let testNumber1 = 1345431;
// let testNumber2 = 45788754;

// console.log(isPalindromicNumber(testNumber1)); 
// console.log(isPalindromicNumber(testNumber2)); 





// while-10

function isPrimeNumber(n) {
    if (n <= 1) {
        return false; 
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; 
        }
    }

    return true; 
}

let testNumber = 13; 

if (isPrimeNumber(testNumber)) {
    console.log(testNumber + " soni tub son");
} else {
    console.log(testNumber + " soni tub emas");
}

