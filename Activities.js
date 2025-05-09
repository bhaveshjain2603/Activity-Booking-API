const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Activity = require('./models/Activity');

dotenv.config();

const seedActivities = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const sampleActivities = [
      {
        title: 'Movie Night',
        description: 'Watch the latest blockbuster at the local theater.',
        location: 'City Cinema',
        dateTime: new Date('2025-05-12T19:00:00'),
      },
      {
        title: 'Cricket Match',
        description: 'Local club cricket match.',
        location: 'City Stadium',
        dateTime: new Date('2025-05-15T15:00:00'),
      },
      {
        title: 'Football Match',
        description: 'Watch your favorite teams play!',
        location: 'National Arena',
        dateTime: new Date('2025-05-20T18:00:00'),
      },
    ];

    await Activity.insertMany(sampleActivities);
    console.log('Sample activities inserted');
    process.exit();
  } catch (err) {
    console.error('Error seeding data:', err);
    process.exit(1);
  }
};

seedActivities();
