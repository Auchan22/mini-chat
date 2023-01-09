import type { Server as IOServer, Socket } from "socket.io";
const messageHandler = (io: IOServer, socket: Socket) => {
  const createdMessage = (msg: string) => {
    socket.broadcast.emit("recibiendoMensaje", msg);
  };

  socket.on("mensajeCreado", createdMessage);
};

export default messageHandler;
