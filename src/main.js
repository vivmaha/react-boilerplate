import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/CommentBox/CommentBox.js';

(function() {

  function Server() {    
    var database = [
      {id: 1, author: "Pete Hunt", text: "This is one comment"},
      {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
    ];

    return {
      loadComments: function() {
          return database;
      },

      saveComment: function(comment) {
        database.push({
          id: database.length + 1,
          author: comment.author,
          text: comment.text,
        });
      }
    }
  }

  var ourServer = new Server();

  ReactDOM.render(
    <CommentBox 
      loadCommentsFromServer={ourServer.loadComments}
      saveCommentToServer={ourServer.saveComment}
    />,
    document.getElementById('content')
  );

})();