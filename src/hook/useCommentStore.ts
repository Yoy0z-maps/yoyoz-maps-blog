import { create } from "zustand";
import { Comment } from "@/types/post";

interface CommentState {
  comments: Comment[];
  setComments: (comments: Comment[]) => void;
  addComment: (comment: Comment) => void;
}

const useCommentStore = create<CommentState>((set) => ({
  comments: [],
  setComments: (comments) => set({ comments }),
  addComment: (comment) =>
    set((state) => ({
      comments: [...state.comments, comment],
    })),
}));

export default useCommentStore;
