import React from 'react';
import EditReview from '../../EditReview/components/editReview'
export default class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {reviews: props};
    this.handleClick = this.handleClick.bind(this);
  }

  handleDelete(id) {
    this.props.handleDelete(id)
  }

  handleClick(id) {
    this.props.handleDelete(id)
  }
  edit(){

  }

  render() {
    return (
      <div className="post">
        <button className="button3" onClick={(id) => this.edit(post.id)}>Edit
        </button>
        <button className="button3" onClick={this.handleDelete.bind(this)}>
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
      return (
        <div className="post-header" style={{borderBottom: "1px solid black"}}>
          <h3>Rating: {}</h3>
        </div>
      );
    }
  });

  var PostContent = React.createClass({
    render: function() {
      return (
        <div className="post-contents" style={{borderBottom: "4px solid black", paddingTop: "40px",paddingBottom: "40px"}}>
          {this.props.toString()}
        </div>
      );
    }
  });