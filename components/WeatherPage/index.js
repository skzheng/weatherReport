import { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';

export default class HelloWorld extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="weather">
        {
          this.props.temps ? 
          this.props.temps.map((item, i) => {
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
          :
          <div className="loader"></div>
        }
        <style jsx>{`
          .weather {
            background-color: #333333;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            color:white;
            flex-wrap: wrap;
          }
          .loader {
            border: 16px solid white;
            border-radius: 50%;
            border-top: 16px solid #ea4b23;
            width: 100px;
            height: 100px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            animation: spin 2s linear infinite, shrink 2s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          } 
          .day{
            margin: 5px;
            min-width: 12vw;
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

          @media only screen and (max-width: 768px) {
            .weather {
              flex-direction: column;
              flex-wrap: nowrap;
              overflow: hidden;
            }
            .day {
              width: 30vw;
            }
            .dayName > p {
              margin: 5px;
            }
            .dayTemp {
              height: 3vh;
              padding: 20px;
              align-items:center;
            }
            .dayTemp > h1 {
              font-size: 36px;
            }
          }
        `}</style>
      </div>
    )
  }
}