import React from 'react'

export default class Calendar extends React.Component {

  generateDays(props){
    const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    let dayComponents = []
    for (let day_indice = 0; day_indice < DAYS.length; day_indice++) {
      const day = DAYS[day_indice] 
      dayComponents.push(<Day day={day} pair={props[day]}></Day>);   
    }
    return dayComponents;
  }

  render() {
      return (
        <div className="Calendar">
          <h1>Pair Schedule</h1>
          <table style={{width: "100%"}}>
            <tr >
              <th style={{border: "1px solid black"}}>Day</th>
              <th style={{border: "1px solid black"}}>Pair</th> 
            </tr>
            {this.generateDays(this.props)}
            
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