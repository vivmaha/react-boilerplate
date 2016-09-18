import * as React from 'react'
import Comment from '../../../models/comment.ts';


interface Props{
  submitComment: (Comment) => void; 
}

interface State {
  author?: string;
  text?: string;
}

export default class CommentForm extends React.Component<Props, State> {

    constructor(props, context) {
        super(props, context);
        this.state = {author:'', text:''};

        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleAuthorChange(e) {
      this.setState({author: e.target.value});
    }

    handleTextChange(e) {
      this.setState({text: e.target.value});
    }

    handleSubmit(e) {
      this.props.submitComment(this.state);
      this.setState({author:'', text:''});
      e.preventDefault();
    }

    render() {
      return (
        <form className="commentForm" onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder="Your name"
            value={this.state.author}
            onChange={this.handleAuthorChange}
          />
          <input 
            type="text" 
            placeholder="Say something..."
            value={this.state.text}
            onChange={this.handleTextChange}
          />
          <input type="submit" value="Post"/>
        </form>
      );
    }
}