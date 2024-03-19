// Банкоматы позволяют вводить 4 или 6-значные PIN-коды, причем PIN-коды не могут содержать ничего, кроме ровно 4 или 6 цифр

// Если функции передана корректная строка PIN-кода, возвращается true, в противном случае - false

// function valiDate(str) {
//   let strFirst = str.length;
//   if (str.length === 6 || str.length === 4) {
//     console.log("Привет");
//     return true;
//   } else {
//     console.log("Пока");
//   }
//   return false;
// }

// console.log(valiDate("1234"));
// console.log(valiDate("12345"));
// console.log(valiDate("a234"));

// Сделайте функцию, которая получает возраст и возвращает то, что они пьют.
// function peopleWithAgeDrink(age) {
//   let old = age;
//   if (old >= 20) {
//     console.log("Пиво");
//     console.log("Виски");
//   } else {
//     console.log("coк");
//   }
// }
// peopleWithAgeDrink(20);
// peopleWithAgeDrink(40);
// peopleWithAgeDrink(7);

//

// Напишите функцию, которая принимает строку из одного или нескольких слов и возвращает ту же строку, но с перевернутыми буквами в словах, которые состоят из пяти или более букв. Передаваемые строки будут состоять только из букв и пробелов;

// function spinWords(string) {
//   const strings = string.split(" ");
//   return strings
//     .map((word) => {
//       if (word.length >= 5) {
//         return word.split("").reverse().join("");
//       }
//       return word;
//     })
//     .join(" ");
// }
// console.log(spinWords("Hey fellow warriors"));
// console.log(spinWords("This is a test"));
// console.log(spinWords("This is another test"));

// Нужно определить, является ли данный год високосным или нет. Если вы не знаете правил, вот они: годы, кратные 4, являются високосными. Годы, кратные 100, не являются високосными, но годы, кратные 400, являются високосными.
// function isLeapYear(year) {
//   let date = year;
//   console.log(date);
//   if (date % 4 === 0 || date % 400 === 0) {
//     console.log("Високодный год");
//     return true;
//   } else {
//     console.log("Не Високодный год");
//     return false;
//   }
// }
// console.log(isLeapYear(2020));
// console.log(isLeapYear(2024));
// console.log(isLeapYear(1941));

// У нас есть строка с датой '2030-11-15'. Преобразуйте эту дату в формат '15/11/2030'.

// let date = new Date("2030-11-15").toLocaleDateString();
// console.log(date);

// Выведите текущую дату в формате "год-месяц-день"
// let now = new Date();
// let p = now.getFullYear();
// let x = now.getMonth() + 1;
// let r = now.getDate();
// let u = [p, x, r].join("/");
// console.log(u);

// let user = {
//   name: "Василий Иванович",
//   age: 35,
// };
// let json = JSON.stringify(user);
// console.log(json);
// console.log(typeof json);

// user = JSON.parse(json);
// console.log(user);
// console.log(typeof user);

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Совещание",
//   occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
//   place: room,
// };

// room.occupiedBy = meetup;
// meetup.self = meetup;
// console.log(
//   JSON.stringify(meetup, function replacer(key, value) {
//     console.log(`${key}: ${value}`);
//     if (key !== "" && value === meetup) {
//       return undefined;
//     }

//     return value;

//     //   if (key === "place") return value.number;
//     //   else if (key === "occupiedBy") return value;
//     //   else if (key === "self") return undefined;
//     //   return value;
//   })
// );

// Создайте функцию, которая будет выводить число от 1 до 12 в название месяца на русском языке. Выведите с ее помощью название текущего месяца.
// function randomNum(min, max) {
//   let result = Math.floor(Math.random() * (max - min + 1) + min);
//   if ((result === 0)) {
//     return "January";
//   } else if ((result === 1)) {
//     return "February";
//   } else if ((result === 2)) {
//     return "March";
//   } else if ((result === 3)) {
//     return "April";
//   } else if ((result === 4)) {
//     return "May";
//   } else if ((result === 5)) {
//     return "June";
//   } else if ((result === 6)) {
//     return "July";
//   } else if ((result === 7)) {
//     return "August";
//   } else if ((result === 8)) {
//     return "September";
//   } else if ((result === 9)) {
//     return "October";
//   } else if ((result === 10)) {
//     return "November";
//   } else if ((result === 11)) {
//     return "December";
//   }
//   return result;
// }

// console.log(randomNum(1, 12));
// Посчитайте, сколько часов прошло от 1 января 1991 года до текущего момента

let date = new Date(1991, 0);
console.log(date.getTime());
let now = new Date();
let p = now.getHours();
console.log(p);
let x = date.getTime() / 3600000;
console.log(x);
console.log(x + p);

