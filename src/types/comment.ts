export interface Comment {
  content: string;
  createdAt: string;
  id: string;
  status: string;
  user: {
    firstname: string | null;
    id: string;
    lastname: string | null;
    phone: string;
    role: "admin" | "user" | "support";
  };
}

export type CommentResponse = Comment[];
