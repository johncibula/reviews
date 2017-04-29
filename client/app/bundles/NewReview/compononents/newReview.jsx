import React from 'react'
export default class NewPost extends React.Component {

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

  // handleChange(event) {
  //     this.setState({rating: event.target.value});
  //   }
    // handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    //   }

  // handleDelete(id) {
  //   this.props.handleDelete(id)
  //   this.props.that.removeItemClient(id)

  // }
    listMembers(members){
      members.map(member) => {
        console.log('member')
        console.log(member)
        const choices = <option value={member.id}>{member.nickname}</option>
      }

      return (
        <select value={post.recipient_id} onChange={this.handleChange}>
          {choices}
        </select>
      )
    }


  render() {
    // console.log(this.state)
    // const post = this.state
    const members = this.listMembers(this.props)
    return (
      <div className="post">
            {this.listMembers(this.props)}
      </div>
    );
  }
}