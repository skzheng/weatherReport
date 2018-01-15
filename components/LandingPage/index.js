import { Component } from 'react';
import axios from 'axios';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip : ""
    }
    this.handleZip = this.handleZip.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleZip(e){
    this.setState({ zip: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.requestWeather(this.state.zip);
  }

  render() {
    return (
      <div className="landing">
        <h1>Weather App</h1>
        <p className="description">Type in your zip code to see how wonderful the weather is in your area this week</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="000000" onChange={this.handleZip} className="zipInput" ref="input"/>
          <input type="submit"  className="zipSubmit"/>
        </form>
        <img className="downArrow" src="/static/images/downArrow.png"/>
        <style jsx>{`
          .landing {
            margin: 0;
            padding-left: 5vw;
            background-color: #ea4b23;
            height: 100vh;
            color: white;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
          }
          .description {
            width: 40vw;
            margin-bottom: 5vh;
            margin-top: 0;
          }
          .zipInput {
            border: 2px solid white;
            background-color: #ea4b23;
            height: 50px;
            width: 50vw;
            color: white;
            padding: 20px;
            font-size: 36px;
            letter-spacing: 1px;
          }
          .zipInput::placeholder {
            color: white;
            opacity: 0.5;
          }
          .zipSubmit {
            display: none;
          } 
          .downArrow {
            margin-top: 5vh;
            height: 50px;
            width: 50px;
          }
        `}</style>
      </div>
    )
  }
}