let i, j, n, result, even;
let sum = 0;
//1
document.write('1) ');

for(i = 10; i <= 20; i++){
    document.write(i + ', ');
}

document.write('</br></br>');

//2
document.write('2) ');

for(i = 10; i <= 20; i++){
    document.write(i*i + ', ');
}

document.write('</br></br>');

//3
document.write('3) '+'</br>');

for(i = 1; i <= 9; i++){
    document.write('7 * '+ i + ' = ' + 7*i + '</br>');
}

document.write('</br>');

//4
document.write('4) ');

for(i = 1; i <= 15; i++){
    sum += i;
}
document.write('Суму = ' + sum);
document.write('</br></br>');

//5
document.write('5) ');
result = 1;

for(i = 15; i <= 35; i++){
    result *= i;
}

document.write('Добуток = ' + result);
document.write('</br></br>');

//6
document.write('6) ');
n = 500;
sum = 0;
result = 0;

for(i = 1; i <= n; i++){
    sum +=i;
    result = sum / n;
}

document.write('Середнє арифметичне = ' + result);
document.write('</br></br>');

//7
document.write('7) ');
add = 0;

for(i = 30; i <= 80; i++) {
    if (i % 2 == 0) {
        add +=i;
    }
}

document.write('Сума парних чисел = ' + add);
document.write('</br></br>');

//8
document.write('8) ');
for(i = 100; i <= 200; i++) {
    if (i % 3 == 0) {
        document.write(i +', ');
    }
}
document.write('</br></br>');

//9
document.write('9) ');
let num = +prompt('введіть натуральне число','10')
document.write('Дільники числа ' + num + ': ');
let arr = [];
n = 0;
sum = 0;

for(i = 0; i <= num; i++) {
    if (num % i == 0) {
        document.write(i +', ');
        //10
        if (i % 2 == 0){
            n++;
            arr.push(i);
            //11
            sum += i;
        }
    }
}

document.write('</br></br>');
document.write('10) Кількість парних дільників у числа ' + num + ' = ' + n +';');

if (n !== 0){
    document.write(' це - ' + arr + ';');
} else {
    document.write(' Парніх дільників немає.');
}

document.write('</br></br>');
document.write('11) Суму парних дільників числа ' + num + ' = ' + sum);
document.write('</br></br>');

//12
document.write('12)');

for(i = 1; i <= 10; i++) {
    for(j = 1; j <=10; j++){
        document.write(`${i} * ${j} = ${i*j} </br>`);
    }
    document.write('</br>');
}

//13
document.write('13)');

for(i = 20; i <= 30; i = i + 0.5) {
    document.write(+ i + ' ');
}

document.write('</br></br>');

//14
document.write('14)');
const grn = 27;

for(i = 10; i <= 100; i = i + 10){
    document.write(i + '$ = ' + i*grn + ' грн </br>');
}

document.write('</br>');

//15 
let num2 = +prompt('Введіть ціле число', '50');
document.write('15) Цілі числа, квадрат яких не перевищує ' + num2 +': ');

for(i = 1;i <= 100; i++){
    if(i * i < num2) {
        document.write(i + ' ');
    }
}

document.write('</br></br>');

16
document.write('16)');
result = 0;

for(i = 2; i < num2; i++) {
    if (num2 % i == 0) {
        result = false;
    }
}

if (result === false || num2 <= 1){
    document.write('Число ' + num2 + ' не простое');
} else {
    document.write('Число ' + num2 + ' простое');
}

document.write('</br></br>');

//17
document.write('17)');
result = 0;

if (num2 % 3 == 0) {
    document.write('Число ' + num2 + ' можна одержати шляхом зведення числа 3 у деякий ступінь');
} else { document.write('Число ' + num2 + ' не можна одержати шляхом зведення числа 3 у деякий ступінь');
}
