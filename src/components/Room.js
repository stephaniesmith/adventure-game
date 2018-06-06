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
      <section>
        <h3>{title}</h3>
        <p>{description}</p>
        {!!items.length && (
          <div>
            <h4>Items:</h4>
            <ul>
              {items.map(item => (
                <li key={item.key}>
                  <button onClick={() => console.log(item.description)}></button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    )
  }
}