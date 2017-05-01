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
    console.log(reviews[array[0]])

    const posts = Object.keys(reviews).map(function(post) {
      console.log(reviews[post])
    return (
      <Post key={reviews[post].id} post={reviews[post]} written_post={false} />
      );

    });

    return (
      <div>
        {posts}
      </div>
    )
  }
}