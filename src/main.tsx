/// <reference path="../typings/index.d.ts"/>

import * as React from 'react'
import * as ReactDom from 'react-dom'
import Comment from './models/comment.ts'
import CommentBox from './components/CommentBox/CommentBox.tsx'

class Server {
  
  private database : Comment[];
  
  constructor() {
    this.database = [
      new Comment("Pete hunt", "This is one comment"),
      new Comment("Jordan Walke", "This is *another* comment"),
    ];

    this.loadComments = this.loadComments.bind(this);
    this.saveComment = this.saveComment.bind(this);
  }

  loadComments() {
    return this.database;
  }

  saveComment(comment: Comment) {
    this.database.push(comment);
  }
}

(function() {

  let ourServer = new Server();

  ReactDom.render(
    <CommentBox 
      loadCommentsFromServer={ourServer.loadComments}
      saveCommentToServer={ourServer.saveComment}
    />,
    document.getElementById('content')
  );

})();