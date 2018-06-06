const classRoom = {
  name: 'Class Room',
  image: 'https://cdn-images-1.medium.com/max/1200/1*RD36bseIkEWK5GqmE2WKIQ.jpeg',
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
  image: 'https://cdn-images-1.medium.com/max/1200/1*cGpsFwy7T_V0YA-gVujZDg.jpeg',
  description: 'A noisy room criss-crossed by treacherous cords. Filled with many a table',
  items: [
    {
      key: 'hdmi',
      description: 'You found an hdmi cord!'
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
    e: 'office',
    n: 'classRoom'
  }   
};

const office = {
  name: 'Office',
  image: 'https://cdn-images-1.medium.com/max/1200/1*cGpsFwy7T_V0YA-gVujZDg.jpeg',
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
  image: 'https://i.pinimg.com/originals/4a/18/8f/4a188f021383b32902d28dcf40860fb5.jpg',
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