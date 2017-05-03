import React from 'react'
import Post from '../../Post/components/post'
import NewReview from '../../NewReview/components/newReview'

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      reviews: this.props["reviews"],
      type: this.props["type"],
      showNew: false,
      members: this.props["members"]
    }
  }

  showNewForm() {
    this.setState({
      showNew: this.state.showNew?false:true ,
      reviews: this.state.reviews,
      type: this.state.type,
      users: this.state.users
    })
    this.render()
  }

  handleDelete(id) {
    $.ajax({
      url: "/posts/"+id,
      type: 'DELETE',
      component: this,
      success:  () => {
        this.render()
      }
    });
  }
  newReviewButton( ) {
    if(this.state.type === "sent") {
      return (
        <button className="button1" style={{float: "right"}} onClick={this.showNewForm.bind(this)}>
          Add New Review
        </button>
      )
    }
  }

  getPosts(){
    const reviews = this.state.reviews
    let posts = []
    for (var review_index = 0; review_index < reviews.length; review_index++){
      posts.push(<tr><Post key={reviews[review_index]} handleDelete={(id) => this.handleDelete(id)} type={this.state.type} post={reviews[review_index]} parent={this}/> </tr>)
    }
    return posts
  }

  render() {
    return (
      <div>
        {this.newReviewButton()}
        { 
          this.state.showNew &&
          <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          
            <NewReview members={this.props.members} />
          </div>
        }
        {
          !this.state.showNew &&
          <table>
            <tr>
              <th >Title</th>
              <th >Content</th>
              <th >Delete</th> 
              <th >Edit</th> 
            </tr>
            {this.getPosts()}
          </table>
        } 
      </div>
    );
  }
}
