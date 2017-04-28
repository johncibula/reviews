import React from 'react'
import Post from '../../Post/components/post'

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state.posts = this.props.initialPosts
  }

  removeItemClient(id) {
    var newPosts = this.state.posts.filter((post) => { return post.id != id; });
        this.setState({ posts: newPosts }
    );
  }

  handleDelete(id) {
    $.ajax({
      url: `/posts/`+id,
      type: 'DELETE'
    });

      this.removeItemClient(id);
  }

  render() {
    var handleDelete = this.handleDelete
    console.log("holy shit this works")

    // var posts = this.state.posts.map(function(post) {
    //     return <Post key={post.id} handleDelete={handleDelete} post={post}  />;
    // });

    return (
        <div className="posts">
            {posts}
        </div>
    );
  }
}
