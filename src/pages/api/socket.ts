import type { NextApiRequest, NextApiResponse } from "next";
import type { Socket } from "socket.io";
import { Server } from "socket.io";
import messageHandler from "../../utils/messageHandler";

export default function SocketHandler(
  req: NextApiRequest,
  res: NextApiResponse<Socket>
) {
  // It means that socket server was already initialised
  if (res?.socket?.server.io) {
    console.log("Already set up");
    res.end();
    return;
  }

  const io = new Server<>(res.socket?.server);
  res.socket.server.io = io;

  const onConnection = (socket: Socket) => {
    messageHandler(io, socket);
  };

  // Define actions inside
  io.on("connection", onConnection);

  console.log("Setting up socket");
  res.end();
}
