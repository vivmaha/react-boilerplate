import * as React from 'react'
import CommentModel from '../../../models/comment.ts'
import Comment from './Comment/Comment.tsx';

interface Props {
  data: CommentModel[];
}

export default class CommentList extends React.Component<Props, {}> {
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