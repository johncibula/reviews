import React from 'react'

export default class Calendar extends React.Component {
  render() {
      return (
        <div className="Calendar">
          <h1>Pair Schedule</h1>
          <table style={{width: "100%"}}>
            <tr >
              <th style={{border: "1px solid black"}}>Day</th>
              <th style={{border: "1px solid black"}}>Pair</th> 
            </tr>
            <Day day="Mon"/>
            <Day day="Tue"/>
            <Day day="Weds"/>
            <Day day="Thur"/>
            <Day day="Frid"/>
          </table>
        </div>
      );
  }
}

var Day = React.createClass({
    render: function() {
        return (
            <tr >
                <td style={{border: "1px solid black"}}>{this.props.day}</td>
                {
                  this.props.pair && <td style={{border: "1px solid black"}}>{this.props.pair}</td>
                }
                {
                  !this.props.pair && <td style={{border: "1px solid black"}}>Solo</td>
                }
            </tr>
        );
    }
});