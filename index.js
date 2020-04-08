const { PeerServer } = require("peer");

const peerServer = PeerServer({ port: 9898, path: "/sync-video" });
console.log('📢 开发日志: peerServer', '服务已启动');

peerServer.on('connection', (client) => { 
    console.log('🎰 开发日志: client connection', client);
 });

 peerServer.on('disconnect', (client) => {
    console.log('🥜 开发日志: client disconnect', client);
});
