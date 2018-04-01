// Пример обработки события dataIsSent. Рекомендуется изменить API модуля так,
// чтобы вызова события через document не было

// function test() {
//     document.addEventListener('dataIsSent', function(event) {
//         console.log('event got ' + event.detail);
//     });
//     sendToServer('mydata');
// }
const sendToServer = data => {
  const response = `Сервер принял данные "${data}".`;

  return new Promise(resolve => {
    setTimeout(() => {
      console.log(response);
      resolve(response);
    }, 100);
  });
};

export default sendToServer;
