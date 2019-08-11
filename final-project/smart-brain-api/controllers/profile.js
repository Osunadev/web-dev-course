const handleProfileGet = db => (req, res) => {
  const { id } = req.params;

  db.select('*')
    .from('users')
    // where receives and object with the value we want to filter
    .where({ id })
    .then(user => {
      // If the array is not empty it means that it return a user
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json('Not found');
      }
    })
    .catch(err => res.status(400).json('error getting user'));
};

module.exports = {
  handleProfileGet
};
