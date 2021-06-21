import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    answer: 42,
  };

  asyncFunc = () => {
    return Promise.resolve(35);
  };

  async componentDidMount() {
    this.setState({ answer: await this.asyncFunc() });
  }

  render() {
    return <h2> Hello React -- {this.state.answer}</h2>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
