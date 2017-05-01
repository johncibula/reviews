import React from 'react'

export default class NewReview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
                  admin_message: 'f',
                  recipient_id: "test",
                  content: 'f',
                  willing_to_work: 'f',
                  rating: "0",
                  };

    this.handleAdminChange = this.handleAdminChange.bind(this);
    this.handleRecipientChange = this.handleRecipientChange.bind(this);
    this.handleWillingChange = this.handleWillingChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
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

  handleRecipientChange(event) {
      this.setState({recipient_id: event.target.value});
    }
  handleAdminChange(event) {
      this.setState({admin_message: event.target.value});
    }
  handleWillingChange(event) {
      this.setState({willing_to_work: event.target.value});
    }
  handleRatingChange(event) {
      this.setState({rating: event.target.value});
    }
  handleContentChange(event) {
    this.setState({content: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state)
    $.ajax({
      url: "/posts",
            dataType: 'json',
            type: 'POST',
            data: {post: this.state}
    });

     event.preventDefault();
  }

  listMembers(members) {
    const post = this.state
    const choices = []
    let i = 0
    for (var key in members) {
      choices[i] = <option value={members[key].id}>{members[key].nickname}</option>
      i += 1
    }

    return (
      <select value={post.recipient_id} onChange={this.handleRecipientChange}>
        {choices}
      </select>
    )
  }

  listWorkChoices() {
    const post = this.state
    const array = ["Never","Possibly","Sure","Yes","Absolutely"]
    const choices = array.map(function(choice){
      return <option value={choice}>{choice}</option>
    })
    return (
      <select value={post.willing_to_work} onChange={this.handleWillingChange}>
        {choices}
      </select>
    )
  }

  listRatingChoices() {
    const post = this.state
    const array = [0,1,2,3,4,5]
    const choices = array.map(function(choice){
      return <option value={choice}>{choice}</option>
    })
    return (
      <select value={post.rating} onChange={this.handleRatingChange}>
        {choices}
      </select>
    )
  }

  render() {
    console.log(this.state)
    return (

      <div className="post">
        test
        <form onSubmit={this.handleSubmit}>
          <label>
          Who are you reviewing?
          {this.listMembers(this.props.members)}
          </label>
          <br />
          <label>
            What should the cadre know to help them improve?
            <textarea value={this.state.admin_message} onChange={this.handleAdminChange} />
          </label>
          <br />
          <label>
            Are you willing to work with this person again?
            {this.listWorkChoices()}
          </label>
          <br />
          <label>
            Overall, how would you rate working with them [0 - 5]?
            {this.listRatingChoices()}
          </label>
          <br />
          <label>
            What are they doing great, what could they do better?
            <textarea value={this.state.content} onChange={this.handleContentChange} />
          </label>
          <br />
          <input type='submit' value="Submit" />
        </form>
      </div>
    );
  }
}