import React from 'react';

export default class Comment extends React.Component {
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
Comment.propTypes = { 
    data: React.PropTypes.shape({
      author: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
    })
};