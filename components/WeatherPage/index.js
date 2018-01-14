import { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';

export default class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temps : [
        {name: "Monday" , temp: 56},
        {name: "Tuesday" , temp: 45},
        {name: "Wednesday" , temp: 65},
        {name: "Thursday" , temp: 69},
        {name: "Friday" , temp: 44},
        {name: "Saturday" , temp: 31}
      ]
    }
  }

  render() {
    return (
      <div className="weather">
        {
          this.state.temps.map((item, i) => {
            return (
              <div className="day" key={i}>
                <div className="dayName">
                  <p>{item.name}</p>
                </div>
                <div className="dayTemp">
                  <h1>{item.temp} </h1>
                  <p>F</p>
                </div>
              </div>
            )
          })
        }
        <style jsx>{`
          .weather {
            background-color: #333333;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            color:white;
          }
          .day{
            margin: 5px;
            width: 12vw;
          }
          .dayName {
            text-align:center;
            border: 1px solid white;
          }
          .dayTemp {
            text-align:center;
            border: 1px solid white;
            display:flex;
            justify-content: center;
            padding: 25px;
          }
          .dayTemp > h1 {
            margin: 0;
            font-size: 48px;
          }
          .dayTemp > p {
            margin-left: 5px;
          }
          .temp {
            color: white;
          }
          
        `}</style>
      </div>
    )
  }
}