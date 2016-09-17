import React from 'react';

export default class CommentForm extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {author:'', text:''};

        var bindHelper = (handler) => {
          this[handler.name] = this[handler.name].bind(this);
        };

        bindHelper(this.handleAuthorChange);
        bindHelper(this.handleTextChange);
        bindHelper(this.handleSubmit);
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