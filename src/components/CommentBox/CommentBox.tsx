/// <reference path="../../../typings/index.d.ts"/>

import * as React from 'react'
import Comment from '../../models/comment.ts'
import CommentForm from './CommentForm/CommentForm.tsx'
import CommentList from './CommentList/CommentList.tsx'

interface Props {
  loadCommentsFromServer: () => Comment[];
  saveCommentToServer: (Comment) => void;
}

interface State {
  data: Comment[];
}

export default class CommentBox extends React.Component<Props, State> {
    constructor(props, context) {
        super(props, context);
        this.state = { data: []};         
    }

    loadCommentsFromServer() {
      this.setState({ data: this.props.loadCommentsFromServer() });
    }

    submitComment(comment) {
      this.props.saveCommentToServer(comment);
    }

    componentDidMount() {
      this.loadCommentsFromServer();
      setInterval(this.loadCommentsFromServer.bind(this), 1000);
    }

    render() {
      return (
        <div className="commentBox">
          <h1>Comments</h1>
          <CommentList data={this.state.data} />
          <CommentForm submitComment={this.submitComment.bind(this)} />
        </div>
      );
    }
}