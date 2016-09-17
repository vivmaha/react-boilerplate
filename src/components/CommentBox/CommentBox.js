import React from 'react';
import CommentForm from './CommentForm/CommentForm.js';
import CommentList from './CommentList/CommentList.js';

export default class CommentBox extends React.Component {
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
CommentBox.propTypes={
  saveCommentToServer: React.PropTypes.func.isRequired,
  loadCommentsFromServer: React.PropTypes.func.isRequired,
}