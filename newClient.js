const io = require("socket.io-client");
const ioClient = io.connect("http://localhost:8000");

ioClient.on("newMessage", (msg) => console.log("new message"+msg));

ioClient.emit('privatechatroom', {email:"abcd"});

ioClient.on('res', (msg) => console.log("res"+msg.msg));

ioClient.emit('new_private_message',{email:"abcd", clip_content:"testing socket client"});

ioClient.on('updated_clip_content', (msg) => console.log("chat room msg "+msg.clip_content));
