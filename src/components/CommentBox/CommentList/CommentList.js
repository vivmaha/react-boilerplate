import React from 'react';
import Comment from './Comment/Comment.js';

export default class CommentList extends React.Component {
    render() {
      var commentNodes = this.props.data.map(function(comment){
        return (
          <Comment 
            data={comment}
            key={comment.id}
          />          
        )
      });
      return (
        <div className="commentList">
          {commentNodes}
        </div>
      );
    }
}
CommentList.propTypes = { 
  data: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      author: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
    }).isRequired
  ),
};