import React from 'react'
import Post from '../../Post/components/post'

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts: this.props}

  }

  removeItemClient(id) {

    // var postToDelete = this.state[id]
    // var postkeys = Object.keys(this.state)

    // var wantedKeys = postkeys.filter((post) => { return post === id; });
    // console.log('wantedKeys')
    // console.log(wantedKeys)
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

    $.ajax({
      url: `/posts/`+id,
      type: 'DELETE'
    });

  }

  render() {
    var that = this
    const reviews = this.state.posts
    var handleDelete = this.handleDelete
    var removeClient = this.removeItemClient

    const posts = Object.keys(reviews).map(function(post) {
       return <Post key={reviews[post].id} handleDelete={handleDelete} post={reviews[post]} removeClient={removeClient} that={that} />;
      });

    return (
        <div className="posts">
            {posts}
        </div>
    );
  }
}
