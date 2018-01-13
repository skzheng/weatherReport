import { Component } from 'react';

export default class HelloWorld extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello, world. Welcome to Common.</h1>
        <style jsx>{`
          h1 {
            color: purple;
          }
        `}</style>
      </div>
    )
  }
}