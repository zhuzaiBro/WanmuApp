import { Manager, io } from "socket.io-client";

const manager = new Manager("http://www.discosoul.com.cn:5008", {
    autoConnect: true
});

const socket = manager.socket("/");
socket.connect();

socket.on("connect", () => {
    console.log("socket连接");
})

export default socket;

export const sendMessage = async(data:object) => {
    socket.emit("data", {data});
}

manager.open((err) => {
    if (err) {
        // an error has occurred
        console.log(err);
    } else {
        console.log(233);
        // the connection was successfully established
    }
});
