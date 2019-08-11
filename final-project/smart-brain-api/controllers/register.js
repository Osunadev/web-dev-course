const handleRegister = (db, bcryptjs) => (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !name || !password) {
    // We're returning of the handleRegister function after we finished
    // running the res.status.json function
    return res.status(400).json('incorrect form submission');
  }

  const hash = bcryptjs.hashSync(password);

  // Making a transaction to avoid inconsistencies
  // This transaction is probably the trickiest part to get use to it
  db.transaction(trx => {
    trx
      .insert({
        hash: hash,
        email: email
      })
      .into('login')
      .returning('email')
      .then(loginEmail => {
        return (
          // returning('*'): We can do this instead of doing another select statement
          // This says insert the user in our users table and return all the columns
          trx('users')
            .returning('*')
            .insert({
              email: loginEmail[0],
              name: name,
              joined: new Date()
            })
            .then(user => {
              // We are not returning an array
              res.json(user[0]);
            })
        );
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch(err => res.status(400).json('unable to register'));
};

module.exports = {
  handleRegister
};
