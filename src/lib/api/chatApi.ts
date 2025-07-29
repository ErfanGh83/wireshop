import { AllConversation, Conversation, ConversationByID } from "@/types/chat";
import { get } from "./apiClient";
import { API_ENDPOINTS } from "./constants";


export async function getUserConversation(): Promise<Conversation> {
  return get<Conversation>(API_ENDPOINTS.MY_CONVERSATION);
}

export async function getAllConversations(): Promise<AllConversation> {
  return get<AllConversation>(API_ENDPOINTS.ALL_CONVERSATIONS);
}

export async function getConversationByID(id:string): Promise<ConversationByID> {
  return get<ConversationByID>(`${API_ENDPOINTS.ALL_CONVERSATIONS}/${id}`);
}
