import React, { Component } from 'react';
import Chatlist from '../Chatlist/Chatlist';
import Userprofile from '../User-profile/Userprofile';
import Chatcontent from '../chatcontent/Chatcontent';
import '../Chat-body/Chat-body.css'
export default class Chatbody extends Component {
  render() {
    return (
      <div className='main-chatbody'>
        <Chatlist/>
        <Chatcontent />
        <Userprofile />
      </div>
    )
  }
}
