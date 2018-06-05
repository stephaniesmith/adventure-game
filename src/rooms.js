

const classRoom = {
  name: 'Class Room',
  image: 'picture of class room',
  description: 'A chilly room, lacking light and a good projector. At least it is quiet.',
  items: [
    {
      key: 'powerCord',
      description: 'You have a power cord!'
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
  }   
};

const mainRoom = {  
  name: 'Main Room',
  image: 'picture of main room',
  description: 'A noisy room criss-crossed by treacherous cords. Filled with many a table',
  items: [
    {
      key: 'hdmi',
      description: 'You found an hdmi cords!'
    },
  ],
  characters: [
    {
      key: 'bootCampers',
      description: 'The BootCamp Class!'
    }
  ],
  doors: {
    s: 'kitchen',
    e: 'office'
  }   
};

const office = {
  name: 'Office',
  image: 'picture of office room',
  description: 'A noisy room criss-crossed by treacherous cords. Filled with many a table',
  items: [
    {
      key: 'adapter',
      description: 'You found an adapter!'
    }
  ],
  characters: [
    {
      key: 'lewis',
      description: 'I am hungry!'
    }
  ],
  doors: {
    w: 'mainRoom'
  }   
};

const kitchen = {
  name: 'Kitchen',
  image: 'picture of kitchen room',
  description: 'A place full of snacks. Beware the running dishwasher. Be sure to clean your dishes',
  items: [
    {
      key: 'dish',
      description: 'There is a dish!'
    },
    {
      key: 'snacks',
      description: 'There is a snack!'
    }

  ],
  characters: [],
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