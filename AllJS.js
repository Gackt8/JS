function lab1() {
     let x = document.getElementById('input_1').value;


     let result_1 = (x * x - 7 * x + 10) / (x * x - 8 * x + 12);
     if (isNaN(result_1)) {
         alert(x + " неподходит, введите другое число!");
     }
     else {
         document.getElementById('out_1').innerHTML = result_1;
     }
}



function lab2(){
    let first = parseFloat(document.getElementById('input_2_1').value);
    let second = parseFloat(document.getElementById('input_2_2').value);
    let tree = parseFloat(document.getElementById('input_2_3').value);


    if (isNaN(first) || isNaN(second) || isNaN(tree)){
        alert('Не число!') ;
    }
    else {
        function min(first, second, tree) {
            if (first < second && first < tree){
                return first;
            }
            else if (second < first && second < tree){
                return second;
            }
            else {
                return tree;
            }
        }
        function max(first, second, tree) {
            if (first > second && first > tree){
                return first;
            }
            else if (second > first && second > tree){
                return second;
            }
            else {
                return tree;
            }
        }
        document.getElementById("out_2_1").innerHTML = min(first, second, tree);
        document.getElementById("out_2_2").innerHTML = max(first, second, tree);
        document.getElementById('out_2_3').innerHTML = first + second + tree;
    }
}



