{
    /*нахождение минимума среди двух чисел*/
let x, y, z, min;
x = parseInt(prompt("Введите первое число"));
y = parseInt(prompt("Введите второе число"));
z = parseInt(prompt("Введите третье число"));
min = x;
if(y < min){
    min = y;
}
if(z < min){
    min = z;
}

alert("min = " + min)
}

{
    /*вывести нечетные числа от 0 до 10*/ 
    for(let i = 1; i < 10; i = i + 2){
        console.log(i);
    }
}
{
    /*найти кол-во нечетных чисел последовательности. Последовательность чисел вводиться с клавиатуры и заканчивается вводом 0*/
    let count = 0, x;
    x = parseInt(prompt("Введите число"));
    while(x != 0){
        if(x % 2 != 0){
            count++;
        }
        x = parseInt(prompt("Введите число"));
    }

    alert("Кол-во нечетных чисел " + count)

}
{
    /*найти кол-во нечетных цифр в натуральном числе*/
    let count = 0, d, x;
    x = parseInt(prompt("Введите натуральное число"));
    while(x != 0){
        d = x % 10;
        if(d % 2 != 0){
            count++;
        }
        x = Math.floor(x / 10);
    }

    alert("кол-во нечетных цифр "+ count);
}
{
    /*Дано двузначное число. Определить:
а) кратна ли трем сумма его цифр;
б) кратна ли сумма его цифр числу а*/
    let number = parseInt(prompt("Введите двухзначное число"));
    let a = parseInt(prompt("Введите число а"))
    if(number >=10 && number <= 99){
        let sum = 0;
        let temp = number;
        while(temp > 0){
            let digit = temp % 10;
            sum = sum + digit;
            temp = Math.floor(temp / 10);
        }

        console.log("Сумма цифр " + sum);
        if(sum % 3 === 0){
            console.log("Сумма цифр кратна 3");
        }
        else{
            console.log("Сумма цифр не кратна 3");
        }

        if(sum % a === 0){
            console.log("Сумма цифр кратна а");
        }
        else{
            console.log("Сумма цифр не кратна а");
        }
        
    }
    else{
        console.log("Вы ввели не двухзначное число");
    }

}
{
    /*Определить, является ли треугольник со сторонами a, b, c равносторонним*/
    let a = parseFloat(prompt("Введите сторну а"));
    let b = parseFloat(prompt("Введите сторну b"));
    let c = parseFloat(prompt("Введите сторну c"));
    if(a + b > c && a + c > b && b + c > a){
        if(a === b && b === c){
            console.log("Треугольник равносторонний")
        }else{
            console.log("Треугольник не равносторонний")
        }
    }else{
        console.log("Треугольник c такими сторонами не существует")
    }
}
{
    /*Найти:
а) сумму всех целых чисел от 100 до 500;
б) сумму всех целых чисел от a до 500 (значение a вводится с клавиатуры;
a<=500);
в) сумму всех целых чисел от –10 до b (значение b вводится с клавиатуры;
b >= –10);
г) сумму всех целых чисел от a до b (значения a и b вводятся с клавиатуры;
b >= a).
*/
    let sumA = 0;
    for(let i = 100; i <= 500; i++){
        sumA += i;
    }
    console.log("Сумма от 100 до 500: ", sumA);
    let a = parseInt(prompt("Введите число a (a <= 500)"));
    let sumB = 0;
    if(a <= 500){
        for(let i = a; i <= 300; i++){
            sumB += i;
        }
        console.log("Сумма от а до 300 ", sumB);
    }else{
        console.log("Ошибка а должно быть <= 500");
    }
    let b = parseInt(prompt("Введите число b(b >= -10)"));
    let sumC = 0;
    if(b >= -10){
        for(let i = -10; i <= b; i++){
            sumC += i;
        }
        console.log("Сумма от -10 до b", sumC);
    }else{
        console.log("Ошибка b должно быть >= -10");
    }
    let a2 = parseInt(prompt("Введите число а"));
    let b2 = parseInt(prompt("Введите число b (b >= a)"));
    let sumD = 0;
    if(b2 >= a2){
        for(let i = a2; i <= b2; i++){
            sumD += i;
        }
        console.log("Сумма от a до b ", sumD);
    }else{
        console.log("Ошибка b должно быть >= a");
    }

}
{
    /*Даны натуральное число n и вещественные числа
1 2 , , ..., . n a a a
Определить
сумму квадратов вещественных чисел*/
    const n = parseInt(prompt("Сколько чисел вы хотите ввести?"));
    let sumOfSquares = 0;
    for(let i = 1; i <= n; i++){
        const num = parseFloat(prompt("Введите число №" + i));
        sumOfSquares += num * num;
    }
    alert("Сумма квадратов " + sumOfSquares);
}
{
    /*Дано натуральное число:
    в) Верно ли, что количество его цифр есть четное число?
г) Верно ли, что это число четырехзначное? Составное условие и вложенный
условный оператор не использовать.*/
    const number = parseInt(prompt("Введите натуральное число"));
    let numOfDigits = 0;
    let tempNumber = number;
    while(tempNumber > 0){
        tempNumber = Math.floor(tempNumber / 10);
        numOfDigits++;
    }
    const isEvenDigits = numOfDigits % 2 === 0;
    const isFourDIGITS = number >= 1000 && number <= 9999;
    alert("Количество цифр четное " + isEvenDigits);
    alert("число четырехзначное " + isFourDIGITS);
}