import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Room extends Component {
  static propTypes = {
    room: PropTypes.object
  }

  render() {
    const { room } = this.props;
    const { title, description, image, doors, items, characters } = room;

    return (
      <img src={image} alt=""/>
    )
  }
}