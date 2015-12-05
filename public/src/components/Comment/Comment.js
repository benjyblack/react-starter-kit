import React, { Component } from 'react';
import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';

class Comment extends Component {
  render() {
    var style = {
      marginLeft: '30px'
    };

    return (
      <div className="comment">
        <Card>
          <CardHeader
            title={this.props.author}
            avatar={<Avatar>{this.props.author.substr(0,1)}</Avatar>}>
          </CardHeader>
          <span style={style}>
            {this.props.children}
          </span>
        </Card>
      </div>
    );
  }
}

export default Comment;