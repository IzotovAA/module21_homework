"use strict";

// Задание 1.
// Вам дана заготовка и результат, который вы должны получить.
// Ваша задача — написать код, который будет преобразовывать XML
// в JS-объект и выводить его в консоль.
// цель, получить из строки xmlString следующий объект:
// {
//     list: [
//         { name: "Ivan Ivanov", age: 35, prof: "teacher", lang: "en" },
//         { name: "Петр Петров", age: 58, prof: "driver", lang: "ru" },
//     ];
// }

const parser = new DOMParser();

const xmlString = `<list>
    <student>
        <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
</list>;`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const studentNode = xmlDOM.querySelectorAll("student");
const nameAttribute = [];
const firstName = [];
const secondName = [];
const ageNode = [];
const profNode = [];
const resultObject = { list: [] };

getAttr(nameAttribute, studentNode, "name", "lang");
getNode(firstName, studentNode, "first");
getNode(secondName, studentNode, "second");
getNode(ageNode, studentNode, "age");
getNode(profNode, studentNode, "prof");

// создаём объекты и добавляем их в результрующий объект
for (let i = 0; i < studentNode.length; i++) {
    let obj = {};

    obj.name = `${firstName[i].textContent} ${secondName[i].textContent}`;
    obj.age = parseInt(ageNode[i].textContent);
    obj.prof = profNode[i].textContent;

    for (const key in nameAttribute[i]) {
        obj[key] = nameAttribute[i][key];
    }

    resultObject.list.push(obj);
}
// ...

// получает заданные узлы и кладёт их в массив
// 1-й аргумент - массив куда будут добавленны найденные по
// селектору узлы, 2-й аргумент - массив узлов в котором
// будем искать нужные узлы по селектору, 3-й аргумент селектор
function getNode(nodeName, array, selector) {
    array.forEach((element) => {
        nodeName.push(element.querySelector(selector));
    });
}
// ...

// получает заданные атрибуты и кладёт их в массив
// 1-й аргумент - для добавления найденого,
// 2-й аргумент - где ищем, 3-й аргумент селектор по которому
// ищем узлы, 4-й атрибут который ищем
function getAttr(nodeName, array, selector, attribut) {
    array.forEach((element) => {
        let selectedNode = element.querySelector(selector);

        if (selectedNode.getAttribute(attribut)) {
            nodeName.push({ [attribut]: selectedNode.getAttribute(attribut) });
        }
    });
}
// ...

console.log(resultObject);
