import React, { Component } from 'react';
import _ from 'lodash';
import Comment from '../Comment/Comment';

class CommentList extends Component {
  render() {
    var commentNodes = _.map(this.props.data, function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}

export default CommentList;