//1.импортируем модуль 

const { error } = require('console');
const http = require('http'); //http: Модуль http дозволяє створювати HTTP-сервери та клієнтів. 
// Це основний модуль, який використовуємо для розробки веб-застосунків у Node.js.
const fs = require('fs');// подключение модуля файловой системы для работы с файлами 
const path = require('path');// для формирования корректого пути

// 2.создание файла
const content = 'Це нові дані для запису у файл.';
fs.writeFile('user.txt', content, (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File user.txt written successfully!');
});


// 3.Create an HTTP server
const server = http.createServer((req, res) => {
    //createServer это встроенный метод для создания сервера
    //метод содержит callback function которая вызывается каждый раз , когда на сервер идет обращение
    //функция принимает два аргумента (req, res) єто обьект запроса и ответа 
    console.log('Server request');
    //console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text/plain'); //используется для установки одного значения заголовка для неявных заголовков.
    //Content-Type - помогает браузеру определить какого типа данные ему были отправленны
    //res.write('hello');
    res.end();//Этот метод сигнализирует серверу, что все заголовки и тело ответа были отправлены; 
    //любой ответ нужно завершать этим методом , чтобы вернуть контроль браузеру.

});
server.listen(3000, 'localhost', (err) => {//localhost -имя порта по умолчанию
    if (err) {
        console.log('Server error:', err);
    } else {
        console.log('listening port 3000');
    }
    // функция СВ будет срабатывать при ошибке.
}); 

//при запуске node main  получаем сообщение listening port 3000, значит сервер создан.

