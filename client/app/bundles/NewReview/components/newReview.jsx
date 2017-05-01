import React from 'react'

export default class NewReview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
                  admin_message: '',
                  recipient_id: this.props.members[Object.keys(this.props.members)[0]].id,
                  content: '',
                  willing_to_work: '',
                  rating: "0",
                  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    window.addEventListener("load", function(event) {
        console.log("All resources finished loading!");
      });
  }

  // componentWillUnmount()  {
  //   // clean up the handler when the component is removed:
  //   $('#tab-2').off('shown.bs.tab', this._handleTabShow)
  // }

  handleChange(event) {
      this.setState({rating: event.target.value});
    }

  handleSubmit(event) {
<<<<<<< HEAD
    console.log("submitting")
    console.log(this.state)
    $.ajax({
      url: "/posts",
            dataType: 'json',
            type: 'POST',
            data: {post: this.state}
    });

  }
=======
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
>>>>>>> 454269ad5d520008d3cc014a58c8ec1f7ae82525


  listMembers(members) {

    const choices = members.map(function(member){
       <option value={member.id}>{member.nickname}</option>
    })

    return (
      <select value={post.recipient_id} onChange={this.handleChange}>
        {choices}
      </select>
    )
  }


  render() {
    console.log(this.props.members)
    const members = this.listMembers(this.props.members)
    return (
      <div className="post">
            {this.listMembers(this.props)}
      </div>
    );
  }
}















