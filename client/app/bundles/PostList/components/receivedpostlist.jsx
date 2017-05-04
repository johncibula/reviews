import React from 'react'
import Post from '../../Post/components/post'


export default class ReceivedPostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts: this.props.posts}
  }

  render() {
    var that = this
    const reviews = this.state.posts
    var array = Object.keys(reviews)

    const posts = Object.keys(reviews).map(function(post) {
    return (
      <Post key={reviews[post].id} post={reviews[post]} written_post={false} received={true} />
      );

    });

    return (
      <div>
        {posts}
      </div>
    )
  }
}