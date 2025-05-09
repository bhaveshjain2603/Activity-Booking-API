const Booking = require('../models/Booking');

exports.bookActivity = async (req, res) => {
  const { activityId } = req.body;

  try {
    console.log('User ID:', req.user);
    console.log('Activity ID:', activityId);

    const booking = new Booking({ user: req.user, activity: activityId });
    await booking.save();

    res.status(201).json({ message: 'Activity booked successfully' });
  } catch (err) {
    console.error('Booking error:', err); // Log actual error
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};


exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user }).populate('activity');
    res.json(bookings);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
