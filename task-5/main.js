const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Number type-a çevirmək üçün parseInt() metodundan istifadə edirik.
    Vergüllə daxil edilmiş sətri iki fərqli ədədə bölmək üçün split metodundan istifadə edirik.
    */
    var input = result.input; // "12,5"
    var numbers = input.split(','); // ['12', '5']
    let a = parseInt(numbers[0]); // Ilk daxil olunmuş ədədi alırıq. Nümunə - 12 
  let b = parseInt(numbers[1]); // İkinci daxil olunmuş ədədi alırıq. Nümunə - 5
    // let a = -3
    // let b = 5
    let res = 0
    for (a; a<=b; a++) {
    
    if (a%2!=0){
        res = res + a
    }
    
    }
    console.log(res);
});