function lab3() {
    let f = document.getElementById('input_3').value;
    let t = f.toLowerCase();
    let glasnie = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
    let soglasnie = ['б', 'в', 'г','д', 'ж', 'з', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ь'];

    function wordsG(){
        let g = [...t].reduce((a, b) => a + glasnie.includes(b), 0);
        return g ? g : "Net sovpadenyi";
    }

    function wordsS(){
        let s = [...t].reduce((a,b) => a + soglasnie.includes(b),0);
        return s ? s : "Net sovpadenyi";
    }

    document.getElementById('output_3_1').innerHTML = wordsG() ;
    document.getElementById('output_3_2').innerHTML = wordsS() ;
}



function lab4() {
    let d = [...document.getElementById('input_4').value];
    let p = d[4];
    let s = d.reduce((a,b) => a + p.includes(b), 0);


    document.getElementById('output_4').innerHTML = s;
}



function lab5() {
    let c1 = parseFloat(document.getElementById('input_5_1').value);
    let c2 = parseFloat(document.getElementById('input_5_2').value);
    let result = document.querySelector('input[name="radio"]:checked').value;


    if (document.getElementById('r1').checked){
        result = c1 + c2;
        document.getElementById('output_5').innerHTML = result;
    }
    else if (document.getElementById('r2').checked){
        result = c1 - c2;
        document.getElementById('output_5').innerHTML = result;
    }
    else if (document.getElementById('r3').checked){
        result = c1 * c2;
        document.getElementById('output_5').innerHTML = result;
    }
    else if (document.getElementById('r4').checked){
        result = c1 / c2;
        document.getElementById('output_5').innerHTML = result;
    }
}



function lab6() {
    let U = parseFloat(document.getElementById("input_6_1").value);
    let I = parseFloat(document.getElementById("input_6_2").value);

    document.getElementById('output_6').innerHTML = U/I;
}


function lab7() {
    let r = parseFloat(document.getElementById('input_7_1').value);
    let kolvo = parseInt(document.getElementById('input_7_2').value);
    let resultPar;
    let resultPos;
    let a = 1;
    do {
        resultPar = r * kolvo;
        resultPos = 1/r * kolvo;
        a ++;
    }
    while (a <= kolvo)
    document.getElementById('output_7_1').innerHTML = resultPar;
    document.getElementById('output_7_2').innerHTML = resultPos;
}



function lab8() {
    let input = document.getElementById('inp_8').value;

    let words = input.split(' ');

for (let w in words){
    words[w] = words[w].search('а') != -1 ? 'о' : words[w]
}
document.getElementById('out_8').innerHTML = words.join(' ');
}


function lab9() {
    let Data = new Date();
    let Hour = Data.getHours();
    let Minutes = Data.getMinutes();
    let time = Hour + Minutes / 60;
    let arr=[];

    switch (true) {
        case (Hour >= 7 && Hour < 8): arr.push('Завтрак'); break;
        case (Hour >= 13 && Hour < 14): arr.push('Обед'); break;
        case (Hour >= 19 && Hour < 20): arr.push('Ужин'); break;
        case (Hour >= 9 && Hour < 18): arr.push('Работа'); break;
        case (Hour >= 18 && Hour < 23): arr.push('Отдых'); break;
        case (Hour >= 23 && Hour < 6.5): arr.push('Сон'); break;
    }

    document.getElementById('out_9').innerHTML = ('Текущее время '+Hour+': '+Minutes+' : '+arr.join(','));
}


function lab10() {
    let a = document.getElementById('inp_10_1').value;
    let b = document.getElementById('inp_10_2').value;

    nextPrime:
        for (let i = a; i <= b; i++) {
            for (let j = a; j < i; j++) {
                if (i % j == 0) continue nextPrime;
            }
            document.getElementById('out_10').innerHTML = i;
        }
}


function lab11() {
let word_max_len = 0;
let word_min_len = 99;
let word_all_len = 0;

let text = document.getElementById('inp_11').value;

text = text.replace(/^[\s\.,\-:\(\)]+/, "");
text = text.replace(/[\s\.,\-:\(\)]+$/, "");

words_list = text.split(/[\s\.,\-:\(\)]+/);
words_amount = words_list.length;

for(let i = 0; i < words_list.length; i++) {
    let current_word_len = words_list[i].length;
    if( current_word_len > word_max_len ) {
        word_max_len = current_word_len;
    }
    if( current_word_len < word_min_len ) {
        word_min_len = current_word_len;
    }
    word_all_len += current_word_len;
}

let words_mean_len = parseInt(word_all_len / words_amount);
                document.getElementById('out_11_1').innerHTML = + words_amount + "\n";
                document.getElementById('out_11_2').innerHTML = + word_max_len + "\n";
                document.getElementById('out_11_3').innerHTML = + word_min_len + "\n";
                document.getElementById('out_11_4').innerHTML = + words_mean_len;
}

function lab12() {
    let s = document.getElementById('inp_12').value;

    function isPalindrome(s){
        return s == s.split("").reverse().join("") ? true : false;
    }

if (isPalindrome(s) == true){
    document.getElementById('out_12').innerHTML = 'Строка является палиндромом';
} else {
    document.getElementById('out_12').innerHTML = 'Строка не является палиндромом';
}
}


function lab13() {
    let email = document.getElementById('inp_13').value;

let flag = 1;

if (/@/.test(email) != true){
    document.getElementById('out_13').innerHTML = 'Ожидается символ "@"';
    flag = 0
}
if (email.length < 6){
   document.getElementById('out_13').innerHTML = 'Требуется ввести больше символов';
    flag = 0
}
if (/.@/.test(email) != true){
    document.getElementById('out_13').innerHTML = 'Перед символом "@" должен быть как минимум 1 символ';
    flag = 0
}
if (/@*\./.test(email) != true){
    document.getElementById('out_13').innerHTML = 'После символа "@" должна быть как минимум 1 точка';
    flag = 0
}
if (/\...$/.test(email) != true){
    document.getElementById('out_13').innerHTML = 'Справа от последней точки должно быть как минимум 2 символа';
    flag = 0
}
if (/@\S+[.]/.test(email) != true){
    document.getElementById('out_13').innerHTML = 'Между символом "@" и следующей за ним точкой должен быть как минимум 1 символ';
    flag = 0
}
if (flag == 1){
   document.getElementById('out_13').innerHTML = 'Email успешно зарегестрирован!'
}
}


function lab14() {
let x = document.getElementById('inp_14_1').value;
let y = document.getElementById('inp_14_2').value;
let r = document.getElementById('inp_14_3').value;

h = Math.sqrt(x*x + y*y);

if(h>r) document.getElementById('out_14').innerHTML = 'Точка не принадлежит.';
else document.getElementById('out_14').innerHTML = 'Точка принадлежит.';
}


function lab15() {
    let output = [];

for (let i = 0.1; i <= 0.8; i += 0.05) {
    let o = 4 * Math.sin(i) - 0.5 * Math.sin(i);
    output.push(o.toFixed(3))
}
document.getElementById('out_15').innerHTML = (output.join(', '));
}


function lab16() {
    let v0 = parseFloat(document.getElementById('inp_16_1').value);
    let t = parseFloat(document.getElementById('inp_16_2').value);
    let g = 9.8;

    A = Math.asin((g*t)/(2*v0));

    document.getElementById('out_16').innerHTML = A;

}


function lab17() {
    let a = parseFloat(document.getElementById('inp_17_1').value);
    let b = parseFloat(document.getElementById('inp_17_2').value);
    let c = parseFloat(document.getElementById('inp_17_3').value);

    let angleCAB = parseFloat(document.getElementById('inp_17_4').value);
    let angleABC = parseFloat(document.getElementById('inp_17_5').value);
    let angleBCA = parseFloat(document.getElementById('inp_17_6').value);

if((a+b>c) && (a+c>b) && (b+c>a)) {

    let n = parseFloat(document.getElementById('inp_17_7').value);

    switch(n){
        case 1: p = (a+b+c)/2;
                S = Math.sqrt(p*(p-a)*(p-b)*(p-c));
            document.getElementById('out_17').innerHTML = S; break;

        case 2: S1 = ((a*a)/2)*((Math.sin(angleABC)*Math.sin(angleBCA))/Math.sin(angleCAB));
                S2 = ((b*b)/2)*((Math.sin(angleCAB)*Math.sin(angleBCA))/Math.sin(angleABC));
                S3 = ((c*c)/2)*((Math.sin(angleCAB)*Math.sin(angleABC))/Math.sin(angleBCA));

                document.getElementById('out_17').innerHTML =  S1, S2, S3; break;

        case 3: S11 = ((a*b)/2)*Math.sin(angleBCA);
                S21 = ((b*c)/2)*Math.sin(angleCAB);
                S31 = ((c*a)/2)*Math.sin(angleABC);

             document.getElementById('out_17').innerHTML = S11, S21, S31; break;

        case 4: S12 = ((a*b)/2)*Math.sin(angleCAB);
            S22 = ((b*c)/2)*Math.sin(angleBCA);
            S32 = ((c*a)/2)*Math.sin(angleBCA);

            document.getElementById('out_17').innerHTML = S12, S22, S32; break;

        case 5: p = (a+b+c)/2;
                h1 = (2/a)*Math.sqrt(p*(p-a)*(p-b)*(p-c));
                h2 = (2/b)*Math.sqrt(p*(p-a)*(p-b)*(p-c));
                h3 = (2/c)*Math.sqrt(p*(p-a)*(p-b)*(p-c));
            S13 = ((a*h1)/2);
            S23 = ((b*h2)/2);
            S33 = ((c*h3)/2);

             document.getElementById('out_17').innerHTML = S13, S23, S33; break;

        default: break;

    }
}
else  document.getElementById('out_17').innerHTML = "Треугольник не существует";

}





function lab18() {
    let n = document.getElementById('inp_18').value;
    let fibonacci = [0, 1];

for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
document.getElementById('out_18').innerHTML = fibonacci.slice(0,n);
}


function lab19() {
    let input = document.getElementById('inp_19').value; ('Введите строку:', 'Это простая строка');
    let output = [];

for (let i = 0; i < input.length; i++) {
    if (output.includes(input[i]) != true){
        output.push(input[i])
    }
}
document.getElementById('out_19').innerHTML = output.join('');
}


function lab20() {
    let a = document.getElementById('inp_20').value;

    let output = [];
    let sum = 0;

for (let i = 0; i < a; i++) {
    let r = Math.random().toFixed(1)*10;
    output.push(r);
    sum += r
}

document.getElementById('out_20_1').innerHTML = output;
document.getElementById('out_20_1').innerHTML = sum;
}