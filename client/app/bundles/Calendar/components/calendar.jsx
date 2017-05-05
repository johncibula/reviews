import React from 'react'


export default class Calendar extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
        days: props
     };
     this.handleClick.bind(this)
   }

  generateDays(props){
    const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    let dayComponents = []
    for (let day_indice = 0; day_indice < DAYS.length; day_indice++) {
      const day = DAYS[day_indice] 
      dayComponents.push(<Day day={day} pair={props[day]}></Day>);   
      console.log(day);
      console.log(props[day]);
    }
    return dayComponents;
  }

  handleClick(e){
    e.preventDefault();
    $.ajax({
      url: `/calendar/index`,
      type: 'PUT',
      me: this,
      success:  (data) => {
        console.log(data)
        this.setState({
          days: data
        })
      }
    })
  }

  render() {
      return (
        <div className="Calendar panel panel-default *">
        <div className="panel-heading" style={{backgroundColor: "white", borderBottom: "4px solid black"}} >
        <h1>Pair Schedule</h1>
        </div>
        <div className="panel-body">
          <table style={{width: "100%"}}>
            {this.generateDays(this.state.days)}
            <br />
          </table>
          <button type="button" className="button1" onClick={this.handleClick.bind(this)}>
            Create Pair
          </button>
        </div>
        </div>
      );
  }
}

var Day = React.createClass({
    render: function() {
        return (
            <tr >
                <td style={{borderBottom: "1px solid black", padding: "5px"}}>{this.props.day}</td>
                {
                  this.props.pair && <td style={{borderBottom: "1px solid black", padding: "5px"}}>{this.props.pair}</td>
                }
                {
                  !this.props.pair && <td style={{borderBottom: "1px solid black", padding: "5px"}}>Solo</td>
                }
            </tr>
        );
    }
});