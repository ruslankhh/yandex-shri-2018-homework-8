// Пример обработки события dataIsSent. Рекомендуется изменить API модуля так,
// чтобы вызова события через document не было

// function test() {
//     document.addEventListener('dataIsSent', function(event) {
//         console.log('event got ' + event.detail);
//     });
//     sendToServer('mydata');
// }
const sendToServer = data => {
  const response = {
    data: {
      message: `Сервер принял данные ${data}.`
    }
  };

  console.log(response);

  return new Promise(resolve => resolve(response));
};

export default sendToServer;
