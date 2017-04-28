import ReactOnRails from 'react-on-rails';
import Post from './Post';
ReactOnRails.register({ HelloWorldApp });

var Post = React.createClass({
  getInitialState: function() {
      return { id: this.props.id,
                rating: this.props.rating,
                content: this.props.content };
  },

  handleDelete(id) {
    this.props.handleDelete(id)

  },

  render: function() {
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
});

var PostHeader = React.createClass({
    render: function() {
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