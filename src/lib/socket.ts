import { io, Socket } from "socket.io-client";
import { BASE_SOCKET_URL } from "./api/constants";

let socket: Socket | null = null;

export const connectSocket = () => {
  if (!socket) {
    socket = io(BASE_SOCKET_URL, {
      transports: ["websocket"],
    });

    socket.on("connect", () => {
      console.log("Socket connected:", socket!.id);
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });
  }
};

export const joinConversation = (conversationId: string) => {
  socket?.emit("joinConversation", { conversationId });
};

export const sendMessage = (content: string) => {
  socket?.emit("sendMessage", { content });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const onReceiveMessage = (callback: (msg: any) => void) => {
  socket?.on("receiveMessage", callback);
};

export const disconnectSocket = () => {
  socket?.disconnect();
  socket = null;
};
