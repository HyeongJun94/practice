import React, { Component } from 'react';
import { SampleConsumer } from '../contexts/sample';

class Sends extends Component {

  state = {
    input: ''
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // 구현 예정
    this.props.setValue(this.state.input);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.input} onChange={this.handleChange}/>
        <button type="submit">설정</button>
      </form>
    );
  }
}

const SendsContainer = () => (
  <SampleConsumer>
    {
      ({state, actions}) => (
        <Sends 
          value={state.value}
          setValue={actions.setValue}
        />
      )
    }
  </SampleConsumer>
)

export default SendsContainer;