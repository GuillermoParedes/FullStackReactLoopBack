import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
class MeetupDetails extends Component {
  constructor (props) {
    super(props);
    this.state = {
      details: ''
    }
    this.getMeetup = this.getMeetup.bind(this);
  }
  componentWillMount () {
    this.getMeetup();
  }
  getMeetup () {
    let meetupID = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/meetups/${meetupID}`)
      .then(response => {
        this.setState({ details: response.data }, () => console.log(response.data));
      })
      .catch(err => console.log('err', err))
  }
  onDelete () {
    let { details } = this.state;
    axios.delete(`http://localhost:3000/api/meetups/${details.id}`)
      .then(response => {
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }
  render() {

    let { details } = this.state;
    return (
      <div><br />
        <Link to="/" className={'btn grey'}>Back</Link>
        <h1>{details.name}</h1>
        <ul className="collection">
          <li className="collection-item">City: {details.city}</li>
          <li className="collection-item">Address: {details.address}</li>
        </ul>
        <Link to={`edit/${details.id}`} className={'btn'}>
          <i className="fa fa-pencil" />Edit
        </Link>
        <button className="btn red right" onClick={this.onDelete.bind(this)}>Delete</button>
      </div>
    );
  }
}

MeetupDetails.propTypes = {
  details: PropTypes.string
};

export default MeetupDetails;
