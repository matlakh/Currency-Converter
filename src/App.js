import React, { Component } from 'react';
import Layout from "./hoc/Layout/Layout";
import Header from "./containers/Header/Header"
import Main from "./containers/Main/Main";
import axios from 'axios'


class App extends Component {
  state = {
    currencies: []
  }

  async componentDidMount() {
    const response = await axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')

    this.setState({ currencies: response.data })
  }

  render() {
    return (
      <Layout>
        <Header currencies={this.state.currencies}></Header>
        <Main currencies={this.state.currencies}></Main>
      </Layout>
    );
  }
}

export default App;