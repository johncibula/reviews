import React from 'react'
export default class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
                  id: this.props.id,
                  rating: this.props.rating,
                  content: this.props.content
                };

  }

  handleDelete(id) {
    this.props.handleDelete(id)

  }

  render() {
      return (
        <div className="post">
            <a href={"/posts/" + this.state.id + "/edit"}>Edit</a>
            <br />
            <a href={"/posts/" + this.state.id}>Show</a>
            <button onClick={this.handleDelete.bind(this,this.state.id)}>
              Delete
            </button>
            <PostHeader post={this.state} />
            <PostContent post={this.state} />
        </div>
      );
  }
}

var PostHeader = React.createClass({
    render: function() {
      console.log(this)
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