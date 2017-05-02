import React from 'react'

export default class NewReview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
                  admin_message: '',
                  recipient_id: "test",
                  content: '',
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

    $.ajax({
      url: "/posts",
            dataType: 'json',
            type: 'POST',
            data: {post: this.state}
    });
    unshowComponent()
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

      <div className="post panel panel-default *">
      <div className="panel-heading" style={{backgroundColor: "white", borderBottom: "4px solid black"}} >
      <h1>New Review</h1>
      </div>
      <div className="panel-body">
        <form onSubmit={this.handleSubmit}>
          <label>
          <h3>Who are you reviewing?</h3>
          {this.listMembers(this.props.members)}
          </label>
          <br />
          <label>
            <h3>What should the cadre know to help them improve?
            </h3>
            <p> All feedback for this question is only read by your instructor </p>
            <textarea style={{width: "100%", height: "80px"}} placeholder="Place your feedback here" value={this.state.admin_message} onChange={this.handleAdminChange} />
          </label>
          <br />
          <label>
            <h3>Are you willing to work with this person again?</h3>
            {this.listWorkChoices()}
          </label>
          <br />
          <label>
            <h3>Overall, how would you rate working with them?
            </h3>
            <p>(0 - terrible to 5 - awesome)</p>
            {this.listRatingChoices()}
          </label>
          <br />
          <label>
            <h3>What are they doing great, what could they do better?</h3>
            <textarea style={{width: "100%", height: "80px"}} placeholder="They are great at explaining, but could talk slower..." value={this.state.content} onChange={this.handleContentChange} />
          </label>
          <br />
          <input type='submit' className="button1" value="Submit" />
        </form>
      </div>
      </div>
    );
  }
}