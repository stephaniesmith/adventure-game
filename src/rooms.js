const classRoom = {
  name: 'Class Room',
  image: 'https://cdn-images-1.medium.com/max/1200/1*RD36bseIkEWK5GqmE2WKIQ.jpeg',
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
        return 'You have collected all the cords and the computer works! You can now code an adventure game.'
      } else {
        const cords = this.items[0].cordsNeeded === 1 ? 'cord' : 'cords';
        return `You still need ${this.items[0].cordsNeeded} ${cords}.`
      }
    }
  } 
};

const mainRoom = {  
  name: 'Main Room',
  image: 'https://cdn-images-1.medium.com/max/1200/1*cGpsFwy7T_V0YA-gVujZDg.jpeg',
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
  image: 'https://cdn-images-1.medium.com/max/1200/1*cGpsFwy7T_V0YA-gVujZDg.jpeg',
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

      return 'Lewis is distracted by your offering.'
    }
  }
};

const kitchen = {
  name: 'Kitchen',
  image: 'https://i.pinimg.com/originals/4a/18/8f/4a188f021383b32902d28dcf40860fb5.jpg',
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