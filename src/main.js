(function() {

  var React = require('react');
  var ReactDOM = require('react-dom');

  var data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
  ];

  var Comment = React.createClass({
    render: function() {
      return (
        <div className="comment">
          <h2 className="commentAuthor">
            {this.props.author}
          </h2>
          {this.props.children}
        </div>
      );
    }
  });

  var CommentList = React.createClass({
    render: function() {
      var commentNodes = this.props.data.map(function(comment){
        return (
          <Comment author={comment.author}>
            {comment.text}
          </Comment>
        )
      });
      return (
        <div className="commentList">
          {commentNodes}
        </div>
      );
    }
  });

  var CommentForm = React.createClass({
    render: function() {
      return (
        <div className="commentForm">
          Hello world! I am a CommentForm.
        </div>
      );
    }
  });

  var CommentBox = React.createClass({
    getInitialState: function() {
      return { data: []};
    },
    componentDidMount: function() {
      var that = this;
      setTimeout(function() {
        that.setState({
          data: [
            {id: 1, author: "Pete Hunt", text: "This is one comment"},
            {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
          ]
        });
      }, 1000);
    },
    render: function() {
      return (
        <div className="commentBox">
          <h1>Comments</h1>
          <CommentList data={this.state.data} />
          <CommentForm />
        </div>
      );
    }
  });

  ReactDOM.render(
    <CommentBox data={data} />,
    document.getElementById('content')
  );

})();


// TODO: keep working here: https://facebook.github.io/react/docs/tutorial.html