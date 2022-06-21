const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Riyazi əməliyyatları tətbiq etmək üçün parseInt() metodundan istifadə edərək Number type-a çevrilməlidir.
    */
    let num = parseInt(result.input); // 9
    let n1 = parseInt(num/10000)
console.log('n1: ', n1);

let n2 = parseInt(num/1000)%10
console.log('n2: ', n2);
let n3 = parseInt(num/100)%10
console.log('n3: ', n3);
let n4 = parseInt(num/10)%10
console.log('n4: ', n4);
let n5 = num%10
console.log('n5: ', n5);


if (n1==n2 || n1==n3 || n1==n4 || n1==n5 || 
    n2==n3 || n2==n4 ||  n2==n5 || 
    n3==n4 || n3==n5 || 
    n4==n5) {
        console.log('YES')
    } else {console.log('NO')};
});
