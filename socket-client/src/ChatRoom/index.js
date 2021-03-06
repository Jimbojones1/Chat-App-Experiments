import React, {Component} from 'react';
import {socket} from '../index'
import './style.css';
import PropTypes from 'prop-types';

class ChatRoom extends Component {
  constructor(){
    super();
    this.state = {
      messageValue: ''
    }
  }
  handleChange = (e) => {
    this.setState({messageValue: e.currentTarget.value});
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    socket.emit('message', this.state.messageValue);
    this.setState({messageValue: ''});
  }
  render(){
    console.log(this.props.messages, ' this is this.props');
    const messages = this.props.messages.map((message, i) => {
      return <li key={i}>{message.username}: {message.message} </li>
    });

    return (
      <div>
        <h1>{this.props.chatroom}</h1>
        <ul>
          {messages}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.messageValue} onChange={this.handleChange}/>
        </form>
      </div>
      )
  }
};


ChatRoom.propTypes = {
  chatroom: PropTypes.string,
  messages: PropTypes.array
};



export default ChatRoom;
