import React, { Component } from 'react';
import Pages from './components/Pages';

class App extends Component {
  constructor(props) {
    super(props);

    this.setCurrentPage = this.setCurrentPage.bind(this);

    this.state = {
      actualPage: 0,
      pages: []
    }
  }

  componentDidMount() {
    const fakeFetchResult= [
      {
        counter: 1,
        label: "🦄"
      },
      {
        counter: 2,
        label: "🦄🦄"
      },
      {
        counter: 3,
        label: "🦄🦄🦄"
      }
    ];

    this.setState({pages: fakeFetchResult});
  }

  setCurrentPage(number) {
    this.setState({actualPage: number});
  }

  render() {
    const {pages,actualPage} = this.state;
    return (
      <Pages pages={pages} actualPage={actualPage} setCurrentPage={this.setCurrentPage} />
    );
  }
}

export default App;
