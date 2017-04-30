import React from 'react'
export default class NewReview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
                  admin_message: '',
                  recipient_id: 0,
                  content: '',
                  willing_to_work: '',
                  rating: 0,
                  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      this.setState({rating: event.target.value});
    }

  handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }


  listMembers(members) {
    const post = this.state
    const choices = []
    let i = 0
    for (var key in members) {
      choices[i] = <option value={members[key].id}>{members[key].nickname}</option>
      console.log(members[key].id)
      i += 1
    }
    return (
      <select value={post.recipient_id} onChange={this.handleChange}>
        {choices}
      </select>
    )
  }


  render() {
    // console.log('function')
    // console.log(this.listMembers(this.props))
    return (

      <div className="post">
        test
        <form onSubmit={this.handleSubmit}>
          <label>
          Who are you reviewing?
          {this.listMembers(this.props.members)}
          </label>
          <input type='submit' value="Submit" />
        </form>
      </div>
    );
  }
}