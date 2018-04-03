const sendToServer = data =>
  new Promise(resolve => setTimeout(() => resolve({ data }), 400));

export default sendToServer;
