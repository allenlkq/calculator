import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './App.css';
import AlertContainer from 'react-alert';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.alertOptions = {
      offset: 14,
      position: 'top right',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    };
  }

  handleClick = (buttonName) => {
    this.showAlert(buttonName);
    this.setState(calculate(this.state, buttonName));
  }
  showAlert(text){
    msg.show(text, {
      time: 2000,
      type: 'success'
    });
  }

  render() {
    return (
      <div className="component-app">
        <Display
          value={this.state.next || this.state.total || '0'}
        />
        <ButtonPanel
          clickHandler={this.handleClick}
        />
        <AlertContainer ref={(a) => global.msg = a} {...this.alertOptions} />
      </div>
    );
  }
}
export default App;
