const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Riyazi əməliyyatları tətbiq etmək üçün parseInt() metodundan istifadə edərək Number type-a çevrilməlidir.
    */
    let n = parseInt(result.input); // 9
    
  for (let i= 0;i<n;i++) {
    
    if (n%i==0) {
        if(i%2!=0) {
            console.log(i)
        }
    
    }
    
    };
});
