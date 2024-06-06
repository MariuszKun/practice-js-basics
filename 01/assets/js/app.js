const a = '4.2';
const b = 9;

console.log(a, b);

console.log(a + ' to ' + typeof a);
console.log(b + ' to ' + typeof b);

const sum = Number(a) + b;
const sub1 = Number(a) - b;
const sub2 = b - Number(a);
const multi = (Number(a) * b);
const division1 = Number(a) / b;
const division2 = b / Number(a);

console.log('suma ' + a + ' + ' + b + ' to ' + sum);
console.log('odejmowanie ' + a + ' - ' + b + ' to ' + sub1); 
console.log('odejmowanie ' + b + ' -' + a + ' to ' + sub2);
console.log('mnożenie  ' + a + ' * ' + b + ' to ' + multi.toFixed(2));
console.log('dzielenie ' + a + ' / ' + b + ' to ' + division1);
console.log('dzielenie ' + b + ' / ' + a + ' to ' + division2);

const arr = [sum, sub1, sub2, multi, division1, division2];

arr.forEach(function(num) {
    if (num > 20) {
        console.log(num + ' jest większe od 20')
    } else {
        console.log(num + ' jest mniejsze lub równe') 
    }
}) 
