import classImg from './img/class.jpg';
import mainImg from './img/main.jpg';
import officeImg from './img/office.jpg';
import kitchenImg from './img/kitchen.jpg';

const classRoom = {
  name: 'Class Room',
  image: classImg,
  description: 'A chilly room, lacking light and a good projector. At least it is quiet.',
  items: [
    {
      key: 'monitor',
      description: 'a monitor',
      cordsNeeded: 3,
      prevent: 'You don\'t really want to carry the monitor around, do you?'
    },
    {
      key: 'powerCord',
      cord: true,
      description: 'a power cord'
    }
  ],
  characters: [
    {
      key: 'classMates',
      description: 'The Fullest Stack Class!'
    }
  ],
  doors: {
    s: 'mainRoom'
  },
  use(item) {
    if(item.cord) {
      this.items[0].cordsNeeded--;
      if(this.items[0].cordsNeeded === 0) {
        return 'You have collected all the cords and the computer works! You can now code an adventure game.';
      } else {
        const cords = this.items[0].cordsNeeded === 1 ? 'cord' : 'cords';
        return `You still need ${this.items[0].cordsNeeded} ${cords}.`;
      }
    }
  } 
};

const mainRoom = {  
  name: 'Main Room',
  image: mainImg,
  description: 'A noisy room criss-crossed by treacherous cords. Filled with many a table.',
  items: [
    {
      key: 'hdmi',
      cord: true,      
      description: 'an HDMI cord'
    },
  ],
  doors: {
    s: 'kitchen',
    e: 'office',
    n: 'classRoom'
  }   
};

const office = {
  name: 'Office',
  image: officeImg,
  description: 'A noisy room criss-crossed by treacherous cords. Filled with many a table.',
  items: [
    {
      key: 'adapter',
      cord: true,      
      description: 'an adapter',
      prevent: 'Office guardian Lewis barks so fiercely that you drop the adapter.'
    },
    {
      key: 'lewis',
      description: 'Lewis',
      prevent: 'Lewis won\'t even let you pet him! There\'s no way you\'re carrying him around.'
    }
  ],
  doors: {
    w: 'mainRoom'
  },
  use(item) {
    if(item.key === 'snack') {
      const adapter = this.items.find(item => item.key === 'adapter');
      if(!adapter) return;

      delete adapter.prevent;

      return 'Lewis is distracted by your offering.';
    }
  }
};

const kitchen = {
  name: 'Kitchen',
  image: kitchenImg,
  description: 'A place full of snacks. Beware the running dishwasher. Be sure to clean your dishes.',
  items: [
    {
      key: 'dish',
      description: 'a dish'
    },
    {
      key: 'snack',
      description: 'a snack'
    }

  ],
  doors: {
    w: 'mainRoom'
  }   
};

export const rooms = {
  mainRoom,
  classRoom,
  office,
  kitchen
};

export const start = classRoom;