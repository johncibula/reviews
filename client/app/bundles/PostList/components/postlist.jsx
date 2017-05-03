import React from 'react'
import Post from '../../Post/components/post'
import NewReview from '../../NewReview/components/newReview'

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick.bind(this);
    this.state = { 
      reviews: this.props["reviews"],
      type: this.props["type"],
      users: this.props["users"]
    }
  }

  handleClick(event) {
    console.log("TODO handleClick, event: " + event)
  }

  handleDelete(id) {
    $.ajax({
      url: "/posts/"+id,
      type: 'DELETE',
      parent: this,
      sucess: () => {
        this.render
      }
    });
  }
  newReviewButton( ) {
    if(this.state.type === "sent") {
      return (
        <button className="button1" style={{float: "right"}} onClick={this.handleClick}>
          Add New Review
        </button>
      )
    }
  }

  getPosts(){
    const reviews = this.state.reviews
    let posts = []
    for (var review_index = 0; review_index < reviews.length; review_index++){
      posts.push(<tr><Post key={reviews[review_index]} handleDelete={(id) => this.handleDelete(id)} post={reviews[review_index]} parent={this}/> </tr>)
    }
    return posts
  }

  render() {
    return (
      <table style={{width: "100%"}}>
        <tr>
          <th >Title</th>
          <th >Content</th>
          <th ></th> 
          <th ></th> 
        </tr>
        {this.getPosts()}
      </table>
    );
  }
}
