"use strict";

// Задание 5.
// Написать код приложения, интерфейс которого состоит из поля ввода
// и кнопки «Получить список задач». При нажатии на кнопку нужно
// отправить запрос с помощью fetch на
// URL https://jsonplaceholder.typicode.com/users/3/todos.
// Число 3 представляет собой id пользователя, вместо него нужно
// подставить число, введенное в поле. Если пользователь с таким id существует,
// вернется список задач для этого пользователя,
// каждая задача представлена объектом вида:
// {
//     "userId": 3,
//     "id": 43,
//     "title": "tempore ut sint quis recusandae",
//     "completed": true
// }
// Где title — описание задачи, а completed — флаг, отображающий,
// выполнена задача или нет. Вывести данный список на страницу,
// оформив соответствующим образом: в виде списка (ul или ol),
// выполненные задачи должны быть написаны зачеркнутым текстом.
// Если пользователь с введенным id не существует,
// вывести сообщение: «Пользователь с указанным id не найден».

const input = document.querySelector("#input");
const button = document.querySelector("#button");
const dataList = document.querySelector(".data-list"); // список для отображения

// слушатель на кнопку, если в инпуте число >= 0 то делается запрос
button.addEventListener("click", () => {
    if (input.value && parseInt(input.value) >= 0) {
        fetch(`https://jsonplaceholder.typicode.com/users/${input.value}/todos`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data.length === 0) {
                    console.log("Пользователь с указанным id не найден");
                    alert("Пользователь с указанным id не найден");
                } else {
                    renderData(data);
                }
            })
            .catch((error) => {
                alert(`ошибка: ${error}`);
            });
    } else alert("не корректное id");
});
// ...

// функция отображения данных
function renderData(array) {
    // если уже что то отображено то удаляем это
    let listItem = document.querySelectorAll(".data-list__item");
    if (listItem.length) {
        listItem.forEach((element) => {
            dataList.removeChild(element);
        });
    }
    // ...

    // циклом отображаем данные
    for (let i = 0; i < array.length; i++) {
        // если свойсто completed = true, то перечёркиваем текст задания, меняем стили
        if (array[i].completed) {
            let taskStatus = "completed";
            dataList.insertAdjacentHTML(
                "beforeend",
                `<li class="data-list__item">
                    <div><span class="bold">UserID:</span> ${array[i].userId}</div>
                    <div><span class="bold">Task ID:</span> ${array[i].id}</div>
                    <div><span class="bold">Title:</span> <span  class=${taskStatus}>${array[i].title}</span></div>
                    <div><span class="bold">Completed:</span> ${array[i].completed}</div>
                </li>`
            );
        } else {
            let taskStatus = "todo";
            dataList.insertAdjacentHTML(
                "beforeend",
                `<li class="data-list__item">
                    <div><span class="bold">UserID:</span> ${array[i].userId}</div>
                    <div><span class="bold">Task ID:</span> ${array[i].id}</div>
                    <div><span class="bold">Title:</span> <span  class=${taskStatus}>${array[i].title}</span></div>
                    <div><span class="bold">Completed:</span> ${array[i].completed}</div>
                </li>`
            );
        }
    }
    // ...
}
// ...
