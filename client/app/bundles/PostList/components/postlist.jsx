import React from 'react'
import Post from '../../Post/components/post'
import NewReview from '../../NewReview/components/newReview'

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick.bind(this);
    this.state = { reviews:  this.props["reviews"],
      type: this.props["type"]
    }
    this.generateNewReviewButton.bind(this)
  }

  handleClick(event) {
    this.setState = {data: this.props}
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
  generateNewReviewButton( ) {
    if(this.state.type === "sent") {
      return (
        <button className="button1" style={{float: "right"}} onClick={this.handleClick}>
          Add New Review
        </button>
      )
    }
  }

  render() {
    const reviews = this.state.reviews
    console.log(reviews)
    const posts = Object.keys(reviews).map((post) => {
      return (
        <Post key={reviews[post].id} handleDelete={this.handleDelete} post={reviews[post]} parentComponent={this}/>
        );
    })

    return (
      <table style={{width: "100%"}}>
        <tr >
          <th style={{borderBottom: "1px solid black", padding: "5px"}}>Day</th>
          <th style={{borderBottom: "1px solid black", padding: "5px"}}>Pair</th> 
        </tr>
        {posts}
        <br />
      </table>
    );
  }
}
