export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderRole: "user" | "admin" | "support",
  content: string;
  sentAt: string;
}

export interface Conversation {
  conversationId: string;
  messages: Message[];
}

export interface AllConversation {
  id: string;
  lastMessage: undefined | lastMessage
  newMessage: boolean;
  userId: string;
  userPhone: string;
  updatedAt: string;
}

export interface lastMessage {
  content: string;
  senderRole: "user" | "admin" | "support";
  sender: string;
  sentAt: string
}


export interface ConversationByID {
  conversation: string;
  user: {
    id: "string";
    phone: "string";
  };
  messages: Message[];
}
