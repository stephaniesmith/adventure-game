import React, { Component } from 'react';
import { rooms, start as currentRoom } from '../rooms';
import Player from './Player';
import Room from './Room';

export default class Game extends Component {
  state = {
    player: {
      action: '',
      username: 'Alchemist',
      inventory: []
    },
    rooms,
    currentRoom
  };

  handleMove = roomKey => {
    this.setState(prevState => ({
      currentRoom: prevState.rooms[roomKey],
      action: ''
    }));
  };

  handlePickup = item => {
    if(item.prevent) {
      this.setState({ action: item.prevent });
      return;
    }

    this.setState(({ player, currentRoom }) => {
      const index = currentRoom.items.indexOf(item);
      if(index === -1) return;
      currentRoom.items.splice(index, 1);

      player.inventory.push(item);

      return { player, currentRoom };
    });
  };

  handleUse = item => {
    this.setState(({ player, currentRoom }) => {
      const index = player.inventory.indexOf(item);
      if(index < 0) return;
      player.inventory.splice(index, 1);

      let action = '';
      if(currentRoom.use) action = currentRoom.use(item);

      if(!action) {
        currentRoom.items.push(item);
        action = `You leave ${item.description} here.`;
      }

      return {
        action,
        player,
        currentRoom
      };

    });
  };

  render() {
    const { player, currentRoom, action } = this.state;

    return (
      <main>
        <Player player={player}
          onUse={this.handleUse}/>
        <Room room={currentRoom}
          action={action}
          onMove={this.handleMove}
          onPickup={this.handlePickup}/>
      </main>
    );
  }
}