import { Component } from 'react';
import Head from 'next/head';
import HelloWorld from '../components/HelloWorld';

export default class Page extends Component {
  async getInitialProps() {
    return { };
  }

  render() {
    return (
      <div>
        <Head>
          <title>Take-home Project</title>
        </Head>
        <HelloWorld />
      </div>
    )
  }
}