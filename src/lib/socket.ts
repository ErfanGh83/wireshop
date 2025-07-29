import { io, Socket } from "socket.io-client";
import { BASE_SOCKET_URL } from "./api/constants";

let socket: Socket | null = null;

export const connectSocket = () => {
  if (!socket) {
    socket = io(BASE_SOCKET_URL, {
      transports: ["websocket"],
    });

    socket.on("connect", () => {
      console.log("connected:", socket!.id);
    });

    socket.on("disconnect", () => {
      console.log("disconnected");
    });
  }
};

export const identify = (userId: string, role: "user" | "admin") => {
  socket?.emit("identify", { userId, role });
};

export const joinConversation = (adminId: string, conversationId: string) => {
  socket?.emit("joinConversation", { adminId, conversationId });
};

export const sendMessage = (senderId: string, content: string) => {
  socket?.emit("sendMessage", { senderId, content });
};

export const onReceiveMessage = (callback: (msg: any) => void) => {
  socket?.on("receiveMessage", callback);
};

export const onMessageSaved = (callback: (msg: any) => void) => {
  socket?.on("messageSaved", callback);
};

export const disconnectSocket = () => {
  socket?.disconnect();
  socket = null;
};
