export default (io, socket) => {
  const createdMessage = (msg) => {
    socket.broadcast.emit("recibiendoMensaje", msg);
  };

  socket.on("mensajeCreado", createdMessage);
};
