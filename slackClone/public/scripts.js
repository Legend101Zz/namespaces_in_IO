const socket = io("http://localhost:9000");

socket.on("connect", () => {
  console.log("Connected");
  socket.emit("client cookoo");
});

socket.on("welcome", (data) => {
  console.log(data);
});
