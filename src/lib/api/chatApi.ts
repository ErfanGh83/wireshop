import { Conversation } from "@/types/chat";
import { get } from "./apiClient";
import { API_ENDPOINTS } from "./constants";


export async function getUserConversation(): Promise<Conversation> {
  return get<Conversation>(API_ENDPOINTS.CONVERSATION);
}
