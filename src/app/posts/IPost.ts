export interface IPost {
  title: string;
  content: string;
}
export interface IPostFull {
  [key: string]: IPost;
}
