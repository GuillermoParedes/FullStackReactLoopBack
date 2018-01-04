import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';
import MeetupItem from './MeetupItem'
class Meetup extends Component {
  constructor () {
    super();
    this.state = {
      meetups: []
    }
    this.getMeetups = this.getMeetups.bind(this)
    this.renderMeetups = this.renderMeetups.bind(this)
  }
  componentWillMount () {
    console.log('componentWillMount');
    this.getMeetups();
  }
  getMeetups () {
    axios.get('http://localhost:3000/api/meetups')
      .then(response => {
        console.log('response', response);
        this.setState({ meetups: response.data });
      })
  }
  renderMeetups () {
    let { meetups } = this.state;
    return _.map(meetups, (meetup) => {
      return <MeetupItem key={meetup.id} item={meetup} />
    })
  }

  render() {
    console.log('render meetups', this.state);
    return (
      <div>
        <h1>Meetups</h1>
        <ul className='collection'>
          { this.renderMeetups() }
        </ul>
      </div>
    );
  }
}

export default Meetup;
