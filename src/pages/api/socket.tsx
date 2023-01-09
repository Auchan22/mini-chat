import type { NextApiRequest, NextApiResponse } from "next";
import { Server } from "socket.io";
import messageHandler from "../../utils/messageHandler";
import type { Server as HTTPServer } from "http";
import type { Socket as NetSocket } from "net";
import type { Server as IOServer, Socket } from "socket.io";

interface SocketServer extends HTTPServer {
  io?: IOServer | undefined;
}

interface SocketWithIO extends NetSocket {
  server: SocketServer;
}

interface NextApiResponseWithSocket extends NextApiResponse {
  socket: SocketWithIO;
}

export default function SocketHandler(
  req: NextApiRequest,
  res: NextApiResponseWithSocket
) {
  // It means that socket server was already initialised
  console.log(typeof res.socket);
  if (res?.socket?.server.io) {
    console.log("Already set up");
    res.end();
    return;
  }

  const io = new Server(res.socket?.server);
  res.socket.server.io = io;

  const onConnection = (socket: Socket) => {
    messageHandler(io, socket);
  };

  // Define actions inside
  io.on("connection", onConnection);

  console.log("Setting up socket");
  res.end();
}
