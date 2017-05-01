import React from 'react'
export default class Post extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //                 id: this.props.id,
  //                 rating: this.props.rating,
  //                 content: this.props.content
  //               };

  // }

  handleDelete(id) {
    this.props.handleDelete(id)
    this.props.that.removeItemClient(id)
  }

  render() {
    console.log("THIS IS THE POST")
    return (
      <div className="post">
        <a href={"/posts/" + this.props.post.id + "/edit"}>Edit</a>
        <br />
        <a href={"/posts/" + this.props.post.id}>Show</a>
        <button onClick={this.handleDelete.bind(this,this.props.post.id)}>
          Delete
        </button>
        <PostHeader post={this.props.post} />
        <PostContent post={this.props.post} />
      </div>
    );
  }
}

  var PostHeader = React.createClass({
    render: function() {
      console.log('this.props.post')
      console.log(this.props.post)
      return (
        <div className="post-header">
          <h2>{this.props.post.rating}</h2>
        </div>
      );
    }
  });

  var PostContent = React.createClass({
    render: function() {
      return (
        <div className="post-contents">
          {this.props.post.content}
        </div>
      );
    }
  });