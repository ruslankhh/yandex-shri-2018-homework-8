const sendToServer = data => new Promise(resolve => setTimeout(() => resolve(data), 100));

export default sendToServer;
