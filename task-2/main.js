const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Riyazi əməliyyatları tətbiq etmək üçün parseInt() metodundan istifadə edərək Number type-a çevrilməlidir.
    */
    let n = parseInt(result.input); // 9
    //let n = 132
    let a = n%10
    console.log(a);
    let b= parseInt(n/10)%10
    console.log(b);
    let c = parseInt(n/100)
    console.log(c);
    let sum = 0
    
    
    if (a>b) {
        sum =a*100
    }
    console.log 
    
    
    
    
    
    if (a>b && b>c) {
         sum = (a*100) +(b*10) +c
    } else if (a>c && c>b) {
         sum = (a*100) +(c*10) +b 
    }else if (b>a && a>c) {
         sum = (b*100) +(a*10) +c
    }else if (b>c && c>b) {
         sum = (b*100) +(c*10) +b 
    }else if (c>a && a>b) {
         sum = (c*100) +(a*10) +b 
    }else if (c>b && b>a) {
         sum = (c*100) +(b*10) +a }
    
        console.log(sum**2);
});
