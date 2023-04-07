"use strict";

// Задание 3.
// Написать скрипт, который при открытии страницы будет делать следующее:
// Если пользователь зашел в первый раз, вывести окно prompt с сообщением:
// «Добро пожаловать! Назовите, пожалуйста, ваше имя».
// После того, как пользователь введет имя, записать имя, дату и время
// визита в localStorage.
// Если пользователь открывает страницу не впервые (это можно узнать
// по наличию соответствующих записей в localStorage), вывести в alert
// сообщение вида: «Добрый день, *имя пользователя*! Давно не виделись.
// В последний раз вы были у нас *дата последнего посещения*»
// и перезаписать дату последнего посещения.
// Дату можно вывести в любом удобочитаемом формате
// (не Timestamp, должен четко читаться день, месяц, год и время — часы и минуты).

// кнопка очистки localStorage
const clearLS = document.querySelector("#clear");

// слушатель на кнопку очистки
clearLS.addEventListener("click", () => {
    alert("localStorage очищен");
    localStorage.clear();
});

// если в localStorage была информация о пользователе копируем её в переменную
let userName = localStorage.getItem("userName");

let date, userDate;

// если пользователь уже был в localStorage приветствуем его
if (userName) {
    alert(
        "Добрый день, " +
            localStorage.getItem("userName") +
            "! Давно не виделись. В последний раз вы были у нас " +
            localStorage.getItem("lastDate")
    );
    getNowDate();
}
// если нет, то просим ввести своё имя
else {
    userName = prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя");
    console.log(userName);
    if (userName) {
        localStorage.setItem("userName", userName);
        getNowDate();
    }
}

// записываем теущую дату и время в localStorage
function getNowDate() {
    date = new Date();
    let day = String(date.getDate()).padStart(2, "0");
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let year = date.getFullYear();
    let hours = String(date.getHours()).padStart(2, "0");
    let minutes = String(date.getMinutes()).padStart(2, "0");
    userDate = `${day}-${month}-${year} ${hours}:${minutes}`;
    localStorage.setItem("lastDate", userDate);
}
