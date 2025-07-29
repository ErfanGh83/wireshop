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
