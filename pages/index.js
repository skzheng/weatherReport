import { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Head from 'next/head';
import LandingPage from '../components/LandingPage';
import WeatherPage from '../components/WeatherPage';
import axios from 'axios';
import $ from 'jquery';
import { findWeekday } from '../util/helpers';

export default class Page extends Component {
  constructor(props){
    super(props)
    this.state = {
      zip: "",
      temps: ""
    }
    this.requestWeather = this.requestWeather.bind(this);
  }
  async getInitialProps() {
    return { };
  }

  requestWeather(zip){
    this.setState({ zip : zip });
    let res = axios({
      method: 'get',
      url : 'https://api.openweathermap.org/data/2.5/forecast',
      params: {
        zip: `${zip},us`,
        units: 'imperial',
        APPID: 'e4f620376ded780e0a75cfba000991be'
      }
    })
    .then((res) => {
      this.handleScroll();
      let list = res.data.list;
      let week = [list[0], list[8], list[16], list[24], list[32]];
      week = week.map(item => {
        return {
          name : findWeekday(item.dt),
          temp : parseInt(item.main.temp)
        }
      })
      this.setState({ temps: week});
    })
    .catch((error) => {
      alert('Please enter a valid zip code');
      console.log(error);
    })
  }

  handleScroll(){
    $('.zipInput').blur().val('');
    $('html').animate({
      scrollTop: $('.weather').offset().top
    }, 1000);
  }

  render() {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Take-home Project</title>
        </Head>
        <LandingPage requestWeather={this.requestWeather}/>
        <WeatherPage zip={this.state.zip} temps={this.state.temps}/>
        <style jsx global>{`
          @font-face {
            font-family: Apercu;
            src: url('/static/fonts/ApercuRegularPro.otf');
          }
          @font-face {
            font-family: Tiempos;
            src: url('/static/fonts/Tiempos.otf');
          }
          html, body {
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