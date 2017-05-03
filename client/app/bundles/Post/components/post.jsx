import React from 'react';
import EditReview from '../../EditReview/components/editReview'
export default class Post extends React.Component {
  constructor() {
    super();
    this.state = { 
      showEdit: false
    }
  }

  showEdit(id){
    this.setState({
      showEdit: this.state.showEdit?false:true
    })
    this.render
  }

  render() {
    return (
      <div>
        <td>
          <PostHeader post={this.props.post} sent={this.props.type==="sent"}/>
        </td>
        <td>
          <PostContent post={this.props.post} />
        </td>
        <td>
          {
            this.props.type === "sent" && 
            <button className="button3" onClick={this.showEdit.bind(this)}>
              Edit
            </button>
          }
          <button className="button3" onClick={this.props.handleDelete.bind(this)}>
            Delete
          </button>
          {
            this.state.showEdit && <p><EditReview post={this.props.post} handleClick={this.handleClick} /> </p>
          }
        </td>
      </div>
    );
  }
}

  var PostHeader = React.createClass({
    render: function() {
      return (
        <h3>
        Rating: {this.props.post.rating}
        {
          this.props.sent && <p>Partner: {this.props.post.recipient_id}</p>
        }
        </h3>
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