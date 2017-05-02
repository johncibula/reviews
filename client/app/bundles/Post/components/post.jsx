import React from 'react';
import EditReview from '../../EditReview/components/editReview'
export default class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
                  // id: this.props.id,
                  // rating: this.props.rating,
                  // content: this.props.content,
                  showComponent: false
                };
    this.handleClick = this.handleClick.bind(this);
    this.unshowComponent = this.unshowComponent.bind(this);
    this.showComponent = this.showComponent.bind(this);
  }

  handleDelete(id) {
    this.props.handleDelete(id)
    this.props.that.removeItemClient(id)
  }

  handleClick(id) {

  }

  showComponent(event) {
    this.setState({showComponent: true})
  }

  unshowComponent(event) {
    this.setState({showComponent: false})
    unshow()
  }

  render() {
    return (
      <div className="post">
        <button onClick={this.showComponent}>Edit
        </button>
        <a href={"/posts/" + this.props.post.id}>Show</a>
        <button onClick={this.handleDelete.bind(this,this.props.post.id)}>
          Delete
        </button>
        <PostHeader post={this.props.post} />
        <PostContent post={this.props.post} />
        <div>
          {this.state.showComponent ?
            <EditReview post={this.props.post} unshowComponent={this.unshowComponent} handleClick={this.handleClick} /> :
            null}
        </div>
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