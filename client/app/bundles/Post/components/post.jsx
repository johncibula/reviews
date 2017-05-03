import React from 'react';
import EditReview from '../../EditReview/components/editReview'
export default class Post extends React.Component {
  constructor() {
    super();
    this.state = { 
      showEdit: false
    }
  }

  edit(id){
    this.setState({
      showEdit: true
    })
  }

  render() {
    return (
      <div>
        <td>
          <PostHeader post={this.props.post} />
        </td>
        <td>
          <PostContent post={this.props.post} />
        </td>
        <td>
          <button className="button3" onClick={(id) => this.edit(post.id)}>
            Edit
          </button>
          <button className="button3" onClick={this.props.handleDelete.bind(this)}>
            Delete
          </button>
          {
            this.state.showEdit && <EditReview post={this.props.post} handleClick={this.handleClick} /> 
          }
        </td>
      </div>
    );
  }
}

  var PostHeader = React.createClass({
    render: function() {
      return (
          <h3>Rating: {this.props.post.rating}</h3>
      );
    }
  });

  var PostContent = React.createClass({
    render: function() {
      return (
        <div className="post-contents" style={{borderBottom: "4px solid black", paddingTop: "40px",paddingBottom: "40px"}}>
          {this.props.post.content}
        </div>
      );
    }
  });