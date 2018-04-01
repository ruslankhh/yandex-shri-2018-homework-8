// Пример обработки события dataIsSent. Рекомендуется изменить API модуля так,
// чтобы вызова события через document не было

// function test() {
//     document.addEventListener('dataIsSent', function(event) {
//         console.log('event got ' + event.detail);
//     });
//     sendToServer('mydata');
// }
const sendToServer = data => {
  const event = new CustomEvent('dataIsSent', { detail: data });

  console.log(data);
  document.dispatchEvent(event);
};

export default sendToServer;
