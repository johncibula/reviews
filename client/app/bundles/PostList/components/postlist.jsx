import React from 'react'
import Post from '../../Post/components/post'

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props

  }

  removeItemClient(id) {
    var newPosts = this.state.filter((post) => { return post.id != id; });
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
    const reviews = this.state
    var handleDelete = this.handleDelete
    console.log('state')
    console.log(this.state)

    const posts = Object.keys(reviews).map(function(post) {
       return <Post key={reviews[post].id} handleDelete={handleDelete} post={reviews[post]}  />;
      });

    return (
        <div className="posts">
            {posts}
        </div>
    );
  }
}
