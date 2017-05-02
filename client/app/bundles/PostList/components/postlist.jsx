import React from 'react'
import Post from '../../Post/components/post'
import NewReview from '../../NewReview/components/newReview'

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts: this.props.posts,
                  showComponent: false}

    this.handleClick = this.handleClick.bind(this);
    this.unshowComponent = this.unshowComponent.bind(this);
  }

  handleClick(event) {
    this.setState({showComponent: true});
  }

  unshowComponent(event) {
    this.setState({showComponent: false})
  }

  removeItemClient(id) {
    var newPosts = {}

    for (var key in this.state.posts) {
      if (key !== id) {
        newPosts[key] = this.state.posts[key]
      }
    }
    console.log(newPosts)
    console.log(this)
    this.setState({ posts: newPosts })

  }

  handleDelete(id) {


  }

  render() {
    var that = this
    const reviews = this.state.posts
    var handleDelete = this.handleDelete
    var removeClient = this.removeItemClient
    var array = Object.keys(reviews)
    var unshow = this.unshowComponent

    const posts = Object.keys(reviews).map(function(post) {
      console.log(reviews[post])
    return (
      <Post key={reviews[post].id} handleDelete={handleDelete} post={reviews[post]} removeClient={removeClient} that={that} unshow={unshow} />
      );

    });

    return (
      <div>
        <div>
          <button onClick={this.handleClick}>
            New Review
          </button>
          {this.state.showComponent ?
            <NewReview members={this.props.members} unshowComponent={this.unshowComponent} /> :
            null}
        </div>
        <div>
          {posts}
        </div>
      </div>
    )
  }
}
