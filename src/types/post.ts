export interface Post {
  id: string;
  title: string;
  body: string; // JSON string (TipTap content)
  image: string;
  profile: {
    nickname: string;
    position: string;
    image: string;
  };
  likes: number;
  published_date: string; // ISO 8601 datetime string
  category: string;
  tags: string; // 실제론 string 배열 형태
  summary: string;
  comments: Comment[];
}

export interface Comment {
  id: string;
  text: string;
  nickname: string;
  post: string;
}

export interface PostResponse {
  count: number;
  results: Post[];
}
