const socket = io("http://localhost:9000");

socket.on("connect", () => {
  console.log("Connected");
  socket.emit("client cookoo");
});

//listen for the nsList event
socket.on("nsList", (nsData) => {
  console.log(nsData);
});
