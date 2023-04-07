"use strict";

// Задание 2.
// Дан образец JSON-строки:
// `{"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}`;
// Ваша задача — создать JS-объект, который при преобразовании в JSON
// будет возвращать в качестве результата такую же JSON-строку, как в образце.
// Получившуюся строку вывести в консоль.

const jsonString = `{"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}`;

// по простому
const object = JSON.parse(jsonString);
const string = JSON.stringify(object);

console.log("object", object);
console.log("string", string);

// на основании примера из модуля (зачем так усложнять? не понял)
const obj = JSON.parse(jsonString);

const result = {
    name: obj.name,
    age: obj.age,
    skills: obj.skills,
    salary: obj.salary,
};
console.log("result", result);
