import React, {Component} from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { Link } from 'react-router-dom';
class MeetupItem extends Component {
  constructor (props) {
    super(props);
    this.state = {
      item: props.item
    }
  }
  render() {
    let { item } = this.state;
    return (
      <li key={uuid.v4()} className='collection-item'>
        <Link to={`meetups/${item.id}`}>{item.name}</Link>
      </li>
    );
  }
}

MeetupItem.propTypes = {
  item: PropTypes.object
};

export default MeetupItem;
