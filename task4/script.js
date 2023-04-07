"use dtrict";

// Задание 4.
// Создать Promise, в котором c задержкой в три секунды сгенерировать
// случайное целое число от 1 до 100. Для создания задержки использовать setTimeout.
// Если сгенерированное число четное — Promise выполнится успешно (resolve),
// если нечетное — выполнится с ошибкой (reject). После разрешения Promise
// обработать результат его выполнения и вывести сообщение в консоль:
// «Завершено успешно. Сгенерированное число — number», если Promise завершился успешно.
// Вместо number подставить сгенерированное число
// «Завершено с ошибкой. Сгенерированное число — number», если Promise завершился с ошибкой.
// Вместо number подставить сгенерированное число

const myPromise = new Promise((resolve, reject) => {
    let start = Date.now();
    setTimeout(() => {
        let number = getRandomInt(1, 100);
        let timeLeft = Date.now() - start;
        if (number % 2 === 0) {
            resolve({
                message: `Завершено успешно. Сгенерированное число — ${number}.`,
                timeLeft: `Прошло ${timeLeft} мс.`,
            });
        } else
            reject({
                message: `Завершено с ошибкой. Сгенерированное число — ${number}.`,
                timeLeft: `Прошло ${timeLeft} мс.`,
            });
    }, 3000);
});

myPromise
    .then((resolve) => console.log(resolve.message, resolve.timeLeft))
    .catch((resolve) => console.log(resolve.message, resolve.timeLeft));

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
