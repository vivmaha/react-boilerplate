export default class Comment {

  id: number;
  author: string;
  text: string;

  private static nextId = 0;
  
  constructor(author: string, text: string) {
    this.id = Comment.nextId++;
    this.author = author;
    this.text = text;
  }
}