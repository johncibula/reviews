import React from 'react';
import EditReview from '../../EditReview/components/editReview'
export default class Post extends React.Component {
  constructor() {
    super();
    this.state = { 
      showEdit: false
    }
    this.showEdit.bind(this)
  }

  showSubmission(p = null){
    if(p){
      this.props.post.admin_message = p["admin_message"]
      this.props.post.content = p["content"]
      this.props.post.willing_to_work = p["willing_to_work"]
      this.props.post.rating = p["rating"]
    }
    this.showEdit()
  }
  showEdit(){
    this.setState({
      showEdit: this.state.showEdit?false:true
    })
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
            this.state.showEdit && <p><EditReview post={this.props.post} handleClick={this.handleClick} unshow={this.showSubmission.bind(this)}parent={this.props.parent} /> </p>
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