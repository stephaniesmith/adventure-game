import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Door from './Door';
import ChooseItem from './ChooseItem';

export default class Room extends Component {
  static propTypes = {
    room: PropTypes.object,
    action: PropTypes.string,
    onMove: PropTypes.func.isRequired,
    onPickup: PropTypes.func.isRequired
  };

  render() {
    const { room, action, onMove, onPickup } = this.props;
    const { name, description, image, doors, items } = room;

    return (
      <section>
        <h3>You are in the {name}</h3>
        <p>{description}</p>
        {!!items.length && (
          <div>
            <h4>Items:</h4>
            <ChooseItem items={items} onChoose={onPickup}/>
          </div>
        )}
        <h4>Doors:</h4>
        <ul>
          {Object.entries(doors).map(([direction, roomKey]) => {
            return <Door 
              key={direction}
              direction={direction}
              onOpen={() => onMove(roomKey)}/>;
          })}
        </ul>
        {action && <p>{action}</p>}
        <img src={image} alt={`image of ${name}`}/>
      </section>
    );
  }
}