var PostsList = React.createClass({
  getInitialState: function() {
      return { posts: this.props.initialPosts };
  },

  removeItemClient(id) {
    var newPosts = this.state.posts.filter((post) => { return post.id != id; });
        this.setState({ posts: newPosts }
    );
  },

   handleDelete(id) {
      $.ajax({
        url: `/posts/`+id,
        type: 'DELETE'
      });

        this.removeItemClient(id);
  },

  render: function() {
    var handleDelete = this.handleDelete

    var posts = this.state.posts.map(function(post) {
        return <Post key={post.id} handleDelete={handleDelete} post={post}  />;
    });

    return (
        <div className="posts">
            {posts}
        </div>
    );
  }
})
