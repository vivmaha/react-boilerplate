import * as React from 'react'
import CommentModel from '../../../../models/comment.ts'

interface Props{
  data: CommentModel;
}

export default class Comment extends React.Component<Props, {}> {
    render(){
      return (
        <div>
          <h2>
            {this.props.data.author}
          </h2>
          <p>{this.props.data.text}</p>
        </div>
      );
    }
}