import { Component } from 'react';
import Head from 'next/head';
import LandingPage from '../components/LandingPage';
import WeatherPage from '../components/WeatherPage';

export default class Page extends Component {
  constructor(props){
    super(props)
    this.state = {
      zip: ""
    }
    this.requestWeather = this.requestWeather.bind(this);
  }
  async getInitialProps() {
    return { };
  }

  requestWeather(zip){
    console.log("HI FROM MOTHER", zip);
    this.setState({ zip : zip });
  }

  render() {
    return (
      <div>
        <Head>
          <title>Take-home Project</title>
        </Head>
        <LandingPage requestWeather={this.requestWeather}/>
        <WeatherPage zip={this.state.zip}/>
        <style jsx global>{`
          @font-face {
            font-family: Apercu;
            src: url('/static/fonts/ApercuRegularPro.otf');
          }
          @font-face {
            font-family: Tiempos;
            src: url('/static/fonts/Tiempos.otf');
          }
          body {
            margin: 0;
          }
          h1 {
            font-family: Tiempos;
          }
          p {
            font-family: Apercu;
          }
        `}</style>
      </div>
    )
  }
}