// var obj = {
//   name: ["Вася", "Петя", "Коля"],
//   age: [11, 30, 20],
// };
// console.log(obj.name[1]);
// for (key in obj.name) {
//   console.log(obj.name);
// }
// console.log(obj.name.length);

// let arr = [
//   { id: "1", prop1: "val1" },
//   { id: "2", prop1: "val2" },
// ];
// let arrOne = arr.find((item) => item.id == 2);
// console.log(arrOne.id);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits[0]);

// let arr = ["Hi", "Hello", "Bonjour"];
// if (arr === undefined) {
//   console.log(Empty);
// } else {
//   console.log("Привет");
// }

// const array = [2, 5, 9];
// delete array[1];
// console.log(array);

// Вы берете своего сына в лес посмотреть на обезьян. Вы знаете, что там есть определенное число (n), но ваш сын слишком мал, чтобы просто оценить полное число, он должен начать считать их с 1.

// Как хороший родитель, вы будете сидеть и считать вместе с ним. Учитывая число (n), заполните массив всеми числами до этого числа включительно, но исключая ноль.

// let arr = [];
// arr.push("5");
// arr.push("6");
// arr.push("7");
// arr.push("8", "9");
// console.log(arr);
// arr.push("10");
// arr.unshift("1", "2", "3", "4");
// console.log(arr);

// let textbooks = ["Algebra", "History", "Geometry", "English"];
// textbooks.sort((a, b) => a - b);
// console.log(textbooks);

// function smash(words) {
//   return words.join(" ");
// }
// console.log(smash(["hello", "world", "this", "is", "great"]));
// function filterList(l) {
//   return l.filter(
//     (item) =>
//       item === 1 || item === 2 || item === 0 || item === 15 || item === 123
//   );
// }
// console.log(filterList([1, 2, "a", "b"]));
// console.log(filterList([1, "a", "b", 0, 15]));
// console.log(filterList([1, 2, "aasf", "1", "123", 123]));

// function filterList(l) {
//   return l.filter((item) => typeof item === "number");
// }
// console.log(filterList([1, 2, "a", "b"]));
// console.log(filterList([1, "a", "b", 0, 15]));
// console.log(filterList([1, 2, "aasf", "1", "123", 123]));
// const accum = (str) =>
//   str
//     .split("")
//     .map(
//       (ch, i) =>
//         (ch = ch.toLowerCase().repeat(i + 1)) &&
//         ch.charAt(0).toUpperCase() + ch.slice(1)
//     )
//     .join("-");
// console.log(accum("abcd"));
// console.log(accum("RqaEzty"));
// console.log(accum("cwAt"));

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(0));

// function sumTo(n) {
//   console.log(n);
//   let x = 1;
//   for (let p = 0; p <= n; p++) {
//     x += p;
//   }
//   return x;
// }
// console.log(sumTo(1));
// console.log(sumTo(2));
// console.log(sumTo(3));
// console.log(sumTo(4));
// console.log(sumTo(100));

// function sumTo(n) {
//   if (n <= 1) {
//     return 1;
//   }
//   return n + sumTo(n - 1);
// }
// console.log(sumTo(1));
// console.log(sumTo(2));
// console.log(sumTo(3));
// console.log(sumTo(4));
// console.log(sumTo(100));

// function sumTo(n) {
//   //   console.log(n);
//   //   console.log(sumTo);
//   return (n * (n + 1)) / 2;
// }
// console.log(sumTo(1));
// console.log(sumTo(2));
// console.log(sumTo(3));
// console.log(sumTo(4));
// console.log(sumTo(100));

// function fib(n) {
//   let f1 = 1;
//   let f2 = 1;
//   for (let i = 3; i <= n; i++) {
//     let fn = f2 + f1;
//     f1 = f2;
//     f2 = fn;
//   }

//   return f2;
//   // return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }
// console.log(fib(3));
// //  2
// console.log(fib(7));
// console.log(fib(77));

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };
// function printList(list) {
//   console.log(list.next);
//   if (list.next) {
//     printList(list.next);
//   }
// }
// printList(list);

// function printList(list) {
//   while (list) {
//     console.log(list.next);
//     list = list.next;
//   }
// }
// printList(list);

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  if (list.next) {
    printList(list.next);
  }
  console.log(list.value);
}
printList(list);

// function printList(list) {
//   let arr = [];
//   let lol = list;
//   while (lol) {
//     arr.push(lol.value);
//     console.log(arr);
//     // console.log(lol.next);
//     // console.log(lol.value);
//     lol = lol.next;
//   }
//   //   console.log(arr);
//   for (let p = arr.length - 1; p <= 0; p--) {
//     console.log(arr[p]);
//   }
// }
// printList(list);
