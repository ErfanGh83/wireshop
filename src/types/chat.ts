export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  sentAt: string;
}

export interface Conversation {
  conversationId: string;
  messages: Message[];
}

export interface AllConversation {
  id: string;
  newMessage: boolean;
  userId: string;
  userPhone: string;
  updatedAt: string;
}

export interface ConversationByID {
  conversation: string;
  user: {
    id: "string";
    phone: "string";
  };
  messages: Message[];
}
